'use client'

import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Yellow CTA Banner */}
      <div className="bg-accent text-accent-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Jangan Biarkan Proyek Anda Menjadi Beban</h3>
            <p className="text-accent-foreground/80">Hubungi kami untuk konsultasi gratis dan penawaran terbaik.</p>
          </div>
          <Button
            size="lg"
            onClick={() => window.open('https://wa.me/6283854560095', '_blank')}
            className="bg-accent-foreground text-accent font-bold hover:opacity-90"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Hubungi Sekarang
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-accent-foreground">
                  SI
                </div>
                <h4 className="font-bold">PT. Sentral Indonesia</h4>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Kontraktor profesional dengan 15+ tahun pengalaman dalam membangun kepercayaan dan kualitas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Beranda</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Tentang Kami</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Proyek</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Karir</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Renovasi Rumah</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Metal Roofing</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Konsultasi</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="text-primary-foreground/70">0838 5456 0095</span>
                </li>
                <li className="flex gap-2 items-start">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-primary-foreground/70">info@sentralindonesia.co.id</span>
                </li>
                <li className="flex gap-2 items-start">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  <span className="text-primary-foreground/70">Surabaya, Jawa Timur</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/70 text-sm">
                &copy; {currentYear} PT. Sentral Indonesia. Hak cipta dilindungi.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Privacy Policy</a>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Syarat & Ketentuan</a>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
