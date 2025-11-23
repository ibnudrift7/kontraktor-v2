const roadServices = [
  {
    title: 'Konstruksi Jalan Raya',
    image: '/road-construction.jpg',
    desc: 'Pembangunan jalan arteri dan kolektor dengan standar Dinas PU, mencakup perkerasan aspal maupun beton mutu tinggi.',
    highlights: ['Survey geoteknik detail', 'Quality control campuran aspal', 'Manajemen lalu lintas selama proyek']
  },
  {
    title: 'Infrastruktur Jembatan & Flyover',
    image: '/bridge-construction.jpg',
    desc: 'Desain dan pelaksanaan jembatan baja/beton pracetak dengan metode erection aman serta kontrol defleksi presisi.',
    highlights: ['Metode launching girder', 'Sensor monitoring struktur', 'Tim erection bersertifikat']
  },
  {
    title: 'Drainase & Sistem Air',
    image: '/drainage-system.jpg',
    desc: 'Pembangunan saluran terbuka/tertutup, box culvert, dan rumah pompa untuk memastikan jalan bebas genangan sepanjang tahun.',
    highlights: ['Hydraulic modeling', 'Pipa HDPE & beton bertulang', 'Maintenance plan terjadwal']
  },
  {
    title: 'Pemeliharaan & Rehabilitasi',
    image: '/pavement-maintenance.jpg',
    desc: 'Perbaikan retak, overlay, dan rekonstruksi lokal dengan metode cold milling agar umur layanan meningkat signifikan.',
    highlights: ['Quick response team', 'Monitoring kondisi perkerasan', 'Dokumentasi sebelum-sesudah']
  }
]

export default function ServiceRoad() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-20 md:py-28 bg-[color:var(--color-primary-dark)]">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/road-construction.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[color:var(--color-primary-dark)]/90 to-transparent"></div>
        <div className="container relative z-10">
          <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--color-accent)] mb-4">Kontraktor Jalan & Infrastruktur</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">Pembangunan Jalan Tahan Lama & Aman Digunakan</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8">
            Kami menangani proyek jalan raya, jembatan, drainase, serta rehabilitasi berkala dengan standar mutu Kementerian PUPR, didukung peralatan modern dan tim bersertifikat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/628385456095" className="btn-primary text-center">
              Konsultasi Proyek Jalan
            </a>
            <a href="/projects" className="btn-primary-dark border border-white/40 text-center">
              Lihat Portofolio Infrastruktur
            </a>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-accent)] uppercase tracking-[0.3em] mb-3">Metodologi EPC</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">Kontrol Proses 360° untuk Jalan Berkualitas</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kami memadukan desain geometrik, perhitungan kapasitas, hingga traffic management plan untuk menjaga keselamatan pengguna selama dan setelah proyek selesai.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[color:var(--color-primary-dark)]">
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-3xl font-bold">200 km</p>
                  <p className="text-sm text-gray-500">Jalan dibangun / tahun</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm text-gray-500">Jembatan & flyover</p>
                </div>
              </div>
            </div>
            <div className="bg-white/80 border border-gray-100 rounded-2xl shadow-xl p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-[color:var(--color-primary)] mb-4">Tahapan Utama</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">01</span> Topografi & soil test untuk menentukan struktur perkerasan.</li>
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">02</span> Desain detail + RAB transparan berbasis volume nyataan.</li>
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">03</span> Produksi aspal onsite dengan asphalt mixing plant tersertifikasi.</li>
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">04</span> Uji mutu menyeluruh (Marshall, core drill) sebelum serah terima.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadServices.map((service, idx) => (
              <div key={service.title} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
                <div
                  className="h-60 w-full bg-gray-200"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">0{idx + 1}</p>
                  <h3 className="text-2xl font-bold text-[color:var(--color-primary)] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[color:var(--color-accent)]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Added Value */}
      <section className="py-16 md:py-24 bg-gray-50 border-t-4 border-[color:var(--color-accent)]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">Keunggulan Kontraktor Jalan Kami</h3>
            <div className="space-y-4 text-gray-600">
              <p>✓ Fleet lengkap (grader, vibro roller, paver) sehingga durasi pengerjaan lebih singkat.</p>
              <p>✓ Tim traffic management menjaga arus kendaraan tetap lancar.</p>
              <p>✓ Integrasi BIM untuk visualisasi jembatan dan konflik utilitas.</p>
              <p>✓ Garansi pemeliharaan 12 bulan setelah serah terima.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <h4 className="text-xl font-semibold text-[color:var(--color-primary-dark)] mb-4">Service Package</h4>
            <ul className="space-y-3 text-gray-600">
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Perencanaan & dokumen tender proyek jalan.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Pelaksanaan konstruksi lengkap beserta utilitas.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Monitoring & evaluasi berkala pascapembangunan.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Paket pemeliharaan jalan 6-18 bulan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--color-accent)]">Siap Tingkatkan Infrastruktur Kota Anda?</h2>
          <p className="text-gray-100 mb-8 max-w-3xl mx-auto">
            Hubungi kami untuk survey lokasi dan proposal teknis lengkap dalam 72 jam. Tim ahli kami siap turun ke lapangan segera.
          </p>
          <a href="https://wa.me/628385456095" className="inline-block bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] px-8 py-3 rounded font-semibold hover:bg-[color:var(--color-accent-hover)] transition">
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}
