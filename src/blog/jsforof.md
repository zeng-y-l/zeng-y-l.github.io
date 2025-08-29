---
title: JS 的 for..of
description: 说说 JS 的 for..of（这是一篇旧文章，日期是后来的）
create: 2023-07-01
---

本文将以我自己的理解方式，说说`for..of`到底是个啥（顺便地讲迭代器）。

本人太烂，有错误敬请指出。

----

## 引言

从对Array的使用中可以发现，`for..of`类似如下：

```js
Array.prototype.abcd = function(){};
var a = ['foo', 'bar'];

for(let i in a) {
    if(a.hasOwnProperty(i)) {
        let b = a[i];
        console.log(b);
    }
}
/* 能实现如下？
for(let b of a) {
    console.log(b);
}
*/
```

> 小提示：  
> 如果不加这个判断，`abcd`会显示，但`Array.prototype.find`等原型不会。为何？  
> 这是另一个话题：[{可枚举|enumerable}](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)，可延伸到“{属性描述符|Property Descriptor}”，与本文主题关系很小，就不展开讲了。

这么着，似乎就是个语法糖罢了？

试试看：  
上面那段程序，输入普通对象 (`{k:v,...}`*Plain Object*)，`for..of`的直接报错，`for..in`的看上去正常；  
如果输入jQuery对象 (`$(sth)`)，`for..in`的多了个length，`for..of`的正常。

> 可以发现，`for..of`和`for..in`并不类似（除了语法上类似）。

事实上，`for..of`要求对象实现一些方法，普通对象没有实现，自然没法使用。Array等对象（包括jQuery）实现好了，就能用。  
哪些方法呢？见下。

----

## {可迭代|iterable}

上文说，`for..of`要求对象实现一些方法。

那么，定义：

> - 实现了这些方法的对象 *可迭代*。
> - 这些要求为 *可迭代协议*。

那到底要求什么？

> 要求可迭代对象的`Symbol.iterator`属性（原型链上也行）为函数，  
> 不带参数调用时返回一个的迭代器对象，用于迭代this。

实例如下，a实现了可迭代协议，因此a可迭代。

```js
var a = { foo: 22, bar: 33 };
a[Symbol.iterator] = function () {
    return [0,1,2][Symbol.iterator](); 
    //要在函数中调用，直接把函数赋值会不输出！为什么？
    //因为那样this指向a而非数组，遍历的也就是a了。也可以用bind改变this。
}
/*
现在用for..of遍历a，能遍历了！
会输出0 1 2，因为把数组的迭代器搬来了。
*/
```

`Symbol.iterator`是什么？[Symbol类型的值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)可以作为键名，`Symbol.iterator`是一个Symbol类型的值。

迭代器对象是什么？见下。

## 迭代器

> 迭代器是一个**对象**（任何对象都行，包括[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)之类）。

另外：

> 使用迭代器过程中，**可以不传入任何参数**。（`for..of`是不传入的，但迭代器本身没有规定不能传入）
> - 被迭代器迭代的对象，在迭代器创建时已经定好，通常由闭包传递`Symbol.iterator`的this来保存。
> - 对于当前迭代到的位置索引，可以通过闭包保存，也可以通过迭代器对象的属性。

迭代器的要求如下：

> 有一个`next`方法，用于进行下一次迭代。
>
> next方法返回一个对象，属性如下：
>
> |键名   |类型  |表示 |
> |-     |-     |-   |
> |done  |布尔  |如果为真，则表示迭代已经结束，没有值，value为默认值或未定义 |
> |value |任意  |如果done为假，则为本次迭代获得的值 |

是不是很懵逼？不知道到底干啥？或者大概明白不知道有啥用？  
看看下面一例。

### 使用迭代器

```js
var iterable = [1, 4, 5, 9, 0, 8];
var iterator = iterable[Symbol.iterator]();
var valObj;
while(1) {
    valObj = iterator.next();
    if(valObj.done) break;
    console.log(valObj.value);
}
```

会迭代`iterator`（为迭代器），输出每一项。  
其是从`iterable`（为可迭代对象）获取到的迭代器。

## 手写一个

写个对象，使其可迭代。

```js
var iterable = {
    [Symbol.iterator]() {
        var vals = Object.values(this);
        var index = 0;
        return {
            next() {
                return {
                    value: vals[index++],
                    done: index > vals.length
                }
            }
        };
    }
}

iterable.a = 111;
iterable.b = 222;
iterable.hhhh = "ABC";
for(let v of iterable) {
    console.log(v);
}
```

使用了语法：[计算属性名](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D)

现在对象`iterable`就可以像最开始那一例一样输出对象的值了。  
将其放在`Object.prototype`上，就能用`for..of`迭代全部对象，像我们期望的那样！  
（不过不建议修补原生对象）

~~其实已经结束了。。。但是还有点东西，继续讲吧：~~

但是这么来，本来能直接用循环等方法解决的，现在却很困难。这还不如类似`forEach`的玩意，不是捡了芝麻、丢了西瓜吗？  
别急，有一种更好的方法来制作迭代器。

## 生成器

> 生成器定义一个**函数** *（生成器函数）*。

一般用`function*`代替`function`获得生成器对象，如`function* a(){}`  
对象字面量可以在方法前跟`*`，如`{*a(){}}`。[来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E6%96%B9%E6%B3%95%E5%AE%9A%E4%B9%89)  

> 调用生成器函数时，不会执行函数体内容，而是返回一个对象。  
> 该对象既是**迭代器**，又**可迭代**，其`Symbol.iterator`方法返回它自己。  
> 函数体将被异步地挂起，直到迭代器调用了`next`方法。

生成器函数内，可用一个新的表达式：`yield`，语法类似`void`（也就是`yield 1`和`yield(1)`都行）。

当`next`被调用时，如果函数未结束（已结束的情况后面讲），  
生成器函数就会从上一次停下的地方开始（如果没运行过，就是从头开始）继续运行，  
直到遇到`yield`或`return`后，生成器函数停下。

> 怎么个停下法？
> 
> 把`yield "sth"`想象成调用一个“函数”，却没有函数体，而是其他的（调用`next`后直到下一次调用`next`）代码内容。  
> 而“函数”返回时，就是下一次调用`next`时。
> 
> 如果知道C，那可以把它想象成`longjmp`；如果用过js的`async`函数，那更是异曲同工。

生成器函数停下后，`next`函数返回。返回值是：
```js
{
    done: false,
    value: //yield后跟的值
}
```

如果函数已经结束了（比如运行到底了，或者返回过了），那返回值是：
```js
{
    done: true,
    value: undefined
}
```

举例。

### 写生成器

```js
var iterable = {
    *[Symbol.iterator]() {
        for(let i in this) {
            yield this[i];
        }
    }
}

Object.assign(iterable, { a: 111, b: 222 });
for(let v of iterable) {
    console.log(v);
}
```

和上面的功能一样，但简单多了，`for..in`使其很容易理解。

### `return`与`yield*`

生成器函数内，还可使用`return`与`yield*`。

`return`与`yield`有点类似，但与本来的功能也差不多。  
作用就是直接结束这个迭代器（后面语句不执行了，和原本功能一样），返回`next`函数，在返回值的`value`可选地放一个值。

遇到`return`而非`yield`，则`next`函数的返回值为：
```js
{
    done: true,
    value: //return后跟的值
}
```

`yield*`则是直接使用另一个可迭代对象的迭代器。  
如下两个相当（也许不同，望指正）：

```js
yield* sth;
```

```js
for(let v of sth) {
    yield v;
}
```

因此那一例还可以写作：

```js
var iterable = {
    *[Symbol.iterator]() {
        yield* Object.values(this);
    }
}
```

更简单了。。。

### 传入参数

这部分和`for..of`无关，因此粗略带过。

> 生成器函数可以传入参数。

使用迭代器的代码从“使用迭代器”一节借来，因为`for..of`无法传入参数。

```js
var generator = function*(p) { //有一个参数
    yield* p;
};
var iterator = generator([1, 4, 9]); //传入参数


var valObj;
while(1) {
    valObj = iterator.next();
    if(valObj.done) break;
    console.log(valObj.value);
}
```

> 生成器函数生成的迭代器的`next`函数可以传入参数。  
> 传入的参数将被作为**上一个**`yield`语句的值。

还记得前面那个“函数”的比喻吗？`next`方法传入的参数就是`yield`“函数”的“返回值”。

也可以将`yield`想象成`prompt`函数，生成器函数想象成程序，使用迭代器者就是你。  
第一次调用`next`，程序开始运行，你等待；  
程序遇到`yield`，告知你值。程序阻塞；  
你拿值进行计算完毕，准备再次调用`next`，可以输入一个值（`next`方法的参数）；  
程序用`prompt`的返回值（`yield`语句的值）收到你的输入，继续运行。

如果还是不懂，那也没必要懂了，因为和`for..of`没啥关系，呵呵。