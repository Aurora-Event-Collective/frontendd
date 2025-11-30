"use client";
import React, { useRef } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  // Using the same events data from your event page
  const events = [
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

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -650, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 650, behavior: 'smooth' });
    }
  };

  // Function to create a URL-friendly ID from event title - FIXED TypeScript
  const createEventId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src="/Hero3.png"
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Top Left Navigation */}
      <nav className="absolute top-4 left-4 flex space-x-4 z-10">
        <Link href="/"><button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">Home</button></Link>
        <Link href="/event"><button className="text-black px-4 py-2 rounded-full hover:bg-black/50 transition cursor-pointer">Events</button></Link>
        <Link href="/about"><button className="text-black px-4 py-2 rounded-full hover:bg-black/50 transition cursor-pointer">About</button></Link>
        <Link href="/contact"><button className="text-black px-4 py-2 rounded-full hover:bg-black/50 transition cursor-pointer">Contact</button></Link>
      </nav>
      <nav className="absolute top-5 left-253 flex space-x-4 z-10">
        <Link href="/tickets"><button className="bg-black text-white px-20 py-4 rounded-full cursor-pointer">Get tickets</button></Link>
      </nav>

      {/* Event Carousel - Shifted to far left */}
      <div className="absolute top-15 right-157 z-10 w-[650px] max-w-5xl">
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full transition-all shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full transition-all shadow-lg"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable carousel - becomes scrollable when content overflows */}
          <div 
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 px-8"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {events.map((event, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/event",
                  query: { 
                    filter: event.track,
                    event: createEventId(event.title)
                  }
                }}
                className="min-w-[180px] max-w-[190px] h-[190px] bg-white/10 backdrop-blur-md rounded-xl flex-shrink-0 hover:scale-105 transform transition relative overflow-hidden cursor-pointer"
              >
                {/* Image filling entire container - using track to determine image */}
                <img
                  src={event.track === "Morning Games" ? "/dancing.jpg" : "/dancing.jpg"}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Text overlay at the bottom */}
                <div className="absolute bottom-3 left-3.5 right-0 bg-white/60 text-black p-2 rounded-4xl max-w-40">
                  <p className="text-sm font-medium text-center">{event.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="absolute top-75 left-4 right-4 z-10">
        <p>Taimz Collective Events</p>
        <br/>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            LumenFest 2026
          </h1>
          <br/>
          <h2 className="text-black/90 mb-6">
            Tết 2026: The Only Full-Day Celebration in Hanoi <br/> for Expats Who Refuse to Be Bored
          </h2>
          <p>A Tết Get Away Experience</p>
            <br/>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text- black" />
            <span>February 18, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-black" />
            <span> Yên Sở Park, Hanoi</span>
          </div>
            <br/>
            <br/>
          <div className="flex gap-4">
              <Link href="#" className="text-black hover:text-white transition">
                <Facebook size={25} />
              </Link>
              <Link href="#" className="text-black hover:text-white transition">
                <Instagram size={25} />
              </Link>
              <Link href="#" className="text-black hover:text-white transition">
                <Twitter size={25} />
              </Link>
          </div>
      </div>
    </div>
  );
}