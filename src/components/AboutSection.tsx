'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { colors } from '@/app/theme'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#E8E4E1]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <Image
              src="/profile-picture.png"
              alt="Therapist"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#4A8C7D]">
              Meet Your Therapist
            </h2>
            <p className="text-[#847C77] mb-4">
              Adi is a PACFA Reg. Clinical Counsellor, 30833
            </p>
            <p className="text-[#847C77] mb-4">
              With over [X] years of experience, they provide a safe, understanding environment for teenagers to process their experiences and develop healthy coping mechanisms.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-[#D4C4B5] pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-light mb-6 text-[#4A8C7D]">Certifications & Affiliations</h3>
            <div className="flex justify-center mb-8">
              <Image
                src="/pacfa.png"
                alt="PACFA Certification"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl font-medium mb-4 text-[#847C77]">Referrals and Health Fund Rebates</h4>
              <p className="text-[#847C77]">
                NDIS • Workcover • Bupa • Medibank Private • Ahm Health • ARHG • HCF • Private
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 