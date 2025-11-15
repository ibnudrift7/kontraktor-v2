import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* About */}
        <div>
          <h4 className="font-bold text-lg mb-4">PT. Sentral Indonesia</h4>
          <p className="text-gray-300 text-sm">
            Kami adalah mitra kontraktor terpercaya dengan 15+ tahun pengalaman membangun proyek berkualitas di Surabaya dan Jawa Timur.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about" className="hover:text-[color:var(--color-accent)]">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--color-accent)]">Layanan</Link></li>
            <li><Link to="/projects" className="hover:text-[color:var(--color-accent)]">Portofolio</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4">Layanan</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-[color:var(--color-accent)]">Kontraktor Perumahan</a></li>
            <li><a href="#" className="hover:text-[color:var(--color-accent)]">Kontraktor Jalan</a></li>
            <li><a href="#" className="hover:text-[color:var(--color-accent)]">Konsultasi Proyek</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>📲 WhatsApp: <a href="https://wa.me/628385456095" className="hover:text-[color:var(--color-accent)]">0838 5456 0095</a></p>
            <p>📧 Email: info@sentralindonesia.co.id</p>
            <p>📍 Surabaya, Jawa Timur</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8">
        <div className="container text-center text-gray-400 text-sm">
          <p>&copy; 2025 PT. Sentral Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
