import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "./components/hero"
import Founders from "./components/founders"
import Values from "./components/values"
import Story from "./components/story"
import CTAAbout from "./components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About LūmenFest 2026",
  description: "Learn about LūmenFest's mission to bring people together during Tết. Discover our story, values, and why we created this celebration.",
  openGraph: {
    title: "About LūmenFest 2026 - Our Story",
    description: "Discover the story behind LūmenFest 2026. Learn about our mission to create meaningful connections during Tết celebrations in Vietnam.",
    images: [
      {
        url: "/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "About LūmenFest 2026 - Our Story",
      },
    ],
  },
}

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <Story />
      <Founders />
      <Values />
      <CTAAbout />
      <Footer />
    </main>
  )
}