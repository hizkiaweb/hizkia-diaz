"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/data/site";
import { MagneticButton } from "../ui/MagneticButton";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animasi Scroll Separation Effect
  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      
      {/* 1. BACKGROUND LAYER (z-0) - Paling Belakang */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <div className="absolute inset-0 bg-[url('/images/hizkia-bg-collage.jpg')] bg-cover bg-center mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)]" />
      </motion.div>

      {/* 2. LAYER TEKS BELAKANG (z-10) - Menampilkan role & "HIZKIA" */}
      <motion.div 
        style={{ y: yText }}
        className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center mt-10 md:mt-0 md:-translate-y-[5vh] pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-accent tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6">
            {siteData.role}
          </p>
        </motion.div>
        
        {/* Teks "HIZKIA" */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[25vw] md:text-[9vw] lg:text-[7.5rem] font-display font-bold uppercase tracking-tighter text-foreground drop-shadow-lg leading-none whitespace-nowrap"
        >
          HIZKIA
        </motion.h1>

        {/* Teks "DIAZ" (invisible) - Spacer agar posisi presisi */}
        <motion.h1 
          className="text-[25vw] md:text-[9vw] lg:text-[7.5rem] font-display font-bold uppercase tracking-tighter text-foreground drop-shadow-lg leading-none whitespace-nowrap -mt-6 md:-mt-6 opacity-0 invisible"
        >
          DIAZ
        </motion.h1>
      </motion.div>

      {/* 3. LAYER FOTO MC (z-20) - Terjepit di antara HIZKIA dan DIAZ */}
      <motion.div 
        style={{ y: yImage, opacity: opacityImage }}
        className="absolute inset-0 z-20 w-full h-full pointer-events-none flex justify-center items-center -mt-10 md:mt-0 md:-translate-y-[5vh]"
      >
        {/* PERBAIKAN MOBILE: h-[85vh], translate-y-0 (tidak lagi diturunkan berlebihan), geser kiri 15%, scale 1.2 */}
        <div className="w-full max-w-[1600px] h-[85vh] md:h-[65vh] transform translate-y-0 -translate-x-[15%] scale-[1.2] md:translate-y-0 md:translate-x-0 md:scale-100 transition-transform duration-500">
          <motion.img 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            src="/images/hizkia-main.png" 
            alt={siteData.name}
            className="w-full h-full object-contain object-bottom md:object-center drop-shadow-2xl"
          />
        </div>
      </motion.div>

      {/* 4. LAYER TEKS DEPAN (z-30) - Menampilkan "DIAZ" di depan foto */}
      <motion.div 
        style={{ y: yText }}
        className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center mt-10 md:mt-0 md:-translate-y-[5vh] pointer-events-none"
      >
        {/* Spacer tersembunyi menggantikan Role */}
        <div className="mb-6 opacity-0 invisible">
          <p className="text-sm md:text-base font-semibold mb-6">Master of Ceremony</p>
        </div>
        
        {/* Spacer tersembunyi menggantikan HIZKIA */}
        <motion.h1 
          className="text-[25vw] md:text-[9vw] lg:text-[7.5rem] font-display font-bold uppercase tracking-tighter text-foreground drop-shadow-lg leading-none whitespace-nowrap opacity-0 invisible"
        >
          HIZKIA
        </motion.h1>

        {/* Teks "DIAZ" muncul nyata */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[25vw] md:text-[9vw] lg:text-[7.5rem] font-display font-bold uppercase tracking-tighter text-foreground drop-shadow-lg leading-none whitespace-nowrap -mt-6 md:-mt-6"
        >
          DIAZ
        </motion.h1>
      </motion.div>

      {/* 5. BUTTONS & UI LAYER (z-40) */}
      <motion.div 
        style={{ y: yText }}
        /* PERBAIKAN JARAK MOBILE: Posisi bottom dinaikkan ke 18% untuk jarak ekstra dari scroll */
        className="absolute z-40 bottom-[18%] md:bottom-[12%] flex flex-col justify-center items-center w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4"
        >
          <MagneticButton href={siteData.whatsappLink} variant="primary" className="px-6 py-3 text-sm min-h-0">
            Book via WhatsApp
          </MagneticButton>
          <MagneticButton href="#portfolio" variant="outline" className="px-6 py-3 text-sm min-h-0 bg-background/20 backdrop-blur-sm">
            View Portfolio
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating Badges */}
      <motion.div 
        className="absolute z-40 bottom-10 left-10 hidden lg:block bg-background/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
      >
        <p className="text-3xl font-display font-bold text-accent">{siteData.stats[0].value}</p>
        <p className="text-sm text-white/70">{siteData.stats[0].label}</p>
      </motion.div>
      
      <motion.div 
        className="absolute z-40 top-40 right-10 hidden lg:block bg-background/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-right"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      >
        <p className="text-3xl font-display font-bold text-accent">{siteData.stats[1].value}</p>
        <p className="text-sm text-white/70">{siteData.stats[1].label}</p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        /* PERBAIKAN SCROLL MOBILE: Posisi sedikit diturunkan ke bottom-4 jika diperlukan */
        className="absolute bottom-4 md:bottom-10 z-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest writing-vertical-rl">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-white" />
      </motion.div>
    </section>
  );
}