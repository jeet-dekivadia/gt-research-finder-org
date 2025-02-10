import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Benefits from "@/components/Benefits"
import HowItWorks from "@/components/HowItWorks"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

