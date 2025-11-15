'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const news = [
    {
      date: 'November 15, 2025',
      title: 'PT. Sentral Indonesia Raih Penghargaan Konstruksi Terbaik',
      excerpt: 'Prestasi gemilang dari perusahaan kami dalam kategori kualitas konstruksi terbaik tahun ini.',
      image: '/placeholder.svg?key=1zpqs',
    },
    {
      date: 'November 10, 2025',
      title: 'Proyek Housing Development Baru Dimulai',
      excerpt: 'Pembangunan kompleks perumahan mewah di Surabaya dengan standar internasional telah dimulai.',
      image: '/placeholder.svg?key=5lo63',
    },
    {
      date: 'November 5, 2025',
      title: 'Tim Kami Lulus Sertifikasi ISO Konstruksi',
      description: 'Seluruh tim PT. Sentral Indonesia berhasil meraih sertifikasi ISO untuk standar konstruksi global.',
      image: '/placeholder.svg?key=o2cub',
    },
  ]

  return (
    <section ref={sectionRef} id="news" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Berita Terkini</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.excerpt}</p>
              <Button variant="link" className="p-0 text-accent font-semibold">
                Baca Selengkapnya →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
