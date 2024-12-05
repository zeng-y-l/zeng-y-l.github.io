---
title: 万年历
---

真的万年历，能算一万多年。[这篇文章](../blog/wannianli)有介绍。源码在[这儿](https://github.com/zeng-y-l/wannianli)。

输入年份即可。若太大或太小，会出错。

日历中所有的时间都是北京时间（东八区），日期都是格里高利历。每天下面的数字是格里高利历的日。

注意：该万年历可能有误差，且仅遵循现代农历，与古代历法不同。

----

<ClientOnly>
  <Main />
</ClientOnly>

<script setup>
  import Main from '../assets/wannianli.js'
</script>