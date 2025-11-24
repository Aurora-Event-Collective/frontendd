import EventClient from './EventClient'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events & Activities - LūmenFest 2026",
  description: "Discover all the exciting events, workshops, and activities at LūmenFest 2026. From cultural performances to networking sessions.",
  openGraph: {
    title: "Events Schedule - LūmenFest 2026",
    description: "Explore our full lineup of events, workshops, and activities for an unforgettable Tết celebration experience.",
    images: [
      {
        url: "/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "LūmenFest 2026 Events Schedule",
      },
    ],
  },
}

export const dynamic = "force-dynamic"

export default function EventSchedulePage() {
  return <EventClient />
}