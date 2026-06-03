import { SiteHeader } from '@/components/site-header'
import { CollectionSection } from '@/components/collection-section'
import { FooterSection } from '@/components/footer-section'

export const metadata = {
  title: '収蔵品 | 歴史館',
  description: '当館が所蔵する主要なコレクションのご紹介。',
}

export default function CollectionPage() {
  return (
    <main className="bg-[#2C2A29] min-h-screen overflow-x-hidden">
      <SiteHeader />
      <div className="pt-20">
        <CollectionSection />
      </div>
      <FooterSection />
    </main>
  )
}
