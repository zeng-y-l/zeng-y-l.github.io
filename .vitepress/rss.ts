import { Feed } from 'feed'
import { SiteConfig } from 'vitepress'
import getBlogs from '../lib/blogs'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export default async function (site: SiteConfig) {
  const feed = new Feed({
    title: 'ZengYL 的个人主页',
    id: 'https://zeng-y-l.github.io',
    link: 'https://zeng-y-l.github.io',
    language: 'zh-CN',
    favicon: '/icon.png',
    copyright: 'Copyright 2023 ZengYL',
  })

  const blogs = await getBlogs().load()

  for (const { title, update, create, file, desc } of blogs) {
    feed.addItem({
      title: title,
      link: '/blog/' + file,
      date: new Date(update),
      published: new Date(create),
      description: desc,
    })
  }

  await writeFile(
    join(site.outDir, 'feed.xml'),
    feed.atom1()
  )
}
