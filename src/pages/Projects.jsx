export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Portfolio Proyek Kami</h1>
          <p className="text-xl text-gray-100">Ratusan Proyek Sukses di Surabaya dan Jawa Timur</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="section-title">Proyek Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Perumahan Bumi Sentosa',
                category: 'Housing Development',
                image: '/housing-development.jpg',
                desc: 'Perumahan modern dengan 150 unit hunian dan fasilitas lengkap di Sidoarjo.'
              },
              {
                title: 'Renovasi Jalan Raya Surabaya',
                category: 'Road Construction',
                image: '/road-project.jpg',
                desc: 'Perbaikan jalan utama sepanjang 5km dengan aspal premium dan drainase modern.'
              },
              {
                title: 'Pembangunan Gudang Logistik',
                category: 'Industrial Building',
                image: '/industrial-warehouse.jpg',
                desc: 'Konstruksi gudang logistik 5000m² dengan struktur baja berkualitas tinggi.'
              },
              {
                title: 'Proyek Renovasi Perumahan',
                category: 'Renovation',
                image: '/renovation-project.jpg',
                desc: 'Renovasi 50 rumah existing dengan upgrade fasilitas dan desain interior modern.'
              },
              {
                title: 'Pembangunan Jembatan',
                category: 'Infrastructure',
                image: '/bridge-construction.jpg',
                desc: 'Konstruksi jembatan penghubung dengan material beton berkualitas dan antisismik.'
              },
              {
                title: 'Proyek Komersial Plaza',
                category: 'Commercial Building',
                image: '/commercial-plaza.jpg',
                desc: 'Pembangunan plaza komersial modern dengan 10 lantai dan fasilitas modern.'
              }
            ].map((project, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-300" style={{ backgroundImage: `url('${project.image}')`, backgroundSize: 'cover' }}></div>
                <div className="p-6">
                  <p className="text-sm text-[color:var(--color-accent)] font-semibold mb-2">{project.category}</p>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[color:var(--color-primary)] text-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-accent)] mb-2">500+</div>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-accent)] mb-2">15+</div>
              <p>Tahun Pengalaman</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-accent)] mb-2">99%</div>
              <p>Tepat Waktu</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-accent)] mb-2">50+</div>
              <p>Tim Profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-6">Ingin Proyek Anda Menjadi Portofolio Berikutnya?</h2>
          <a href="https://wa.me/628385456095" className="inline-block btn-primary">
            Konsultasi Gratis
          </a>
        </div>
      </section>
    </div>
  )
}
