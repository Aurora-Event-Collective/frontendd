// components/blog/BlogPost.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Mock blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    slug: "morning-games-kickoff",
    title: "How Morning Games Kick Off the Perfect Day",
    excerpt: "Discover why starting with sports and wellness sets the tone for an unforgettable festival experience.",
    category: "Morning",
    date: "2025-11-10",
    readTime: "4 min",
    image: "/evening.webp",
    tags: ["Wellness", "Sports", "Community"],
    content: `
      <p>Welcome to the heart of LūmenFest, where every day begins with energy, movement, and community connection. Our morning games aren't just activities—they're the foundation for an unforgettable festival experience.</p>

      <h2>The Power of Starting Together</h2>
      <p>There's something magical about beginning the day with shared physical activity. As the sun rises over the festival grounds, hundreds of participants gather for yoga sessions, group runs, and team sports that create immediate bonds between strangers.</p>

      <p>Research shows that morning exercise boosts endorphins and sets a positive tone for the entire day. At LūmenFest, we've taken this concept and transformed it into a community-building experience.</p>

      <h2>What to Expect</h2>
      <p>Our morning program includes:</p>
      <ul>
        <li><strong>Sunrise Yoga (6:30 AM):</strong> Gentle flows to awaken the body and mind</li>
        <li><strong>Community Runs (7:30 AM):</strong> Scenic routes through the festival grounds</li>
        <li><strong>Team Sports (8:30 AM):</strong> Volleyball, soccer, and ultimate frisbee tournaments</li>
        <li><strong>Wellness Workshops (9:30 AM):</strong> Meditation and mindfulness sessions</li>
      </ul>

      <h2>Creating Lasting Connections</h2>
      <p>The morning games are designed to break down barriers and create authentic connections. Many festival-goers report that the friendships they form during these morning activities become the highlight of their entire LūmenFest experience.</p>

      <p>"I came alone but left with a tribe," says Sarah, a three-time LūmenFest attendee. "The morning volleyball games became our daily ritual, and now we plan our festival trips together."</p>

      <h2>Tips for Making the Most of Morning Games</h2>
      <ol>
        <li>Arrive 15 minutes early to get settled</li>
        <li>Bring a water bottle and light snack</li>
        <li>Don't be afraid to try something new</li>
        <li>Embrace the community spirit</li>
        <li>Stay for the post-activity social hour</li>
      </ol>

      <p>Whether you're a seasoned athlete or trying morning activities for the first time, our games are designed to be inclusive, fun, and energizing. Join us as we kick off another perfect day at LūmenFest!</p>
    `
  },
  {
    id: 2,
    slug: "evening-show-behind-scenes",
    title: "Behind the Curtain: Creating the Evening Show",
    excerpt: "A peek into the rehearsals, lighting design, and cultural fusion that makes our main stage magical.",
    category: "Evening",
    date: "2025-11-08",
    readTime: "6 min",
    image: "/morning.jpg",
    tags: ["Performance", "Culture", "Art"],
    content: `
      <p>The main stage evening show is the crown jewel of LūmenFest, a spectacle that takes months of planning and collaboration. Join us behind the curtain to see how magic is made.</p>

      <h2>The Creative Process</h2>
      <p>Our creative team begins work nine months before the festival, drawing inspiration from global cultures, contemporary art, and the natural surroundings of our festival location.</p>

      <p>"We want every show to tell a story," says Creative Director Maria Chen. "This year's theme 'Elements United' explores how earth, air, fire, and water interact in beautiful, unexpected ways."</p>

      <h2>Lighting Design: Painting with Light</h2>
      <p>Our lighting team uses over 1,200 intelligent fixtures to create immersive environments. The process involves:</p>
      <ul>
        <li>3D pre-visualization of the entire show</li>
        <li>Custom color palettes for each performance segment</li>
        <li>Real-time lighting adjustments during rehearsals</li>
        <li>Integration with pyrotechnics and special effects</li>
      </ul>

      <h2>Cultural Fusion</h2>
      <p>This year's show features performers from 15 different countries, blending traditional dance forms with contemporary movement. We believe cultural exchange creates the most compelling art.</p>

      <p>From Brazilian samba to Japanese taiko drumming, the evening show celebrates global diversity while creating something entirely new.</p>

      <h2>Technical Marvels</h2>
      <p>The stage features:</p>
      <ul>
        <li>360-degree rotating platforms</li>
        <li>Flying systems for aerial performances</li>
        <li>Projection mapping on custom-built structures</li>
        <li>Surround sound audio design</li>
      </ul>

      <p>Every technical element serves the artistic vision, creating moments of pure wonder that stay with audiences long after the show ends.</p>
    `
  },
  {
    id: 3,
    slug: "night-party-dj-lineup",
    title: "Meet the DJs Lighting Up the Night Party",
    excerpt: "From Berlin to Bangkok: the international talent bringing beats to the dance floor until dawn.",
    category: "Night",
    date: "2025-11-05",
    readTime: "5 min",
    image: "/night.webp",
    tags: ["Music", "DJs", "Party"],
    content: `
      <p>As the sun sets, LūmenFest transforms into a global dance floor powered by some of the world's most innovative electronic music artists. Meet the visionaries behind the night's energy.</p>

      <h2>International Sounds, Unified Spirit</h2>
      <p>Our DJ lineup represents the best of global electronic music, carefully curated to take festival-goers on a musical journey from sunset to sunrise.</p>

      <h2>Headliners Spotlight</h2>

      <h3>Amara (Berlin)</h3>
      <p>Known for her hypnotic techno sets that build slowly into powerful crescendos, Amara brings the spirit of Berlin's legendary clubs to LūmenFest. Her sunrise set has become the stuff of festival legend.</p>

      <h3>DJ Kiet (Bangkok)</h3>
      <p>Blending traditional Thai instrumentation with cutting-edge house music, DJ Kiet creates a sound that's both familiar and entirely new. His sets are a celebration of cultural fusion.</p>

      <h3>Luna Sol (Mexico City)</h3>
      <p>With her background in classical percussion, Luna Sol brings rhythmic complexity to her melodic techno sets. She's known for creating deep, emotional connections with her audience.</p>

      <h2>The Stage Design</h2>
      <p>Our night stage isn't just about sound—it's a full sensory experience featuring:</p>
      <ul>
        <li>Laser systems synchronized to the music</li>
        <li>Holographic visual effects</li>
        <li>Immersive sound design with spatial audio</li>
        <li>Interactive light installations</li>
      </ul>

      <h2>Dance Floor Culture</h2>
      <p>At LūmenFest, the dance floor is a space of radical inclusion and joyful expression. Our community guidelines ensure everyone feels safe to dance as they are.</p>

      <p>"The energy here is different," says regular attendee Tom. "People aren't just watching the DJ—they're connecting with each other through the music."</p>

      <p>Join us under the stars and experience the magic for yourself.</p>
    `
  },
  {
    id: 4,
    slug: "festival-prep-guide",
    title: "Your Ultimate LūmenFest Prep Guide",
    excerpt: "What to pack, when to arrive, and pro tips to maximize your day from sunrise to starlight.",
    category: "Morning",
    date: "2025-11-01",
    readTime: "7 min",
    image: "/evening.webp",
    tags: ["Tips", "Guide", "Experience"],
    content: `
      <p>Getting ready for LūmenFest? This comprehensive guide will help you prepare for an unforgettable experience from the first morning game to the final night celebration.</p>

      <h2>Before You Arrive</h2>

      <h3>Essential Packing List</h3>
      <ul>
        <li><strong>Comfortable footwear:</strong> You'll be walking and dancing a lot</li>
        <li><strong>Layered clothing:</strong> Mornings can be cool, days warm, nights chilly</li>
        <li><strong>Reusable water bottle:</strong> Stay hydrated at our free refill stations</li>
        <li><strong>Sun protection:</strong> Hat, sunglasses, and sunscreen</li>
        <li><strong>Small backpack:</strong> For carrying essentials throughout the day</li>
        <li><strong>Portable charger:</strong> Keep your devices powered</li>
      </ul>

      <h3>Digital Preparation</h3>
      <p>Download the LūmenFest app to:</p>
      <ul>
        <li>Create your personal schedule</li>
        <li>Get real-time updates and notifications</li>
        <li>Navigate the festival grounds with interactive maps</li>
        <li>Connect with other attendees</li>
      </ul>

      <h2>Arrival Day</h2>
      <p><strong>Best arrival times:</strong> 8-10 AM (beat the crowds) or 2-4 PM (after setup rush)</p>
      <p><strong>Pro tip:</strong> Attend the evening orientation tour to get familiar with the grounds before the festival officially begins.</p>

      <h2>Daily Rhythm</h2>

      <h3>Morning (6 AM - 12 PM)</h3>
      <p>Start with light activity and nourishment. The morning games are perfect for waking up your body and meeting new people.</p>

      <h3>Afternoon (12 PM - 6 PM)</h3>
      <p>Explore workshops, talks, and interactive installations. This is the best time for learning and exploration.</p>

      <h3>Evening (6 PM - 12 AM)</h3>
      <p>Enjoy performances, main stage shows, and community dinners. The energy builds throughout the evening.</p>

      <h3>Night (12 AM - 4 AM)</h3>
      <p>Dance, connect, and experience the magical night atmosphere. Remember to pace yourself—the festival lasts multiple days!</p>

      <h2>Health & Wellness</h2>
      <ul>
        <li>Stay hydrated—drink water consistently</li>
        <li>Use ear protection during loud performances</li>
        <li>Take breaks when needed</li>
        <li>Visit our wellness tent for any concerns</li>
        <li>Practice sun safety during daytime activities</li>
      </ul>

      <h2>Community Guidelines</h2>
      <p>LūmenFest thrives on mutual respect and care. Please:</p>
      <ul>
        <li>Respect personal boundaries and space</li>
        <li>Ask before taking photos</li>
        <li>Clean up after yourself</li>
        <li>Look out for one another</li>
        <li>Embrace diversity and different perspectives</li>
      </ul>

      <p>With these tips, you're ready to make the most of your LūmenFest experience. We can't wait to welcome you!</p>
    `
  }
];

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the blog post by slug
    const foundPost = blogPosts.find(p => p.slug === params.slug);
    setPost(foundPost);
    setIsLoading(false);
  }, [params.slug]);

  const sharePost = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || 'LūmenFest Blog';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
    
    setShowShareMenu(false);
  };

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
    );
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
    );
  }

  return (
    <div className="bg-[#F2EBE3] min-h-screen">
      <Header />

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
        {/* Category and Share */}
        <div className="flex justify-between items-center mb-6">
          <span className="px-4 py-2 bg-[#214445] text-white rounded-full text-sm font-medium">
            {post.category}
          </span>
          
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
          {post.title}
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
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            color: '#214445'
          }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-[#214445]/10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
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
  );
}