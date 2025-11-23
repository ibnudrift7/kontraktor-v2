import { useState } from 'react'

const projectCategories = [
  { key: 'building', label: 'Kontraktor Bangunan' },
  { key: 'road', label: 'Kontraktor Jalan' },
  { key: 'welding', label: 'Kontraktor Las Industrial' }
]

const projectData = {
  building: [
    {
      title: 'Perumahan Bumi Sentosa',
      location: 'Sidoarjo',
      scope: '150 unit hunian + club house',
      image: '/housing-development.jpg',
      desc: 'Pengembangan kawasan residensial terpadu dengan infrastruktur internal lengkap dan standar konstruksi premium.'
    },
    {
      title: 'Renovasi Rumah Tropis',
      location: 'Surabaya Barat',
      scope: 'Desain + build',
      image: '/home-renovation-modern.jpg',
      desc: 'Transformasi total rumah existing menjadi hunian tropis modern dengan pencahayaan natural dan smart-home system.'
    },
    {
      title: 'Gedung Komersial Plaza 9',
      location: 'Gresik',
      scope: '10 lantai struktur baja',
      image: '/commercial-plaza.jpg',
      desc: 'Pembangunan mixed-use plaza dengan fasad kaca low-E dan basement parkir dua lantai.'
    }
  ],
  road: [
    {
      title: 'Peningkatan Jalan Poros Surabaya',
      location: 'Surabaya',
      scope: '5 km asphalt overlay',
      image: '/road-project.jpg',
      desc: 'Overlay aspal AC-WC dengan perbaikan drainase dan marka thermoplastic untuk meningkatkan keselamatan pengguna.'
    },
    {
      title: 'Jembatan Penghubung Delta',
      location: 'Sidoarjo',
      scope: '120 m bentang baja',
      image: '/bridge-construction.jpg',
      desc: 'Desain dan konstruksi jembatan baja dengan sistem launching girder dan sensor monitoring struktur.'
    },
    {
      title: 'Rehabilitasi Jalan Kawasan Industri',
      location: 'Gresik',
      scope: 'Beton k-350 + drainase',
      image: '/road-construction.jpg',
      desc: 'Rekonstruksi rigid pavement untuk jalur kontainer dengan perkuatan subgrade dan box culvert baru.'
    }
  ],
  welding: [
    {
      title: 'Fabrication Struktur Gudang',
      location: 'Pasuruan',
      scope: '3.500 m² frame baja',
      image: '/industrial-warehouse.jpg',
      desc: 'Produksi dan instalasi struktur baja portal dengan finishing cat tahan korosi dan QC NDT lengkap.'
    },
    {
      title: 'Pipeline Utility Plant',
      location: 'Manyar',
      scope: 'Pipa stainless DN150',
      image: '/pipeline-welding.jpg',
      desc: 'Instalasi jalur pipa utilitas dengan standar ASME IX, termasuk hydrotest dan dokumentasi weld map.'
    },
    {
      title: 'Custom Metal Interior',
      location: 'Surabaya',
      scope: 'Railing & tangga spiral',
      image: '/house-renovation-interior.jpg',
      desc: 'Pembuatan elemen interior metal dengan finishing powder coating dan detail estetika tinggi.'
    }
  ]
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].key)
  const [activeProject, setActiveProject] = useState(null)

  const projects = projectData[activeCategory]

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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--color-accent)] mb-2">Portfolio</p>
              <h2 className="section-title">Proyek Unggulan</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                    activeCategory === cat.key
                      ? 'bg-[color:var(--color-primary)] border-[color:var(--color-primary)] text-white'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-[color:var(--color-primary)]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
                onClick={() => setActiveProject({ ...project, category: projectCategories.find((c) => c.key === activeCategory)?.label })}
              >
                <div
                  className="h-48 bg-gray-300"
                  style={{ backgroundImage: `url('${project.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div className="p-6 space-y-2">
                  <p className="text-sm text-[color:var(--color-accent)] font-semibold">
                    {projectCategories.find((c) => c.key === activeCategory)?.label}
                  </p>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.location} • {project.scope}</p>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setActiveProject(null)}>
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-72 bg-gray-200"
              style={{ backgroundImage: `url('${activeProject.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--color-accent)] mb-1">{activeProject.category}</p>
                  <h3 className="text-2xl font-bold text-[color:var(--color-primary)]">{activeProject.title}</h3>
                </div>
                <button
                  type="button"
                  aria-label="Tutup galeri"
                  className="h-10 w-10 rounded-full border border-gray-200 text-[color:var(--color-primary)] hover:bg-gray-100"
                  onClick={() => setActiveProject(null)}
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-500 text-sm">Lokasi: {activeProject.location}</p>
              <p className="text-gray-600">{activeProject.desc}</p>
            </div>
          </div>
        </div>
      )}

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
