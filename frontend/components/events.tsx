"use client"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Morning Fusion Zone",
      time: "7:00 AM - 12:00 PM",
      description: "Start your day with energizing wellness activities and friendly sports.",
      image: "https://images.unsplash.com/photo-1504224712202-4fe8b0db8c3d?w=600&h=600&fit=crop",
      tags: ["Yoga & Meditation", "Beach Volleyball", "Morning Run", "Wellness Workshops"],
    },
    {
      id: 2,
      title: "Evening Show",
      time: "5:00 PM - 10:00 PM",
      description: "Experience captivating performances blending traditional and modern artistry.",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=600&fit=crop",
      tags: ["Live Music", "Cultural Performances", "DJ Sets", "Food & Drinks"],
    },
    {
      id: 3,
      title: "Night Party",
      time: "10:00 PM - 3:00 AM",
      description: "Dance under the neon lights with world-class DJs and visual experiences.",
      image: "https://images.unsplash.com/photo-1478225143648-5f62029abc41?w=600&h=600&fit=crop",
      tags: ["International DJs", "Light Shows", "VIP Lounge", "Late Night Vibes"],
    },
  ]

  return (
    <div className="bg-[#2C4F50] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Three Worlds, One Experience</h2>
          <p className="text-lg text-white/80">
            From sunrise wellness to midnight celebration, experience a day of transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer h-96"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="bg-white/90 text-[#2C4F50] text-xs px-3 py-1 rounded-full font-semibold">
                      {event.time}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-white/90 text-sm mb-3">{event.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
