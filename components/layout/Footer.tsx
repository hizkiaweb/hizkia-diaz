import { siteData } from "@/data/site";
import { AnimatedReveal } from "../ui/AnimatedReveal";

export function Footer() {
  return (
    <footer className="bg-neutral-950 py-20 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <AnimatedReveal className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold uppercase tracking-widest">{siteData.name}</h3>
          <p className="text-white/50 mt-2">{siteData.role}</p>
        </AnimatedReveal>
        
        <AnimatedReveal delay={0.2} className="flex gap-6">
          <a href={siteData.whatsappLink} className="text-white/70 hover:text-accent transition-colors">WhatsApp</a>
          <a href={siteData.instagram} className="text-white/70 hover:text-accent transition-colors">Instagram</a>
          <a href={`mailto:${siteData.email}`} className="text-white/70 hover:text-accent transition-colors">Email</a>
        </AnimatedReveal>
      </div>
      <div className="container mx-auto px-6 mt-12 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}