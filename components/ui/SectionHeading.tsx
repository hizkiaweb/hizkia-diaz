import { AnimatedReveal } from "./AnimatedReveal";

export function SectionHeading({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="mb-12 md:mb-20">
      <AnimatedReveal>
        <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
          {subtitle}
        </span>
      </AnimatedReveal>
      <AnimatedReveal delay={0.1}>
        <h2 className="text-4xl md:text-6xl font-display font-light text-foreground">
          {title}
        </h2>
      </AnimatedReveal>
    </div>
  );
}