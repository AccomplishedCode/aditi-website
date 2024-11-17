'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Sphere {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  duration: number;
  opacity: number;
}

const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export default function FloatingSpheres() {
  const [spheres, setSpheres] = useState<Sphere[]>([]);

  useEffect(() => {
    const generateSpheres = () => {
      const newSpheres = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        size: random(2, 4),
        initialX: random(-10, 110),
        initialY: random(-10, 110),
        duration: random(8, 12),
        opacity: random(0.1, 0.3),
      }));
      setSpheres(newSpheres);
    };

    generateSpheres();
  }, []);

  if (spheres.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {spheres.map((sphere) => (
        <motion.div
          key={sphere.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: sphere.id % 2 === 0 ? 'rgb(255, 255, 255)' : 'rgb(200, 200, 200)',
            opacity: sphere.opacity,
          }}
          initial={{
            left: `${sphere.initialX}%`,
            top: `${sphere.initialY}%`,
            width: sphere.size,
            height: sphere.size,
          }}
          animate={{
            y: [0, -40, -80],
            x: [0, 60, 120],
            opacity: [sphere.opacity, sphere.opacity, 0],
          }}
          transition={{
            duration: sphere.duration,
            repeat: Infinity,
            ease: "linear",
            delay: sphere.id * 0.05,
            type: "tween",
          }}
        />
      ))}
    </div>
  );
}