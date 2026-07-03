"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Library, Terminal, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Foyer() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // default to true to avoid flash on mobile
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="relative flex flex-col md:flex-row h-full w-full overflow-hidden bg-[var(--color-oxford-twilight)] text-[var(--color-champagne-gold)] font-sans">
      
      {/* Top Header */}
      <div className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex flex-col items-center w-[90%] md:w-auto">
        <div className="bg-[#1A2530] rounded-full px-4 md:px-8 py-2 md:py-3 shadow-lg border border-white/5">
          <h1 className="text-sm md:text-xl tracking-widest font-light opacity-80 m-0 leading-none text-[var(--color-champagne-gold)] text-center">Divesh&apos;s Workshop &amp; Archive</h1>
        </div>
        <span
          onClick={() => setIsAboutOpen(true)}
          className="text-xs text-[#E5D3B3]/60 hover:text-[#E5D3B3] font-sans tracking-widest uppercase cursor-pointer transition-colors mt-2 pb-1 border-b border-transparent hover:border-[#E5D3B3]/50"
        >
          [ About the Engineer ]
        </span>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex flex-col items-center justify-center">
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
          <a href="https://github.com/diveshbari13" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[#E5D3B3]/70 hover:text-[#E5D3B3] hover:bg-[#E5D3B3]/10 transition-all cursor-pointer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/divesh-bari-824552318" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[#E5D3B3]/70 hover:text-[#E5D3B3] hover:bg-[#E5D3B3]/10 transition-all cursor-pointer">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:diveshbari13@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[#E5D3B3]/70 hover:text-[#E5D3B3] hover:bg-[#E5D3B3]/10 transition-all cursor-pointer">
            <Mail size={20} />
          </a>
        </div>
      </div>



      {/* Left Zone: The Lab */}
      <motion.div
        layout
        onClick={() => router.push("/lab")}
        className="relative h-1/2 md:h-full flex flex-col items-center md:items-start cursor-pointer"
        initial={{ width: isMobile ? "100%" : "50%" }}
        animate={{
          width: isMobile ? "100%" : (hovered === "left" ? "60%" : hovered === "right" ? "40%" : "50%"),
          backgroundColor: hovered === "left" ? "var(--color-pure-black)" : "#1A253000",
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Inner Hover Trigger */}
        <div 
          className="h-full w-full md:w-[80%] flex flex-col items-center justify-center p-6 md:p-12 text-center"
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div layout className="w-full max-w-[400px] flex-shrink-0 flex flex-col items-center px-4 md:px-0">
            <motion.div
              animate={{ 
                color: hovered === "left" ? "var(--color-lcars-neon-orange)" : "var(--color-champagne-gold)",
                scale: hovered === "left" ? 1.1 : 1
              }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Monitor className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
            </motion.div>
            
            <h2 className="font-mono text-2xl md:text-5xl font-bold mb-2 md:mb-4 uppercase tracking-tighter">
              Visit The Lab
            </h2>
            <p className="font-mono text-xs md:text-base opacity-70 mb-4 md:mb-8 max-w-md">
              A collection of my applied engineering and autonomous security projects.
            </p>

            <div className="hidden md:block">
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
                      <span>ML_CORE: Recurrent Neural Networks &amp; Time-Series Forecasting</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--color-lcars-pale-yellow)]">
                      <Terminal size={14} />
                      <span>SECURE: Wazuh Integration &amp; Automated Active Response</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--color-lcars-neon-orange)]">
                      <Terminal size={14} />
                      <span>ORCHESTRATE: LangGraph Agents &amp; Splunk Machine Learning</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Zone: The Library */}
      <motion.div
        layout
        onClick={() => router.push("/library")}
        className="relative h-1/2 md:h-full flex flex-col items-center md:items-end cursor-pointer"
        initial={{ width: isMobile ? "100%" : "50%" }}
        animate={{
          width: isMobile ? "100%" : (hovered === "right" ? "60%" : hovered === "left" ? "40%" : "50%"),
          backgroundColor: hovered === "right" ? "#D4C4A8" : "#D4C4A800",
          color: hovered === "right" ? "var(--color-espresso-brown)" : "var(--color-champagne-gold)"
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Inner Hover Trigger */}
        <div 
          className="h-full w-full md:w-[80%] flex flex-col items-center justify-center p-6 md:p-12 text-center"
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div layout className="w-full max-w-[400px] flex-shrink-0 flex flex-col items-center px-4 md:px-0">
            <motion.div
              animate={{ 
                scale: hovered === "right" ? 1.1 : 1
              }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Library className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
            </motion.div>
            
            <h2 className="font-serif text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              Visit The Library
            </h2>
            <p className="font-serif text-xs md:text-base opacity-70 mb-4 md:mb-8 max-w-md italic">
              A collection of my published academic research and formal neural network analysis.
            </p>

            <div className="hidden md:block">
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
                      <span>Capstone: Autonomous Multi-Agent Security Orchestration &amp; Anomaly Detection</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* About Me Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAboutOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1A2530] border border-[#E5D3B3]/20 shadow-2xl rounded-2xl p-4 md:p-8 max-w-2xl w-full text-left flex flex-col gap-4 md:gap-6 cursor-default relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-3 right-4 text-[#E5D3B3]/50 hover:text-[#E5D3B3] transition-colors text-lg cursor-pointer bg-transparent border-none"
              >
                ✕
              </button>
              
              {/* Header & Summary */}
              <div>
                <h2 className="text-xl font-bold text-[#E5D3B3] mb-2">Divesh Shyamkant Bari</h2>
                <p className="text-sm text-[#E5D3B3]/80 leading-relaxed">
                  AI & Data Science engineer bridging sequence-based neural network research with autonomous cybersecurity automation. 
                </p>
              </div>

              <hr className="border-[#E5D3B3]/10" />

              {/* Education */}
              <div>
                <h3 className="text-xs font-sans tracking-widest uppercase text-[#E5D3B3]/50 mb-3">Education</h3>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-0">
                  <div>
                    <p className="text-sm font-bold text-[#E5D3B3]">B.E. Artificial Intelligence and Data Science</p>
                    <p className="text-sm text-[#E5D3B3]/80">Savitribai Phule Pune University (SPPU)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#E5D3B3]/80">Jun 2026</p>
                    <p className="text-sm font-mono text-[#E5D3B3]">CGPA: 9.55</p>
                  </div>
                </div>
              </div>

              <hr className="border-[#E5D3B3]/10" />

              {/* Experience */}
              <div>
                <h3 className="text-xs font-sans tracking-widest uppercase text-[#E5D3B3]/50 mb-3">Experience</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-0 w-full">
                    <div>
                      <p className="text-sm font-bold text-[#E5D3B3]">Research Intern</p>
                      <p className="text-sm text-[#E5D3B3]/80">Eminsphere™</p>
                    </div>
                    <p className="text-sm text-[#E5D3B3]/80">Jul 2025 - Sep 2025</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-0 w-full">
                    <div>
                      <p className="text-sm font-bold text-[#E5D3B3]">Data Science Intern</p>
                      <p className="text-sm text-[#E5D3B3]/80">NeuAI Labs</p>
                    </div>
                    <p className="text-sm text-[#E5D3B3]/80">Dec 2024 - Jan 2025</p>
                  </div>
                </div>
              </div>

              <hr className="border-[#E5D3B3]/10" />

              {/* Certifications */}
              <div>
                <h3 className="text-xs font-sans tracking-widest uppercase text-[#E5D3B3]/50 mb-3">Certifications</h3>
                <ul className="text-sm text-[#E5D3B3]/80 space-y-2">
                  <li><span className="text-[#E5D3B3] font-bold">Google Cybersecurity</span> — Google (Feb 2026)</li>
                  <li><span className="text-[#E5D3B3] font-bold">Machine Learning Specialization</span> — DeepLearning.AI (Jul 2024)</li>
                  <li><span className="text-[#E5D3B3] font-bold">Deep Learning</span> — DeepLearning.AI (Jun 2024)</li>
                </ul>
              </div>

              <hr className="border-[#E5D3B3]/10" />

              {/* Routing & Resume Link */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                <p className="text-xs text-[#E5D3B3]/60 italic">
                  * For applied engineering projects, visit <span className="text-[#E5D3B3] not-italic">The Lab</span>.<br/>
                  * For formal academic research, visit <span className="text-[#E5D3B3] not-italic">The Library</span>.
                </p>
                <a 
                  href="YOUR_GDRIVE_LINK_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-[#1A2530] bg-[#E5D3B3] hover:bg-white px-4 py-2 rounded-sm font-bold tracking-wide transition-colors whitespace-nowrap"
                >
                  [ VIEW FULL RESUME ]
                </a>
              </div>

              <span
                onClick={() => setIsAboutOpen(false)}
                className="text-xs text-[#E5D3B3]/50 hover:text-[#E5D3B3] tracking-widest uppercase cursor-pointer transition-colors mt-2 pb-1 border-b border-transparent hover:border-[#E5D3B3]/50"
              >
                [ Close ]
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
