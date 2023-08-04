<script lang="ts" setup>
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import BreadCrumb from './BreadCrumb.vue'

const route = useRoute()

const path = computed(() =>
  route.path
    .replace(/^\/|\/$/g, '')
    .split('/')
    .map(decodeURIComponent)
)
</script>

<template>
  <BreadCrumb :path="path" :is-dir="route.path.endsWith('/')"></BreadCrumb>
</template>