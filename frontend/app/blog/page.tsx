"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const categories = ["All", "Morning", "Evening", "Night"];

const blogPosts = [
  {
    id: 1,
    slug: "morning-games-kickoff",
    title: "How Morning Games Kick Off the Perfect Day",
    excerpt:
      "Discover why starting with sports and wellness sets the tone for an unforgettable festival experience.",
    category: "Morning",
    date: "2025-11-10",
    readTime: "4 min",
    image: "/evening.webp",
    tags: ["Wellness", "Sports", "Community"],
  },
  {
    id: 2,
    slug: "evening-show-behind-scenes",
    title: "Behind the Curtain: Creating the Evening Show",
    excerpt:
      "A peek into the rehearsals, lighting design, and cultural fusion that makes our main stage magical.",
    category: "Evening",
    date: "2025-11-08",
    readTime: "6 min",
    image: "/morning.jpg",
    tags: ["Performance", "Culture", "Art"],
  },
  {
    id: 3,
    slug: "night-party-dj-lineup",
    title: "Meet the DJs Lighting Up the Night Party",
    excerpt:
      "From Berlin to Bangkok: the international talent bringing beats to the dance floor until dawn.",
    category: "Night",
    date: "2025-11-05",
    readTime: "5 min",
    image: "/night.webp",
    tags: ["Music", "DJs", "Party"],
  },
  {
    id: 4,
    slug: "festival-prep-guide",
    title: "Your Ultimate LūmenFest Prep Guide",
    excerpt:
      "What to pack, when to arrive, and pro tips to maximize your day from sunrise to starlight.",
    category: "Morning",
    date: "2025-11-01",
    readTime: "7 min",
    image: "/evening.webp",
    tags: ["Tips", "Guide", "Experience"],
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic
  const filteredPosts = blogPosts
    .filter((post) =>
      activeCategory === "All" ? true : post.category === activeCategory
    )
    .filter((post) =>
      searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((t) =>
            t.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : true
    );

  return (
    <div className="bg-[#F2EBE3] min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          LūmenFest Blog
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Stories, tips, and behind-the-scenes from the festival that never
          sleeps
        </p>
      </div>

      {/* Filters + Search */}
      <div className="bg-[#FAF4EE] py-8 sticky top-0 z-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Buttons */}
            <div className="flex gap-3 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition shadow-sm
                    ${
                      activeCategory === cat
                        ? "bg-[#214445] text-white shadow-md"
                        : "bg-white text-[#214445] border border-[#214445]/20"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#214445]/50" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-[#214445]/20 bg-white text-[#214445] placeholder-[#214445]/50 focus:outline-none focus:border-[#214445]/50 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#214445]/60 text-lg">
              No posts found matching your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#214445]/10"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#214445]/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#214445] mb-2 group-hover:text-[#214445]/80 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#214445]/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-[#214445]/10 text-[#214445] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
