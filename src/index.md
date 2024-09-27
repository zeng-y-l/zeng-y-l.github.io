---
layout: raw
titleTemplate: false
---

<header :class="header.header">
  <div> <!-- 用于左对齐 -->

你好！{:class="$style.head"}

这里是 ZengYL 的主页。

  </div>
</header>

<main :class="main.main">

- [关于我](./about)
- [博客目录](./blog/)
- <a href="/feed.xml">博客 RSS</a>
- [小玩意儿](./project/)

{:class="list.list"}

----

页面由 ZengYL 编写。  
其中内容遵循 [CC BY 4.0](https://https://creativecommons.org/licenses/by/4.0/deed.zh) 协议。

</main>

<script lang="ts" setup>
  import header from '../lib/header.module.styl'
  import main from '../lib/main.module.styl'
  import list from '../lib/list.module.styl'
</script>

<style lang="stylus" module>
  @import '../lib/design.styl'

  .head
    margin-bottom 0.1em
    font-size 3em
    font-weight bold
    theme bg-style-txt linear-gradient(120deg, #D09, #50C) linear-gradient(120deg, #DC0, #F96)
    text-align left
</style>