<Nav></Nav>

<header :class="header.header">

# 404 {:class="header.title"}

页面找不到 {:class="header.info"}

请点击左上角图标，以回到主页 {:class="header.info"}

</header>

<main :class="main.main" style="text-align: center;">

你踏入了数字的虚空

我不知你为何而来

也许这里以前有繁华的城市

也许你就是喜欢四处探险

但现在这里什么都没有

请回吧

</main>

<script lang="ts" setup>
import Nav from '../../lib/Nav.vue'
import header from '../../lib/header.module.styl'
import main from '../../lib/main.module.styl'
</script>
