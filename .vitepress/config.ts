import { UserConfig } from 'vitepress'
import MdRuby from 'markdown-it-ruby'
import MdUnderline from 'markdown-it-underline'
import MdFootnote from 'markdown-it-footnote'
import genRss from './rss'

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
    math: true,
    config(md) {
      md.use(MdRuby)
        .use(MdUnderline)
        .use(MdFootnote)

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
}
