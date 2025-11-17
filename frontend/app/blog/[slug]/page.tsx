import BlogPostClient from "../BlogPostClient"
import { blogPosts } from "@/app/lib/blog-posts"

export const dynamic = "force-dynamic"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // normalize slug for robust matching
  const raw = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const slug = decodeURIComponent(String(raw || ''))

  const post = blogPosts.find((p) => {
    const candidate = String(p.slug || '')
    return candidate === slug || decodeURIComponent(candidate) === slug || candidate.toLowerCase() === slug.toLowerCase()
  })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taimzeventcollective.com/'

  // If we have a post, include BlogPosting JSON-LD for rich results
  const jsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.excerpt || post.content || '',
        'datePublished': post.date,
        'author': { '@type': 'Organization', 'name': 'LūmenFest' },
        'publisher': { '@type': 'Organization', 'name': 'LūmenFest', 'logo': { '@type': 'ImageObject', 'url': `${siteUrl.replace(/\/+$/, '')}/favicon.ico` } },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${siteUrl.replace(/\/+$/, '')}/blog/${post.slug}` },
        'image': post.image ? [ `${siteUrl.replace(/\/+$/, '')}${post.image}` ] : undefined,
      }
    : null

  return (
    <>
      {post && (
        <script key="ldjson-post" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <BlogPostClient post={post} />
    </>
  )
}