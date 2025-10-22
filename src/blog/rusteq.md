---
title: Eq 的现实意义
description: 营销号不知道的 Rust 冷知识
create: 2025-10-22
---

> TL;DR：用于优化 `Rc` 的 `PartialEq` 实现。

Rust 中，有两对用于比较的 trait：

- 定义序关系的 [`PartialOrd`](https://doc.rust-lang.org/stable/std/cmp/trait.PartialOrd.html "trait std::cmp::PartialOrd") 和 [`Ord`](https://doc.rust-lang.org/stable/std/cmp/trait.Ord.html "trait std::cmp::Ord")。前者是偏序，即允许不可比较的值，而后者不允许。
- 定义等价关系的 [`PartialEq`](https://doc.rust-lang.org/stable/std/cmp/trait.PartialEq.html "trait std::cmp::PartialEq") 和 [`Eq`](https://doc.rust-lang.org/stable/std/cmp/trait.Eq.html "trait std::cmp::Eq")。前者不要求自反，后者要求。

`PartialOrd` 和 `Ord` 的区别体现在各自定义的方法的返回值中，前者有一层 `Option`。而 `Eq` 则没有定义任何自己的方法，只是在文档上加了一条限制，是个君子协定，类似 `FusedIterator`。

很多人都知道，`HashMap` 要求键满足 `Eq`，以避免逻辑错误。但这种要求只是编译期的限制，编译完就消失了，对运行时的行为毫无影响。如果把这个限制去掉，现有的程序完全没有任何变化。也就是说，这种要求写在类型里和文档里效果差不多，唯一的好处就是自动强制检查。不过，其他语言把这个要求写在文档里，也没什么严重的后果啊！那 `Eq` 有没有什么实际的、能影响运行时行为的好处呢？

有的兄弟，有的。在 [`Rc<T>` 的 `PartialEq` 实现](https://doc.rust-lang.org/stable/std/rc/struct.Rc.html#impl-PartialEq-for-Rc%3CT,+A%3E)中，如果有 `T: Eq`，则会先比较指针，相同就直接返回，不比较其中的值了。该过程是通过{特化|specialize}一个私有的 trait `RcEqIdent` 来实现的，标准库大量地用了私有 trait 和特化来实现一些优化。若 `T` 没有实现 `Eq`，则不比较指针，直接比较其中的值。相同的指针指向同一个值，所以只要自反就一定相等。因此，该优化不会导致错误的行为，对用户是透明的。

理论上，这个优化也可以为普通的引用 `&T` 实现，但并没有这么做。为什么？标准库中的注释做了解释：检查指针相等需要开销，如果值的相等比较本来就很快，那优化了反而更慢。而 `Rc` 更可能存储较大的值，所以相等比较可能会慢一些，而且 `Rc` 比引用更可能指向相同的位置，因此做优化是有意义的。

遗憾的是，特化尚未稳定，这一优化只能在标准库中使用。