---
title: 用 Rust 手写词法分析的 DFA 解决 LeetCode 65
create: 2023-07-01
desc: 用编译原理，在 Rust 中，手写 DFA，解决 LeetCode 题目（这是一篇旧文章，日期是后来的）
---

前情提要：  
前段时间注册了 LeetCode 帐号。  
这几天（写该文是 2022-7-24）用 Rust 在上面做题，使用 VSCode 本地写好后提交。  
虽然目前没做什么东西，还没有碰到 Rust 的借用检查器做好事的情况（囧），但是其函数式的美妙特性在我脑中挥之不去。  
另外，IntelliSence 真的好用！在 LeetCode 网页端写 C++，没有 IntelliSence，太难受了！

----

看到 LeetCode 有一题：<https://leetcode.cn/problems/valid-number/>。  
原题列于下方：

> **有效数字**（按顺序）可以分成以下几个部分：
> 
> 1.  一个 **小数** 或者 **整数**
> 2.  （可选）一个 `'e'` 或 `'E'` ，后面跟着一个 **整数**
> 
> **小数**（按顺序）可以分成以下几个部分：
> 
> 1. （可选）一个符号字符（`'+'` 或 `'-'`）
> 2. 下述格式之一：
>     1. 至少一位数字，后面跟着一个点 `'.'`
>     2. 至少一位数字，后面跟着一个点 `'.'` ，后面再跟着至少一位数字
>     3. 一个点 `'.'` ，后面跟着至少一位数字
> 
> **整数**（按顺序）可以分成以下几个部分：
> 
> 1. （可选）一个符号字符（`'+'` 或 `'-'`）
> 2. 至少一位数字
> 
> 部分有效数字列举如下：`["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]`
> 
> 部分无效数字列举如下：`["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]`
> 
> 给你一个字符串 `s` ，如果 `s` 是一个 **有效数字** ，请返回 `true` 。

----

我一看！哦！  
~~原来是昨天，有两个年轻人……（划掉）~~ 这不是词法分析嘛！

凭借我刚看过但没懂多少而且已经忘得差不多的小半本《现代编译原理》，我做出如上判断。  
而且其要求很低：不需要错误恢复；没有烦人的编码问题；不需要算出结果。

----

对于这个问题，我马上想到一个简单轻松的解决方案：  
**正则表达式！**

非常可惜！Rust 里，正则表达式不属于标准库。LeetCode 不支持引入外部 crate。  
因此方案作废。  
Flex 就更不可能实现了。

然后，我的脑中浮现出一个看到过的库：[nom](https://github.com/Geal/nom)。这是一个 **解析器组合子** 的库。  
于是我试图造个轮子出来。然而我对函数式编程理解不够，而且生命周期问题太麻烦，遂放弃该方案。  
（如果该方案能做出来，应该是最好的：可扩展、低耦合、模块化）

----

最终，我想到了一个做法：**手写 DFA**！  
这个题目足够简单，可以快速手动构造 NFA 和 DFA。  
这比较麻烦，非常不可扩展，非常高耦合。

其中用了 **迭代器** 和 **枚举** 和 **模式匹配**，但是主要部分都是 C 式的代码，哈哈！  
有不少重复的地方没有解决（比如错误处理），但也不到一百行！  
枚举命名非常糟糕，而且不是 Rust 风格，不要在意！

迭代器可以实现整个算法的零内存分配。  
虽然是状态机，但是应该不难转换成尾递归的函数式。  
另外，整个算法优化后应该可以实现零函数调用？（不确定）

Rust “一切皆表达式” 真的很好！在模式匹配中可以省下大量代码。


```rust
enum Token {
    NUM,
    E,
    SIGN,
    POINT,
    ERROR,
    EOF,
}
use Token::*;

enum State {
    INIT,
    NUM_AFT_SIGN,
    NUM_AFT_INT,
    NUM_AFT_PNT,
    NUM_AFT_BEG_PNT,
    NUM_AFT_FRAC,
    EXP,
    EXP_AFT_SIGN,
    EXP_AFT_INT,
    ERR_ST,
    END_ST,
}
use State::*;

impl Solution {
    pub fn is_number(s: String) -> bool {
        let mut toks = s.as_bytes().iter().map(|b| match b {
            b'0'..=b'9' => NUM,
            b'e' | b'E' => E,
            b'+' | b'-' => SIGN,
            b'.' => POINT,
            _ => ERROR,
        });
        let mut s = || toks.next().unwrap_or(EOF);
        
        let mut state = INIT;
        loop {
            state = match state {
                INIT => match s() {
                    SIGN => NUM_AFT_SIGN,
                    POINT => NUM_AFT_BEG_PNT,
                    NUM => NUM_AFT_INT,
                    _ => ERR_ST,
                },
                NUM_AFT_SIGN => match s() {
                    POINT => NUM_AFT_BEG_PNT,
                    NUM => NUM_AFT_INT,
                    _ => ERR_ST,
                },
                NUM_AFT_BEG_PNT => match s() {
                    NUM => NUM_AFT_FRAC,
                    _ => ERR_ST,
                },
                NUM_AFT_INT => match s() {
                    NUM => NUM_AFT_INT,
                    POINT => NUM_AFT_PNT,
                    E => EXP,
                    EOF => END_ST,
                    _ => ERR_ST,
                },
                NUM_AFT_PNT => match s() {
                    NUM => NUM_AFT_FRAC,
                    E => EXP,
                    EOF => END_ST,
                    _ => ERR_ST,
                },
                NUM_AFT_FRAC => match s() {
                    NUM => NUM_AFT_FRAC,
                    E => EXP,
                    EOF => END_ST,
                    _ => ERR_ST,
                },
                EXP => match s() {
                    SIGN => EXP_AFT_SIGN,
                    NUM => EXP_AFT_INT,
                    _ => ERR_ST,
                },
                EXP_AFT_SIGN => match s() {
                    NUM => EXP_AFT_INT,
                    _ => ERR_ST,
                },
                EXP_AFT_INT => match s() {
                    NUM => EXP_AFT_INT,
                    EOF => END_ST,
                    _ => ERR_ST,
                },
                END_ST => {
                    break true;
                },
                ERR_ST => {
                    break false;
                },
            };
        }
    }
}
```


最后：  
如果在 JavaScript 中写这道题，应该非常方便！一行正则搞定。
