import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[color:var(--color-primary)] text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl">
          <div className="h-12 bg-[#fff] rounded-sm p-1 flex items-center justify-center text-[color:var(--color-primary-dark)]">
            <img src="/logo-sentral.png" alt="PT. Sentral Indonesia Logo" className="w-full h-full object-contain" />
          </div>
          <span>PT. Sentral Indonesia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-[color:var(--color-accent)] transition">Home</Link>
          <Link to="/about" className="hover:text-[color:var(--color-accent)] transition">About</Link>
          <div className="relative group">
            <Link to="/service-building" className="hover:text-[color:var(--color-accent)] transition">
              Services
            </Link>
            <div className="absolute left-0 mt-2 w-56 bg-[color:var(--color-primary-dark)] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/service-building" className="block px-4 py-2 hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-primary-dark)] transition">
                Kontraktor Bangunan
              </Link>
              <Link to="/service-road" className="block px-4 py-2 hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-primary-dark)] transition">
                Kontraktor Jalan
              </Link>
              <Link to="/service-welding" className="block px-4 py-2 hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-primary-dark)] transition">
                Kontraktor Las Industrial
              </Link>
            </div>
          </div>
          <Link to="/projects" className="hover:text-[color:var(--color-accent)] transition">Projects</Link>
          <Link to="/contact" className="bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] px-4 py-2 rounded font-semibold hover:bg-[color:var(--color-accent-hover)] transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[color:var(--color-primary-dark)] p-4 flex flex-col gap-4">
          <Link to="/" className="hover:text-[color:var(--color-accent)] transition">Home</Link>
          <Link to="/about" className="hover:text-[color:var(--color-accent)] transition">About</Link>
          <Link to="/service-building" className="hover:text-[color:var(--color-accent)] transition">Services</Link>
          <div className="flex flex-col gap-2 text-sm text-gray-200 pl-4">
            <Link to="/service-building" className="hover:text-[color:var(--color-accent)] transition">Kontraktor Bangunan</Link>
            <Link to="/service-road" className="hover:text-[color:var(--color-accent)] transition">Kontraktor Jalan</Link>
            <Link to="/service-welding" className="hover:text-[color:var(--color-accent)] transition">Kontraktor Las Industrial</Link>
          </div>
          <Link to="/projects" className="hover:text-[color:var(--color-accent)] transition">Projects</Link>
          <Link to="/contact" className="bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] px-4 py-2 rounded font-semibold text-center">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
