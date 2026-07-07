"use client";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Client Words" title="What They Say." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonialsData.map((testi, i) => (
            <AnimatedReveal key={testi.id} delay={i * 0.1}>
              <div className="p-10 bg-white/[0.02] border border-white/10 rounded-2xl h-full flex flex-col relative">
                <Quote className="text-accent/20 absolute top-8 right-8 w-16 h-16" />
                <p className="text-white/80 text-lg leading-relaxed flex-grow italic mb-8 relative z-10">
                  "{testi.quote}"
                </p>
                <div>
                  <h4 className="text-white font-medium text-lg uppercase tracking-wide">{testi.name}</h4>
                  <p className="text-accent text-sm">{testi.eventType}</p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}