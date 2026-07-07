"use client";
import { siteData } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedReveal } from "../ui/AnimatedReveal";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Sticky Storytelling Left Panel */}
          <div className="relative">
            <div className="sticky top-32">
              <SectionHeading subtitle="The Voice Behind" title="Building Emotions, Guiding Moments." />
              <AnimatedReveal delay={0.2}>
                <div className="w-full aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden mt-8 relative">
                  <img src="/images/hizkia-about.jpg" alt="About Hizkia" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </AnimatedReveal>
            </div>
          </div>

          {/* Scrolling Content Right Panel */}
          <div className="pt-10 lg:pt-32 flex flex-col gap-10">
            <AnimatedReveal>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-white/90">
                Halo, saya <span className="text-accent font-medium">{siteData.name}</span>. Bagi saya, memandu acara bukan sekadar berbicara di depan umum. Ini adalah tentang seni merangkai emosi, menjaga ritme, dan memastikan setiap tamu yang hadir merasa dilibatkan dalam momen berharga Anda.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <p className="text-lg text-white/60 leading-relaxed">
                Selama lebih dari 5 tahun, saya telah dipercaya memandu berbagai jenis acara, mulai dari resepsi pernikahan yang intim dan penuh haru, acara *corporate* yang profesional dan formal, hingga malam perayaan yang meriah. 
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.2}>
              <p className="text-lg text-white/60 leading-relaxed">
                Pendekatan saya selalu adaptif. Saya percaya setiap acara memiliki *nyawa* dan *tone* tersendiri. Sebagai Master of Ceremony, tugas utama saya adalah memastikan kelancaran teknis di atas panggung selaras dengan kehangatan komunikasi yang saya sampaikan.
              </p>
            </AnimatedReveal>
            
            <AnimatedReveal delay={0.3} className="mt-8 border-l-4 border-accent pl-6 py-2">
              <p className="text-2xl font-display italic text-white/80">
                "{siteData.tagline}"
              </p>
            </AnimatedReveal>
          </div>

        </div>
      </div>
    </section>
  );
}