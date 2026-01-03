<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import header from '../../lib/header.module.styl'
import main from '../../lib/main.module.styl'
import { all, date } from '../../lib/utils'
import { computed } from 'vue'
import NotFound from './NotFound.md'
import Nav from '../../lib/Nav.vue'
import Giscus from '@giscus/vue'

const { frontmatter, page, isDark } = useData()
const route = useRoute()

const information = computed(() => {
  const { create, update } = frontmatter.value
  return [
    [all`创建于 ${date(create)}`, all`最后修改于 ${date(update)}`],
  ].map(x => x.filter(x => x != null).join('，')).filter(x => x)
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
      <p v-if="frontmatter.description" :class="[header.info, 'italic']">{{ frontmatter.description }}</p>
    </header>

    <main :class="main.main">
      <Content />

      <template v-if="/^\/blog\/./.test(route.path)">
        <hr style="margin: 4rem 0;">

        <Giscus id="comments" repo="zeng-y-l/zeng-y-l.github.io" repo-id="R_kgDOKAe5Eg" category="Announcements"
          category-id="DIC_kwDOKAe5Es4C0a7Z" mapping="specific" :term="route.path" strict="1" reactions-enabled="1"
          emit-metadata="0" input-position="top" :theme="isDark ? 'dark' : 'light'" lang="zh-CN" loading="lazy" />
      </template>
    </main>
  </template>
</template>
