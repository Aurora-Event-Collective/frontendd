"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TicketsClient() {
  const [isZaloModalOpen, setIsZaloModalOpen] = useState(false)

  const ticket = {
    title: "General Ticket",
    price: "99,000 VND",
    tag: "For Single Entry",
    features: [
      "Free entry all day",
      "Access to all zones",
      "Complimentary welcome drink",
      "Priority seating",
    ],
  }

  const addToGoogleCalendar = () => {
    const googleCalendarUrl =
      "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250201T090000/20250202T023000&text=LūmenFest%202025&details=Join%20us%20for%20an%20unforgettable%20festival%20experience!&location=Festival%20Grounds"

    window.open(googleCalendarUrl, "_blank")
  }

  const addToAppleCalendar = () => {
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
      "DTSTAMP:20250101T000000Z",
      "UID:lumenfest-2025",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n")

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "LumenFest-2025.ics"
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleSecureTicket = () => {
    // Open a new tab with the form that collects name and email and QR code
    // Replace this URL with your actual form URL
    window.open("/ticket-form", "_blank")
  }

  return (
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
      <Header />

      {/* HERO */}
      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Choose Your Ticket
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Secure your spot for the ultimate experience on February 18th, 2026
        </p>
      </div>

      {/* SINGLE TICKET */}
      <div className="max-w-md mx-auto py-25 px-4">
        <div className="rounded-3xl p-8 shadow-sm bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold text-[#114232] mb-2">
            {ticket.title}
          </h2>
          <div className="text-4xl font-extrabold text-[#1A5D1A] mb-1">
            {ticket.price}
          </div>
          <p className="text-sm text-[#5C715E] mb-6">({ticket.tag})</p>

          <ul className="space-y-3 text-sm text-[#114232] mb-8">
            {ticket.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check size={16} className="text-[#2D8659]" />
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={handleSecureTicket}
            className="w-full rounded-full py-5 text-base font-medium bg-[#0D2818] text-white hover:bg-[#0a1f13] hover:scale-105 transition-all"
          >
            Get Ticket
          </button>
        </div>

        {/* ZALO BUTTON */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setIsZaloModalOpen(true)}
            className="w-full max-w-sm rounded-full py-5 text-base font-medium bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all"
          >
            Join Our Zalo Group
          </button>
        </div>
      </div>

      {/* CALENDAR */}
      {/* <div className="bg-[#F4CBA3] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214445] mb-3">
          Don't Miss a Beat!
        </h2>
        <p className="text-[#214445]/70 max-w-xl mx-auto mb-8">
          Add LūmenFest to your calendar and get ready.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={addToGoogleCalendar}
            className="bg-[#214445] text-white px-8 py-4 rounded-full font-medium hover:scale-105"
          >
            Add to Google Calendar
          </button>
          <button
            onClick={addToAppleCalendar}
            className="bg-white text-[#214445] border px-8 py-4 rounded-full font-medium hover:scale-105"
          >
            Add to Apple Calendar
          </button>
        </div>
      </div> */}

      <Footer />

      {/* ZALO MODAL */}
      {isZaloModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full relative text-center">
            <button
              onClick={() => setIsZaloModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-[#214445] mb-4">
              Join Our Zalo Group
            </h3>

            {/* Replace this image with your actual scan image */}
            <img
              src="/zalo.jpeg"
              alt="Zalo QR Code"
              className="w-full rounded-xl"
            />

            <p className="text-sm text-[#214445]/70">
              Scan the QR code above using Zalo to join our official group and
              stay updated.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}