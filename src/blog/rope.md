---
title: JS 比 C++ 快
description: 神奇的 Rope 结构
create: 2025-01-02
---

一些人认为，C++ 永远比 JavaScript 快。这当然是错误的。即便代码逻辑一样，JavaScript 引擎也可以擅自做一些优化。

以 V8 为例，最简单的例子是字符串。JavaScript 的字符串不可变，故 V8 做了很多优化，在可持久化上做得很好，经常无需复制，很节省内存。下面两段代码，JavaScript 版本瞬间运行完毕，C++ 版本则会在几秒内占满内存。

```js
const s = "aaaaaaaaaa"
const a = [s]
for (let i = 0; i < 100000; i++) {
    a.push(a.at(-1) + s)
}
```

```cpp
auto s = "aaaaaaaaaa";
std::vector<std::string> a = {s};
for (int i = 0; i < 100000; i++) {
    a.push_back(a.back() + s);
}
```

究其原因，在连接两个字符串时，V8 没有复制内存，而是创造了一种特殊的虚拟的字符串，它没有一片连续的内存，而是直接引用了被连接的两个字符串，等真正需要的时候再扁平化，也就是复制到连续内存中。多个字符串这样连接起来，会形成二叉树的结构，这种结构叫 [Rope](https://en.wikipedia.org/wiki/Rope_(data_structure))，不过 V8 的具体实现似乎略有不同。如此一来，连接字符串的时空复杂度都从线性优化到常数，索引的时间复杂度则会减慢（具体减慢多少我不清楚，理论上是对数，实际上似乎会扁平化，那就是线性）。C++ 的字符串受制于内存连续的要求，没法自动这样优化，只好老老实实复制一遍。

从中可以发现，JavaScript 根本不需要 StringBuilder。因为字符串根本不会复制，性能完全不用怕，你只管加起来就是了。反观某些语言，明明没有 C++ 那种底层的要求，还搞出那么多复杂的东西，增加用户的心智负担，高下立判。

此外，如果要把字符串重复多次，也可以利用这些优化，把时空复杂度都从线性优化到对数。用快速幂就行，简易实现如下：

```js
const repeat = (s, n) =>
    n == 0 ? '' :
    n == 1 ? s :
    n % 2 == 0 ? repeat(s + s, n / 2) :
    repeat(s + s, n / 2 | 0) + s
```

非常神奇啊！这一过程几乎不需要复制字符串，只是创建了一堆虚拟的字符串，一个引用着一个，最终几乎都指向原本的那个。这产生了消耗内存竟然比字符串长度还要小的奇观。V8 的 [String.prototype.repeat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) 似乎就是这么干的。
