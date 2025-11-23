"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-smooth ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Kontraktor
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-smooth"
              >
                {link.label}
              </a>
            ))}
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-0 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
