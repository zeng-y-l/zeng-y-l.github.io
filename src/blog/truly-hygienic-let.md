---
title: 【译】Rust 中「真正卫生」的 Let 语句
description: 翻译《“Truly Hygienic” Let Statements in Rust》
create: 2025-12-22
---

原文：[“Truly Hygienic” Let Statements in Rust - Sabrina Jewson](https://sabrinajewson.org/blog/truly-hygienic-let)

翻译由 DeepSeek、Qwen 完成，我整合结果并校对。难免出错，请多包涵。

与原文相同，译文以 CC BY 4.0 发布。转载请标注来源。

---

<!-- # “Truly Hygienic” Let Statements in Rust -->

<!-- Remon is a responsible library developer.
She cares about stability, flexibility and correctness,
using whichever tools are presently accessible to achieve those goals.
Her authored libraries feature automated testing and extensive documentation;
she allots design decisions rationale;
she knows her language features and traditions
and how to apply them to best effect. -->

Remon 是一位尽责的库开发者。她追求稳定性、灵活性与正确性，善于运用当下一切可用工具来达成这些目标。她编写的库都配备自动化测试和详尽文档；她为每项设计决策阐明理由；她精通语言特性与社区传统，并懂得如何最有效地运用它们。

<!-- And, somewhere to be discovered bound in the tangle of `.rs` files,
there is Remon herself,
tranquil and yet focused,
meticulously crafting, polishing, studying and crafting again,
a component she forsees to ease the life of her users,
provides ergonomics inaccessible by traditional methods,
brings to life the great gift of syntax
without glue added to the cogs of the build process –
a declarative macro. -->

而在那些错综复杂的 `.rs` 文件深处，藏着 Remon 本人，沉静而专注，精心雕琢、打磨、钻研、再雕琢，一个她预见能简化用户生活的组件，提供了传统方法无法企及的开发体验，在不给构建流程增添额外负担的情况下，实现语法的伟大馈赠——一个声明宏。

<!-- Refined and learned code-witch she is,
Remon is keenly aware of Rust Cultures and Traditions,
and so in keeping,
would do nothing but summon a monstrous
(documented, without doubt, but monstrous nonetheless)
tornado of dollar signs and brackets,
one whose gales would surely lift up and send flying
a meek blog post as this one. -->

作为一位技艺精湛、学识渊博的代码巫师，Remon 深知 Rust 的文化与传统，并且承袭于此，只会打算召唤一个恐怖（无疑有文档，但依然恐怖）的由美元符号与括号组成的龙卷风，其狂风必定会卷起并吹飞像本文这样温和的博客文章。

<!-- Have sympathy!
I cannot handle that –
I must admit I have not even implemented `[rs] Send`,
so the results could verge on disastrous.
But a trained magician knows better than to create a beast they cannot tame,
and so for this chronicle
it is simplified to a wisp of its wild self –
one where you must excuse the apparent folly of its existence –
as follows: -->

请谅解！我无法驾驭它——我必须承认，我甚至尚未实现 `Send`，所以结果可能近乎灾难。但一位训练有素的魔法师从不创造自己无法驯服的怪物，因此在这篇记述中，它被简化为其狂野本体的一丝缩影——一个你必须原谅它看起来很愚蠢的存在——如下所示：

```rust
macro_rules! oh_my {
	() => {
		let Ok(x) = read_input() else { return Err(Error) };
		$crate::process(x);
	};
}
```

<!-- Remon is a responsible library developer,
and understands that all humans will make mistakes –
and so she has solicited the services of a good friend, Wolfie,
to comment on this slice of code. -->

Remon 是一位尽责的库开发者，深知所有人都会犯错——因此她邀请了好友 Wolfie 来点评这段代码。

<!-- Well, Wolfie says, this macro is very impressive feat,
and shall surely ease the lives of our users,
provide ergonomics inaccessible by traditional methods,
and bring to life the great gift of syntax
without glue added to the cogs of the build process.
But I do have one concern –
the `[rs] let` in this macro is not hygienic. -->

「嗯，」Wolfie 说，「这个宏是非常令人印象深刻的功绩，必将简化我们用户的生活，提供传统方法无法企及的开发体验，在不给构建流程增添额外负担的情况下，实现语法的伟大馈赠。不过我确实有一个顾虑——这个宏中的 `let` 语句并不{卫生|hygienic}。」

<!-- Now, Remon has read her literature,
and knows that Rust macros _are_ hygienic with regards to locals –
they are guaranteed not to interfere with variables of the caller’s scope
unless the variable’s name is explicitly passed in. -->

Remon 早已博览群书，知道 Rust 宏对局部变量**是**卫生的——它们一定不会干扰调用者作用域中的变量，除非变量名被显式传入。

<!-- Is that so?, asks Remon.
You and I both know that Rust macros use mixed-site hygiene.
But I trust your experience as a developer and respect you as a person,
so I will approach this incongruence with curiosity rather than dismissal.
Thus I must ask you:
Whatever do you mean? -->

「真的吗？」Remon 问道。「你我都知道 Rust 宏采用{混合式卫生性|mixed-site hygiene}。但我信任你作为开发者的经验，也尊重你的人格，所以我会以好奇心而非武断的驳回来对待这一分歧。故而我必须请教：~~何意味~~你究竟想表达什么？」

<!-- Wolfie thinks for a second,
and concludes this point best communicated through the medium of code.
So he quickly types out a demo
of a certain way of use causing bugs: -->

Wolfie 思索片刻，认为最好以代码为媒介传达这一点。于是他迅速敲出了一个例子，展示某种使用方式将产生漏洞：

```rust
const x: &str = "26ad109e6f4d14e5cc2c2ccb1f5fb497abcaa223";
oh_my!();
```

<!-- And upon entering input that is not
the latest commit hash of the greatest Rust library of all time,
Remon is dismayed and ashamed to discover that the code,
incorrectly, results in an error. -->

当输入的内容并非史上最伟大的 Rust 库最新提交的哈希时，Remon 沮丧而羞愧地发现代码出现了不应有的错误。

<!-- But it’s at least not hard to discover _why_:
in the line containing `[rs] let Ok(x) =`,
`x` is a identifier pattern,
which means it can either refer to a constant if the constant is in scope,
or create a new variable otherwise.
Of course, the macro _expects_ the latter to happen,
but since constants are items, and thus unlike variables are unhygienic,
if there is a constant `x` at the call site,
it will be used instead.
So our pattern becomes equivalent to `[rs] Ok("26ad109…")`,
which will of course reject any value that is not
the latest commit hash of the greatest Rust library of all time,
resulting in silent bugs. -->

但至少不难发现**为什么**：在包含 `let Ok(x) =` 的那一行中，，`x` 是一个{标识符模式|identifier pattern}，这意味着它要么引用作用域内已有的常量，要么创建一个新变量。当然，宏**期望**后者发生，但由于常量是{项|item}，因此与变量不同，不具备卫生性，若调用处存在名为 `x` 的常量，它将被优先采用。于是我们的模式等同于 `Ok("26ad109…")`，这自然会拒绝任何不是史上最伟大 Rust 库的最新提交哈希的值，从而引发静默的漏洞。

<!-- Okay, thinks Remon.
I know of a way to fix this:
the pattern `IDENT @ PATTERN`
will unambiguously have `IDENT` bound as a variable,
never to be treated as a constant.
Since there are no other restrictions to be placed on the data,
our `PATTERN` can simply be a wildcard – `_`.
So that’s what she does: -->

好吧，Remon 想。我知道一种修复方法：模式 `IDENT @ PATTERN` 能明确地将 `IDENT` 绑定为变量，绝不会被当作常量。由于没有其他对数据的限制，`PATTERN` 可以简单地是一个通配符——`_`。于是她如此修改：

```rs
macro_rules! oh_my {
	() => {
		let Ok(x @ _) = read_input() else { return Err(Error) };
		$crate::process(x);
	};
}
```

<!-- But Wolfie is still not pleased,
and Remon is still surprised,
because now there is a compilation error. -->

然而 Wolfie 仍不满意，Remon 也依然惊讶，因为现在出现了编译错误。

```
error[E0530]: let bindings cannot shadow constants
 --> src/main.rs:3:10
  |
3 |         let Ok(x @ _) = read_input() else { return Err(Error) };
  |                ^ cannot be named the same as a constant
...
8 |     const x: &str = "TODO";
  |     ---------------------- the constant `x` is defined here
9 |     oh_my!();
  |     -------- in this macro invocation
  |
```

<!-- This is of course not as bad as buggy behaviour,
but Wolfie knows that Remon is a responsible library developer
who cares about flexibility and correctness,
and it is unpredicable that the macro would suddenly start failing
just because of some constants that happen to be there at the call site. -->

诚然，这比静默的漏洞要好，不过 Wolfie 知道 Remon 是一位尽责的库开发者，重视灵活性与正确性，仅仅因为调用处恰好存在某些常量就导致宏突然失效，这是不可预测的。

<!-- Remon has never seen this error before,
but remains undeterred.
After all, there is one more trick up her sleeve:
although `[rs] let` bindings cannot shadow constants,
those two do not account for every member of the value namespace.
Functions are a member just as well.
And functions, unlike `[rs] const`s, have the property
that they _can_ be shadowed –
and by virtue of being an item,
they may shadow the latter as well
(if introduced in a smaller scope). -->

Remon 从未见过这个错误，但她并未气馁。毕竟她还有一计：尽管 `let` 绑定不能{遮蔽|shadow}常量，但这两者并未涵盖{值命名空间|value namespace}的所有成员。函数同样是其中一员。而且函数与 `const` 不同，**可以**被遮蔽——而且由于函数是项，它也能遮蔽后者（如果在更小作用域中引入的话）。

<!-- So, she introduces that new scope into her macro,
and inside it, defines a dummy function.
As it happens, functions are never valid in patterns,
and so the `x @ _` trick is no longer needed. -->

于是，她在宏中引入了一个新的作用域，并在其中定义了一个虚拟的空函数。恰好，函数在模式中从来不是有效的，所以 `x @ _` 的技巧不再需要了。

```rust
macro_rules! oh_my {
	() => {{
        #[allow(dead_code)]
        fn x() {}
		let Ok(x) = read_input() else { return Err(Error) };
		$crate::process(x);
    }};
}
```

<!-- And despite Wolfie’s attempts to break it,
this iteration remains hygienic
even in the presence of strange environments. -->

尽管 Wolfie 试图破坏它，但这个版本在各种怪异环境下都能保持卫生。

<!-- But Remon isn’t satisfied.
Because now, being the responsible library developer she is,
whenever she uses this trick, she must document it.
And she has to introduce a shadowing helper function
for every single identifier used in the macro –
something that is very easy to forget,
negating the benefit of using this trick in the first place.
It increases her codebase’s size,
in an already-complex macro,
for a gain that seems marginal at best. -->

然而 Remon 并不满意。因为现在，作为尽责的库开发者，每次使用这个技巧时，她都必须编写文档。而且她必须为宏中使用的每个标识符引入一个遮蔽辅助函数——这很容易忘记，从而抵消了这个技巧最初的好处。在一个已经足够复杂的宏中，此举增大了代码库体积，换来的收益却微乎其微。

<!-- And so,
against her instincts to be fully correct,
Remon turns to Wolfie and says, plainly, _No_.
With the incantation of a `[sh] git reset`,
she erases these changes from history,
choosing instead to live in the ignorant bliss
of very-slightly-unhygienic declarative macros. -->

于是，违背了她追求完全正确的本能，Remon 转向 Wolfie，明白地说：「**不**」。随着 `git reset` 的咒语，她将这些更改从历史中抹去，选择生活在略微不卫生的声明宏带来的无知幸福中。

<!-- After all, who names constants in lowercase anyway? -->

毕竟，谁会用小写字母命名常量呢？
