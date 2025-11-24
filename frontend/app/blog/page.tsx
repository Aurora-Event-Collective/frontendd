import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogListClient from "./BlogListClient"
import { blogPosts } from "@/app/lib/blog-posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - LūmenFest 2026",
  description: "Read the latest updates, stories, and insights about LūmenFest 2026. Get behind-the-scenes looks and festival preparation tips.",
  openGraph: {
    title: "LūmenFest 2026 Blog",
    description: "Latest news, updates, and stories from the LūmenFest team. Stay informed about our Tết celebration preparations.",
    images: [
      {
        url: "/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "LūmenFest 2026 Blog Updates",
      },
    ],
  },
}

export const dynamic = "force-dynamic"

export default function BlogPage() {
  // Server component: render header/footer and client list
  return (
    <div>
      <Header />
      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">LūmenFest Blog</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Stories, tips, and behind-the-scenes from the festival that never sleeps</p>
      </div>

      <BlogListClient posts={blogPosts} />

      <Footer />
    </div>
  )
}
