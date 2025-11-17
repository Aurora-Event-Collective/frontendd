import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogListClient from "./BlogListClient"
import { blogPosts } from "@/app/lib/blog-posts"

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
