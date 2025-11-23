'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function FeaturedServices() {
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

  const services = [
    {
      title: 'Renovasi Rumah',
      description: 'Transformasi rumah Anda dengan desain modern dan material berkualitas tinggi.',
      image: '/placeholder.svg?key=hddc7',
      hasVideo: true,
    },
    {
      title: 'Pekerjaan Tim Efektif',
      description: 'Koordinasi sempurna antar departemen untuk hasil maksimal dalam setiap proyek.',
      image: '/placeholder.svg?key=41y5j',
      hasVideo: true,
    },
    {
      title: 'Pembangunan Hijau',
      description: 'Konstruksi berkelanjutan dengan teknologi ramah lingkungan untuk masa depan lebih baik.',
      image: '/placeholder.svg?key=twgnt',
      hasVideo: false,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Layanan Unggulan Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className={`overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 bg-muted overflow-hidden group">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {service.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-accent p-3 rounded-full">
                      <svg className="w-6 h-6 fill-accent text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="link" className="p-0 text-accent font-semibold">
                  Lihat Detail →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
