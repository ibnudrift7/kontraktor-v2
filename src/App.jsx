import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServiceBuilding from './pages/Services'
import ServiceRoad from './pages/ServiceRoad'
import ServiceWelding from './pages/ServiceWelding'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service-building" element={<ServiceBuilding />} />
            <Route path="/service-road" element={<ServiceRoad />} />
            <Route path="/service-welding" element={<ServiceWelding />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServiceBuilding />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
