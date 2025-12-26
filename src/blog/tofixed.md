---
title: toFixed 到底如何舍入
description: JavaScript 的常见问题
create: 2025-12-26
---

TL;DR：是四舍五入，不符合的是浮点误差导致。

常用到 [`Number.prototype.toFixed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)，想到其舍入问题，是四舍五入还是奇进偶舍？做个实验，发现无明显规律，如下所示，不管前一位奇偶都有舍也有入：

```js
[.045, .055, .065, .075].map(x => x.toFixed(2)).join(' ')
// 0.04 0.06 0.07 0.07
```

到底是怎么回事？网上众说纷纭，直接查[标准](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tofixed)，其中最关键的一句：

> Let $n$ be an integer for which $n / 10^f - x$ is as close to zero as possible. If there are two such $n$, pick the larger $n$.

其中：

- $f$ 就是输入进去的参数，即位数（经过处理：转为整数，若不在 $[0, 100]$ 则抛异常）
- $x$ 是 `this` 对应的实数（经过处理：取绝对值，若无限或超过 $10^{21}$ 则直接返回 `toString` 的值）
- 而 $n$ 将用于最终的显示
- 根据[标准](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-mathematical-operations)，这些运算都是数学上精确的运算，不涉及浮点数

说人话：$n$ 是最接近 $10^fx$ 的整数，如果有两个就取较大者。这样就明白了，毫无疑问是**四舍五入**嘛。

那上面的奇怪情况是什么问题？答案很简单：由于浮点误差的存在，它们的精确值根本就不止小数点后三位，还处于四舍六入的阶段，根本没到判断五的舍入问题的时候！用 Python 的 `Decimal` 很容易算出结果，而在 JavaScript 中，解铃还须系铃人，`toFixed` 正好可以获取数学上的精确表示（而 `toString` 计算的是能转换回来的最短表示）：

```js
[.045, .055, .065, .075].map(x => x.toFixed(60))
// 返回：
[
    "0.044999999999999998334665463062265189364552497863769531250000",
    "0.055000000000000000277555756156289135105907917022705078125000",
    "0.065000000000000002220446049250313080847263336181640625000000",
    "0.074999999999999997224442438437108648940920829772949218750000"
]
```

不言而喻。

所以，要真正测试舍入问题，只能用刚好精确表示的值，也就是二进制的有限小数：

```js
[.125, .375, .625, .875].map(x => x.toFixed(2)).join(' ')
// 0.13 0.38 0.63 0.88
```

一目了然。