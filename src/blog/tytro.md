---
title: tytro：类型上的尾递归优化
description: 有趣的实验
create: 2025-08-25
---

如今，尾递归优化已经是家喻户晓。函数上的递归可以优化，而类型中也有递归，能不能优化？本文介绍我在 Rust 中的一个想法，以及实现该想法的库 [tytro](https://lib.rs/crates/tytro)。

## 前言

如下是两个递归类型：

```rust
enum List<T> {
    Nil,
    Cons(T, Box<Self>),
}

enum Nat {
    Z,
    S(Box<Self>),
}
```

不难发现，`List<T>` 与 `Vec<T>` 有着类似的作用，但后者无需递归。若反向存储 `Vec<T>`，则它可以用相同的时间复杂度实现 `List<T>` 的功能，但内存连续，能避免频繁的分配和释放，性能更高。 `Nat` 与 `usize` 亦然。那么，哪些递归类型有对应的非递归类型？能否把递归类型机械地转为非递归类型？

我的回答是：可以机械地转换，且一切类型都可以做这种转换。若在每个变体中最多拥有一个递归字段，则转换后内存连续，不会出现额外的 `Box`。

## 做法

具体如何转换？以 `List<T>` 为例介绍。

首先，将原本的类型的变体根据有无递归分为两类。有递归的变体，删除递归的字段（应当只有一个）。于是就得到了两个新类型，都没有递归。

```rust
enum ListLast {
    Nil,
}

enum ListRec<T> {
    Cons(T),
}
```

为了提供与原先类似的接口，再定义两个类型。`ListF<T>` 就是把 `List<T>` 中递归的字段（也是 `ListRec<T>` 删掉的字段）变成了 `ListTro<T>`。

```rust
struct ListTro<T>(Vec<ListRec<T>>, ListLast);

enum ListF<T> {
    Nil,
    Cons(T, ListTro<T>),
}
```

此时，`ListTro<T>`、`ListF<T>`、`List<T>` 三者都是对应的。原先用 `List<T>` 的地方，现在要换成 `ListTro<T>`。

想要消耗一个 `ListTro<T>`，要转换为 `ListF<T>`，然后可以做模式匹配。首先弹出 `Vec` 最后一个值。若没有，则将 `ListLast<T>` 转为 `ListF<T>` 直接返回。若有，该值为 `ListRec<T>`，要转为 `ListF<T>` 还缺了递归的部分，这正好用弹出后剩下的 `ListTro<T>` 填进去，完美。

```rust
impl<T> ListTro<T> {
    fn get(mut self) -> ListF<T> {
        match self.0.pop() {
            Some(rec) => match rec {
                ListRec::Cons(x) => ListF::Cons(x, self),
            },
            None => match self.1 {
                ListLast::Nil => ListF::Nil,
            },
        }
    }
}
```

想要生成一个 `ListTro<T>`，则要把 `ListF<T>` 转换过去。刚才步骤相反做一遍就是了。若有递归字段，则将剩下部分转为 `ListRec<T>`，加到递归的 `ListTro<T>` 里头去并返回之。否则，直接转为 `ListLast<T>`，和空 `Vec` 一起构建一个新的 `ListTro<T>`。

```rust
impl<T> ListF<T> {
    fn build(self) -> ListTro<T> {
        match self {
            ListF::Nil => ListTro(Vec::new(), ListLast::Nil),
            ListF::Cons(x, mut rec) => {
                rec.0.push(ListRec::Cons(x));
                rec
            }
        }
    }
}
```

现在，构建、消耗都有了，还缺两个方法：借用和可变借用，用于不移动所有权的模式匹配。

每一种都需要定义两个新类型，把每个字段加上引用就行了。`Vec` 需要换成切片，`pop` 也要相对地换成 `split_last` 或其 `mut` 版本。

```rust
struct ListTroRef<'a, T>(&'a [ListRec<T>], &'a ListLast);

enum ListFRef<'a, T> {
    Nil,
    Cons(&'a T, ListTroRef<'a, T>),
}
```

类似地，`ListTroRef<'a, T>` 可以转换为 `ListFRef<'a, T>`，但不能反过来。此外，需要将 `&'a ListTroRef<T>` 转为 `ListTroRef<'a, T>`，两个字段分别借用就是了。方法和上面的 `get` 差不多，可变版本的类型和方法也没什么区别，我就不写了。

此外，需要注意，`Nat` 按这种方法转换完之后，会得到类似 `Vec<()>` 的结构。这并非单纯的 `usize`，会额外浪费指针和 `capacity` 的空间。也许可以通过手动指定容器而非固定 `Vec` 来解决这个问题。

## 库

我在 [tytro](https://lib.rs/crates/tytro) 这个库用过程宏中实现了这种转换。

该库中，类型为 `Self` 的字段就是递归的字段，每个变体只能有一个；若要多个，则更多的需要手动改为一般的 `Box<List<T>>` 等。理论上有可能支持 `Option<Self>` 这种间接递归，但尚未实现。此外，目前也无法以其他方式使用 `Self` 类型（如 `Box<Self>` 用不了）。

值得一提的是，我没有分 `Last` 和 `Rec` 两个类型，而是给一个枚举类型加了两个类型参数，并每个变体都添加一个字段，类型为两个类型参数之一。令其中一个类型参数为 never 类型，另一个为 `()`，则用到第一个类型参数的变体相当于不存在了，用到另一个的则没有变化。这样做有什么好处？如果分两个类型，则可能某一个类型没有用到某个类型参数（例如 `ListLast` 没有 `T`）。判断有没有用到很麻烦，而一股脑加 `PhantomData` 又可能导致型变乱掉。同一个类型就没有这个问题了。

这个库只是实验性质的，有很多不支持的东西，在 README 可以看到。不要实际使用。