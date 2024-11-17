'use client'
import { motion } from "framer-motion";
import AppointmentSheet from '@/components/AppointmentSheet'

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/30" /> {/* Video overlay */}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 drop-shadow-lg">
            Your Path to Emotional Wellbeing
          </h1>
          <p className="text-lg sm:text-xl mb-4 drop-shadow-md">
            Compassionate counselling for adults, young people, and families
          </p>
          <p className="text-base sm:text-lg mb-8 drop-shadow-md text-[#E8E4E1]">
            Brisbane-based therapy services focused on creating lasting positive change
          </p>
          <AppointmentSheet triggerClassName="bg-[#4A8C7D] text-white px-8 py-3 rounded-full hover:bg-[#9CAF98] transition-all duration-300">
            Schedule a Consultation
          </AppointmentSheet>
        </div>
      </motion.div>
    </section>
  );
} 