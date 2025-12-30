import TicketsClient from './TicketsClient'
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Buy Tickets - LūmenFest 2026",
  description: "Secure your spot at LūmenFest 2026. Choose from Single Pass, Double Pass, or VIP Pass for an unforgettable Tết experience.",
  openGraph: {
    title: "Get Your LūmenFest 2026 Tickets",
    description: "Join us on February 18th, 2026. Choose from multiple ticket options including popular Double Pass and exclusive VIP access.",
    images: [
      {
        url: "/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "LūmenFest 2026 Tickets Available Now",
      },
    ],
  },
  twitter: {
    title: "Buy Tickets - LūmenFest 2026",
    description: "Secure your spot at LūmenFest 2026. Multiple passes available for the ultimate Tết celebration.",
    images: ["/tickets-preview.png"],
  },
}

export const dynamic = "force-dynamic"

export default function TicketsPage() {
  return <TicketsClient />
}