import { SiteHeader } from '@/components/site-header'
import { VisitSection } from '@/components/visit-section'
import { FooterSection } from '@/components/footer-section'

export const metadata = {
  title: 'ご来館案内 | 歴史館',
  description: '開館時間・観覧料・アクセスなど、ご来館に関するご案内。',
}

export default function VisitPage() {
  return (
    <main className="bg-[#2C2A29] min-h-screen overflow-x-hidden">
      <SiteHeader />
      <div className="pt-20">
        <VisitSection />
      </div>
      <FooterSection />
    </main>
  )
}
