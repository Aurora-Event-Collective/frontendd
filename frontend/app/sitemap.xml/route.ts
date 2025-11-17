import fs from 'fs'
import path from 'path'
import { blogPosts } from '@/app/lib/blog-posts'

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taimzeventcollective.com/'
  const base = siteUrl.replace(/\/+$/, '')

  // Discover top-level pages by scanning the `app` directory for folders with a `page.tsx` file.
  const appDir = path.join(process.cwd(), 'app')
  let staticPages: string[] = []

  try {
    const entries = fs.readdirSync(appDir, { withFileTypes: true })
    staticPages = entries
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      // exclude dynamic routes and special folders
      .filter((name) => !name.startsWith('[') && name !== 'sitemap.xml' && name !== 'robots.txt')
      // only include folders that have a page.tsx (ignore component folders)
      .filter((name) => fs.existsSync(path.join(appDir, name, 'page.tsx')))
  } catch (e) {
    // fallback to a sensible static list if scanning fails
    staticPages = ['about', 'blog', 'contact', 'event', 'polls', 'tickets']
  }

  // include root page
  const pages: string[] = [ `${base}/`, ...staticPages.map((p) => `${base}/${p}`) ]

  // add blog post pages
  const blogSlugs = blogPosts.map((p) => p.slug)
  pages.push(...blogSlugs.map((s) => `${base}/blog/${s}`))

  const lastMod = new Date().toISOString()

  const urlEntries = pages
    .map((url) => `<url><loc>${url}</loc><lastmod>${lastMod}</lastmod></url>`)
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>` + `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
