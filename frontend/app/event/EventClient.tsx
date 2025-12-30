"use client";

import React, { JSX, useEffect, useState, useRef } from "react";
import { Calendar } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";

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
    time: "10:00 AM",
    title: "Nations World Cup",
    team: "Community Sports Team",
    tag: "Morning",
    track: "Morning Games",
    description: "Cheer for your country in an exciting football tournament between nations",
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

// Function to create URL-friendly IDs (same as in Hero component)
const createEventId = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

// UPDATED API Service functions - Fixed to match backend response format
const apiService = {
  // 1. Health check API
  checkHealth: async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/health');
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  },

  // 2. Get platform stats
  getPlatformStats: async () => {
    try {
      const response = await fetch('/api/stats/platform');
      if (!response.ok) throw new Error('Failed to fetch platform stats');
      return await response.json();
    } catch (error) {
      console.error('Error fetching platform stats:', error);
      return null;
    }
  },

  // 3. & 4. Record calendar click - UPDATED: Send JSON body instead of query param
  recordCalendarClick: async (platform: 'google' | 'apple') => {
    try {
      const response = await fetch('/api/events/lumenfest-2025/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ platform: platform }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to record click');
      }
      
      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error('Error recording calendar click:', error);
      return false;
    }
  },

  // 5. Get event stats
  getEventStats: async () => {
    try {
      const response = await fetch('/api/events/lumenfest-2025/stats');
      if (!response.ok) throw new Error('Failed to fetch event stats');
      return await response.json();
    } catch (error) {
      console.error('Error fetching event stats:', error);
      return null;
    }
  },

  // 6. Get event count - UPDATED: Extract counts from response
  getEventCount: async () => {
    try {
      const response = await fetch('/api/events/lumenfest-2025/count');
      if (!response.ok) throw new Error('Failed to fetch event count');
      const data = await response.json();
      
      // Return the counts object from the response
      if (data && data.counts) {
        return data.counts;
      }
      
      // Fallback to empty counts if structure is different
      return { google: 0, apple: 0 };
    } catch (error) {
      console.error('Error fetching event count:', error);
      return { google: 0, apple: 0 }; // Return default on error
    }
  }
};

export default function EventClient(): JSX.Element {
  const [active, setActive] = useState<Track>("All Day");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const eventRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  const searchParams = useSearchParams();
  
  // State for calendar click counts
  const [calendarCounts, setCalendarCounts] = useState({
    google: 0,
    apple: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [backendHealth, setBackendHealth] = useState<boolean>(true);
  const [platformStats, setPlatformStats] = useState<any>(null);
  const [eventStats, setEventStats] = useState<any>(null);
  const [proxyError, setProxyError] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<string>('');

  // Check backend health on component mount
  useEffect(() => {
    checkBackendHealth();
  }, []);

  const checkBackendHealth = async () => {
    try {
      const isHealthy = await apiService.checkHealth();
      setBackendHealth(isHealthy);
      setProxyError(null);
      
      if (isHealthy) {
        // Only fetch other data if backend is healthy
        await Promise.all([
          fetchCalendarCounts(),
          fetchPlatformStats(),
          fetchEventStats()
        ]);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Failed to connect to proxy API:', error);
      setBackendHealth(false);
      setProxyError('Cannot connect to proxy server');
      setIsLoading(false);
    }
  };

  const fetchCalendarCounts = async () => {
    try {
      setIsLoading(true);
      const counts = await apiService.getEventCount();
      if (counts) {
        setCalendarCounts(counts);
        setLastAction('Counts fetched successfully');
      }
    } catch (error: any) {
      console.error('Error fetching calendar counts:', error);
      setProxyError(`Failed to fetch calendar counts: ${error.message}`);
      // Set default counts on error
      setCalendarCounts({ google: 0, apple: 0 });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPlatformStats = async () => {
    try {
      const data = await apiService.getPlatformStats();
      if (data) {
        setPlatformStats(data);
      }
    } catch (error) {
      console.error('Error fetching platform stats:', error);
    }
  };

  const fetchEventStats = async () => {
    try {
      const data = await apiService.getEventStats();
      if (data) {
        setEventStats(data);
      }
    } catch (error) {
      console.error('Error fetching event stats:', error);
    }
  };

  const handleCalendarClick = async (platform: 'google' | 'apple') => {
    if (!backendHealth) {
      // If backend is down, just update UI optimistically
      setCalendarCounts(prev => ({
        ...prev,
        [platform]: prev[platform] + 1
      }));
      setLastAction(`Backend offline - ${platform} click recorded locally`);
      return;
    }

    try {
      // Update UI optimistically first
      const newCounts = {
        ...calendarCounts,
        [platform]: calendarCounts[platform] + 1
      };
      setCalendarCounts(newCounts);
      setLastAction(`Recording ${platform} click...`);
      
      // Send click to backend via proxy
      const success = await apiService.recordCalendarClick(platform);

      if (success) {
        setLastAction(`${platform} click recorded successfully`);
        // Refresh counts from backend to ensure consistency
        await fetchCalendarCounts();
      } else {
        // Revert optimistic update on failure
        setCalendarCounts(prev => ({
          ...prev,
          [platform]: Math.max(0, prev[platform] - 1)
        }));
        setLastAction(`Failed to record ${platform} click`);
        setProxyError(`Failed to record ${platform} click on backend`);
      }
    } catch (error: any) {
      console.error('Error recording calendar click:', error);
      // Revert optimistic update on error
      setCalendarCounts(prev => ({
        ...prev,
        [platform]: Math.max(0, prev[platform] - 1)
      }));
      setLastAction(`Error: ${error.message}`);
      setProxyError(`Network error when recording ${platform} click: ${error.message}`);
    }
  };

  useEffect(() => {
    const queryFilter = searchParams.get("filter") as Track | null;
    const eventId = searchParams.get("event");
    
    // Set active tab from URL parameter
    if (queryFilter && filters.includes(queryFilter)) {
      setActive(queryFilter);
    }

    // Scroll to specific event if event parameter exists
    if (eventId) {
      setTimeout(() => {
        const element = eventRefs.current[eventId];
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          
          element.style.transition = 'all 0.5s ease';
          element.style.boxShadow = '0 0 0 4px rgba(33, 68, 69, 1)';
          setTimeout(() => {
            if (element) {
              element.style.boxShadow = '';
            }
          }, 2000);
        }
      }, 500);
    }
  }, [searchParams]);

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
      <div className="bg-[#214445] text-white py-24 text-center relative">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Activities</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          A full day of culture, music, and celebration from sunrise to midnight
        </p>
        
        {/* Backend health indicator */}
        <div className={`absolute top-4 right-4 flex items-center gap-2 ${backendHealth ? 'text-green-300' : 'text-red-300'}`}>
          <div className={`w-3 h-3 rounded-full ${backendHealth ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm font-medium">
            {backendHealth ? 'Backend Online' : 'Backend Offline'}
          </span>
        </div>
        
        {/* Last action indicator */}
        {lastAction && (
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-sm text-white/70 bg-black/20 px-3 py-1 rounded-full inline-block">
              {lastAction}
            </p>
          </div>
        )}
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

              const eventId = createEventId(event.title);

              return (
                <div 
                  key={index} 
                  className={containerClass}
                >
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

                    {/* CARD (fades out when video shows) - This is the white card we want to highlight */}
                    <div 
                      className="
                        bg-white rounded-2xl shadow-xl 
                        p-6 md:p-8 border border-[#214445]/10 
                        transition-all duration-300 transform 
                        relative z-10
                        group-hover:opacity-0 group-hover:scale-[1.03]
                      "
                      ref={(el: HTMLDivElement | null) => {
                        if (el) {
                          eventRefs.current[eventId] = el;
                        }
                      }}
                    >
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
                        {/* Individual event calendar buttons could go here if needed */}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* BOTTOM SECTION with calendar tracking */}
      <div className="bg-[#F4CBA3] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214445] mb-3">
          Don't Miss a Beat
        </h2>

        <p className="text-[#214445]/70 max-w-xl mx-auto mb-8">
          Add LūmenFest to your calendar and get ready for an unforgettable experience
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={async () => {
              // Track the click
              await handleCalendarClick('google');
              
              // Open Google Calendar
              const googleUrl =
                "https://calendar.google.com/calendar/render?action=TEMPLATE&text=LumenFest+2026&dates=20250201T090000/20250202T023000&details=Join+us+for+an+unforgettable+festival+experience&location=Yên+Sở+Park,+Hanoi";
              window.open(googleUrl, "_blank");
            }}
            className="bg-[#214445] text-white px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            disabled={isLoading && backendHealth}
          >
            Add to Google Calendar
            <span className="text-sm bg-white text-[#214445] rounded-full px-3 py-1 min-w-[40px]">
              {isLoading ? "..." : calendarCounts.google}
            </span>
          </button>

          <button
            onClick={async () => {
              // Track the click
              await handleCalendarClick('apple');
              
              // Create and download ICS file
              const icsContent = [
                "BEGIN:VCALENDAR",
                "VERSION:2.0",
                "CALSCALE:GREGORIAN",
                "BEGIN:VEVENT",
                "SUMMARY:LūmenFest 2026",
                "DESCRIPTION:Join us for an unforgettable festival experience!",
                "LOCATION:Yên Sở Park, Hanoi",
                "DTSTART:20250201T090000",
                "DTEND:20250202T023000",
                "END:VEVENT",
                "END:VCALENDAR",
              ].join("\n");

              const blob = new Blob([icsContent], { type: "text/calendar" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "LumenFest-2026.ics";
              a.click();
            }}
            className="bg-white text-[#214445] border border-[#214445]/30 px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            disabled={isLoading && backendHealth}
          >
            Add to Apple Calendar
            <span className="text-sm bg-[#214445] text-white rounded-full px-3 py-1 min-w-[40px]">
              {isLoading ? "..." : calendarCounts.apple}
            </span>
          </button>
        </div>
        
        {!isLoading && (
          <div className="mt-6">
            <p className="text-[#214445]/60 text-sm mb-2">
              Join {calendarCounts.google + calendarCounts.apple} people who have added this to their calendar
            </p>
            {platformStats && (
              <p className="text-[#214445]/40 text-xs">
                Total platform clicks: {platformStats.total_clicks || 0}
              </p>
            )}
            {eventStats && (
              <p className="text-[#214445]/40 text-xs">
                Event stats: {eventStats.total_clicks || 0} total clicks
              </p>
            )}
          </div>
        )}
        
        {!backendHealth && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md inline-block">
            <p className="text-sm">Backend is offline. Clicks will be saved locally only.</p>
          </div>
        )}
        
        {proxyError && (
          <div className="mt-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded-md inline-block">
            <p className="text-sm">{proxyError}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
