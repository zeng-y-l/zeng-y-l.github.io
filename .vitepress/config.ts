import { UserConfig } from 'vitepress'
// @ts-ignore
import MdRuby from 'markdown-it-ruby'
// @ts-ignore
import MdUnderline from 'markdown-it-underline'
import MdMathJax from 'markdown-it-mathjax3';
import I from '../info'
import genRss from './rss'
import { always } from 'rambda'

// https://vitepress.dev/reference/site-config
export default <UserConfig<{}>>{
  title: I.title,
  lang: I.lang,
  srcDir: './src',
  base: I.base,
  buildEnd: genRss,
  head: [
    ['link', {
      rel: 'icon',
      href: I.base + I.icon,
      type: 'image/png',
    }],
    ['link', {
      rel: 'alternate',
      href: I.base + I.feed,
      type: 'application/atom+xml',
    }],
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
