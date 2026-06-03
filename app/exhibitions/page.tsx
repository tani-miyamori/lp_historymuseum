import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { FooterSection } from '@/components/footer-section'
import { ScrollReveal, LineReveal } from '@/components/scroll-reveal'

export const metadata = {
  title: '展示案内 | 歴史館',
  description: '開催中・開催予定の展覧会のご案内。',
}

interface Exhibition {
  status: string
  period: string
  title: string
  description: string
}

const exhibitions: Exhibition[] = [
  {
    status: 'NOW',
    period: '2026.04.01 — 2026.07.15',
    title: '常設展「時の回廊」',
    description:
      '先史から近代まで、列島に生きた人々の足跡をたどる常設展示。土器・刀剣・絵巻が、それぞれの時代の沈黙を語ります。',
  },
  {
    status: 'NOW',
    period: '2026.05.10 — 2026.08.31',
    title: '特別展「金と祈り — 琳派の世界」',
    description:
      '金箔の上に咲く四季と神々。江戸期に花開いた装飾美の系譜を、屏風と工芸品で一望します。',
  },
  {
    status: 'NEXT',
    period: '2026.09.20 — 2026.12.14',
    title: '企画展「文字のはじまり」',
    description:
      '木簡から写本へ。記録という行為が、いかにして世界の輪郭を残してきたのかをたどります。',
  },
]

export default function ExhibitionsPage() {
  return (
    <main className="bg-[#2C2A29] min-h-screen overflow-x-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Exhibitions"
        title="展示案内"
        lead="常設展と特別展。いま、ここで出会える時間の断片をご案内します。"
      />

      <section className="relative px-6 pb-32 md:pb-48">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-20 md:space-y-28">
          {exhibitions.map((ex, i) => (
            <ScrollReveal key={ex.title} delay={i * 100}>
              <article className="border-t border-[#C5A880]/20 pt-10 md:pt-14">
                <div className="flex flex-wrap items-baseline gap-4 mb-6">
                  <span
                    className="text-[#C5A880] text-xs tracking-widest"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {ex.status}
                  </span>
                  <span
                    className="text-[#F4F1EA]/50 text-xs tracking-widest"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {ex.period}
                  </span>
                </div>
                <h2
                  className="text-[#F4F1EA] text-xl md:text-2xl lg:text-3xl tracking-wider-custom mb-6"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  {ex.title}
                </h2>
                <LineReveal className="w-10 mb-6" origin="left" />
                <p
                  className="text-[#F4F1EA]/70 text-sm md:text-base leading-relaxed-custom tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  {ex.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
