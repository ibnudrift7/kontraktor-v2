"use client"

import { useState, useEffect } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
