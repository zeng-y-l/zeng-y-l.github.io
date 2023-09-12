---
title: 从剩余参数到柯里化
create: 2023-09-10
desc: 对简洁的追求就是柯里化的动机
---

近期想着用 JavaScript 的*生成器*实现{*代数效应*|Algebraic Effect}之类，想到函数的参数要用数组表示。如果用户直接输入数组，和函数调用语法相差甚多，体验不佳。思来想去，想到些东西，记之。

声明：本文主要以 JavaScript 举例，偶尔夹杂 Lua 等其他语言。本人不会 Lua，只写过不到一百行。其他语言也不精通。若有错误，敬请指出！

# {剩余参数|Rest Parameters}

C 系语言，参数有好多个。如 JavaScript，参数数量都没定死，传几个都行，挺随便。

```js
fn()
fn(1, 2, 3, 4, 5, 6, 7, 8, 9)
```

传是传了，但在函数内，总得有个办法获取它们，否则就没意义了呀！若是一个个写形参名，数目固定，无法得知全部的实参。因此，需要办法以获取任意多的实参。曾经，任务属于 [`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)；现在，[*剩余参数*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)接过了重担。其间优劣在此不表。

```js
// 求和所有参数
const sum = (...args) => args.reduce((x, y) => x + y, 0)
sum(1, 2, 3) // 6

// 输入一个函数，返回一个函数。返回的函数在调用前打印日志
const withLog = fn => (...args) => {
    console.log('即将调用！')
    return fn(...args)
}
// 不使用现代特性
function withLogOld(fn) {
    return function () {
      console.log('即将调用！')
      return fn.apply(this, arguments)
    }
}
```

剩余参数是 ES2015 现代化征程上的重要脚印。但日益增多的功能也敲响了警钟：是否一直都偏离了轨道？

# 返回参数

`withLogOld` 的例子看起来十分美好，非常优雅，轻轻松松就把一个地方传进来的参数作为数组，挪到了另一个地方传进去。但别忘了，那例子只是为了展示前一半，也就是将传进来的参数收集为数组。而后一半，不总是传进其他函数去，也可能是直接操作这些参数，就像 `sum` 一样。

至于说，把任意数量的参数传进函数去，又是另一个话题，和剩余参数无关。传进去的这些参数，来源也当然不一定是其他地方传进来的参数。组合函数是常见的例子。

```js
const compose = (f, g) => (...args) => f(g(...args))

const f = x => x + 1
const g = (x, y) => x * y
compose(f, g)(2, 3) // 7
```

组合函数中，`g` 的参数确实来源于别处的参数。但是，`f` 的参数来源于 `g` 的返回值，而非其他某处的参数。返回值只有一个，因此 `f` 也只会接收到一个参数。这意味着，应接收多个参数的函数，无法作为 `compose` 的第一个参数。下面修复之。

```js
const compose2 = (f, g) => (...args) => f(...g(...args))

const f = (x, y) => x + y
const g = (x, y) => [x * x, y * y]
compose2(f, g)(2, 3) // 13
```

问题是修复了，但由于 `g` 需要返回将要传进 `f` 去的参数，因此是返回数组。这毫不美好，实在丑陋！要传进函数去的参数，却写成数组，二者相差甚多，看起来也不同。究其原因，**参数有多个，返回值只有一个**。接下来，抹平其差异。

# 多返回值？

参数可以有多个，反过来想，返回值也可以有吧？如果返回多个值，那就可以直接作为参数了。这当然可以！不过 JavaScript 没有。

多返回值，想来似乎很美好，参数和返回值成了一样的东西！写点 Lua 看看。

```lua
function a()
    return 1, 2, 3
end
print(a()) -- 输出 1 2 3
print(0, a()) -- 输出 0 1 2 3
print(0, a(), 4) -- 输出 0 1 4
```

如果你认为最后一例应输出`0 1 2 3 4`，那你就低估了多返回值的威力！此外，若想将任意数量的返回值保存在变量中，还只能间接完成。总之，至少在 Lua 中，这是一头猛兽。

在 Go 中，多返回值的限制更多了，不过容易理解一些。

其他有的语言的问题小一些，虽然不一定符合初学者的直观，但是道理明了、逻辑简单。不过，那多半不是多返回值，而是其他东西的语法糖，也无法直接解决 `compose` 的问题。

我不推崇多返回值，这不是好的方案。它白白增添了一种麻烦的东西。

# 单参数！

在前面的 `sum` 函数中，其实不需要任意多的参数。若使其接收一个参数，为数组，即替换 `sum(1, 2)` 以 `sum([1, 2])`，也能达到一样的功能。类似地，一切函数都可以改成接收一个参数的，不多不少。最直观的办法，就是把原来的参数收进数组中。

```js
Math.random([]) // 原来没有参数
Math.max([1, 2, 3]) // 原来有任意多的参数

const add = ([a, b]) => a + b // 定义函数，使用解构语法
```

在 `withLogOld` 中可以明白，把任意多的参数收进一个值中、用一个值当作任意多的参数，都是刚需。从 `compose` 中可以发现，这么一个值最好还要容易构造，要清晰。既然这样，那干脆让参数总是一个值，直接解决此问题，不仅能作为返回值，还能直接保存到变量里。

```js
const compose3 = ([f, g]) => arg => f(g(arg))

const f = ([x, y]) => x + y
const g = ([x, y]) => [x * x, y * y]
compose3([f, g])([2, 3]) // 13
```

参数确实变得清晰了——都是普通的数组嘛。在参数处使用[*解构赋值*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)，与*数组字面量*语法一致，看上去清晰易懂。

但是，括号很是多余，实在丑陋！为此，不妨改变语法，借鉴 Lua 的语法糖，`f({a})` 写成 `f{a}`，单参函数以一定的参数调用可以省略括号。此处只有单参函数，还可以再激进一点：任何函数调用无需括号，括号和函数调用彻底脱钩，只剩下唯一的用途，类似 `2 * (1 + 3)`。

```js
// 省略了括号，不是合法的 JavaScript
const add = [x, y] => x + y
add[1, 2] // 3

const compose4 = [f, g] => arg => f (g arg)
// g 和 arg 间的空格只是为了分隔，f 后面加括号避免被认作 (f g) arg
const f = [x, y] => x + y
const g = [x, y] => [x * x, y * y]
compose3[f, g][2, 3] // 13
```

看看这代码！不比之前的 `compose2` 美观、简明、对称？它和 `compose3` 语义完全一致，只是语法有变。

Less Is More，这条路线是正确的。它减少了多参数，但表达能力依旧；添加的只是语法，完全可以轻易转换成普通的 JavaScript，像 `compose3` 一样。

# 无限世界

前面规定：一切函数有且只有一个参数，调用函数时不用括号。这可以简化很多东西，已经展示过了。这也不会减弱表达能力，因为一切函数都可以将原来的参数作为数组，如 `a()` 变为 `a[]`，`b(1, 2)` 变为 `b[1, 2]`。

函数以数组为参数，不是强制，只是为了说明“不会减弱表达能力”。在命名参数中，函数就以普通对象为参数。

那些原本就是单参的函数，如果也把参数搞成数组，那是多此一举。它们完全可以不变，省去了调用的括号就行。

```js
// 省略了括号，不是合法的 JavaScript
const negate = x => -x
negate 10 // -10
negate Math.PI // -3.141592653589793

const id = x => x
id 1 // 1
id id 1 // 1，加括号就是 (id(id))(1)
id negate 1 // -1
id id negate 1 // -1

const ifNotNull = [val, fn] => val == null ? null : fn val
ifNotNull[1, negate] // -1
ifNotNull[null, negate] // null
```

原来的函数有任意个参数，现在只有一个，似乎意味着表达能力的减弱。但前面展示过了，以数组为参数，就能表达出原来的任意个参数，表达能力一致。而现在看看，这个参数不止可以是数组，那是否意味着表达能力还增强了？为何出现三个矛盾的观点，哪一个对？

第二个对，表达能力一致。在无限的世界里，整体不一定大于部分。

# 命名参数

许多语言有*命名参数*或者叫*关键字参数*。令参数为对象，通过对象的解构，可以零成本支持命名参数，不会多打一个符号。

```js
// 省略了括号，不是合法的 JavaScript
const clamp = {min, val, max} => val < min ? min : val > max ? max : val

clamp{min: 5, val: 20, max: 10} // 10
```

零成本支持很美好，但是存在问题，无法混合命名参数与位置参数，语法都不一样。如果改变语法，借鉴 Lua 的*表*，语法上不区分数组和对象，`{a, b: c, d}` 作为 `{0: a, b: c, 1: d}` 的语法糖，可以一定程度上解决问题。但依然无法让参数既是位置参数又是命名参数（`a{1}` 和 `a{x: 1}` 不可兼得），也不能用数组的*剩余属性*（`[a, ...b]`），而且无法再用对象简写（`{a: a}` 不能再写成 `{a}`）。

不过，这是零成本的，无需任何额外功能就能支持，还要啥自行车？

# 柯里化

前面的例子里，传参总是一次传完。为此，如果参数有多个，就需要把多个参数打包到一起，不管使用数组还是对象。

从 `negate` 之类的单参函数推广开来，可以产生另一种风格，分多次传完参数，就像{*建造者模式*|Builder Pattern}。具体做法是，对于原本不止一个参数的函数，令其每次接收一个参数并返回一个新的函数，继续传参数给新的函数又得到新的函数，直到参数数量够了就正常计算。

```js
// 省略了括号，不是合法的 JavaScript
const add2 = x => y => x + y
add2 1 2 // 3
add2 1 // 函数，源码为 y => x + y

const add3 = x => y => z => add2 (add x y) z
add3 1 2 3 // 6

const ifBothNotNull = val1 => val2 => fn =>
    val1 == null || val2 == null
    ? null
    : fn val1 val2
ifBothNotNull 1 2 add2 // 3
ifBothNotNull null 2 add2 // null
```

没有参数的函数比较特殊，按做法会直接变成常量。此时一些函数会出问题，例如 `Math.random`，因为有副作用。此时，手动添加一个没用的参数，在函数中直接忽略。调用时随便传啥都行，例如 `Math.random undefined` 或 `Math.random[]`。

这就是*柯里化*。不难发现，柯里化的函数调用更加简洁，没有任何多余符号，一路空格就行。但是这玩意一层套一层，全是高阶函数，为什么要搞这种莫名其妙的东西呢？除了语法简洁之外，还有其他好处吗？有。

```js
// 省略了括号，不是合法的 JavaScript
const ifNotNull = fn => val => val == null ? null : fn val
const compose5 = f => g => arg => f (g arg)

const inc = add2 1
const safeInc = ifNotNull inc
safeInc null // null
safeInc 2 // 3

const twoArgsAnd = compose5 compose5 compose5
const anotherAdd3 = twoArgsAnd add2 add2
const subNeg = compose5 add2 negate
const sub = twoArgsAnd negate subNeg
subNeg 10 6 // -4
sub 10 6 // 4
```

如果没有柯里化，定义 `inc` 和 `safeInc` 要麻烦得多，一般要写匿名函数。有了柯里化就可以暂时固定一个参数，等全部参数齐了再一并取用。这里的 `ifNotNull` 将 `fn` 作为第一个参数，得以将其固定；如果将 `val` 作为第一个参数，则定义 `safeInc` 依然很麻烦。将较为固定的参数放在前面，有助于使用柯里化节省代码。

`sub` 和 `anotherAdd3` 体现了组合的思想。没有定义一个函数，单靠组合其他的函数，就达成了功能。处处无函数，处处是函数。当然，此处用得并不好，十分晦涩，直接定义函数更简洁。

较小的差异能很大地影响思维方法。在大多数函数式编程语言中，函数都是单参数的，柯里化无处不在，组合大放光芒。

# 静态类型

前面的例子都是动态类型语言。在静态类型的语言中，令函数为单参，也大有裨益，可以简化类型系统。

C++ 没有 `argument` 之类的方法，无法获取所有的参数，也就根本无法写出 `compose` 和 `compose2`。为此，C++11 添加了[*变参模板*](https://zh.cppreference.com/w/cpp/language/parameter_pack)，允许表达任意数量的类型和值，完美解决问题。这特性比较复杂，但表达能力极强。

Rust 以 [`Fn<Args>`](https://www.rustwiki.org.cn/zh-CN/std/ops/trait.Fn.html) 为函数的 trait，其有一个方法 `call(&self, args: Args)`。实现 `Fn<(T, U)>` 就说明可以调用 `f(x as T, y as U)`。手动实现之，可以写出 `compose2`，但目前尚不稳定。`Fn` 通常写成 `Fn(T, U) -> R`，但实际上指的是 `Fn<(T, U), Output = R>`。其把参数作为单个元组，如 `f(x, y)` 对应 `f.call((x, y))`，因而 `Args` 被约束为 [`Tuple`](https://www.rustwiki.org.cn/zh-CN/std/marker/trait.Tuple.html)，避免写出无从对应的 `f.call(1)`。这比 C++ 简单很多，表达能力也弱很多。

令函数为单参，则其类型很像 Rust，但无需把 `Args` 限制为 `Tuple`。不妨发明一种表示方法，可以用 `x -> y` 表示类似 `dyn Fn<x, Output = y>` 的类型：

- `negate` 的类型为 `number -> number`
- `add2` 的类型为 `number -> (number -> number)`，可省去括号
- `add3` 的类型为 `number -> number -> number -> number`
- `id` 的类型为 `'a -> 'a`，单引号代表泛型
- `ifNotNull` 的类型为 `('a -> 'b) -> ('a | null) -> ('b | null)`
- `compose5` 的类型为 `('b -> 'c) -> ('a -> 'b) -> 'a -> 'c`
- `twoArgsAnd` 的类型为 `('out -> 'out2) -> ('in -> 'in2 -> 'out) -> ('in -> 'in2 -> 'out2)`（我为泛型起了更描述性的名字，并加上了括号）

# 结语

总之，令函数为单参，可以简化很多。大的优点也没有，就是简单。
