import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { CONFIG } from "../config";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Shift", href: "#the-shift" },
    { name: "Process", href: "#process" },
    { name: "Resources", href: "#resources" },
    { name: "FAQs", href: "#why-automate" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 md:px-8 transition-all duration-300 glass-pill ${
          isScrolled ? "w-full max-w-5xl scale-95 md:py-2" : "w-full max-w-7xl md:py-4"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="TriNetra Technologies - AI Automation Agency" 
            className="w-10 h-10 object-contain" 
          />
          <span className="text-2xl font-bold tracking-tighter text-[#050505]">TriNetra Technologies</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#050505]/70 hover:text-[#050505] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
            className="px-5 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            Book Strategy Call
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 text-[#050505]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 md:hidden pointer-events-auto glass p-6 rounded-2xl flex flex-col gap-4 border border-black/5"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#050505]/80 hover:text-[#050505]"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                window.Cal && window.Cal("modal", { calLink: CONFIG.calLink });
              }}
              className="w-full mt-4 px-6 py-3 text-white bg-primary rounded-xl font-bold"
            >
              Book Strategy Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
