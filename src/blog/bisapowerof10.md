---
title: b 是 10 的某次方
create: 2024-07-04
desc: 《GEB》中的有趣问题
---

读《GEB》第八章《印符数论》，看到有趣的问题：如何用 **TNT** 中的符号表示“$b$ 是 $2$ 的某次方”和“$b$ 是 $10$ 的某次方”？思考不解，上网搜索。

第一个问题很快搜到，不难理解。只需说：$b$ 的大于一的因数都是偶数。也就是：

$$ \forall c: \forall d: \langle \mathsf{SS}c \cdot d = b \rightarrow \exists e: \mathsf{SS0} \cdot e = \mathsf{SS}c \rangle $$

把 $2$ 换成任意素数，此方法都能用。此外，也有一种更繁琐但更容易理解的说法：$b$ 的质因数都是 $2$。在此不表。

第二个问题就难多了，因为 $10$ 不是素数。书上说「这一个需要有极大的聪明机智才能翻译成我们的记法中的东西」。中文互联网上似乎还没有解答，不过我搜到了 [Stack Exchange 上的答案](https://math.stackexchange.com/questions/893526/how-to-express-b-is-a-power-of-10-typographical-number-theory-in-g%C3%B6del-esche)，于是将其思路记录在此。

## 法一

这是较为通用的办法，可以参阅「[How is exponentiation defined in Peano arithmetic?](https://math.stackexchange.com/questions/312891/how-is-exponentiation-defined-in-peano-arithmetic#)」。

首先，原命题为：存在 $y$，使得 $2^y=b$。

求 $x^y$，只要找到数列满足如下条件，那么 $a_y$ 就是所求：

$$
a_n=\begin{cases}
1, & n=0 \\
xa_{n-1}, & n \le y \\
任意, & n>y
\end{cases}
$$

关键问题就是：如何用数表示有限数列？答案是：**中国剩余定理**。

现有数列 $m_1,\dots,m_k$。令 $n=\max(m_1,\dots,m_k,k)!$，令 $n_i=in+1$，则 $n_1,\dots,n_i$ 两两互质。根据中国剩余定理，存在 $z$ 使得：

$$
\begin{cases}
z &\equiv m_1 \pmod {n_1} \\
  &\vdots \\
z &\equiv m_k \pmod {n_k} \\
\end{cases}
$$

于是，$\langle z,n \rangle$ 这两个数就表示了数列 $m_1,\dots,m_k$。要取得 $\langle z,n \rangle$ 所表示的数列的第 $i$ 项，求 $z$ 除以 $in+1$ 的余数就是。

由此说明，有限数列都可以被表示。但请注意，存在其他的 $z$ 和 $n$ 也可以表示 $m_1,\dots,m_k$，上面所述只是其中之一。此外，取超出末尾的项会得到类似乱码的没有意义的数字。

对于所有 $z$ 和 $n$ ，若满足上面那个条件，则 $\langle z,n \rangle$ 所表示的数列的第 $y$ 项为 $x^y$。显然是有满足条件的。其中只用到了取数列某项的操作，无需计算 $z$ 和 $n$。

## 法二

这是较为巧妙的特殊方法，但无需用到复杂的定理。

法一使用中国剩余定理表示数列，法二则是使用某素数进制数。

以某素数 $p$ 进制下的数 $t$ 表示数列，那么不能直接判断特定的某一位数是否等于某某，只能判断是否存在某一位数等于某某，即判断数列中是否含有某某数。因此，它无法避免乱序和重复，实质上是表达了一个有限集合而非数列。并且，集合中不能有零，因为任何进制数都有无穷多前导零，为避免其干扰，判断时直接排除了零。而且，集合中不能有大于 $p$ 的数。好在，我们无需知道具体的指数，而且我们根本不需要零，而且足够大的 $p$ 总是存在的。

如果，对于某集合中的所有数 $t$，或者 $t=1$，或者集合中存在 $u$ 使得 $t=10u$，那么，集合中所有数都是 $10$ 的某次方。

有 $\langle p,t \rangle$ 表示了集合，有 $d$。若 $p$ 是素数，且 $0<d<p$，且存在 $q,f,e$ 使得 $q$ 为 $p$ 的某次方，且 $f<q$，且 $(e \cdot p + d) \cdot q + f = t$，则 $d$ 属于该集合。

对于所有 $p$ 和 $t$，若 $\langle p,t \rangle$ 表示的集合中所有数都是 $10$ 的某次方，且 $b$ 属于集合，则 $b$ 是 $10$ 的某次方。

原书有讲素数的判断。某数是某素数的某次方，使用开头方法即可。