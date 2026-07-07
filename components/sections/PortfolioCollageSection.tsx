"use client";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";

export function PortfolioCollageSection() {
  return (
    <section id="portfolio" className="py-32 bg-neutral-950 relative">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Featured Work" title="Moments Captured." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {portfolioData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-neutral-900 ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-[16/9]' : 'aspect-square'}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">{item.category} • {item.year}</span>
                <h3 className="text-2xl font-display font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}