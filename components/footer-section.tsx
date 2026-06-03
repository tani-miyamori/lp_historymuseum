"use client"

import Link from 'next/link'
import { ScrollReveal, LineReveal } from './scroll-reveal'
import { navItems } from '@/lib/nav'

export function FooterSection() {
  return (
    <footer className="relative py-24 md:py-32 px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <LineReveal className="w-24 mx-auto mb-16" origin="center" />
        
        <ScrollReveal delay={100}>
          <p 
            className="text-[#F4F1EA] text-xl md:text-2xl tracking-wider-custom mb-4"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            歴史館
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p 
            className="text-[#C5A880] text-xs tracking-widest mb-16"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            MUSEUM OF HISTORY
          </p>
        </ScrollReveal>
        
        {/* Navigation Links */}
        <ScrollReveal delay={300}>
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#F4F1EA]/60 text-sm tracking-wide link-underline hover:text-[#F4F1EA] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </ScrollReveal>
        
        <LineReveal className="w-full max-w-md mx-auto mb-12" origin="center" delay={400} />
        
        <ScrollReveal delay={500}>
          <p 
            className="text-[#F4F1EA]/40 text-xs tracking-widest"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            &copy; 2024 MUSEUM OF HISTORY. ALL RIGHTS RESERVED.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  )
}
