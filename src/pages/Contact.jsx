import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send to WhatsApp
    const message = `Nama: ${formData.name}%0AEmail: ${formData.email}%0AHP: ${formData.phone}%0APesan: ${formData.message}`
    window.open(`https://wa.me/628385456095?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hubungi Kami</h1>
          <p className="text-xl text-gray-100">Siap Menjawab Semua Pertanyaan Anda</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[color:var(--color-primary)]">Informasi Kontak</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">📲 WhatsApp</h3>
                  <a href="https://wa.me/628385456095" className="text-[color:var(--color-accent)] hover:underline">
                    0838 5456 0095
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">📧 Email</h3>
                  <a href="mailto:info@sentralindonesia.co.id" className="text-[color:var(--color-accent)] hover:underline">
                    info@sentralindonesia.co.id
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">📍 Lokasi</h3>
                  <p className="text-gray-600">
                    Surabaya, Jawa Timur<br/>
                    Indonesia
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">⏰ Jam Kerja</h3>
                  <p className="text-gray-600">
                    Senin - Jumat: 08:00 - 17:00<br/>
                    Sabtu: 08:00 - 13:00<br/>
                    Minggu & Libur: Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[color:var(--color-primary)]">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[color:var(--color-accent)]"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[color:var(--color-accent)]"
                    placeholder="Email Anda"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Nomor HP</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[color:var(--color-accent)]"
                    placeholder="0812-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[color:var(--color-accent)]"
                    placeholder="Jelaskan kebutuhan proyek Anda..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
