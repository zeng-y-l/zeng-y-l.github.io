import { Feed } from 'feed'
import I from '../info'
import { SiteConfig } from 'vitepress'
import getBlogs from '../lib/blogs'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export default async function (site: SiteConfig) {
  const feed = new Feed({
    title: I.title,
    id: I.host,
    link: I.host,
    language: I.lang,
    favicon: I.host + I.base + I.icon,
    copyright: 'Copyright 2023 ZengYL',
  })

  const blogs = await getBlogs().load()

  for (const { title, update, create, file, desc } of blogs) {
    feed.addItem({
      title: title,
      link: I.host + I.base + 'blog/' + file,
      date: new Date(update),
      published: new Date(create),
      description: desc,
    })
  }

  await writeFile(
    join(site.outDir, I.feed),
    feed.atom1()
  )
}
