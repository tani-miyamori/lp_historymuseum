"use client"

import { ScrollReveal, LineReveal } from './scroll-reveal'

export function VisitSection() {
  return (
    <section className="relative py-32 md:py-48 lg:py-64 px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <LineReveal className="w-24 mx-auto mb-12" origin="center" />
          
          <ScrollReveal delay={100}>
            <h2 
              className="text-[#C5A880] text-sm tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Visit
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p 
              className="text-[#F4F1EA] text-2xl md:text-3xl tracking-wider-custom"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              ご来館案内
            </p>
          </ScrollReveal>
        </div>
        
        {/* Visit Info Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Opening Hours */}
          <ScrollReveal delay={300}>
            <div className="space-y-6">
              <h3 
                className="text-[#C5A880] text-xs tracking-widest"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                HOURS
              </h3>
              <LineReveal className="w-8" origin="left" delay={100} />
              <div className="space-y-3">
                <p 
                  className="text-[#F4F1EA] text-base tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  10:00 — 18:00
                </p>
                <p 
                  className="text-[#F4F1EA]/60 text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  最終入館 17:30
                </p>
                <p 
                  className="text-[#F4F1EA]/60 text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  休館日：月曜日（祝日の場合は翌日）
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Admission */}
          <ScrollReveal delay={400}>
            <div className="space-y-6">
              <h3 
                className="text-[#C5A880] text-xs tracking-widest"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                ADMISSION
              </h3>
              <LineReveal className="w-8" origin="left" delay={200} />
              <div className="space-y-3">
                <p 
                  className="text-[#F4F1EA] text-base tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  一般 1,200円
                </p>
                <p 
                  className="text-[#F4F1EA]/60 text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  大学生・高校生 800円
                </p>
                <p 
                  className="text-[#F4F1EA]/60 text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  中学生以下 無料
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Access */}
          <ScrollReveal delay={500}>
            <div className="space-y-6">
              <h3 
                className="text-[#C5A880] text-xs tracking-widest"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                ACCESS
              </h3>
              <LineReveal className="w-8" origin="left" delay={300} />
              <div className="space-y-3">
                <p 
                  className="text-[#F4F1EA] text-base tracking-wide leading-relaxed"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  〒100-0001
                  <br />
                  東京都千代田区千代田1-1
                </p>
                <p 
                  className="text-[#F4F1EA]/60 text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  東京メトロ 大手町駅より徒歩5分
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Contact */}
          <ScrollReveal delay={600}>
            <div className="space-y-6">
              <h3 
                className="text-[#C5A880] text-xs tracking-widest"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                CONTACT
              </h3>
              <LineReveal className="w-8" origin="left" delay={400} />
              <div className="space-y-3">
                <p 
                  className="text-[#F4F1EA] text-base tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  03-0000-0000
                </p>
                <p 
                  className="text-[#F4F1EA]/60 text-sm tracking-wide link-underline inline-block cursor-pointer"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  info@museum-history.jp
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
