import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { VehicleSection } from '@/components/VehicleSection'
import { ReviewsCarousel } from '@/components/ReviewsCarousel'
import { About } from '@/components/About'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { FloatingButtons } from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <VehicleSection />
      <ReviewsCarousel />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
