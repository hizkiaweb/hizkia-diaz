import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioCollageSection } from "@/components/sections/PortfolioCollageSection";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MarqueeStrip />
      <PortfolioCollageSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}