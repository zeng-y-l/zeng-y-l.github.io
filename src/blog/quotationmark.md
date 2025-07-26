---
title: 弯引号分全半宽
create: 2025-07-26
desc: 标准已经支持，实用还差很远
---

前几个月偶然发现：Unicode 的 SVS（标准变体序列）多了几种，用于区分全宽和半宽的弯引号。单、双的弯引号，后加 VS1 为半角，加 VS2 则为全角。

这是去年底的 Unicode 16 新加的，[该版本的网页](https://www.unicode.org/versions/Unicode16.0.0/#:~:text=Standardized%20Variation%20Sequences)中介绍了这一更新，详细内容可以在 [`StandardizedVariants.txt`](https://www.unicode.org/Public/16.0.0/ucd/StandardizedVariants.txt) 看到。

然而，今天我尝试之后，发现字体都不支持这一特性。从标准到字体、排版、输入，路漫漫其修远兮！日常中能很好区分弯引号宽度时，估计也只能家祭无忘告乃翁了。

我在《[CSS 字体奇技](./cssfont.md)》中用一些奇怪的方法实现了中文引号。现在看来，还是直角引号比较好，美观清晰、没有宽度问题。更好的是，我使用 RIME 输入法，把直角引号的键位安排到方括号上，打起来很方便。若使用弯引号，则前后引号在同一键位，总是打了相反的；而且常用的双引号还要按 Shift，太麻烦。