import PollsClient from './PollsClient'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polls & Voting - LūmenFest 2026",
  description: "Participate in polls and help shape LūmenFest 2026. Vote on activities, music, food, and more for our Tết celebration.",
  openGraph: {
    title: "Vote for LūmenFest 2026 Activities",
    description: "Your voice matters! Participate in polls to decide what happens at LūmenFest 2026. Help us create the perfect Tết experience.",
    images: [
      {
        url: "/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "Vote for LūmenFest 2026 Activities",
      },
    ],
  },
}

export const dynamic = "force-dynamic"

export default function PollsPage() {
  return <PollsClient />
}