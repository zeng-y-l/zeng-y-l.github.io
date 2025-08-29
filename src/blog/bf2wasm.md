---
title: 编写「bf2wasm」
description: 开发中用到的技术
create: 2024-03-26
---

写了个好玩的东西，[bf2wasm](https://zeng-y-l.github.io/project/bf2wasm)（[源码](https://gitee.com/Zeng_YL/bf2wasm)），可以把 Brainfuck 编译到 WASM 并运行。用了一些有趣的技术，本文简述之。

## PureScript

[PureScript](https://www.purescript.org/) 是编译到 JavaScript 的 Haskell 方言。与 JavaScript 的交互十分简单，可以部分地使用，比 Haskell 容易上手。

它是严格求值的。受限于 JavaScript，它只有尾递归优化，没有尾调用优化，不过有一个库显式构造尾调用。`ST a` 和 `Effect a` Monad 都是简单的 `() => a`，直接使用或许会导致栈溢出。

它有一定的生态。有 [Pursuit](https://pursuit.purescript.org/)，可以统一地查看文档，还有类似 Hoogle 的搜索。

它没有 GADT 和 type family。

## WebAssembly

[WebAssembly](https://webassembly.org/) 是一种堆栈机指令格式。我使用 [kritzcreek/purescript-wasm](https://github.com/kritzcreek/purescript-wasm) 生成 WASM。

它功能较少，标准规范简洁清晰。略读标准后就可以轻松写出简单的代码。

它没有异步的功能，无法暂停执行或实现 continuation 之类。因此导入的函数都要是同步的。

## Web Worker

[Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 可以多线程运行 JavaScript 代码。代价是通信不便。

我原本打算用同步通信实现等待主线程的用户输入，但 `SharedArrayBuffer` 似乎对跨域有些要求，我就放弃了。
