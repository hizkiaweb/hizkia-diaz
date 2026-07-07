"use client";
import { siteData } from "@/data/site";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={siteData.whatsappLink}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-background border border-white/10 text-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with {siteData.name.split(' ')[0]}
      </span>
    </motion.a>
  );
}