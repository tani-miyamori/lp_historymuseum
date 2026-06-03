import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { FooterSection } from '@/components/footer-section'
import { ScrollReveal, LineReveal } from '@/components/scroll-reveal'

export const metadata = {
  title: 'イベント | 歴史館',
  description: 'ギャラリートーク、ワークショップ、講演会などのイベント情報。',
}

interface MuseumEvent {
  date: string
  time: string
  category: string
  title: string
  description: string
}

const events: MuseumEvent[] = [
  {
    date: '2026.06.14',
    time: '14:00 — 15:00',
    category: 'GALLERY TALK',
    title: '学芸員と歩く「時の回廊」',
    description: '担当学芸員が、常設展の見どころを展示室でご案内します。予約不要・参加無料。',
  },
  {
    date: '2026.06.28',
    time: '13:00 — 16:00',
    category: 'WORKSHOP',
    title: '拓本ワークショップ',
    description: '銅鐸の文様を和紙に写し取る体験。定員20名・要事前予約。',
  },
  {
    date: '2026.07.12',
    time: '18:30 — 20:00',
    category: 'LECTURE',
    title: '夜間講演会「琳派とは何か」',
    description: '特別展に合わせ、装飾芸術の系譜を研究者が読み解きます。定員100名。',
  },
  {
    date: '2026.08.02',
    time: '10:00 — 12:00',
    category: 'FAMILY',
    title: 'こども歴史教室',
    description: '土器づくりを通して、古代の暮らしにふれる親子向けプログラム。',
  },
]

export default function EventsPage() {
  return (
    <main className="bg-[#2C2A29] min-h-screen overflow-x-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Events"
        title="イベント"
        lead="作品と、もうひとつの出会いを。トークやワークショップを開催しています。"
      />

      <section className="relative px-6 pb-32 md:pb-48">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="space-y-16 md:space-y-20">
            {events.map((ev, i) => (
              <ScrollReveal key={ev.title} delay={i * 100}>
                <article className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 border-t border-[#C5A880]/20 pt-10 md:pt-12">
                  {/* Date column */}
                  <div className="md:w-48 shrink-0">
                    <p
                      className="text-[#F4F1EA] text-lg tracking-widest"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {ev.date}
                    </p>
                    <p
                      className="text-[#F4F1EA]/50 text-xs tracking-widest mt-1"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {ev.time}
                    </p>
                  </div>

                  {/* Detail column */}
                  <div className="flex-1">
                    <span
                      className="text-[#C5A880] text-xs tracking-widest"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {ev.category}
                    </span>
                    <h2
                      className="text-[#F4F1EA] text-xl md:text-2xl tracking-wider-custom mt-3 mb-5"
                      style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                    >
                      {ev.title}
                    </h2>
                    <LineReveal className="w-10 mb-5" origin="left" />
                    <p
                      className="text-[#F4F1EA]/70 text-sm md:text-base leading-relaxed-custom tracking-wide"
                      style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                    >
                      {ev.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
