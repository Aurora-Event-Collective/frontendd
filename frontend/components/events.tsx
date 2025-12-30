"use client"
import Link from "next/link"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Morning Games",
      time: "7:00 AM - 4:00 PM",
      description: "Witness foreigners from different nations compete for the World Cup and more in the park.",
      image: "/football2.jpg",
      tags: ["Football tournament between nations.",
              "Penalty Challenge",
              "Nations world cup",
              "“Kick the Red Envelope” accuracy game",
              "Spin-to-win Tet prizes (stickers, snacks)",
              "Parent vs Children 1v1 fun challenge",
              "DJ music session", 
              "Organizers vs Mixed Crowd Match (curtain raiser game)",
              "360° spin booth",
              "Red-carpet arrival wall + instant prints",
              "Special Tet gift bags for everyone",
              "free meals and drinks"
            ],
      filterkey: "Morning Games"
    },
    {
      id: 3,
      title: "Night Party",
      time: "10:00 PM - 12:00 AM",
      description: "Enjoy the HOTTEST Afrobeats music from the best Dj's & more... (Free beer & Free Khebabs, best DJ's)",
      image: "/dancing.jpg",
      tags: ["Free Khebab & Beer", "Dance Challenge", "Singing Challenge", "Drinking Challenge"],
      filterkey: "Night Party"
    },
  ]

  return (
    <div className="bg-[#2C4F50] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Activities you can't miss</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => {
            // Show only first 2 tags
            const displayedTags = event.tags.slice(0, 2);
            const remainingTags = event.tags.length - 2;
            
            return (
              <Link 
                key={event.id}
                href={{
                  pathname: "/event",
                  query: { filter: event.filterkey }, 
                }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer h-96">
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
                          {/* Display first 4 tags */}
                          {displayedTags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          
                          {/* Show +X badge if there are remaining tags */}
                          {remainingTags > 0 && (
                            <span className="bg-white/30 text-white text-xs px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm font-medium">
                              +{remainingTags}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}