import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Hizkia Diaz — Master of Ceremony",
  description: "Personal website dan portfolio Master of Ceremony Hizkia Diaz untuk wedding, corporate event, formal event, dan berbagai acara spesial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-background`}>
        <SmoothScroll>
          <ScrollProgressBar />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingWhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}