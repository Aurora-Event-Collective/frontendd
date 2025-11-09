import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "./components/hero"
import Founders from "./components/founders"
import Values from "./components/values"
import Story from "./components/story"
import CTAAbout from "./components/cta"

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