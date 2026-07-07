"use client";
import { motion } from "framer-motion";

export function MarqueeStrip() {
  const texts = ["MASTER OF CEREMONY", "WEDDING HOST", "CORPORATE EVENT", "CELEBRATION MOMENTS"];
  
  return (
    <div className="py-12 bg-accent text-background overflow-hidden flex whitespace-nowrap">
      <motion.div 
        className="flex gap-16 items-center text-3xl md:text-5xl font-display uppercase tracking-widest"
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...texts, ...texts, ...texts].map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
}