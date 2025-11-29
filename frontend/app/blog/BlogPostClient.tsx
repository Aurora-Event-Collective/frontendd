"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Home as HomeIcon, Languages } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts, BlogPost } from "@/app/lib/blog-posts"

type Language = 'en' | 'vi'

export default function BlogPostClient({ post: initialPost = null }: { post?: BlogPost | null }) {
  const params = useParams && useParams()
  const [post, setPost] = useState<BlogPost | null>(initialPost)
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(!initialPost)

  useEffect(() => {
    setIsLoading(!initialPost)
    if (!initialPost && params && params.slug) {
      const found = blogPosts.find((p) => `${p.slug}` === `${params.slug}`)
      setPost(found || null)
      setIsLoading(false)
    }
  }, [params?.slug, initialPost])

  const sharePost = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = post?.title || 'LūmenFest Blog'
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    }
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
    setShowShareMenu(false)
  }

  // Get current content based on language
  const getCurrentContent = () => {
    if (!post) return { title: '', excerpt: '', content: '', tags: [] }
    
    if (currentLanguage === 'vi' && post.translations?.vi) {
      return {
        title: post.translations.vi.title,
        content: post.translations.vi.content,
        tags: post.translations.vi.tags || post.tags || []
      }
    }
    
    return {
      title: post.title,
      content: post.content || post.excerpt || '',
      tags: post.tags || []
    }
  }

  const currentContent = getCurrentContent()

  if (isLoading) {
    return (
      <div className="bg-[#F2EBE3] min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-12"></div>
            <div className="h-96 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="bg-[#F2EBE3] min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-[#214445] mb-4">Post Not Found</h1>
          <p className="text-[#214445]/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#214445] text-white rounded-full hover:bg-[#214445]/90 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-[#F2EBE3] min-h-screen">
      <Header />
      {/* Breadcrumbs */}
      <div className="bg-[#F7F6F3] py-3 border-b border-[#214445]/10">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#214445]/80 text-sm overflow-x-auto" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-[#214445] transition"><HomeIcon className="w-4 h-4" /> Home</Link>
          <span className="mx-1">&gt;</span>
          <Link href="/blog" className="hover:text-[#214445] transition">Blog</Link>
          <span className="mx-1">&gt;</span>
          <span className="font-semibold truncate" title={currentContent.title}>{currentContent.title}</span>
        </nav>
      </div>
      {/* Back Navigation */}
      <div className="bg-[#FAF4EE] py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#214445] hover:text-[#214445]/80 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category, Language Toggle and Share */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-[#214445] text-white rounded-full text-sm font-medium">
              {post.category}
            </span>
            
            {/* Language Toggle - Only show if Vietnamese translation exists */}
            {post.translations?.vi && (
              <div className="flex items-center gap-2 bg-white rounded-full border border-[#214445]/20 p-1">
                <button
                  onClick={() => setCurrentLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    currentLanguage === 'en' 
                      ? 'bg-[#214445] text-white' 
                      : 'text-[#214445] hover:bg-[#214445]/10'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLanguage('vi')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    currentLanguage === 'vi' 
                      ? 'bg-[#214445] text-white' 
                      : 'text-[#214445] hover:bg-[#214445]/10'
                  }`}
                >
                  VI
                </button>
              </div>
            )}
          </div>

          {/* Share Button */}
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 px-4 py-2 text-[#214445] hover:bg-white/50 rounded-full transition"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            {showShareMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-[#214445]/10 p-2 z-10">
                <button
                  onClick={() => sharePost('facebook')}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-[#F2EBE3] rounded transition"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </button>
                <button
                  onClick={() => sharePost('twitter')}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-[#F2EBE3] rounded transition"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </button>
                <button
                  onClick={() => sharePost('linkedin')}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-[#F2EBE3] rounded transition"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#214445] mb-6">
          {currentContent.title}
        </h1>
        {/* Meta Information */}
        <div className="flex items-center gap-6 text-[#214445]/60 mb-8">
          <span className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {post.readTime}
          </span>
        </div>
        {/* Featured Image */}
        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 mb-8">
          <img
            src={post.image}
            alt={currentContent.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: currentContent.content }}
          style={{ color: '#214445' }}
        />
        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-[#214445]/10">
          <div className="flex flex-wrap gap-2">
            {currentContent.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-[#214445]/10 text-[#214445] font-medium text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center pt-8 border-t border-[#214445]/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#214445] text-white rounded-full hover:bg-[#214445]/90 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  )
}