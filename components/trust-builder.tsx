'use client'

import { useEffect, useRef, useState } from 'react'

export default function TrustBuilder() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    {
      number: '500+',
      label: 'Proyek Sukses',
      icon: '📈',
    },
    {
      number: '15+',
      label: 'Tahun Pengalaman',
      icon: '⏱️',
    },
    {
      number: '99%',
      label: 'Kepuasan Klien',
      icon: '✓',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Mengapa 500+ Klien Mempercayai Kami?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparansi, Integritas, dan Hasil Nyata
          </p>
        </div>

        {/* CHANGE: Updated stats grid styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Komitmen Kami kepada Anda:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Sistem manajemen proyek terukur dengan laporan real-time',
              'Quality control berlapis oleh engineer bersertifikat',
              'Fixed price RAB dengan breakdown detail per item',
              'Transparansi biaya penuh tanpa charge tersembunyi',
              'Tim profesional tersedia 24/7 untuk monitoring',
              'Jaminan penalty jika proyek molor dari jadwal',
            ].map((point, i) => (
              <div key={i} className="flex gap-4">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="text-foreground text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
