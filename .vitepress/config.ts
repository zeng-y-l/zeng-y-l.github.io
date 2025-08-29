import { defineConfig } from 'vitepress'
import MdRuby from 'markdown-it-ruby'
import MdUnderline from 'markdown-it-underline'
import MdFootnote from 'markdown-it-footnote'
import MdFigure from 'markdown-it-image-figures'
import genRss from './rss'
import { Graphviz } from '@hpcc-js/wasm-graphviz'
import { Buffer } from 'node:buffer'

const graphviz = await Graphviz.load()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ZengYL 的个人主页',
  lang: 'zh-Hans',
  srcDir: './src',
  base: '/',
  buildEnd: genRss,
  description: 'ZengYL 的个人主页',
  head: [
    ['link', { rel: 'icon', href: '/icon.png', type: 'image/png' }],
    ['link', { rel: 'alternate', href: '/feed.xml', type: 'application/atom+xml', title: 'ZengYL 的个人主页' }],

    // Inter 字体
    ['link', { rel: 'preconnect', href: 'https://rsms.me/' }],
    ['link', { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }],

    // Cloudflare Web Analytics
    ['script', { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "af175fc475a24a198fca38c3f8b89d9c"}' }],
    ['script', {}, `(${() => {
      if (location.hostname.endsWith('zengyulin.cn')) {
        (document.head.children[document.head.children.length - 2] as HTMLElement).dataset.cfBeacon = '{"token": "33c79cfa0af041408e10f3ca26a09879"}'
      }
    }})()`]
  ],
  transformPageData(pageData) {
    // 主站 https://vitepress.dev/zh/reference/site-config#transformhead
    const canonicalUrl = `https://zeng-y-l.github.io/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },

  markdown: {
    emoji: { defs: { 这是个不可能出现的表情名字: '' } }, // 不要emoji，直接设为空会出错
    anchor: { level: [] }, // 不要标题链接
    math: true,
    codeCopyButtonTitle: '复制代码',
    config(md) {
      md.use(MdRuby)
        .use(MdUnderline)
        .use(MdFootnote)
        .use(MdFigure, { figcaption: true })

      // 由于不提供判断外部链接的方法，也无法在添加target=_blank后改变href，只好文本替换
      md.renderer.rules.link_open = (render => (...args) =>
        render(...args).replace('href="https://zeng-y-l.github.io/', 'href="/')
      )(md.renderer.rules.link_open!)

      // graphviz 代码块
      md.renderer.rules.fence = (render => (tokens, idx, options, env, self) => {
        if (tokens[idx].info === 'dot') {
          // 前面有xml标记，必须套一层base64
          const svg = graphviz.dot(tokens[idx].content)
          const base64 = Buffer.from(svg).toString('base64')
          // https://www.npmjs.com/package/markdown-it-attrs
          return `<figure${self.renderAttrs(tokens[idx])}><img src="data:image/svg+xml;base64,${base64}"></figure>`
        }
        return render(tokens, idx, options, env, self)
      })(md.renderer.rules.fence!)

      // 套一层便于控制样式排版
      md.renderer.rules.table_open = () => '<div class="table"><table>'
      md.renderer.rules.table_close = () => '</table></div>'
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('mjx-')
      }
    }
  }
})