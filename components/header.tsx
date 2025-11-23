'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Layanan', href: '#services' },
    { label: 'Tentang', href: '#about' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Berita', href: '#news' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-primary text-primary-foreground z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-accent-foreground">
            SI
          </div>
          <span className="font-bold text-lg hidden sm:inline">PT. Sentral Indonesia</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm hover:text-accent transition"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => window.open('https://wa.me/6283854560095', '_blank')}
          >
            Hubungi
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            onClick={() => window.open('https://wa.me/6283854560095', '_blank')}
          >
            Hubungi via WhatsApp
          </Button>
        </nav>
      )}
    </header>
  )
}
