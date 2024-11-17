'use client'
import FloatingSpheres from '@/components/FloatingSpheres'
import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'
import TestimonialSection from '@/components/TestimonialSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
export default function Home() {
  return (
    <div className="relative bg-[#FAF9F8]">
      <FloatingSpheres />
      <nav className="fixed w-full bg-[#FAF9F8]/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-[#4A8C7D] text-xl font-bold">MindBridge</div>
            <div className="hidden sm:flex space-x-8">
              <a href="#about" className="text-[#847C77] hover:text-[#4A8C7D] transition-colors">About</a>
              <a href="#services" className="text-[#847C77] hover:text-[#4A8C7D] transition-colors">Services</a>
              <a href="#contact" className="text-[#847C77] hover:text-[#4A8C7D] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
    </div>
  );
}
