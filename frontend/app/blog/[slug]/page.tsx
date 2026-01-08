import BlogPostClient from "../BlogPostClient"
import { blogPosts } from "@/app/lib/blog-posts"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // normalize slug for robust matching
  const raw = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const slug = decodeURIComponent(String(raw || ''))
  
  const post = blogPosts.find((p) => {
    const candidate = String(p.slug || '')
    return candidate === slug || decodeURIComponent(candidate) === slug || candidate.toLowerCase() === slug.toLowerCase()
  })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taimzeventcollective.com/'
  const baseUrl = siteUrl.replace(/\/+$/, '')

  if (!post) {
    return {
      title: "Blog Post Not Found - LūmenFest 2026",
      description: "The blog post you're looking for doesn't exist.",
    }
  }

  // Use post image or fallback to default
  const imageUrl = post.image 
    ? `${baseUrl}${post.image.startsWith('/') ? post.image : '/' + post.image}`
    : `${baseUrl}/Word Logo.png`

  const title = `${post.title} - LūmenFest 2026`
  const description = post.excerpt || post.content?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Read the latest from LūmenFest 2026'
  const postUrl = `${baseUrl}/blog/${post.slug}`

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: postUrl,
      siteName: "LūmenFest",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // normalize slug for robust matching
  const raw = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const slug = decodeURIComponent(String(raw || ''))

  const post = blogPosts.find((p) => {
    const candidate = String(p.slug || '')
    return candidate === slug || decodeURIComponent(candidate) === slug || candidate.toLowerCase() === slug.toLowerCase()
  })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taimzeventcollective.com/'
  const baseUrl = siteUrl.replace(/\/+$/, '')

  // If we have a post, include BlogPosting JSON-LD for rich results
  const jsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.excerpt || post.content?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
        'datePublished': post.date,
        'author': { '@type': 'Organization', 'name': 'LūmenFest' },
        'publisher': { '@type': 'Organization', 'name': 'LūmenFest', 'logo': { '@type': 'ImageObject', 'url': `${baseUrl}/favicon.ico` } },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${baseUrl}/blog/${post.slug}` },
        'image': post.image ? [ `${baseUrl}${post.image.startsWith('/') ? post.image : '/' + post.image}` ] : undefined,
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