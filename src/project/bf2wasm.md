---
title: Brainfuck to WASM Compiler
---

本软件源代码在 <https://gitee.com/Zeng_YL/bf2wasm/>。

在「Source Code」中输入 Brainfuck 代码，「Optimize」选择是否优化，点击「Compile」编译。出现「Complete」成功。

然后，「IR」会出现编译出的中间代码的表示（用于调试）；「C」会出现 C 代码，只需提供 `uint_8 *p` 数组即可编译运行。

在「Input」中编辑 Brainfuck 程序的输入，「Position」设定初始指针位置，「Size」设置内存大小（单位为 64KB，即 1 对应 65536 格），然后点击「Run」运行已经编译的代码，点击「Stop」停止运行。右侧会显示运行的状态。

----

<Main />

<script setup>
  import Main from '../assets/bf2wasm.js'
</script>