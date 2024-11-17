'use client'
import { motion } from "framer-motion";
import AppointmentSheet from "@/components/AppointmentSheet";

export default function CTASection() {
  return (
    <section className="py-20 bg-teal-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Ready to Take the First Step?
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Schedule a free consultation to learn how we can help you or your loved one
        </p>
        <AppointmentSheet triggerClassName="bg-[#4A8C7D] text-white px-8 py-3 rounded-full hover:bg-[#9CAF98] transition-all duration-300">
          Get Started Today!
        </AppointmentSheet>
      </motion.div>
    </section>
  );
} 