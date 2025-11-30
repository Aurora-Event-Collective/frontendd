"use client"

import { Button } from "@/components/ui/button"
import { Check, Crown, MessageSquare } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function TicketsClient() {
  const plans = [
    {
      title: "Single Pass",
      price: 15,
      tag: "For Single Entry",
      features: ["Free entry all day", "Access to all zones", "Complimentary welcome drink", "Priority seating"],
      highlight: false,
      sales: 100,
    },
    {
      title: "Double Pass",
      price: 25,
      tag: "For Double Entry",
      features: ["Free entry all day", "Access to all zones", "Complimentary welcome drink", "Priority seating"],
      highlight: true,
      sales: 500,
    },
    {
      title: "VIP Pass",
      price: 40,
      tag: "Experience all event as a VIP",
      features: ["Free entry all day", "Access to all zones", "Complimentary welcome drink", "Priority seating"],
      highlight: false,
    },
  ]

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

  const handleSelectTicket = (planTitle: string) => {
    alert(`You selected the ${planTitle}! This would redirect to a payment page.`)
  }

  return (
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
      <Header />

      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Choose Your Ticket</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Secure your spot for the ultimate experience on February 1st, 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-25 px-10">
        {plans.map((plan) => (
          <div key={plan.title} className={`rounded-3xl p-8 shadow-sm bg-white border transition-all duration-300 hover:shadow-xl ${plan.highlight ? "border-[#E7B884] bg-[#FFF7EC] scale-105" : "border-gray-200"}`}>
            <div className="flex justify-end text-sm font-medium text-[#5C715E] mb-2">{plan.sales && `Sold Tickets: ${plan.sales}`}</div>
            {plan.highlight && (<div className="flex items-center gap-1 text-sm font-bold text-[#C89A5B] mb-2"><Crown size={16} /> POPULAR</div>)}

            <h2 className="text-xl font-semibold text-[#114232] mb-2">{plan.title}</h2>
            <div className="text-4xl font-extrabold text-[#1A5D1A] mb-1">{plan.price === 0 ? "FREE" : `$${plan.price}.00`}</div>
            <p className="text-sm text-[#5C715E] mb-6">({plan.tag})</p>

            <ul className="space-y-3 text-sm text-[#114232] mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><Check size={16} className="text-[#2D8659]" /> {f}</li>
              ))}
            </ul>

            <button onClick={() => handleSelectTicket(plan.title)} className={`w-full rounded-full py-5 text-base font-medium transition-all cursor-pointer ${plan.highlight ? "bg-[#C89A5B] text-white hover:bg-[#b4874d] hover:scale-105" : "bg-[#0D2818] text-white hover:bg-[#0a1f13] hover:scale-105"}`}>
              Select Ticket
            </button>
          </div>
        ))}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center gap-4 mt-10">
          <Link 
            href="https://chat.whatsapp.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm"
          >
            <button 
              className="w-full rounded-full py-5 text-base font-medium transition-all cursor-pointer bg-green-700 text-white hover:bg-green-800 hover:scale-105"
            >
              Join Our WhatsApp Group
            </button>
          </Link>

          <Link 
            href="https://t.me/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm"
          >
            <button 
              className="w-full rounded-full py-5 text-base font-medium transition-all cursor-pointer bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
            >
              Join Our Telegram Group
            </button>
          </Link>
        </div>
      </div>


      <div className="bg-[#F4CBA3] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214445] mb-3">Don't Miss a Beat!</h2>
        <p className="text-[#214445]/70 max-w-xl mx-auto mb-8">Add LūmenFest to your calendar and get ready for an unforgettable experience.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button onClick={addToGoogleCalendar} className="bg-[#214445] text-white px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105">Add to Google Calendar</button>
          <button onClick={addToAppleCalendar} className="bg-white text-[#214445] border border-[#214445]/30 px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all hover:scale-105">Add to Apple Calendar</button>
        </div>
        <div><p className="text-sm text-[#214445]/70 mt-4">800 People have added LūmenFest to your calendar</p></div>
      </div>

      <Footer />
    </div>
  )
}
