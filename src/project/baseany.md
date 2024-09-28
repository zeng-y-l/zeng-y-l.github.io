---
title: base_any
---

多种 base 形式的编解码。

在上面输入明文（或密文），然后选择编码格式，点击编码（或解码），下面就会出现对应的密文（或明文）。

欢迎看[前端源码](https://gitee.com/Zeng_YL/base_any_web)、[库的源码](https://gitee.com/Zeng_YL/base_any)。

----

<div :ref="listen" />

<script setup>
  import init, { run } from '../assets/baseany/base_any_web.js'
  let app
  const listen = async el => {
    await init()
    if (el) app = run(el)
    else app?.free()
  }
</script>