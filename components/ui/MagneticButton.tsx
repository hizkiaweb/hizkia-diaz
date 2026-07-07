"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({ children, href, className, variant = "primary" }: { children: ReactNode, href: string, className?: string, variant?: "primary" | "outline" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-colors duration-300 overflow-hidden group";
  const variants = {
    primary: "bg-foreground text-background hover:bg-accent",
    outline: "border border-white/20 text-foreground hover:bg-white/10 backdrop-blur-sm"
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(baseStyle, variants[variant], className)}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}