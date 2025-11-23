import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/placeholder.svg?height=800&width=1200&query=construction-site)' }}></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Proyek Konstruksi Tepat Waktu, Tepat Mutu, Tepat Janji
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Tanpa Kejutan Biaya di Surabaya & Sidoarjo
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/628385456095" className="btn-primary text-center">
                ✓ Hubungi Via WhatsApp
              </a>
              <Link to="/contact" className="btn-primary-dark border-2 border-[color:var(--color-accent)] text-center bg-transparent hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-primary-dark)]">
                Gratis Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="section-title">Layanan Unggulan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kontraktor Perumahan',
                desc: 'Kami membangun hunian berkualitas dengan standar material terbaik dan desain modern yang sesuai kebutuhan Anda.',
                image: '/housing-construction.jpg'
              },
              {
                title: 'Kontraktor Jalan',
                desc: 'Pengalaman puluhan tahun dalam konstruksi jalan dengan teknologi terkini dan material berkualitas SNI.',
                image: '/road-construction.jpg'
              },
              {
                title: 'Konsultasi Proyek',
                desc: 'Tim ahli siap membantu merencanakan proyek Anda dengan RAB akurat dan strategi eksekusi yang tepat.',
                image: '/consultation-meeting.png'
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-300" style={{ backgroundImage: `url('${service.image}')`, backgroundSize: 'cover' }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <a href="#" className="text-[color:var(--color-accent)] font-semibold hover:underline">
                    Pelajari Lebih →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yellow Banner */}
      <section className="bg-[color:var(--color-accent)] py-12 md:py-16">
        <div className="container text-center">
          <p className="text-sm font-semibold text-[color:var(--color-primary)] mb-2">BERGABUNG DENGAN RIBUAN KLIEN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary-dark)] mb-6">
            Kontraktor & Manajer Konstruksi Terpercaya Sejak 1989
          </h2>
          <a href="https://wa.me/628385456095" className="inline-block bg-[color:var(--color-primary-dark)] text-white px-8 py-3 rounded font-semibold hover:bg-[color:var(--color-primary)] transition">
            Dapatkan Penawaran
          </a>
        </div>
      </section>

      {/* Trust Builder - FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Mengapa 500+ Klien Mempercayai Kami?</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Bagaimana saya tahu proyek tidak akan molor?',
                a: 'Kami menggunakan sistem manajemen proyek terukur dengan laporan real-time. Progress dapat Anda akses 24/7 via aplikasi, dengan jaminan serah terima tepat jadwal atau kami bayar penalty.'
              },
              {
                q: 'Bagaimana jaminan kualitas sesuai spesifikasi?',
                a: 'Setiap material dan hasil kerja melalui quality control berlapis oleh engineer bersertifikat dengan 10+ tahun pengalaman. Inspeksi bulanan dan final walkthrough memastikan standar premium terpenuhi 100%.'
              },
              {
                q: 'Bagaimana agar biaya tidak bengkak di tengah proyek?',
                a: 'RAB kami bersifat fixed price dengan breakdown detail per item. Jika ada perubahan scope, kami memberikan penawaran written dan approval formal sebelum eksekusi. Transparansi biaya penuh tanpa markup tersembunyi.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3 text-[color:var(--color-primary)]">Q: {item.q}</h3>
                <p className="text-gray-600 leading-relaxed">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Jangan Biarkan Proyek Anda Menjadi Beban</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Pilih partner konstruksi yang telah membuktikan profesionalisme melalui ribuan proyek sukses di Surabaya, Sidoarjo, dan sekitarnya.
          </p>
          <a href="https://wa.me/628385456095" className="inline-block bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition">
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}
