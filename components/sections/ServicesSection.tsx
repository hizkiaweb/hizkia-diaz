"use client";
import { servicesData } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedReveal } from "../ui/AnimatedReveal";

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <SectionHeading subtitle="Expertise" title="Tailored For Every Stage." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedReveal key={service.id} delay={index * 0.1}>
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/50 hover:bg-white/[0.04] transition-all duration-300 h-full group">
                  <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-foreground mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}