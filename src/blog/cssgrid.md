---
title: CSS 中 Grid 实现自动拉伸+换行
create: 2023-07-01
desc: 宽度平分、有最小宽度、自动换行、左对齐（这是一篇旧文章，日期是后来的）
---

做到宽度平分、有最小宽度、自动换行、左对齐

如下，拖动滑竿控制宽度：

<input id="rangegrid" type="range" min="0" max="100" step="any" v-model="wdt">
<div id="containergrid">
  <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div>

使用repeat的auto-fill实现自动换行，minmax实现最小宽度，1fr实现平分。

不过，若外层宽度过小，内层会超出。  
若希望此时内层宽度占满，而非超出，不知有没有什么好办法？

源代码：<https://jsbin.com/wesekofeje/edit?html,css,output>

<style>
#rangegrid{
  width: 100%
}
#containergrid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(/*最小值*/ 120px, 1fr));
  grid-gap: 20px;

  margin: 10px 0;
  background-color: #7773;
  border: 1px solid #888;
  width: v-bind(wdt + '%');
}
#containergrid>div {
  background: #8888;
  border: 1px solid #FFF;
  height: 50px;
}
</style>

<script setup>
  import { ref } from 'vue'
  const wdt = ref(100)
</script>