import { siteData } from "@/data/site";
import { MagneticButton } from "../ui/MagneticButton";
import { AnimatedReveal } from "../ui/AnimatedReveal";

export function CtaSection() {
  return (
    <section className="relative py-40 bg-accent text-background overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/portfolio/portfolio-1.jpg')] bg-cover bg-center mix-blend-multiply" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedReveal>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">
            Ready to make it <br/> memorable?
          </h2>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <p className="text-lg md:text-2xl font-medium mb-12 opacity-80">
            Mari diskusikan konsep acara Anda dan jadikan momen spesial ini sempurna.
          </p>
        </AnimatedReveal>
        <AnimatedReveal delay={0.2}>
          <MagneticButton href={siteData.whatsappLink} className="bg-background text-foreground hover:bg-neutral-800 px-10 py-5 text-lg">
            Hubungi via WhatsApp
          </MagneticButton>
        </AnimatedReveal>
      </div>
    </section>
  );
}