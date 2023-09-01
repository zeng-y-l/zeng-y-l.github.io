<script setup lang="ts">
import { useData } from 'vitepress'
import header from '../../lib/header.module.styl'
import main from '../../lib/main.module.styl'
import { all, connect, date } from '../../lib/utils'
import { computed } from 'vue'
import NotFound from './NotFound.md'
import Nav from '../../lib/Nav.vue'

const { frontmatter, page } = useData()

const information = computed(() => {
  const { create, update } = frontmatter.value
  return [
    [all`创建于 ${date(create)}`, all`最后修改于 ${date(update)}`],
  ].map(x => connect(x, '，'))
})
</script>

<template>
  <NotFound v-if="page.isNotFound"></NotFound>

  <Content v-else-if="frontmatter.layout === 'raw'" />

  <template v-else>
    <Nav></Nav>

    <header :class="header.header">
      <h1 :class="header.title">{{ frontmatter.title }}</h1>
      <div :class="header.info" v-for="info in information">{{ info }}</div>
      <p :class="[header.info, 'italic']">{{ frontmatter.desc }}</p>
    </header>

    <main :class="main.main">
      <Content />
    </main>
  </template>
</template>

<style lang="stylus" module>
  @import '../../lib/design.styl'
</style>
