---
title: JS 拦截任何跳转
description: 通过 Navigation API，捕获并拦截绝大多数跳转
create: 2026-03-05
---

写油猴脚本，希望拦截跳转。尝试重写 `location.href` 的 setter 未果，问 LLM，得知了 [`navigate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation/navigate_event) 事件。一查，我去，太牛逼了。

首先，该事件是 [Navigation API](https://github.com/WICG/navigation-api)（[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation_API)）的一部分，本身是为了实现 SPA 导航用的。这个 API 非常新，2026 年才刚刚全面支持，Chrome 系的支持得早一点。甚至 TypeScript 都不支持，还得自己装上第三方的[类型定义](https://www.npmjs.com/package/navigation-api-types)。不过写点自己用的脚本问题不大。

上代码：

```js
navigation.addEventListener('navigate', e => {
    console.log(e)
    e.preventDefault()
})
```

你没有看错！短短几行，就能实现：

- 拦截 `location` 下一切跳转！包括直接设置属性（例如 `location.href = url`）、调用方法（例如 `location.reload()`）。
- 如果是本页面打开（`_self`），则可以拦截 `window.open`，以及 `<a>` 之类的操作。没错，用户操作也能拦截！毕竟是用来实现导航的。
- `history.pushState()`、`replaceState()`，本身没有跳转功能，但也可拦截。
- `history.back()`（还有 `forward`、`go`）以及用户在浏览器点击的前进、后退按钮，大部分情况下可以捕获但无法拦截。

欲知更多可以拦截的类型，以及其他相关 API，就去看文档吧！