import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { IntroSection } from '@/components/intro-section'
import { CollectionSection } from '@/components/collection-section'
import { VisitSection } from '@/components/visit-section'
import { FooterSection } from '@/components/footer-section'

export default function HomePage() {
  return (
    <main className="bg-[#2C2A29] min-h-screen overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <CollectionSection />
      <VisitSection />
      <FooterSection />
    </main>
  )
}
