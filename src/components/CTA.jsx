import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CONFIG } from "../config";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background aurora effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
        <div className="absolute inset-0 bg-primary/[0.08] blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-secondary/[0.08] blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6">
        <div 
            className="rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group"
            style={{
              background: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.8), inset 0 -1px 1px 0 rgba(255,255,255,0.2), 0 20px 60px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.02)',
            }}
          >
            {/* Top edge glass highlight */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center relative z-10"
          >
            <Sparkles className="w-16 h-16 text-primary mb-8" />
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter max-w-4xl text-[#050505]">
              Stop Hiring For <br />
              <span className="text-primary italic">Repetitive Work</span>.
            </h2>
            <p className="text-xl md:text-2xl text-[#050505]/60 mb-12 max-w-2xl font-medium">
              Deploy AI Employees instead. Scale infinitely without the overhead.
            </p>

            <button 
              onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
              className="px-10 py-5 bg-[#050505] text-white rounded-2xl font-black text-xl flex items-center gap-3 hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-black/10"
            >
              Book Your Strategy Call <ArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
