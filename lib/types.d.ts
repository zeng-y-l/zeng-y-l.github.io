/// <reference types="vitepress/client" />

declare module '*.md' {
  import { DefineComponent } from 'vue'
  const comp: DefineComponent
  export default comp
}