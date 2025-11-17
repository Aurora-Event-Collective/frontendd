"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const filters = ["All Day", "Morning Games", "Evening Show", "Night Party"]

const events = [
  {
    time: "09:00 AM",
    title: "Beach Volleyball Tournament",
    team: "Community Sports Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Friendly competition with prizes for winners",
  },
  {
    time: "11:00 AM",
    title: "Cultural Showcase & Drum Circle",
    team: "Cultural Arts Crew",
    tag: "Morning",
    track: "Morning Games",
    description: "Experience authentic cultural rhythms and performances",
  },
  {
    time: "05:30 PM",
    title: "Main Stage Performances",
    team: "Headline Artists",
    tag: "Evening",
    track: "Evening Show",
    description: "A fusion of live music and cultural acts",
  },
  {
    time: "08:00 PM",
    title: "Special Light Parade",
    team: "Creative Parade Crew",
    tag: "Evening",
    track: "Evening Show",
    description: "Light and color spectacle you don't want to miss",
  },
  {
    time: "10:30 PM",
    title: "Night Party Kickoff",
    team: "International DJs",
    tag: "Night",
    track: "Night Party",
    description: "DJs from across the world, hyping the night",
  },
  {
    time: "01:30 AM",
    title: "Late Night Chill Lounge",
    team: "Vibes Curators",
    tag: "Night",
    track: "Night Party",
    description: "Relaxed after-party vibes and neon ambience",
  },
]

export default function EventClient() {
  const [active, setActive] = useState("All Day")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const queryFilter = params.get("filter")
      if (queryFilter && filters.includes(queryFilter)) {
        setActive(queryFilter)
      }
    }
  }, [])

  const filteredEvents = active === "All Day" ? events : events.filter((e) => e.track === active)

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
            <button key={filter} onClick={() => setActive(filter)} className={`px-8 py-3 rounded-full font-medium transition shadow-sm border text-sm w-fit ${active === filter ? "bg-[#214445] text-white shadow-lg" : "bg-white text-[#214445] border-[#214445]/20"}`}>
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
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-[#214445]/10 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 text-[#214445] font-semibold">
                  <Calendar className="w-5 h-5" /> {event.time}
                  <span className="ml-auto bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">{event.tag}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#214445] mt-3">{event.title}</h3>
                <p className="text-[#214445]/70 mt-3 text-sm md:text-base">{event.description}</p>

                <div className="flex gap-3 mt-4">
                  <button onClick={() => addEventToCalendar(event, 'google')} className="text-xs px-4 py-2 bg-[#214445] text-white rounded-full hover:bg-[#214445]/90 transition">+ Google Calendar</button>
                  <button onClick={() => addEventToCalendar(event, 'apple')} className="text-xs px-4 py-2 bg-white text-[#214445] border border-[#214445]/30 rounded-full hover:bg-[#214445]/10 transition">+ Apple Calendar</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-[#F4CBA3] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214445] mb-3">Don't Miss a Beat</h2>
        <p className="text-[#214445]/70 max-w-xl mx-auto mb-8">Add LūmenFest to your calendar and get ready for an unforgettable experience</p>
      </div>

      <Footer />
    </div>
  )
}
