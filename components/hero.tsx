"use client"

import { Calendar, MapPin, Clock } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#8B1538] via-[#4A3728] to-[#1a3f5e] overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0">
        <img
          src="/colorful-festive-paper-lanterns-lights-red-blue-ye.jpg"
          alt="Festival background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen">
        <div className="flex gap-6 items-center justify-center mb-8">
          <svg className="w-12 h-12 text-[#F5D5C0]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <h1 className="text-6xl md:text-8xl font-bold text-white">LūmenFest 2025</h1>
          <svg className="w-12 h-12 text-[#F5D5C0]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-4 text-balance">
          Where Worlds Meet. Where Tet Shines Brighter.
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-12 text-balance">A Get Away Tet Experience</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-[#F5D5C0] text-[#2C4F50] rounded-full font-semibold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
            Buy Tickets <span>→</span>
          </button>
          <button className="px-10 py-4 border-2 border-[#F5D5C0] text-[#F5D5C0] rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
            Discover Lineup
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 mt-16 text-white/90 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#F5D5C0]" />
            <span>February 15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#F5D5C0]" />
            <span>Aurora Cultural Center</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#F5D5C0]" />
            <span>7:00 AM - 3:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
