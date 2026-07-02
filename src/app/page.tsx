"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Library, Terminal, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Foyer() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <main className="relative flex h-full w-full overflow-hidden bg-[var(--color-oxford-twilight)] text-[var(--color-champagne-gold)] font-sans">
      
      {/* Top Header */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex justify-center">
        <div className="bg-[#1A2530] rounded-full px-8 py-3 shadow-lg border border-white/5">
          <h1 className="text-xl tracking-widest font-light opacity-80 m-0 leading-none text-[var(--color-champagne-gold)]">Divesh's Workshop & Archive</h1>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex flex-col items-center justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1A2530] rounded-full px-8 py-3 shadow-lg border border-white/5 flex items-center justify-center transition-colors hover:bg-white/10"
        >
          <span className="font-mono text-sm tracking-widest text-[var(--color-champagne-gold)]">
            THE SANDBOX
          </span>
        </motion.button>
        
        {/* Contact Footer */}
        <div className="bg-[#1A2530] px-6 py-2 rounded-full shadow-lg mt-4 flex items-center justify-center gap-6">
          <a href="#" className="p-2 rounded-full text-[#E5D3B3]/70 hover:text-[#E5D3B3] hover:bg-[#E5D3B3]/10 transition-all cursor-pointer">
            <FaGithub size={20} />
          </a>
          <a href="#" className="p-2 rounded-full text-[#E5D3B3]/70 hover:text-[#E5D3B3] hover:bg-[#E5D3B3]/10 transition-all cursor-pointer">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="p-2 rounded-full text-[#E5D3B3]/70 hover:text-[#E5D3B3] hover:bg-[#E5D3B3]/10 transition-all cursor-pointer">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="p-2 rounded-full text-[#E5D3B3]/70 hover:text-[#E5D3B3] hover:bg-[#E5D3B3]/10 transition-all cursor-pointer">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Left Zone: The Lab */}
      <motion.div
        layout
        className="relative h-full flex flex-col items-start"
        initial={{ width: "50%" }}
        animate={{
          width: hovered === "left" ? "60%" : hovered === "right" ? "40%" : "50%",
          backgroundColor: hovered === "left" ? "var(--color-pure-black)" : "transparent",
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Inner Hover Trigger */}
        <div 
          className="h-full w-[80%] flex flex-col items-center justify-center p-6 md:p-12 text-center"
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div layout className="w-[400px] flex-shrink-0 flex flex-col items-center">
            <motion.div
              animate={{ 
                color: hovered === "left" ? "var(--color-lcars-neon-orange)" : "var(--color-champagne-gold)",
                scale: hovered === "left" ? 1.1 : 1
              }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <FlaskConical size={48} strokeWidth={1.5} />
            </motion.div>
            
            <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
              Visit The Lab
            </h2>
            <p className="font-mono text-sm md:text-base opacity-70 mb-8 max-w-md">
              Applied Engineering & Autonomous Security Orchestration
            </p>

            <AnimatePresence>
              {hovered === "left" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-xs w-full max-w-sm text-left border-l-2 border-[var(--color-lcars-neon-orange)] pl-4 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 text-[var(--color-lcars-soft-lilac)]">
                    <Terminal size={14} />
                    <span>SYS.INIT: Wazuh Integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-lcars-pale-yellow)]">
                    <Terminal size={14} />
                    <span>NODE: LangGraph Agents Online</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-lcars-neon-orange)]">
                    <Terminal size={14} />
                    <span>DATA: Splunk MLTK Active</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Zone: The Library */}
      <motion.div
        layout
        className="relative h-full flex flex-col items-end"
        initial={{ width: "50%" }}
        animate={{
          width: hovered === "right" ? "60%" : hovered === "left" ? "40%" : "50%",
          backgroundColor: hovered === "right" ? "#D4C4A8" : "transparent",
          color: hovered === "right" ? "var(--color-espresso-brown)" : "var(--color-champagne-gold)"
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Inner Hover Trigger */}
        <div 
          className="h-full w-[80%] flex flex-col items-center justify-center p-6 md:p-12 text-center"
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div layout className="w-[400px] flex-shrink-0 flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: hovered === "right" ? 1.1 : 1
              }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Library size={48} strokeWidth={1.5} />
            </motion.div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Visit The Library
            </h2>
            <p className="font-serif text-sm md:text-base opacity-70 mb-8 max-w-md italic">
              Academic Research & Formal Neural Network Analysis
            </p>

            <AnimatePresence>
              {hovered === "right" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-sm w-full max-w-sm text-left border-l-2 border-[var(--color-espresso-brown)] pl-4 flex flex-col gap-3"
                >
                  <div className="flex items-start gap-2">
                    <ArrowRight size={16} className="mt-0.5 shrink-0" />
                    <span>Abstract: Hybrid TCN-LSTM Architectures in Sequence Modeling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight size={16} className="mt-0.5 shrink-0" />
                    <span>Thesis: Formal Verification of Sequence-Based Neural Networks</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

    </main>
  );
}
