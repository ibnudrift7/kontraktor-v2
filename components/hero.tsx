'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6283854560095', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 mt-16">
      {/* CHANGE: Updated background with construction imagery overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%231e3a5f" width="1200" height="600"/%3E%3Defs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%231e3a5f;stop-opacity:0.9" /%3E%3Cstop offset="100%25" style="stop-color:%23142d47;stop-opacity:0.95" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="1200" height="600"/%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="text-accent text-sm font-bold tracking-widest uppercase px-4 py-2 bg-accent/10 rounded-full">
            Profesional & Modern
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Proyek Konstruksi Tepat Waktu, Tepat Mutu
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto text-balance">
          Lebih dari 15 tahun membangun kepercayaan kontraktor profesional. Dari housing
          development, welding services, hingga road construction — kami jamin kualitas
          premium dengan transparansi penuh.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Hubungi Kami Sekarang
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
          >
            Konsultasi Gratis
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
