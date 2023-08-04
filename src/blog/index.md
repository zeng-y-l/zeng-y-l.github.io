---
title: 博客目录
---

<ul :class="list.list">
  <li v-for="blog in blogs">

<a :href="blog.file">{{ blog.title }}</a> <span :class="list.small">{{ date(blog.update) }}</span>

{{ blog.desc }}

  </li>
</ul>

<script lang="ts" setup>
  import { data as blogs } from '../../lib/blogs.data'
  import list from '../../lib/list.module.styl'
  import { date } from '../../lib/utils'
</script>
