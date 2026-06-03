"use client"

import { useEffect, useState } from 'react'

interface PageHeroProps {
  /** 英語の小見出し（例: Collection） */
  eyebrow: string
  /** 日本語タイトル（例: 収蔵品） */
  title: string
  /** リード文 */
  lead?: string
}

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`h-px w-24 bg-[#C5A880] mx-auto mb-12 ${
            mounted ? 'animate-line-expand' : 'opacity-0'
          }`}
        />

        <p
          className={`text-[#C5A880] text-sm tracking-widest mb-4 opacity-0 ${
            mounted ? 'animate-fade-in animate-delay-300' : ''
          }`}
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          {eyebrow}
        </p>

        <h1
          className={`text-[#F4F1EA] text-3xl md:text-5xl tracking-wider-custom opacity-0 ${
            mounted ? 'animate-fade-in animate-delay-600' : ''
          }`}
          style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
        >
          {title}
        </h1>

        {lead && (
          <p
            className={`text-[#F4F1EA]/70 text-sm md:text-base leading-relaxed-custom tracking-wide mt-8 max-w-2xl mx-auto opacity-0 ${
              mounted ? 'animate-fade-in animate-delay-900' : ''
            }`}
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
