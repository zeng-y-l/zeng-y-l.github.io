---
title: 浮点数性质测试
create: 2025-01-18
desc: 随机生成数据，测试浮点数的性质
---

浮点数的运算规律，常常反直觉。为了方便，我写了个[浮点数性质测试](https://zeng-y-l.github.io/project/numtest.html)，通过生成大量随机数据来测试浮点数的性质，常常能够很快找到反例。

为了方便，我写了个 DSL，使用 [Pratt](https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html) 解析器，编译到 JS，在 `Worker` 中执行。DSL 能够自动收集变量，自动随机生成之。也可以直接使用 `Math` 下的函数。还加了点语法糖，`^` 是 `**` 的语法糖，`=` 是 `Object.is` 的语法糖。后者在判断 `NaN` 和 `-0` 时很有必要。

你是否知道，以下这些都是错误的？测试之，可以很快找到反例。

```js
x == x
(x + y) + z = x + (y + z)
-x = 0 - x
a - a = 0
0 * a = 0
```