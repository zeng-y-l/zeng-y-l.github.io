import { createContentLoader } from 'vitepress'

type Blog = {
  file: string,
  title: string,
  desc?: string,
  create: string,
  update: string,
}

export default () => createContentLoader<Blog[]>('blog/*.md', {
  transform: data => data
    .map(({ url, frontmatter: fm }) => ({
      file: url.split('/').at(-1)!,
      title: fm.title,
      desc: fm.desc,
      create: fm.create,
      update: fm.update ?? fm.create,
    }))
    .filter(({ file }) => file != '') // index.md
    .sort((a, b) => Date.parse(b.update) - Date.parse(a.update))
})