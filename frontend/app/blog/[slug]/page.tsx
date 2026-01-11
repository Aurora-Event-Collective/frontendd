import BlogPostClient from "../BlogPostClient"
import { blogPosts } from "@/app/lib/blog-posts"
import type { Metadata } from "next"

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // normalize slug for robust matching
  const resolvedParams = await params
  const raw = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug
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
    keywords: post.tags?.join(', ') || undefined,
    authors: [{ name: 'LūmenFest Team' }],
    creator: 'LūmenFest',
    publisher: 'Taimz Event Collective',
    alternates: {
      canonical: postUrl,
    },
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
      authors: ['LūmenFest Team'],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl],
      creator: '@lumenfest',
      site: '@lumenfest',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // normalize slug for robust matching
  const resolvedParams = await params
  const raw = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug
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
        'dateModified': post.date,
        'author': { 
          '@type': 'Organization', 
          'name': 'LūmenFest',
          'url': baseUrl 
        },
        'publisher': { 
          '@type': 'Organization', 
          'name': 'LūmenFest', 
          'logo': { 
            '@type': 'ImageObject', 
            'url': `${baseUrl}/Word Logo.png`,
            'width': 512,
            'height': 512
          } 
        },
        'mainEntityOfPage': { 
          '@type': 'WebPage', 
          '@id': `${baseUrl}/blog/${post.slug}` 
        },
        'image': post.image ? {
          '@type': 'ImageObject',
          'url': `${baseUrl}${post.image.startsWith('/') ? post.image : '/' + post.image}`,
          'width': 1200,
          'height': 630
        } : undefined,
        'keywords': post.tags?.join(', '),
        'articleSection': post.category,
        'wordCount': post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : undefined,
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