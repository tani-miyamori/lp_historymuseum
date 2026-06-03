"use client"

import { useEffect, useRef, useState } from 'react'

// 要素の中心位置（ビューポート比 0=上端, 1=下端）から不透明度を算出する。
// 中央60%（0.2〜0.8）は完全表示、上下20%の帯で 0→1 にフェードする。
function opacityFromRatio(ratio: number): number {
  if (ratio < 0.2) return clamp01(ratio / 0.2)
  if (ratio > 0.8) return clamp01((1 - ratio) / 0.2)
  return 1
}

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v))
}

// スクロールに連動して要素の不透明度（0〜1）を返す共通フック
function useScrollProgress(ref: React.RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const ratio = center / window.innerHeight
      setProgress(opacityFromRatio(ratio))
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])

  return progress
}

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(ref)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 40}px)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

interface LineRevealProps {
  className?: string
  origin?: 'left' | 'right' | 'center'
  delay?: number
}

export function LineReveal({ className = '', origin = 'center' }: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(ref)

  return (
    <div
      ref={ref}
      className={`h-px bg-[#C5A880] ${className}`}
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: origin,
        willChange: 'transform',
      }}
    />
  )
}
