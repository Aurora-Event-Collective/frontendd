"use client";
import React, { useRef, useState } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
      image: "/Penalty Challenge.png",
    },
    {
      time: "09:30 AM",
      title: "Kick the Red Envelope Challenge",
      team: "Community Sports Team",
      tag: "Morning",
      track: "Morning Games",
      description: "Aim, kick, and try to hit the lucky red envelope to win surprises",
      video: "/video1.mp4",
      image: "/Red envelop.jpg",
    },
    {
      time: "10:00 AM",
      title: "Spin-to-Win Tet Prizes",
      team: "Festival Rewards Team",
      tag: "Morning",
      track: "Morning Games",
      description: "Spin the wheel to win stickers, snacks, and exciting Tet goodies",
      video: "/video1.mp4",
      image: "/spin and win.jpg",
    },
    {
      time: "10:30 AM",
      title: "Parents vs Children 1v1 Challenge",
      team: "Family Activities Team",
      tag: "Morning",
      track: "Morning Games",
      description: "Fun and friendly family battles to create lasting memories",
      video: "/video1.mp4",
      image: "/Kids vs Parent.jpg",
    },
    {
      time: "11:00 AM",
      title: "DJ Music Session",
      team: "Ente rtainment Crew",
      tag: "Morning",
      track: "Morning Games",
      description: "Enjoy upbeat mixes and festival vibes from our live DJ",
      video: "/video1.mp4",
      image: "/DJ Music Session.png",
    },
    {
      time: "12:00 PM",
      title: "Organizers vs Crowd Match",
      team: "Community Sports Team",
      tag: "Afternoon",
      track: "Morning Games",
      description: "A lighthearted curtain raiser match between organizers and a mixed team",
      video: "/video1.mp4",
      image: "/FV2_8266.jpg",
    },
    {
      time: "01:00 PM",
      title: "360° Spin Booth",
      team: "Creative Media Team",
      tag: "Afternoon",
      track: "Morning Games",
      description: "Create dynamic 360° festival videos with friends",
      video: "/video1.mp4",
      image: "/360 camera.jpeg.jpg",
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
      image: "/Gifts.jpeg.jpg",
    },
    {
      time: "02:30 PM",
      title: "Free Meals and Drinks",
      team: "Culinary Team",
      tag: "Afternoon",
      track: "Morning Games",
      description: "Enjoy delicious meals and refreshing drinks at no cost",
      video: "/video1.mp4",
      image: "/free drinks.jpeg.jpg",
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
      image: "/dancing.jpg",
    },
    {
      time: "01:30 AM",
      title: "Singing Challenge",
      team: "Entertainment Team",
      tag: "Night",
      track: "Night Party",
      description: "Showcase your vocal talents",
      video: "/video1.mp4",
      image: "/singing challenge.jpg",
    },
    {
      time: "01:30 AM",
      title: "Drinking Challenge",
      team: "Entertainment Team",
      tag: "Night",
      track: "Night Party",
      description: "Test your limits with fun drinking games",
      video: "/video1.mp4",
      image: "/drinking challenge.jpg",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

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

  const scrollMobileLeft = () => {
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollMobileRight = () => {
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  // Function to create a URL-friendly ID from event title
  const createEventId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <>
      {/* ===== DESKTOP LAYOUT (Exactly as before, full screen) ===== */}
      <div className="hidden lg:block relative min-h-screen">
        {/* Background Image */}
        <img
          src="/Hero4.png"
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

        {/* Event Carousel */}
        <div className="absolute top-20 right-161 z-10 w-[650px] max-w-5xl">
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

            {/* Scrollable carousel */}
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
                  <img
                    src={event.image || "/dancing.jpg"}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
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
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              LumenFest 2026
            </h1>
            <br/>
            <h2 className="text-black/90 mb-6">
              Tết 2026: The Only Full-Day Celebration in Hanoi <br/> for Expats Who Refuse to Be Bored
            </h2>
            <nav >
                <Link href="/tickets"><button className="bg-black text-white px-20 py-4 rounded-full cursor-pointer">Get tickets</button></Link>
            </nav>
              <br/>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text- black" />
              <span>February 18, 2026</span>
              <span></span>
              <span></span>
              <MapPin className="w-5 h-5 text-black" />
              <span> Yên Sở Park, Hanoi</span>
            </div>
              <br/>
              <br/>
            <div className="flex gap-4">
                <Link href="#" className="text-black hover:text-white transition">
                  <Facebook size={27} />
                </Link>
                <Link href="#" className="text-black hover:text-white transition">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
            </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (Fully responsive for all screen sizes) ===== */}
      <div className="lg:hidden relative min-h-[90svh] overflow-hidden">
        {/* Background Image - Responsive zooming */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/Hero4.png"
            alt="Background"
            className="w-full h-full object-cover object-left-top"
            style={{ 
              transform: 'scale(1.5) translateX(-15%) translateY(-10%)',
              transformOrigin: 'left top'
            }}
          />
        </div>

        {/* Dark overlay to create boundary/constraint effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 z-0"></div>

        {/* Mobile Navigation - Responsive positioning */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-20">
          <div className="flex justify-between items-center">
            {/* Home Button */}
            <Link href="/">
              <button className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg border border-white/20">
                Home
              </button>
            </Link>

            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-black/30 backdrop-blur-md text-white p-1.5 sm:p-2 rounded-full hover:bg-black/50 transition border border-white/20 shadow-lg"
            >
              {isMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown - Responsive */}
          {isMenuOpen && (
            <div className="mt-2 bg-white/95 backdrop-blur-lg rounded-xl p-3 sm:p-4 shadow-xl border border-white/30 w-40 sm:w-48 ml-auto">
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                <Link href="/event" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full text-left px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-black/10 transition font-medium text-xs sm:text-sm">
                    Events
                  </button>
                </Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full text-left px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-black/10 transition font-medium text-xs sm:text-sm">
                    About
                  </button>
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full text-left px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-black/10 transition font-medium text-xs sm:text-sm">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Event Carousel - Responsive positioning */}
        <div className="absolute top-20 sm:top-24 right-6 sm:right-6 z-10 max-w-[85%]">
          <div className="relative">
            {/* Boundary container for carousel */}
            <div className="bg-gradient-to-r from-white/20 to-transparent p-1.5 sm:p-2 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
              {/* Mobile Scroll buttons */}
              <button 
                onClick={scrollMobileLeft}
                className="absolute left-1.5 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-1 sm:p-1.5 rounded-full transition-all shadow-lg border border-white/50"
              >
                <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
              </button>
              
              <button 
                onClick={scrollMobileRight}
                className="absolute right-1.5 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-1 sm:p-1.5 rounded-full transition-all shadow-lg border border-white/50"
              >
                <ChevronRight size={14} className="sm:w-4 sm:h-4" />
              </button>

              {/* Mobile Carousel - Responsive sizing */}
              <div 
                ref={mobileCarouselRef}
                className="flex space-x-2 sm:space-x-3 overflow-x-auto scrollbar-hide py-1.5 sm:py-2 px-4 sm:px-6"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollBehavior: 'smooth'
                }}
              >
                {events.slice(0, 3).map((event, index) => (
                  <Link
                    key={index}
                    href={{
                      pathname: "/event",
                      query: { 
                        filter: event.track,
                        event: createEventId(event.title)
                      }
                    }}
                    className="min-w-[120px] h-[120px] sm:min-w-[140px] sm:h-[140px] bg-white/20 backdrop-blur-md rounded-xl flex-shrink-0 hover:scale-105 transform transition relative overflow-hidden border border-white/30 shadow-lg"
                  >
                    <img
                      src={event.image || "/dancing.jpg"}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 bg-white/80 text-black p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-white/50">
                      <p className="text-[10px] sm:text-xs font-medium text-center line-clamp-2">{event.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br/>

        {/* Mobile Content Section - Responsive positioning and sizing */}
        <div className="absolute top-64 sm:top-86 left-3 sm:left-4 right-3 sm:right-4 z-10 pb-4">
          {/* Boundary container for content */}
          <div className="max-w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-3 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
              LumenFest 2026
            </h1>
            <br/>
            <h2 className="text-sm sm:text-base text-black/90 mb-3 sm:mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] leading-tight">
              Tết 2026: The Only Full-Day Celebration in Hanoi for Expats Who Refuse to Be Bored
            </h2>
            <br/>
            {/* Mobile Get Tickets Button - Responsive */}
            <nav className="mb-3 sm:mb-4">
              <Link href="/tickets">
                <button className="bg-black text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm font-medium w-full max-w-[280px] shadow-xl border border-white/30 hover:bg-black/90 transition">
                  Get tickets
                </button>
              </Link>
            </nav>
            <br/>
            {/* Date & Location with boundary - Responsive */}
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-4 border border-white/40 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                  <span className="text-xs sm:text-sm font-medium">Feb 18, 2026</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-black/30"></div>
                <div className="sm:hidden h-px w-16 bg-black/30 my-1"></div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                  <span className="text-xs sm:text-sm font-medium">Yên Sở Park</span>
                </div>
              </div>
            </div>
            
            {/* Social Icons with boundary - Responsive */}
            <div className="flex gap-3 sm:gap-4 bg-white/30 backdrop-blur-sm rounded-full p-2.5 sm:p-3 w-fit border border-white/40 shadow-lg">
              <Link href="#" className="text-black hover:text-white transition">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link href="#" className="text-black hover:text-white transition">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}