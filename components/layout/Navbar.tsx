"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteData } from "@/data/site";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-40 transition-all duration-500 ease-in-out border-b border-transparent",
      isScrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-foreground tracking-widest uppercase">
          Hizkia
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-white/70">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-accent transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={siteData.whatsappLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-accent transition-colors">
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg text-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href={siteData.whatsappLink} className="mt-4 px-6 py-3 text-center bg-accent text-background rounded-full font-bold">
            Book via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}