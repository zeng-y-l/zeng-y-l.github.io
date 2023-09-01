/// <reference types="vitepress/client" />

declare module '*.md' {
  import { DefineComponent } from 'vue'
  const comp: DefineComponent
  export default comp
}

declare global {
  // 如果不嵌套，则会删除vue原有的全部类型
  // 网络上一般建议加一行全局的 export {}
  // 但只要有了任何全局导入导出，上面的md定义就会无效，也不知道为什么
  // 我不想分两个文件，我发现嵌套也能搞定，也许这才是正确做法

  declare module 'vue' {
    export interface GlobalComponents {
      Content: typeof import('vitepress').Content
    }
  }
}