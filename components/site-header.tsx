"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navItems } from '@/lib/nav'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[#2C2A29]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-[#F4F1EA] text-base tracking-wider-custom"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            歴史館
          </span>
          <span
            className="text-[#C5A880] text-[10px] tracking-widest"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            MUSEUM OF HISTORY
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide link-underline transition-colors duration-300 ${
                  active ? 'text-[#C5A880]' : 'text-[#F4F1EA]/70 hover:text-[#F4F1EA]'
                }`}
                style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
