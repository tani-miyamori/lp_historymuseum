"use client"

import { useEffect, useState } from 'react'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Top Gold Line */}
        <div 
          className={`h-px w-32 md:w-48 bg-[#C5A880] mx-auto mb-16 md:mb-24 ${
            mounted ? 'animate-line-expand' : 'opacity-0'
          }`}
        />
        
        {/* Main Copy */}
        <h1 
          className={`text-[#F4F1EA] text-4xl md:text-6xl lg:text-7xl tracking-wider-custom mb-8 md:mb-12 opacity-0 ${
            mounted ? 'animate-fade-in animate-delay-600' : ''
          }`}
          style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
        >
          時を、歩く。
        </h1>
        
        {/* Sub Copy */}
        <p 
          className={`text-[#F4F1EA]/70 text-sm md:text-base tracking-wider-custom opacity-0 ${
            mounted ? 'animate-fade-in animate-delay-900' : ''
          }`}
          style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
        >
          千年の記憶が、いま静かに語りはじめる
        </p>
        
        {/* Bottom Gold Line */}
        <div 
          className={`h-px w-32 md:w-48 bg-[#C5A880] mx-auto mt-16 md:mt-24 ${
            mounted ? 'animate-line-expand animate-delay-1200' : 'opacity-0'
          }`}
        />
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 ${
          mounted ? 'animate-fade-in animate-delay-1200' : ''
        }`}
      >
        <span 
          className="text-[#C5A880] text-xs tracking-widest"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C5A880] to-transparent" />
      </div>
    </section>
  )
}
