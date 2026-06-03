"use client"

import { ScrollReveal, LineReveal } from './scroll-reveal'
import Image from 'next/image'

interface CollectionItem {
  id: number
  era: string
  title: string
  description: string
  image: string
}

const collections: CollectionItem[] = [
  {
    id: 1,
    era: '弥生時代中期',
    title: '銅鐸',
    description: '祭祀に用いられたとされる青銅器。その沈黙が、信仰を語る。',
    image: '/images/collection-01.png',
  },
  {
    id: 2,
    era: '平安時代',
    title: '古今和歌集 写本',
    description: '仮名の美が宿る千年前の一頁。',
    image: '/images/collection-02.png',
  },
  {
    id: 3,
    era: '鎌倉時代',
    title: '太刀 銘 正宗',
    description: '鉄と炎が生んだ、静謐なる凶器の美。',
    image: '/images/collection-03.png',
  },
  {
    id: 4,
    era: '江戸時代',
    title: '琳派屏風',
    description: '金箔の上に咲く、永遠の四季。',
    image: '/images/collection-04.png',
  },
]

export function CollectionSection() {
  return (
    <section className="relative py-32 md:py-48 lg:py-64 px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-36">
          <LineReveal className="w-24 mx-auto mb-12" origin="center" />
          
          <ScrollReveal delay={100}>
            <h2 
              className="text-[#C5A880] text-sm tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Collection
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p 
              className="text-[#F4F1EA] text-2xl md:text-3xl tracking-wider-custom"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              収蔵品
            </p>
          </ScrollReveal>
        </div>
        
        {/* Collection Items - Zigzag Layout */}
        <div className="space-y-32 md:space-y-48 lg:space-y-64">
          {collections.map((item, index) => (
            <CollectionCard 
              key={item.id} 
              item={item} 
              isReversed={index % 2 === 1}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CollectionCardProps {
  item: CollectionItem
  isReversed: boolean
  delay: number
}

function CollectionCard({ item, isReversed, delay }: CollectionCardProps) {
  return (
    <div 
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
    >
      {/* Image */}
      <ScrollReveal delay={delay} className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] bg-[#3a3836] overflow-hidden collection-image">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-600"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Fallback gradient for missing images */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a3836] to-[#2C2A29] -z-10" />
        </div>
      </ScrollReveal>
      
      {/* Text Content */}
      <div className={`w-full lg:w-1/2 ${isReversed ? 'lg:text-right' : 'lg:text-left'}`}>
        <ScrollReveal delay={delay + 100}>
          <span 
            className="text-[#C5A880] text-xs tracking-widest"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {item.era}
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={delay + 200}>
          <h3 
            className="text-[#F4F1EA] text-xl md:text-2xl lg:text-3xl tracking-wider-custom mt-4 mb-6"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            {item.title}
          </h3>
        </ScrollReveal>
        
        <ScrollReveal delay={delay + 300}>
          <LineReveal 
            className={`w-10 mb-6 ${isReversed ? 'lg:ml-auto' : ''}`} 
            origin={isReversed ? 'right' : 'left'} 
          />
        </ScrollReveal>
        
        <ScrollReveal delay={delay + 400}>
          <p 
            className="text-[#F4F1EA]/70 text-sm md:text-base leading-relaxed-custom tracking-wide"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            {item.description}
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}
