import { createContentLoader } from 'vitepress'

type Blog = {
  file: string,
  title: string,
  description?: string,
  create: string,
  update: string,
}

export default () => createContentLoader<Blog[]>('blog/*.md', {
  transform: data => data
    .map(({ url, frontmatter: fm }) => ({
      file: url.split('/').at(-1)!,
      title: fm.title,
      description: fm.description,
      create: fm.create,
      update: fm.update ?? fm.create,
    }))
    .filter(({ file }) => file != '') // index.md
    .sort((a, b) => Date.parse(b.update) - Date.parse(a.update))
})