"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function GallerySection() {
  const images = Array.from({ length: 5 }).map((_, i) => `/images/portfolio/portfolio-${(i % 4) + 1}.jpg`);

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <SectionHeading subtitle="Gallery" title="A Glimpse of Magic." />
      </div>
      
      {/* Horizontal Marquee Gallery Strip */}
      <div className="flex gap-6 px-6 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {images.map((img, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="shrink-0 w-[80vw] md:w-[400px] aspect-[4/3] rounded-xl overflow-hidden snap-center relative"
          >
            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}