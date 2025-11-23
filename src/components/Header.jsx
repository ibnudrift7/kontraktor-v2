import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[color:var(--color-primary)] text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl">
          <div className="w-8 h-8 bg-[color:var(--color-accent)] rounded flex items-center justify-center text-[color:var(--color-primary-dark)]">
            S
          </div>
          <span>PT. Sentral</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-[color:var(--color-accent)] transition">Home</Link>
          <Link to="/about" className="hover:text-[color:var(--color-accent)] transition">About</Link>
          <Link to="/services" className="hover:text-[color:var(--color-accent)] transition">Services</Link>
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
          <Link to="/services" className="hover:text-[color:var(--color-accent)] transition">Services</Link>
          <Link to="/projects" className="hover:text-[color:var(--color-accent)] transition">Projects</Link>
          <Link to="/contact" className="bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] px-4 py-2 rounded font-semibold text-center">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
