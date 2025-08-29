---
title: 从一篇文章的优化
description: 一篇文章的问题的解决方案（这是一篇旧文章，日期是后来的）
create: 2023-07-01
---

原文地址：<https://www.jianshu.com/p/f38776414551>

事先声明：我与作者无冤无仇。

----

原文是关于`JSON.stringify`的。

别的不说，单说第一章中的错误，以及更好的解决方式。

----

## 需求

原文的需求：

> 首先我们在开发的过程当中遇到这样一个处理数据的需求
>
>```js
>const todayILearn = {
>    _id: 1,
>    content: '今天学习 JSON.stringify()，我很开心！',
>    created_at: 'Mon Nov 25 2019 14:03:55 GMT +0800 (中国标准时间)',
>    updated_at: 'Mon Nov 25 2019 16:03:55 GMT +0800 (中国标准时间)'
>}
>```
> 我们需要将上面这个对象处理成下面这个对象
>
>```js
>const todayILearn = {
>    id: 1,
>    content: '今天学习 JSON.stringify()，我很开心！',
>    createdAt: 'Mon Nov 25 2019 14:03:55 GMT+0800 (中国标准时间)',
>    updatedAt: 'Mon Nov 25 2019 16:03:55 GMT+0800 (中国标准时间)'
>}
>```
>
>也就是在不改变属性的值的前提下，将对象属性修改一下。 把`_id`改成`id`，把`updated_at`改成`updatedAt`，把`created_at`改成`createdAt`。

很简单。但是，有几点没有说明：

1. 是直接在原对象改（可变），还是新创建一个对象（不可变）？
1. 如果有重复属性（比如已经有`id`了），或者该有的属性没有（比如没有`_id`），怎么办？
1. 如果对象有一些奇怪的东西，比如`getter`、`setter`、对象已经被冻住、这些属性不可枚举，或者需要的属性在`prototype`上，甚至对象是`Proxy`，怎么办？

我认为的解决方法：

第一、二点，没有限制，作为每一个解决方案的{特性|feature}。  
第三点，就**认为**输入和输出对象都是普通对象。

----

## 解决

解决方案在下面罗列。  
也罗列一些思考方法。

每个方案作为一个函数，`this`为输入，`return`为输出。

每个方案的效果如下：

- 顺序变化：键的顺序变化。（默认：没变）
- 多余结果：输入有重复属性，输出对其的处理。（默认：后者覆盖前者）
- 缺省结果：输入缺少一些属性，输出对其的处理。（默认：缺少的键在输出中不存在）
- 可变性：是直接在原对象改（可变），还是新创建一个对象（不可变）。
- 错误：输入规范，但输出错误。
- 速度：一万次需要的时间。
- 评价：我的评价。

#### 方案一（文中方案一）：一次遍历+多声明一个变量

- 可变性：不可变
- 速度：20~40ms
- 评价：还行，但为什么不用`switch`呢？

```js
const todayILearnTemp = {};
for (const [key, value] of Object.entries(this)) {
    if (key === "_id") todayILearnTemp["id"] = value;
    else if (key === "created_at") todayILearnTemp["createdAt"] = value;
    else if (key === "updated_at"/*作者这里有一个笔误*/) todayILearnTemp["updatedAt"] = value;
    else todayILearnTemp[key] = value;
}
return todayILearnTemp;
```

#### 思考一：上面方案的思考方法

遍历输入键值对，按顺序加入输出对象。  
对于每一个键，用一些方法得到新的键。

伪代码：

```
for [k,v] in input:
    newKV(output, k, v)
```

对于`newKV`的不同处理，就能得到最终的不同结果。

例如上方的方法的`newKV`就是：

```js
if (k === "_id") output["id"] = v;
else if (k === "created_at") 
output["createdAt"] = v;
else if (k === "updated_at") output["updatedAt"] = value;
else output[k] = v;
```

该方法都能轻易控制“顺序变化”“多余结果”“缺省结果”。

#### 方案二：最优雅法

- 可变性：不可变
- 速度：20~50ms
- 评价：基于思考一，非常优雅。理论上一行即可写出。用了解构赋值和空值合并。

```js
var mapObj = {
	_id: "id",
	created_at: "createdAt",
	updated_at: "updatedAt"
};
return Object.fromEntries(Object.entries(this).map(
	([k,v]) => [mapObj[k] ?? k, v]
));
```

#### 方案三：可变法

- 可变性：可变
- 顺序变化：会改变顺序。
- 多余结果：如果同时有`id`和`_id`，则现`id`（原`_id`）一定会覆盖原`id`。
- 速度：20~40ms
- 评价：基于思考一的唯一可变方法。

```js
var mapObj = {
	_id: "id",
	created_at: "createdAt",
	updated_at: "updatedAt"
};
for(const k in this) {
	if(!mapObj.hasOwnProperty(k)) continue;
	this[mapObj[k]] = this[k];
	delete this[k];
}
return this;
```

#### 方案四（文中方案二）：暴力`delete`属性和增加属性

- 可变性：可变
- 顺序变化：会改变顺序。
- 多余结果：如果同时有`id`和`_id`，则现`id`（原`_id`）一定会覆盖原`id`。
- 缺省结果：缺少的属性会变成`undefined`。
- 速度：20~40ms
- 评价：暴力。使用`delete`，类似方案三。

```js
this.id = this._id;
this.createdAt = this.created_at;
this.updatedAt = this.updated_at;
delete this._id;
delete this.created_at;
delete this.updated_at;
return this;
```

#### 方案五：结构法

- 可变性：不可变
- 顺序变化：顺序是定死的，和输入无关。
- 多余结果：忽略多余输入。
- 缺省结果：缺少的属性会变成`undefined`。
- 速度：10ms
- 评价：暴力，但快速简洁。如果是中间操作（输入有保障），建议使用这种。

```js
return {
	id: this._id,
	content: this.content,
	createdAt: this.created_at,
	updatedAt: this.updated_at
};
```

#### 方案六（文中方案三）：序列化+`replace`美学典范

- 可变性：不可变
- 速度：80~100ms
- 错误：若输入字符串含有需要替换的键名，则输出也会被替换。并且无法处理回环引用、函数、`Symbol`等。
- 评价：烂死了，烂到其他特性都懒得写了。无语\\(O_O)/
    - bug先修了再说吧。
    - 美个屁，谁愿意莫名其妙看一个正则？
    - 比其他方案慢了两三倍。

```js
const mapObj = {
	_id: "id",
	created_at: "createdAt",
	updated_at: "updatedAt"
};
return JSON.parse(
	JSON.stringify(this).replace(
		/_id|created_at|updated_at/gi,
		matched=>mapObj[matched]));
```

#### 思考二：键的映射

即给定旧的键，映射到新的键。  
所有方案都需要这一步。

方案四、五，是曲线救国，会导致缺少的属性变成`undefined`。

方案一，采用一长串`if..else`来解决这个问题。

方案二、三、六，采用一个对象来完成这件事。

- 若采用对象，还需要考虑没找到的情况。
    - 方案二，需要在一个表达式内完成，因此采用空值合并运算符。
    - 方案三，添加键后还要`delete`原来的键，因此只好事先用`hasOwnProperty`过滤一遍。
    - 方案六，没考虑！很烂。

另外，从方案一的`if..else`，还能使用`switch`。那样更简洁。  
方案一的究极进化就是方案二。