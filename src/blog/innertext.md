---
title: HTML 转文本的坑
create: 2024-11-10
desc: innerText 的神奇特性
---

HTML 转文本，怎么做？

第一反应：设置 `innerHTML`，再获取 `innerText` 不就行了？写出代码：

```js
function HTML2text(html) {
    const el = document.createElement('div')
    el.innerHTML = html
    return el.innerText
}
```

看着没毛病，测试一下：

```js
HTML2text('&nbsp;') // ' '
HTML2text('<strong>Hello</strong>') // 'Hello'
HTML2text('1<br>2') // '12'
```

欸？这不对吧？换行怎么丢了？

尝试半天不知问题所在，查询 MDN 也无果，只好看[标准](https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute)。不看不知道，一看吓一跳！获取 `innerText` 的第一条就写着：

> If *element* is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) or if the user agent is a non-CSS user agent, then return *element*'s [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content).

破案。想要正确获取 `innerText`，元素必须显示。于是，可以这样写：

```js
function HTML2text(html) {
    const el = document.createElement('div')
    document.body.appendChild(el)
    el.innerHTML = html
    const text = el.innerText
    el.remove()
    return text
}

HTML2text('1<br>2') // '1\n2'
```