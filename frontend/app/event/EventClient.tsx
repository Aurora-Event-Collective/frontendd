"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const filters = ["All Day", "Morning Games", "Evening Show", "Night Party"]

const events = [
  {
    time: "09:00 AM",
    title: "Football Tournament between Nations",
    team: "Community Sports Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Friendly competition with prizes for winners",
  },
  {
    time: "11:00 AM",
    title: "Food varieties",
    team: "Culinary Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Taste dishes from around the world",
  },
  {
    time: "11:00 AM",
    title: "Photobooth and Photo shoot",
    team: "Creative Media Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Capture your festival moments",
  },
  {
    time: "11:00 AM",
    title: "Coffe stands",
    team: "Culinary Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Energizing brews to start your day",
  },
  {
    time: "11:00 AM",
    title: "Netwroking",
    team: "Community Relations",
    tag: "Morning",
    track: "Morning Games",
    description: "Connect with fellow attendees",
  },
  {
    time: "11:00 AM",
    title: "Speed dating",
    team: "Community Relations",
    tag: "Morning",
    track: "Morning Games",
    description: "Meet new people in a fun setting",
  },
  {
    time: "05:30 PM",
    title: "High Commisioner's engagements",
    team: "Event Hosts",
    tag: "Evening",
    track: "Evening Show",
    description: "Special appearances and speeches",
  },
  {
    time: "08:00 PM",
    title: "Photo booth",
    team: "Creative Media Team",
    tag: "Evening",
    track: "Evening Show",
    description: "Capture your festival moments",
  },
  {
    time: "08:00 PM",
    title: "Performances",
    team: "Cultural Dance Troupes",
    tag: "Evening",
    track: "Evening Show",
    description: "Traditional dances and music from various cultures",
  },
  {
    time: "08:00 PM",
    title: "Networking",
    team: "Community Relations",
    tag: "Evening",
    track: "Evening Show",
    description: "Connect with fellow attendees",
  },
  {
    time: "10:30 PM",
    title: "Free Khebab and Beer",
    team: "Culinary Team",
    tag: "Night",
    track: "Night Party",
    description: "Enjoy complimentary snacks and drinks",
  },
  {
    time: "01:30 AM",
    title: "Dance Challenge",
    team: "Entertainment Team",
    tag: "Night",
    track: "Night Party",
    description: "Show off your moves and win prizes",
  },
  {
    time: "01:30 AM",
    title: "Singing Challenge",
    team: "Entertainment Team",
    tag: "Night",
    track: "Night Party",
    description: "Showcase your vocal talents",
  },
  {
    time: "01:30 AM",
    title: "Drinking Challenge",
    team: "Entertainment Team",
    tag: "Night",
    track: "Night Party",
    description: "Test your limits with fun drinking games",
  },
]

const filterDirections: Record<string, string> = {
  "All Day": "scale-95",
  "Morning Games": "-translate-x-8",
  "Evening Show": "translate-x-8", 
  "Night Party": "translate-y-8"
}

export default function EventClient() {
  const [active, setActive] = useState("All Day")
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const queryFilter = params.get("filter")
      if (queryFilter && filters.includes(queryFilter)) {
        setActive(queryFilter)
      }
    }
  }, [])

  const handleFilterChange = (filter: string) => {
    if (filter === active || isAnimating) return
    
    setIsAnimating(true)
    setActive(filter)
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 300)
  }

  const filteredEvents = active === "All Day" ? events : events.filter((e) => e.track === active)

  const addToGoogleCalendar = () => {
    const eventDetails = {
      title: "LūmenFest 2025",
      description: "Join us for an unforgettable festival experience!",
      location: "Festival Grounds",
      startTime: "20250201T090000",
      endTime: "20250202T023000",
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${eventDetails.startTime}/${eventDetails.endTime}&text=${encodeURIComponent(eventDetails.title)}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`
    window.open(googleCalendarUrl, "_blank")
  }

  const addToAppleCalendar = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `SUMMARY:${"LūmenFest 2025"}`,
      `DESCRIPTION:${"Join us for an unforgettable festival experience!"}`,
      `LOCATION:${"Festival Grounds"}`,
      `DTSTART:${"20250201T090000"}`,
      `DTEND:${"20250202T023000"}`,
      "DTSTAMP:20250101T000000Z",
      "UID:lumenfest-2025-" + Math.random().toString(36).substring(2, 15),
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n")

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "LumenFest-2025-Tickets.ics"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const addEventToCalendar = (event: any, platform: 'google' | 'apple') => {
    const eventDate = "2025-02-01"
    const convertTimeTo24Hour = (timeStr: string) => {
      const [time, modifier] = timeStr.split(" ")
      let [hours, minutes] = time.split(":")
      if (modifier === "PM" && hours !== "12") hours = String(parseInt(hours, 10) + 12)
      if (modifier === "AM" && hours === "12") hours = "00"
      return hours.padStart(2, '0') + minutes
    }

    const time24 = convertTimeTo24Hour(event.time)
    const startTime = `${eventDate.replace(/-/g, "")}T${time24}00`

    let endHours = parseInt(time24.substring(0, 2))
    let endMinutes = parseInt(time24.substring(2, 4)) + 30
    if (endMinutes >= 60) { endHours += 1; endMinutes -= 60 }
    let endDate = eventDate
    if (endHours >= 24) { endHours -= 24; endDate = "2025-02-02" }
    const endTime = `${endDate.replace(/-/g, "")}T${endHours.toString().padStart(2,'0')}${endMinutes.toString().padStart(2,'0')}00`

    if (platform === 'google') {
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startTime}/${endTime}&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(`${event.description}\n\nTeam: ${event.team}\nTrack: ${event.track}`)}&location=Festival Grounds`
      window.open(googleCalendarUrl, "_blank")
    } else {
      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}\\n\\nTeam: ${event.team}\\nTrack: ${event.track}`,
        "LOCATION:Festival Grounds",
        `DTSTART:${startTime}`,
        `DTEND:${endTime}`,
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\n")

      const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `LumenFest-${event.title.replace(/\s+/g, '-')}.ics`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
      <Header />
      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Event Schedule</h1>
        <p className="text-white/80 max-w-2xl mx-auto">A full day of culture, music, and celebration from sunrise to midnight</p>
      </div>

      <div className="bg-[#FAF4EE] py-10 sticky top-0 z-10 border-b">
        <div className="flex justify-center gap-6 flex-wrap px-4">
          {filters.map((filter) => (
            <button 
              key={filter} 
              onClick={() => handleFilterChange(filter)}
              className={`
                px-8 py-3 rounded-full font-medium transition-all duration-300 
                shadow-sm border text-sm w-fit transform hover:scale-105
                ${active === filter 
                  ? "bg-[#214445] text-white shadow-lg scale-105" 
                  : "bg-white text-[#214445] border-[#214445]/20 hover:bg-[#214445]/10"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16">
        {filteredEvents.length === 0 ? (
          <div className="text-center text-[#214445]/60 py-16 text-lg">No events found.</div>
        ) : (
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={index}
                className={`
                  bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-[#214445]/10 
                  transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl
                  hover:border-[#214445]/30 hover:bg-[#FAF9F7] cursor-pointer
                  ${isAnimating ? `opacity-0 ${filterDirections[active]}` : 'opacity-100 translate-x-0 translate-y-0 scale-100'}
                `}
                style={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: isAnimating ? '0ms' : `${index * 50}ms`
                }}
              >
                <div className="flex items-center gap-3 text-[#214445] font-semibold">
                  <Calendar className="w-5 h-5" /> 
                  {event.time}
                  <span className="ml-auto bg-emerald-600 text-white text-xs px-3 py-1 rounded-full transform transition-transform hover:scale-110">
                    {event.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#214445] mt-3 group-hover:text-[#2a5657] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[#214445]/70 mt-3 text-sm md:text-base group-hover:text-[#214445]/90 transition-colors">
                  {event.description}
                </p>

                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      addEventToCalendar(event, 'google')
                    }}
                    className="text-xs px-4 py-2 bg-[#214445] text-white rounded-full hover:bg-[#214445]/90 transition-all hover:scale-105"
                  >
                    + Google Calendar
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      addEventToCalendar(event, 'apple')
                    }}
                    className="text-xs px-4 py-2 bg-white text-[#214445] border border-[#214445]/30 rounded-full hover:bg-[#214445]/10 transition-all hover:scale-105"
                  >
                    + Apple Calendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-[#F4CBA3] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214445] mb-3">Don't Miss a Beat</h2>
        <p className="text-[#214445]/70 max-w-xl mx-auto mb-8">Add LūmenFest to your calendar and get ready for an unforgettable experience</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button 
            onClick={addToGoogleCalendar}
            className="bg-[#214445] text-white px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Add to Google Calendar
          </button>
          <button 
            onClick={addToAppleCalendar}
            className="bg-white text-[#214445] border border-[#214445]/30 px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Add to Apple Calendar
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}