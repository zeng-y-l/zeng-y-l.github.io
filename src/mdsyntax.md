---
title: 博客语法存档
---

## 标题

**粗体***斜体*_下划线_~~删除线~~{注音|zhuyin}`代码`$\dot{\mathcal{Z}}$^[脚注]

行内图片![alt信息](/icon.png "title信息")

----

1. 块级属性*行内属性*{style="color: red;"}
2. 整行属性{style="color: green;"}
3. 块级属性
{style="color: blue;"}

- 段落的列表

- 段落的列表

1. 嵌套的列表
    1. 嵌套的列表
        1. 嵌套的列表
1. 嵌套的列表
    - 嵌套的列表
      - 嵌套的列表

----

$$
\sum{}=\frac{}{2}
$$

```js {#hello}
(代 => 代(代))(码 => 码(码))
```

![alt信息](/icon.png "块级图片"){style="cursor: crosshair"}

```dot {style="cursor: crosshair"}
digraph {
  rankdir=LR
  这 -> Graphviz [label="是"]
  Graphviz -> 属性 [label="设置了"]
}
```

| 这 | 就是 | 表头 |
| -: | :--: | :--- |
| 这 | 就是 | 表格 |
| 的 | 一些 | 内容 |
