export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime?: string
  image?: string
  tags?: string[]
  content?: string
}

export const blogPosts: BlogPost[] = [
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
    `,
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
    `,
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
    `,
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
    `,
  },
  // Add additional sample slugs to make sitemap richer
  {
    id: 5,
    slug: "sneak-peek-artist-lineup",
    title: "Sneak Peek: Artist Lineup Revealed",
    excerpt: "A preview of the artists joining LūmenFest 2026.",
    category: "Evening",
    date: "2025-12-01",
    readTime: "3 min",
    image: "/evening.webp",
    tags: ["Artists", "Lineup"],
  },
  {
    id: 6,
    slug: "how-to-get-there",
    title: "How To Get There: Transport & Parking",
    excerpt: "Best ways to reach LūmenFest and where to park.",
    category: "Guide",
    date: "2025-12-15",
    readTime: "2 min",
    tags: ["Logistics"],
  }
]

export default blogPosts
