<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  path: string[],
  isDir: boolean,
}>()

const pathList = computed(() => {
  let path = '/'
  return props.path.slice(0, -1).map(label => {
    path += label + '/'
    return { label, path }
  })
})

</script>

<template>
  <nav :class="$style.wrapper">
    <a href="/">
      <img :class="$style.icon" src="/icon.png">
    </a>

    <div :class="$style.path">
      <template v-for="item in pathList">
        <span :class="$style.sep">/</span>
        <a :href="item.path">{{ item.label }}</a>
      </template>

      <span :class="$style.sep">/</span>
      <span>{{ path[path.length - 1] }}</span>
      <span v-if="isDir" :class="$style.sep">/</span>
    </div>
  </nav>
</template>

<style lang="stylus" module>
@import './design.styl'

.wrapper
  font-size 0.8rem
  flex-center cross-axis

.icon
  margin 0.5em 1em
  display block
  width 2em
  height 2em

.path
  white-space nowrap
  overflow-x auto
  overflow-y hidden
  > *
    margin-right 0.5em

.sep
  gray-color()
</style>