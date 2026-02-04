"use client";

import { motion } from "framer-motion";

const particles = [
  { x: "10%", y: "20%", size: 6, delay: 0 },
  { x: "20%", y: "70%", size: 4, delay: 1.5 },
  { x: "35%", y: "30%", size: 5, delay: 0.8 },
  { x: "55%", y: "75%", size: 7, delay: 1.1 },
  { x: "70%", y: "25%", size: 4, delay: 0.4 },
  { x: "85%", y: "65%", size: 6, delay: 1.8 },
];

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-indigo-400/30 blur-[1px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.2, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
