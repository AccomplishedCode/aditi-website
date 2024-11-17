'use client'
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The support I received here has been life-changing. I finally feel understood and hopeful about my future. The coping strategies I learned have helped me both at school and at home.",
    author: "Former Client, Age 15",
    theme: "success"
  },
  {
    quote: "As a parent, watching my child struggle with anxiety was heartbreaking. The compassionate guidance we received helped our whole family heal and grow stronger together.",
    author: "Parent of Client, Age 42",
    theme: "family"
  },
  {
    quote: "After years of feeling stuck, I finally found the courage to seek help. The safe space and professional support helped me work through my trauma and rebuild my life.",
    author: "Adult Client, Age 35",
    theme: "growth"
  },
  {
    quote: "The teen group sessions were exactly what I needed. It helped knowing I wasn't alone, and I've made lasting friendships while learning to manage my depression.",
    author: "Former Group Therapy Client, Age 17",
    theme: "connection"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #4A8C7D 2px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-center mb-12"
        >
          Stories of Hope
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 50
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full relative group"
            >
              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.6 }}
                className="absolute top-4 left-4 text-6xl text-slate-200 pointer-events-none font-serif"
              >
                "
              </motion.div>
              
              <motion.p 
                className="text-slate-600 italic mb-6 relative z-10 text-lg"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {testimonial.quote}
              </motion.p>
              
              <motion.div 
                className="mt-auto relative z-10"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="w-8 h-[2px] bg-slate-300 mb-3 group-hover:bg-[#4A8C7D] transition-colors duration-300" />
                <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                  {testimonial.author}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 