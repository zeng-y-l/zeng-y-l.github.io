import { reject, map, pipe, propEq, forEach, sortBy, prop } from 'rambda'
import { createContentLoader } from 'vitepress'

type Blog = {
  file: string,
  title: string,
  desc?: string,
  create: string,
  update: string,
}

export default () => createContentLoader<Blog[]>('src/blog/*.md', {
  transform: pipe(
    map(({ url, frontmatter: fm }) => ({
      file: url.split('/').at(-1)!,
      title: fm.title,
      desc: fm.desc,
      create: fm.create,
      update: fm.update ?? fm.create,
    })),
    reject<Blog>(propEq('index.html', 'file')),
    sortBy(({ update }) => -Date.parse(update)),
  ),
})