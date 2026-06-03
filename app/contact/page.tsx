"use client"

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { FooterSection } from '@/components/footer-section'
import { ScrollReveal, LineReveal } from '@/components/scroll-reveal'

const labelStyle = { fontFamily: 'var(--font-noto-serif-jp), serif' }

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 実送信は未実装。デモとして送信完了状態に切り替える。
    setSubmitted(true)
  }

  return (
    <main className="bg-[#2C2A29] min-h-screen overflow-x-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        lead="展示・取材・団体でのご来館など、お気軽にお問い合わせください。"
      />

      <section className="relative px-6 pb-32 md:pb-48">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          {submitted ? (
            <ScrollReveal>
              <div className="text-center py-16">
                <LineReveal className="w-12 mx-auto mb-10" origin="center" />
                <p
                  className="text-[#F4F1EA] text-lg md:text-xl tracking-wider-custom leading-relaxed-custom"
                  style={labelStyle}
                >
                  お問い合わせを受け付けました。
                  <br />
                  担当者より追ってご連絡いたします。
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-10">
                <Field id="name" label="お名前" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-[#F4F1EA] tracking-wide outline-none focus:border-[#C5A880] transition-colors duration-300"
                    style={labelStyle}
                  />
                </Field>

                <Field id="email" label="メールアドレス" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-[#F4F1EA] tracking-wide outline-none focus:border-[#C5A880] transition-colors duration-300"
                    style={labelStyle}
                  />
                </Field>

                <Field id="subject" label="件名">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-[#F4F1EA] tracking-wide outline-none focus:border-[#C5A880] transition-colors duration-300"
                    style={labelStyle}
                  />
                </Field>

                <Field id="message" label="お問い合わせ内容" required>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-[#F4F1EA] tracking-wide leading-relaxed-custom outline-none focus:border-[#C5A880] transition-colors duration-300 resize-none"
                    style={labelStyle}
                  />
                </Field>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="inline-block border border-[#C5A880] text-[#C5A880] text-sm tracking-widest px-12 py-4 hover:bg-[#C5A880] hover:text-[#2C2A29] transition-colors duration-300"
                    style={labelStyle}
                  >
                    送信する
                  </button>
                </div>
              </form>
            </ScrollReveal>
          )}

          {/* Direct contact */}
          <ScrollReveal delay={200}>
            <div className="mt-24 text-center">
              <LineReveal className="w-12 mx-auto mb-10" origin="center" />
              <p
                className="text-[#C5A880] text-xs tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                DIRECT
              </p>
              <p className="text-[#F4F1EA] text-base tracking-wide" style={labelStyle}>
                03-0000-0000
              </p>
              <p className="text-[#F4F1EA]/60 text-sm tracking-wide mt-2" style={labelStyle}>
                info@museum-history.jp
              </p>
              <p className="text-[#F4F1EA]/40 text-xs tracking-wide mt-4" style={labelStyle}>
                受付時間 10:00 — 17:00（休館日を除く）
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}

interface FieldProps {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}

function Field({ id, label, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[#F4F1EA]/70 text-sm tracking-wider-custom mb-3"
        style={labelStyle}
      >
        {label}
        {required && <span className="text-[#C5A880] ml-2">*</span>}
      </label>
      {children}
    </div>
  )
}
