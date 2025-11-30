"use client";
import React, { useRef } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const events = [
    { id: 1, image: "/dancing.jpg", title: "Morning Games" },
    { id: 2, image: "/dancing.jpg", title: "Evening Show" },
    { id: 3, image: "/dancing.jpg", title: "Night Party" },
    { id: 4, image: "/dancing.jpg", title: "All Day Festival" },
    { id: 5, image: "/event4.png", title: "All Day Festival" },
    { id: 6, image: "/event4.png", title: "All Day Festival" },
    { id: 7, image: "/event4.png", title: "All Day Festival" },
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
      <div className="absolute top-15 left-4 z-10 w-[48%] max-w-5xl">
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
            {events.map((event) => (
              <div
                key={event.id}
                className="min-w-[180px] max-w-[190px] h-[190px] bg-white/10 backdrop-blur-md rounded-xl flex-shrink-0 hover:scale-105 transform transition relative overflow-hidden"
              >
                {/* Image filling entire container */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Text overlay at the bottom */}
                <div className="absolute bottom-3 left-8.5 right-0 bg-white/60 text-black p-2 rounded-4xl max-w-30">
                  <p className="text-sm font-medium text-center">{event.title}</p>
                </div>
              </div>
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