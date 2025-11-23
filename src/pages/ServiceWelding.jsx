const weldingServices = [
  {
    title: 'Fabrication Struktur Baja',
    image: '/industrial-welding.jpg',
    desc: 'Pembuatan rangka baja untuk gudang, pabrik, dan area komersial dengan teknik las SMAW/GMAW bersertifikat.',
    highlights: ['Workshop lengkap + overhead crane', 'QC visual & NDT', 'Finishing cat anti-karat']
  },
  {
    title: 'Pipa Industrial & Utilitas',
    image: '/pipeline-welding.jpg',
    desc: 'Instalasi pipa carbon/stainless untuk sistem air, gas, dan fire fighting dengan standar ASME.',
    highlights: ['Procedure Qualification Record (PQR)', 'Hydrotest & pressure test', 'Dokumentasi weld map']
  },
  {
    title: 'Welding On-Site Maintenance',
    image: '/onsite-welding.jpg',
    desc: 'Tim mobile menangani perbaikan struktur, tanki, dan equipment di lokasi produksi tanpa menghentikan operasi.',
    highlights: ['Hot work permit ready', 'Shift 24/7', 'Proteksi area kerja lengkap']
  },
  {
    title: 'Custom Metalwork & Interior',
    image: '/metal-fabrication.jpg',
    desc: 'Pembuatan tangga, railing, canopy, dan elemen dekoratif metal dengan detail estetika presisi.',
    highlights: ['Desain 3D & mockup', 'Proses CNC plasma cutting', 'Finishing powder coating']
  }
]

export default function ServiceWelding() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-20 md:py-28 bg-[color:var(--color-primary)]">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/industrial-welding-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[color:var(--color-primary)]/90 to-transparent"></div>
        <div className="container relative z-10">
          <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--color-accent)] mb-4">Kontraktor Las Industrial</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">Solusi Pengelasan Presisi untuk Proyek Industrial & Komersial</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8">
            Kami menyediakan layanan fabrikasi, instalasi, dan maintenance berbasis welding dengan standar keselamatan tinggi serta dokumentasi lengkap untuk audit industri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/628385456095" className="btn-primary text-center">
              Konsultasi Proyek Welding
            </a>
            <a href="/projects" className="btn-primary-dark border border-white/40 text-center">
              Lihat Portofolio Metalwork
            </a>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-accent)] uppercase tracking-[0.3em] mb-3">Certified Welding Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">Tim Welder Bersertifikat & Peralatan Lengkap</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Semua welder kami memiliki sertifikasi BNSP & ASME IX. Kami mengoperasikan mesin las MIG/TIG otomatis, CNC cutting, hingga rotator untuk pipa diameter besar.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[color:var(--color-primary-dark)]">
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-sm text-gray-500">Welder tersertifikasi</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50">
                  <p className="text-3xl font-bold">12.000 m²</p>
                  <p className="text-sm text-gray-500">Workshop fabrikasi</p>
                </div>
              </div>
            </div>
            <div className="bg-white/80 border border-gray-100 rounded-2xl shadow-xl p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-[color:var(--color-primary)] mb-4">Proses Terkendali</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">01</span> Review gambar shop drawing & welding procedure specification (WPS).</li>
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">02</span> Persiapan material + fit-up menggunakan jig precision.</li>
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">03</span> Proses welding dengan monitoring parameter arus & volt.</li>
                <li className="flex gap-3"><span className="text-[color:var(--color-accent)] font-bold">04</span> NDT, finishing, dan packaging siap kirim/on-site install.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weldingServices.map((service, idx) => (
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
            <h3 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">Kenapa Memilih Layanan Welding Kami?</h3>
            <div className="space-y-4 text-gray-600">
              <p>✓ Dokumentasi lengkap (WPS, PQR, welder logbook) siap audit.</p>
              <p>✓ Safety compliance tinggi dengan SOP hot work dan APD lengkap.</p>
              <p>✓ Dukungan engineering untuk desain connection & value engineering.</p>
              <p>✓ Kapasitas produksi besar + tim mobile untuk emergency repair.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <h4 className="text-xl font-semibold text-[color:var(--color-primary-dark)] mb-4">Service Package</h4>
            <ul className="space-y-3 text-gray-600">
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Desain & fabrikasi struktur baja/pipa.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Instalasi on-site dengan rigging & scaffolding lengkap.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Maintenance kontrak untuk pabrik & infrastruktur.</li>
              <li><span className="text-[color:var(--color-accent)] font-semibold">•</span> Konsultasi teknik sambungan dan penghematan material.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--color-primary-dark)] text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--color-accent)]">Butuh Mitra Welding yang Responsif?</h2>
          <p className="text-gray-100 mb-8 max-w-3xl mx-auto">
            Kirimkan gambar kerja atau jadwalkan survey. Kami siap memberikan estimasi biaya dan timeline dalam 48 jam.
          </p>
          <a href="https://wa.me/628385456095" className="inline-block bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] px-8 py-3 rounded font-semibold hover:bg-[color:var(--color-accent-hover)] transition">
            Konsultasi Welding Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}
