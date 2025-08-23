---
title: Golang 显式实现接口
desc: 用私有方法和嵌入做到显式实现接口
create: 2025-08-23
---

我在近一年前写 [go-algeff](https://gitee.com/Zeng_YL/go-algeff/) 时发现了这个神奇的做法，网上似乎还没有人讲过，大部分人都不知道。于是写此文以分享。

## 私有方法

Golang 中，基本没有人在公开接口中使用私有方法。甚至大部分人都不知道这么做的语义如何：假设一个包中定义了含私有方法的接口，而另一个包的一个类型有同样的私有方法，那么该类型是否实现了该接口？两个包中分别能否调用该接口的私有方法？

经过实验，答案是：否；只有第一个包能调用。

如何理解这一点？我认为，一个私有的名字，除了写出来的名字外，还包括其所在的包名。所以，两个名字一样的私有方法，因为在不同的包中，所以实际上有着不同的名字，而名字不同当然就无法实现、调用。这种理解可以解释私有方法的问题。

从直观来看，接口是要给人实现的。你用私有方法，只有你能实现，只有你能调用，有啥用？欸，还真有用。毕竟不只有手写才能实现方法，用嵌入也可以实现！那么，用嵌入能玩出什么花样呢？

## 显式实现接口

常常有人批评 Golang 的接口没法显式实现，导致有时在无意中实现了某个接口。借助私有方法，可以要求用户显式实现接口。

在接口中加入一个空方法，并定义一个空类型，使空类型实现该空方法。如此一来，只有嵌入了这个空类型，才能实现接口。

举个例子。整数可以做加法、判断是否为零。

定义接口：

```go
package add

type Add[T any] interface {
	marker()
	Add(T) T
}

type ImplAdd struct{}

func (ImplAdd) marker() {}
```

在另一个包中定义另一个接口：

```go
package iszero

type IsZero interface {
	marker()
	IsZero() bool
}

type ImplIsZero struct{}

func (ImplIsZero) marker() {}
```

在其他包中定义类型并实现接口：

```go
type Int struct {
	add.ImplAdd
	iszero.ImplIsZero
	Val int
}

func (a Int) Add(b Int) Int {
	return Int{Val: a.Val + b.Val}
}

func (a Int) IsZero() bool {
	return a.Val == 0
}

var _ interface {
	add.Add[Int]
	iszero.IsZero
} = Int{} // 验证实现了两个接口
```

这样就做到了要求用户显式实现接口。写起来还蛮漂亮的。

如果删除 `Int` 两个嵌入中的任何一个，那么最后的赋值就会失败。虽然两个接口的私有方法名字一样，但它们毫不相干，嵌入一个并不会自动实现另一个。

## 检查实现

人们对接口隐式实现还有另一个批评：实现接口时无法检查接口的方法是否都实现了，只有使用时才知道缺了什么方法。上面的例子没有解决这个问题。

用类似的方法，这个问题也可以方便地解决。给接口对应的结构体加个类型参数，约束为该接口。实现接口时，将该类型参数填写为要实现接口的类型，即自身的类型，即可检查接口是否实现。

将 `ImplAdd` 改为：

```go
type ImplAdd[T Add[T]] struct{}

func (ImplAdd[T]) marker() {}
```

`ImplIsZero` 改为：

```go
type ImplIsZero[T IsZero] struct{}

func (ImplIsZero[T]) marker() {}
```

`Int` 改为：

```go
type Int struct {
	add.ImplAdd[Int]
	iszero.ImplIsZero[Int]
	Val int
}
```

如此一来，如果没有实现某个方法，就会在嵌入处报错。把实现和检查放在同一个结构体，就能做到强制检查。

## 关联类型

Golang 没有 Rust 那种关联类型，或者 Haskell 那种{函数式依赖|functional dependencies}。但私有方法和嵌入同样可以达到类似的效果，给空方法加个参数或者返回值就行了。

再举个例子，一个哈希表，值的类型依赖于键的类型。

定义接口：

```go
package depmap

type Key[V any] interface {
	comparable
	value(V)
}

type ImplKey[K Key[V], V any] struct{}

func (ImplKey[K, V]) value(V) {}
```

定义要用的类型（这个类型也可以在其他包定义）：

```go
package depmap

type DepMap struct{ inner map[any]any }

func New() DepMap {
	return DepMap{map[any]any{}}
}

func Get[K Key[V], V any](m DepMap, k K) V {
	return m.inner[k].(V)
}

func Set[K Key[V], V any](m DepMap, k K, v V) {
	m.inner[k] = v
}
```

在其他包中定义键类型，实现接口：

```go
type Option struct {
	depmap.ImplKey[Option, string]
	Name string
}

type Flag struct {
	depmap.ImplKey[Flag, bool]
	Name string
}
```

使用：

```go
m := depmap.New()

depmap.Set(m, Flag{Name: "a"}, true)
depmap.Set(m, Flag{Name: "b"}, false)
depmap.Set(m, Option{Name: "a"}, "lorem")
depmap.Set(m, Option{Name: "b"}, "ipsum")

var flag bool = depmap.Get(m, Flag{Name: "a"})
var option string = depmap.Get(m, Option{Name: "a"})
fmt.Printf("%v %v\n", flag, option) // true lorem
```

这样就实现了类似关联类型的功能。用这种做法，可以把 `any` 藏在实现中，给键值的获取和设置提供强类型的 API，用起来清晰、不易错。

## 优劣

传统上，要做到显式实现接口的效果，可以加一个名字比较复杂的公开的空方法来实现。关联类型也可以用类似的方法做到，虽然我没见过有人这么做的。用公开的方法，相对于私有方法和嵌入，有三个缺点：

- 无法完全避免重名的风险
- 写一个名字很长的方法很麻烦
- 无法避免有人调用方法或者在方法里写逻辑

自动检查实现的传统做法则是搞一个类型为接口的变量，赋值看看有没有报错。这无法强制检查，全凭自觉，而且写起来同样很麻烦。

不过，用嵌入来做自动检查实现也有一个缺点：类型参数可以乱写，写成实现了接口的其他无关的类型也不会报错。

需要注意，以上所有的做法都利用了嵌入。这有个很大的缺陷：**只能用于结构体**，不能用于其他类型，例如一般的 newtype！如果要给 newtype 实现接口，就完全用不了嵌入了。

此外还需注意，嵌入的空类型不能放在结构体最后，否则会浪费空间。