"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to February 15, 2025
    const targetDate = new Date("2026-02-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-[#2C4F50] rounded-2xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-3 shadow-lg">
        <span className="text-3xl md:text-4xl font-bold text-[#F5D5C0]">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-gray-600 font-semibold uppercase tracking-widest text-sm">{label}</span>
    </div>
  )

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C4F50] mb-16">Event Starts In</h2>

        {/* Countdown Boxes */}
        <div className="flex justify-center items-end gap-4 md:gap-8">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  )
}
