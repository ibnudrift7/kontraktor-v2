'use client'

import { useEffect, useRef, useState } from 'react'

export default function WhatWeDo() {
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
      description: 'Dengan 15+ tahun pengalaman dalam renovasi residensial, kami menghadirkan desain inovatif dan hasil berkualitas tinggi.',
      image: '/placeholder.svg?key=abyol',
    },
    {
      title: 'Pekerjaan Metal & Atap',
      description: 'Keahlian kami dalam metal roofing menjamin konstruksi atap yang kokoh dan tahan lama untuk semua musim.',
      image: '/placeholder.svg?key=56gzu',
    },
    {
      title: 'Konsultasi Konstruksi',
      description: 'Tim profesional kami siap memberikan saran konstruksi terbaik untuk memastikan proyek Anda berjalan lancar.',
      image: '/placeholder.svg?key=epbaq',
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Apa Yang Kami Lakukan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <button className="text-accent font-bold hover:text-accent/80 transition">
                LIHAT DETAIL →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
