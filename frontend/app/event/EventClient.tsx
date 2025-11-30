"use client";

import React, { JSX, useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

type Track = "Morning Games" | "Night Party" | "All Day";

interface EventItem {
  time: string;
  title: string;
  team: string;
  tag: string;
  track: Track;
  description: string;
  video: string;
}

const filters: Track[] = ["All Day", "Morning Games", "Night Party"];

const events: EventItem[] = [
  {
  time: "09:00 AM",
  title: "Penalty Challenge",
  team: "Community Sports Team",
  tag: "Morning",
  track: "Morning Games",
  description: "Test your shooting precision in a thrilling penalty showdown",
  video: "/video1.mp4",
  },
  {
    time: "09:30 AM",
    title: "Kick the Red Envelope Challenge",
    team: "Community Sports Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Aim, kick, and try to hit the lucky red envelope to win surprises",
    video: "/video1.mp4",
  },
  {
    time: "10:00 AM",
    title: "Spin-to-Win Tet Prizes",
    team: "Festival Rewards Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Spin the wheel to win stickers, snacks, and exciting Tet goodies",
    video: "/video1.mp4",
  },
  {
    time: "10:30 AM",
    title: "Parents vs Children 1v1 Challenge",
    team: "Family Activities Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Fun and friendly family battles to create lasting memories",
    video: "/video1.mp4",
  },
  {
    time: "11:00 AM",
    title: "DJ Music Session",
    team: "Entertainment Crew",
    tag: "Morning",
    track: "Morning Games",
    description: "Enjoy upbeat mixes and festival vibes from our live DJ",
    video: "/video1.mp4",
  },
  {
    time: "12:00 PM",
    title: "Organizers vs Crowd Match",
    team: "Community Sports Team",
    tag: "Afternoon",
    track: "Morning Games",
    description: "A lighthearted curtain raiser match between organizers and a mixed team",
    video: "/video1.mp4",
  },
  {
    time: "01:00 PM",
    title: "360° Spin Booth",
    team: "Creative Media Team",
    tag: "Afternoon",
    track: "Morning Games",
    description: "Create dynamic 360° festival videos with friends",
    video: "/video1.mp4",
  },
  {
    time: "01:30 PM",
    title: "Red Carpet Arrival Wall",
    team: "Creative Media Team",
    tag: "Afternoon",
    track: "Morning Games",
    description: "Strike a pose and get instant printed photos",
    video: "/video1.mp4",
  },
  {
    time: "02:00 PM",
    title: "Special Tet Gift Bags",
    team: "Festival Coordination Team",
    tag: "Afternoon",
    track: "Morning Games",
    description: "Exclusive festive gift bags for all attendees",
    video: "/video1.mp4",
  },
  {
    time: "02:30 PM",
    title: "Free Meals and Drinks",
    team: "Culinary Team",
    tag: "Afternoon",
    track: "Morning Games",
    description: "Enjoy delicious meals and refreshing drinks at no cost",
    video: "/video1.mp4",
  },
  {
    time: "10:30 PM",
    title: "Free Khebab and Beer",
    team: "Culinary Team",
    tag: "Night",
    track: "Night Party",
    description: "Enjoy complimentary snacks and drinks",
    video: "/video1.mp4",
  },
  {
    time: "01:30 AM",
    title: "Dance Challenge",
    team: "Entertainment Team",
    tag: "Night",
    track: "Night Party",
    description: "Show off your moves and win prizes",
    video: "/video1.mp4",
  },
  {
    time: "01:30 AM",
    title: "Singing Challenge",
    team: "Entertainment Team",
    tag: "Night",
    track: "Night Party",
    description: "Showcase your vocal talents",
    video: "/video1.mp4",
  },
  {
    time: "01:30 AM",
    title: "Drinking Challenge",
    team: "Entertainment Team",
    tag: "Night",
    track: "Night Party",
    description: "Test your limits with fun drinking games",
    video: "/video1.mp4",
  },
];

const filterDirections: Record<Track, string> = {
  "All Day": "scale-95",
  "Morning Games": "-translate-x-8",
  "Night Party": "translate-y-8",
};

export default function EventClient(): JSX.Element {
  const [active, setActive] = useState<Track>("All Day");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryFilter = params.get("filter");
      if (queryFilter && filters.includes(queryFilter as Track)) {
        setActive(queryFilter as Track);
      }
    }
  }, []);

  const handleFilterChange = (filter: Track): void => {
    if (filter === active || isAnimating) return;
    setIsAnimating(true);
    setActive(filter);
    setTimeout(() => setIsAnimating(false), 300);
  };

  /** Convert "09:00 AM" → "0900" (24hr) */
  const convertTimeTo24Hour = (timeStr: string): string => {
    const [time, modifier] = timeStr.split(" ");
    const [hoursPart, minutes] = time.split(":");
    let hours = parseInt(hoursPart, 10);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const hh = hours.toString().padStart(2, "0");
    return `${hh}${minutes}`;
  };

  const addEventToCalendar = (event: EventItem, platform: "google" | "apple"): void => {
    const eventDate = "2025-02-01";

    const time24 = convertTimeTo24Hour(event.time);
    const startTime = `${eventDate.replace(/-/g, "")}T${time24}00`;

    let endHours = parseInt(time24.substring(0, 2), 10);
    let endMinutes = parseInt(time24.substring(2, 4), 10) + 30;

    if (endMinutes >= 60) {
      endMinutes -= 60;
      endHours += 1;
    }

    let endDate = eventDate;
    if (endHours >= 24) {
      endHours -= 24;
      endDate = "2025-02-02";
    }

    const endTime = `${endDate.replace(/-/g, "")}T${endHours
      .toString()
      .padStart(2, "0")}${endMinutes.toString().padStart(2, "0")}00`;

    if (platform === "google") {
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startTime}/${endTime}&text=${encodeURIComponent(
        event.title
      )}&details=${encodeURIComponent(
        `${event.description}\n\nTeam: ${event.team}\nTrack: ${event.track}`
      )}&location=${encodeURIComponent("Festival Grounds")}`;

      if (typeof window !== "undefined") window.open(googleCalendarUrl, "_blank");
    } else {
      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}\\n\\nTeam: ${event.team}\\nTrack: ${event.track}`,
        `LOCATION:Festival Grounds`,
        `DTSTART:${startTime}`,
        `DTEND:${endTime}`,
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\n");

      const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `LumenFest-${event.title.replace(/\s+/g, "-")}.ics`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const filteredEvents =
    active === "All Day" ? events : events.filter((e) => e.track === active);

  return (
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
      <Header />

      {/* HERO */}
      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Event Schedule</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          A full day of culture, music, and celebration from sunrise to midnight
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="bg-[#FAF4EE] py-10 sticky top-0 z-10 border-b">
        <div className="flex justify-center gap-6 flex-wrap px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-sm border text-sm w-fit transform hover:scale-105 ${
                active === filter
                  ? "bg-[#214445] text-white shadow-lg scale-105"
                  : "bg-white text-[#214445] border-[#214445]/20 hover:bg-[#214445]/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#214445]/20 -translate-x-1/2" />

        {filteredEvents.length === 0 ? (
          <div className="text-center text-[#214445]/60 py-16 text-lg">No events found.</div>
        ) : (
          <div className="space-y-24">
            {filteredEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const containerClass = `relative flex items-center gap-8 ${
                isLeft ? "flex-row-reverse" : ""
              } ${
                isAnimating ? filterDirections[active] : "opacity-100"
              } transition-all duration-300`;

              return (
                <div key={index} className={containerClass}>
                  {/* node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#214445] border-4 border-white shadow-md" />

                  {/* CARD + VIDEO */}
                  <div className="group w-[48%] relative cursor-pointer">

                    {/* VIDEO OVERLAY (comes on top on hover) */}
                    <div className="
                      absolute inset-0 opacity-0 
                      group-hover:opacity-100 group-hover:z-20 
                      transition-opacity duration-300
                      rounded-2xl overflow-hidden pointer-events-none
                    ">
                      <video
                        src={event.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>

                    {/* CARD (fades out when video shows) */}
                    <div className="
                      bg-white rounded-2xl shadow-xl 
                      p-6 md:p-8 border border-[#214445]/10 
                      transition-all duration-300 transform 
                      relative z-10
                      group-hover:opacity-0 group-hover:scale-[1.03]
                    ">
                      <div className="flex items-center gap-3 text-[#214445] font-semibold">
                        <Calendar className="w-5 h-5" />
                        {event.time}
                        <span className="ml-auto bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                          {event.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#214445] mt-3">
                        {event.title}
                      </h3>

                      <p className="text-[#214445]/70 mt-3 text-sm md:text-base">
                        {event.description}
                      </p>

                      <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addEventToCalendar(event, "google");
                          }}
                          className="text-xs px-4 py-2 bg-[#214445] text-white rounded-full hover:bg-[#214445]/90 transition-all hover:scale-105"
                        >
                          + Google Calendar
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addEventToCalendar(event, "apple");
                          }}
                          className="text-xs px-4 py-2 bg-white text-[#214445] border border-[#214445]/30 rounded-full hover:bg-[#214445]/10 transition-all hover:scale-105"
                        >
                          + Apple Calendar
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-[#F4CBA3] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214445] mb-3">
          Don't Miss a Beat
        </h2>

        <p className="text-[#214445]/70 max-w-xl mx-auto mb-8">
          Add LūmenFest to your calendar and get ready for an unforgettable experience
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => {
              const googleUrl =
                "https://calendar.google.com/calendar/render?action=TEMPLATE&text=LumenFest+2025&dates=20250201T090000/20250202T023000&details=Join+us+for+an+unforgettable+festival+experience&location=Festival+Grounds";
              window.open(googleUrl, "_blank");
            }}
            className="bg-[#214445] text-white px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Add to Google Calendar
          </button>

          <button
            onClick={() => {
              const icsContent = [
                "BEGIN:VCALENDAR",
                "VERSION:2.0",
                "CALSCALE:GREGORIAN",
                "BEGIN:VEVENT",
                "SUMMARY:LūmenFest 2025",
                "DESCRIPTION:Join us for an unforgettable festival experience!",
                "LOCATION:Festival Grounds",
                "DTSTART:20250201T090000",
                "DTEND:20250202T023000",
                "END:VEVENT",
                "END:VCALENDAR",
              ].join("\n");

              const blob = new Blob([icsContent], { type: "text/calendar" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "LumenFest-2025.ics";
              a.click();
            }}
            className="bg-white text-[#214445] border border-[#214445]/30 px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Add to Apple Calendar
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
