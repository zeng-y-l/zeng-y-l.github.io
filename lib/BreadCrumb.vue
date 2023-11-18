<script lang="ts" setup>
import { computed } from 'vue'
import { scan } from './utils'
import { last, init } from 'rambda'

const props = defineProps<{
  path: string[],
  isDir: boolean,
}>()

const pathList = computed(() => scan(
  init(props.path),
  { label: '', path: '/' },
  ({ path }, label) => ({ label, path: path + label + '/' }),
))

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
      <span>{{ last(path) }}</span>
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