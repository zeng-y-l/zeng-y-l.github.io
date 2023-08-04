---
title: jQuery 解包子节点
create: 2023-07-01
desc: 把节点里面的文本之类的都放出来（这是一篇旧文章，日期是后来的）
---

假设现有如下元素

```html
<div>
	text
	<p class="unwrap">
		unwrap
		<span>text</span>
	</p>
	<p>element</p>
<div>
```

要解包`.unwrap`的子节点，试图达到以下效果：

```html
<div>
	text
	<!-- 这里原先的p标签删掉了，里面所有节点跑出来 -->
		unwrap
		<span>text</span>
	<p>element</p>
<div>
```

----

这时候不能直接用unwrap，因为那会解包父节点，把自己放出去。  
于是先获取contents就行了。

contents会获取所有子节点，包括文本之类的。

```js
$(".unwrap").contents().unwrap()
```