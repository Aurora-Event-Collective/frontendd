"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Countdown from "@/components/countdown"
import Events from "@/components/events"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Countdown />
      <Events />
      <CTA />
      <Footer />
    </div>
  )
}
