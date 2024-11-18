'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { colors } from '@/app/theme'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#E8E4E1] relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] group"
          >
            <Image
              src="/profile-picture.png"
              alt="Adi Singhal - Mental Health Counsellor"
              fill
              className="object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
              priority
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4A8C7D]/10 rounded-full -z-10"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h2 
                className="text-3xl md:text-4xl font-light text-[#4A8C7D]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Meet Your Therapist
              </motion.h2>
              <motion.h3 
                className="text-2xl text-[#847C77] font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Adi Singhal
              </motion.h3>
            </div>
            
            <motion.div 
              className="w-20 h-1 bg-[#4A8C7D]/30"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.p 
              className="text-[#847C77] text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PACFA Reg. Clinical Counsellor, 30833
            </motion.p>
            
            <motion.p 
              className="text-[#847C77] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              With over 3 years of experience, Adi creates a safe and nurturing environment where clients can explore their challenges and develop effective coping strategies. Her approach combines evidence-based techniques with genuine empathy and understanding.
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-[#D4C4B5] pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl font-medium text-[#4A8C7D]">Certifications & Affiliations</h3>
            
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/pacfa.png"
                alt="PACFA Certification"
                width={200}
                height={100}
                className="object-contain"
              />
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              <h4 className="text-xl text-[#847C77] font-bold">
                Referrals and Health Fund Rebates
              </h4>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {['NDIS', 'Workcover', 'Bupa', 'Medibank Private', 'Ahm Health', 'ARHG', 'HCF', 'Private'].map((item, index) => (
                  <motion.span
                    key={item}
                    className="px-4 py-2 bg-white/50 rounded-full text-[#847C77] font-medium text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.8)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 