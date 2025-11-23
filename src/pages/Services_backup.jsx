export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Layanan Kami</h1>
          <p className="text-xl text-gray-100">Solusi Konstruksi Lengkap untuk Setiap Kebutuhan Anda</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Housing */}
            <div>
              <div className="bg-gray-300 h-64 rounded-lg mb-6" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=400&query=residential-building)', backgroundSize: 'cover' }}></div>
              <h2 className="text-3xl font-bold mb-4 text-[color:var(--color-primary)]">Kontraktor Perumahan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Kami membangun perumahan berkualitas dengan standar internasional. Dari desain arsitektur hingga finishing, setiap detail diperhatikan dengan cermat untuk menghasilkan hunian impian yang nyaman dan bernilai investasi tinggi.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Desain modern dan fungsional</li>
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Material bersertifikat SNI/ISO</li>
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Tepat waktu dan transparan</li>
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Garansi struktur bangunan</li>
              </ul>
            </div>

            {/* Road */}
            <div>
              <div className="bg-gray-300 h-64 rounded-lg mb-6" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=400&query=road-construction)', backgroundSize: 'cover' }}></div>
              <h2 className="text-3xl font-bold mb-4 text-[color:var(--color-primary)]">Kontraktor Jalan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pengalaman puluhan tahun dalam konstruksi jalan dan infrastruktur. Kami menggunakan teknologi terkini, material berkualitas, dan tim berpengalaman untuk menghasilkan jalan yang tahan lama dan aman digunakan.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Aspal dan beton berkualitas</li>
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Teknik kompaksi profesional</li>
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Sistem drainase optimal</li>
                <li className="flex gap-2"><span className="text-[color:var(--color-accent)]">✓</span> Maintenance dan perbaikan</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-[color:var(--color-primary)]">Layanan Tambahan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Konsultasi Teknis</h4>
                <p className="text-gray-600 text-sm">Konsultasi gratis dengan engineer berpengalaman untuk merencanakan proyek Anda dengan detail dan akurat.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Survey & RAB</h4>
                <p className="text-gray-600 text-sm">Survey lokasi menyeluruh dan pembuatan RAB fixed price dalam 24 jam tanpa biaya tambahan.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Manajemen Proyek</h4>
                <p className="text-gray-600 text-sm">Sistem monitoring real-time dan laporan harian untuk transparansi penuh selama proses konstruksi.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Quality Control</h4>
                <p className="text-gray-600 text-sm">Quality control berlapis oleh engineer bersertifikat dengan dokumentasi lengkap setiap tahap.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--color-accent)] py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-[color:var(--color-primary-dark)] mb-6">Siap Mewujudkan Proyek Anda?</h2>
          <a href="https://wa.me/628385456095" className="inline-block bg-[color:var(--color-primary-dark)] text-white px-8 py-3 rounded font-semibold hover:bg-[color:var(--color-primary)] transition">
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}
