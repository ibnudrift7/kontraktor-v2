export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Tentang PT. Sentral Indonesia</h1>
          <p className="text-xl text-gray-100">Membangun Kepercayaan Melalui Profesionalisme & Integritas</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[color:var(--color-primary)]">Lebih dari 15 Tahun Membangun Kepercayaan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                PT. Sentral Indonesia didirikan dengan visi menjadi mitra konstruksi terpercaya yang mengutamakan kualitas, ketepatan waktu, dan transparansi penuh dalam setiap proyek.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dengan pengalaman 15+ tahun, kami telah berhasil menyelesaikan ratusan proyek di Surabaya, Sidoarjo, dan seluruh Jawa Timur mulai dari housing development, welding services, hingga road construction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Motto kami: "Profesional & Modern, Fokus Pelayanan, Kualitas & Ketepatan Waktu" - adalah komitmen kami kepada setiap klien untuk menghasilkan karya konstruksi terbaik.
              </p>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=400&query=construction-workers)', backgroundSize: 'cover' }}></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Proyek Selesai' },
              { number: '15+', label: 'Tahun Pengalaman' },
              { number: '99%', label: 'Kepuasan Klien' },
              { number: '50+', label: 'Tim Profesional' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[color:var(--color-accent)] mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="section-title">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✓', title: 'Profesionalisme', desc: 'Setiap anggota tim bersertifikat dan berpengalaman dalam bidangnya.' },
              { icon: '⚙', title: 'Integritas', desc: 'Transparansi penuh dan komitmen menjunjung janji kepada setiap klien.' },
              { icon: '🎯', title: 'Kualitas', desc: 'Material terstandardisasi SNI/ISO dengan quality control berlapis.' }
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
