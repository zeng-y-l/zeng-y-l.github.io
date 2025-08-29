---
title: Rust 前端初尝试
description: 源神，启动！
create: 2024-09-30
---

Rust 信徒在前端搞出了不少名堂。受其影响，我也蠢蠢欲动，于是给前段时间写的一个小玩意儿 [base_any](https://lib.rs/crates/base_any) 用 Rust 写了个前端界面，效果在[这里](https://zeng-y-l.github.io/project/baseany.html)。

Rust 前端框架还不少，我也不明就里，随便选了个看着比较活跃的 [Leptos](https://lib.rs/crates/Leptos)。由于功能太简单，所以没什么难点，写起来跟 [SolidJS](https://www.solidjs.com/) 没啥区别。只不过我用其写的是组件而非整个页面，因此清理时要注意释放内存，用了一些 hack 的方法（参考 [How should I dispose an application](https://github.com/leptos-rs/leptos/discussions/1560)）。
