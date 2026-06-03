"use client"

import { ScrollReveal, LineReveal } from './scroll-reveal'

export function IntroSection() {
  return (
    <section className="relative py-32 md:py-48 lg:py-64 px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Section Line */}
        <LineReveal className="w-24 mx-auto mb-20 md:mb-28" origin="center" />
        
        {/* Introduction Text */}
        <div className="space-y-8 md:space-y-10">
          <ScrollReveal delay={100}>
            <p 
              className="text-[#F4F1EA] text-lg md:text-xl lg:text-2xl leading-relaxed-custom tracking-wider-custom"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              ここは、時間が堆積する場所。
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p 
              className="text-[#F4F1EA]/80 text-base md:text-lg leading-relaxed-custom tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              ひとつの土器に宿る、名もなき人の祈り。
              <br />
              一枚の文書が伝える、かつての世界の輪郭。
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p 
              className="text-[#F4F1EA]/80 text-base md:text-lg leading-relaxed-custom tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              それらは沈黙のなかで、
              <br />
              訪れる者を静かに待っている。
            </p>
          </ScrollReveal>
          
          <div className="pt-8 md:pt-12">
            <LineReveal className="w-12 mx-auto" origin="center" delay={400} />
          </div>
          
          <ScrollReveal delay={500}>
            <p 
              className="text-[#F4F1EA] text-base md:text-lg leading-relaxed-custom tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              私たちは展示する。
              <br />
              あなたは対話する。
              <br />
              そして歴史は、いま再び動きはじめる。
            </p>
          </ScrollReveal>
        </div>
        
        {/* Bottom Line */}
        <LineReveal className="w-24 mx-auto mt-20 md:mt-28" origin="center" delay={600} />
      </div>
    </section>
  )
}
