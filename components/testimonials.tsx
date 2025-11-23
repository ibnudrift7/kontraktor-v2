'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Direktur PT. Maju Sejahtera',
      content: 'Profesionalisme tim PT. Sentral Indonesia luar biasa. Proyek selesai tepat waktu dengan kualitas yang memuaskan.',
      rating: 5,
      image: '/placeholder.svg?key=d9636',
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Owner Development Properti',
      content: 'Dari awal konsultasi hingga project completion, mereka sangat responsif dan transparan dalam komunikasi. Highly recommended!',
      rating: 5,
      image: '/placeholder.svg?key=79n7i',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Testimoni Klien</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className={`p-8 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, idx) => (
                  <span key={idx} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
