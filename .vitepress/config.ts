import { UserConfig } from 'vitepress'
// @ts-ignore
import MdRuby from 'markdown-it-ruby'
// @ts-ignore
import MdUnderline from 'markdown-it-underline'
import MdMathJax from 'markdown-it-mathjax3'
import genRss from './rss'
import { always } from 'rambda'

// https://vitepress.dev/reference/site-config
export default <UserConfig<{}>>{
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
  ],
  markdown: {
    anchor: { level: [] }, // TODO
    config(md) {
      md.use(MdRuby)
        .use(MdUnderline)
        .use(MdMathJax)
      
      md.renderer.rules.table_open = always('<div class="table"><table>')
      md.renderer.rules.table_close = always('</table></div>')
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
}
