import { UserConfig } from 'vitepress'
import MdRuby from 'markdown-it-ruby'
import MdUnderline from 'markdown-it-underline'
import MdFootnote from 'markdown-it-footnote'
import genRss from './rss'

// https://vitepress.dev/reference/site-config
export default {
  title: 'ZengYL 的个人主页',
  lang: 'zh-CN',
  srcDir: './src',
  base: '/',
  buildEnd: genRss,
  head: [
    ['link', { rel: 'icon', href: '/icon.png', type: 'image/png' }],
    ['link', { rel: 'alternate', href: '/feed.xml', type: 'application/atom+xml' }],

    ['link', { rel: 'preconnect', href: 'https://rsms.me/' }],
    ['link', { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }],

    ['script', { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "af175fc475a24a198fca38c3f8b89d9c"}' }],
    ['script', {}, `(${() => {
      if (location.hostname.endsWith('zengyulin.cn')) {
        (document.head.children[document.head.children.length - 2] as HTMLElement).dataset.cfBeacon = '{"token": "33c79cfa0af041408e10f3ca26a09879"}'
      }
    }})()`]
  ],
  markdown: {
    anchor: { level: [] }, // TODO
    math: true,
    codeCopyButtonTitle: '复制代码',
    config(md) {
      md.use(MdRuby)
        .use(MdUnderline)
        .use(MdFootnote)

      // 由于不提供判断外部链接的方法，也无法在添加target=_blank后改变href，只好文本替换
      md.renderer.rules.link_open = (link_open => (...args) =>
        link_open(...args).replace('href="https://zeng-y-l.github.io/', 'href="/')
      )(md.renderer.rules.link_open!)

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
} satisfies UserConfig<{}>