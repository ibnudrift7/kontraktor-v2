const buildingServices = [
  {
    title: 'Renovasi Rumah Modern',
    image: '/home-renovation-modern.jpg',
    desc: 'Transformasi total hunian eksisting menjadi rumah modern dengan tata ruang optimal, pencahayaan natural, dan finishing premium.',
    highlights: ['Desain arsitektur kustom', 'Material SNI & eco-friendly', 'Monitoring progres real-time']
  },
  {
    title: 'Bangunan Hijau Berkelanjutan',
    image: '/green-building-sustainable.jpg',
    desc: 'Pembangunan gedung komersial dan fasilitas publik yang hemat energi dengan sistem sirkulasi udara dan air efisien.',
    highlights: ['Sertifikasi green building', 'Integrasi panel surya & rainwater system', 'Simulasi energi sejak tahap desain']
  },
  {
    title: 'Interior & Fit-Out Premium',
    image: '/house-renovation-interior.jpg',
    desc: 'Pengerjaan interior detail untuk kantor, retail, dan hospitality dengan standar estetika tinggi dan instalasi presisi.',
    highlights: ['Shop drawing lengkap', 'Material curated & tested', 'Serah terima siap pakai']
  },
  {
    title: 'Pengembangan Perumahan Terpadu',
    image: '/housing-development.jpg',
    desc: 'Layanan EPC untuk kawasan perumahan mulai dari land clearing, infrastruktur dasar, hingga unit siap huni.',
    highlights: ['Perencanaan masterplan', 'Kontrol mutu lintas tahap', 'Tim onsite dedicated']
  }
]

export default function ServiceBuilding() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-20 md:py-28 bg-[color:var(--color-primary)]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/housing-development.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary-dark)]/90 via-[color:var(--color-primary)]/90 to-transparent"></div>
        <div className="container relative z-10">
          <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--color-accent)] mb-4">Kontraktor Bangunan</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">Solusi Terpadu untuk Pembangunan & Renovasi Bangunan</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
            Kami merancang dan mengeksekusi proyek bangunan dengan pendekatan design & build, memastikan ketepatan anggaran,
            jadwal, serta standar mutu premium untuk hunian, komersial, dan fasilitas publik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/628385456095" className="btn-primary text-center">
              Konsultasi Proyek Bangunan
            </a>
            <a href="/projects" className="btn-primary-dark border border-white/40 text-center">
              Lihat Portofolio Kami
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-accent)] uppercase tracking-[0.3em] mb-3">Pendekatan Design & Build</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">Kami Mengelola Setiap Tahap Pembangunan</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dari perencanaan konsep, pengurusan perizinan, konstruksi struktur, hingga interior final, tim kami memastikan
                koordinasi lintas disiplin berjalan mulus sehingga biaya terkendali dan mutu tercapai.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[color:var(--color-primary-dark)]">
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-3xl font-bold">150+</p>
                  <p className="text-sm text-gray-500">Proyek bangunan selesai</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-gray-500">Tingkat kepuasan klien</p>
                </div>
              </div>
            </div>
            <div className="bg-white/80 border border-gray-100 rounded-2xl shadow-xl p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-[color:var(--color-primary)] mb-4">Langkah Eksekusi</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[color:var(--color-accent)] font-bold">01</span>
                  Workshop kebutuhan & finalisasi konsep
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--color-accent)] font-bold">02</span>
                  Detail engineering design & RAB transparan
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--color-accent)] font-bold">03</span>
                  Konstruksi terjadwal dengan laporan mingguan
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--color-accent)] font-bold">04</span>
                  Handover, dokumentasi, dan after service
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buildingServices.map((service, idx) => (
              <div key={service.title} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
                <div
                  className="h-64 w-full bg-gray-200"
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
            <h3 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">Kekuatan Tim Kontraktor Bangunan Kami</h3>
            <div className="space-y-4 text-gray-600">
              <p>✓ Engineer bersertifikat menangani quality control mulai dari struktur, MEP, hingga finishing detail.</p>
              <p>✓ Proses procurement transparan dengan vendor terkurasi agar biaya material tetap efisien.</p>
              <p>✓ Sistem pelaporan digital (foto & video progres) setiap minggu langsung ke klien.</p>
              <p>✓ Garansi pemeliharaan pasca serah terima untuk memastikan bangunan siap beroperasi.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <h4 className="text-xl font-semibold text-[color:var(--color-primary-dark)] mb-4">Service Package</h4>
            <ul className="space-y-3 text-gray-600">
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Pre-construction: survey lahan, studi struktur, hingga perizinan IMB/PBG.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Construction management dengan metoda lean untuk mencegah keterlambatan.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Commissioning & training operasional bangunan.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Paket maintenance opsional 6-12 bulan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--color-primary-dark)] text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--color-accent)]">Butuh Kontraktor Bangunan yang Bisa Diandalkan?</h2>
          <p className="text-gray-100 mb-8 max-w-3xl mx-auto">
            Jadwalkan survey lapangan dan dapatkan RAB transparan dalam 48 jam. Tim kami siap membantu mulai dari ide hingga bangunan siap digunakan.
          </p>
          <a href="https://wa.me/628385456095" className="inline-block bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] px-8 py-3 rounded font-semibold hover:bg-[color:var(--color-accent-hover)] transition">
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}
