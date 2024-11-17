'use client'
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The support I received here has been life-changing. I finally feel understood and hopeful about my future.",
    author: "Former Client, Age 17"
  },
  // Add more testimonials...
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          Stories of Hope
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg"
            >
              <p className="text-slate-600 italic mb-4">{testimonial.quote}</p>
              <p className="text-sm text-slate-500">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 