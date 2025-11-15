import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import FeaturedServices from '@/components/featured-services'
import YellowBanner from '@/components/yellow-banner'
import WhatWeDo from '@/components/what-we-do'
import AboutSection from '@/components/about-section'
import TrustBuilder from '@/components/trust-builder'
import NewsSection from '@/components/news-section'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

const FAQSection = dynamic(() => import('@/components/faq-section'), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedServices />
      <YellowBanner />
      <WhatWeDo />
      <AboutSection />
      <TrustBuilder />
      <NewsSection />
      <Testimonials />
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <FAQSection />
      </Suspense>
      <Footer />
    </main>
  )
}
