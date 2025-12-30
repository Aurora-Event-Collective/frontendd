import Header from "@/components/header"
import Hero from "@/components/hero"
import Countdown from "@/components/countdown"
import Events from "@/components/events"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LūmenFest 2026 - Don't Spend Tết Scrolling Netflix",
  description: "Join LūmenFest 2026 on February 18th. Meet new people, create lasting memories, and experience Tết like never before in Vietnam.",
  openGraph: {
    title: "LūmenFest 2026 - Connect, Celebrate, Create Memories",
    description: "Don't spend Tết scrolling Netflix — spend it meeting new people at LūmenFest 2026. February 18th, 2026.",
    images: [
      {
        url: "/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "LūmenFest 2026 - Tết Celebration",
      },
    ],
  },
}

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <Hero />
      <Countdown />
      <Events />
      <CTA />
      <Footer />
    </div>
  )
}
