import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, Bot,
  ArrowRight, Phone, Sparkles, Code2, Briefcase
} from "lucide-react";
import { CONFIG } from "../config";

const serviceDropdown = [
  {
    category: "Web & Mobile Engineering",
    icon: <Code2 className="w-4 h-4 text-blue-600" />,
    badge: "Category 1",
    items: [
      { name: "Custom Web Applications", desc: "Next.js, React, Node.js, Python SaaS", href: "/services/web-development" },
      { name: "Mobile App Development", desc: "Cross-platform iOS & Android (Flutter/RN)", href: "/services/mobile-app-development" },
      { name: "UI/UX Design Systems", desc: "Interactive Figma prototypes & design tokens", href: "/services/ui-ux-design" },
      { name: "API & Microservices", desc: "GraphQL, REST & cloud architecture", href: "/services/api-microservices" },
    ]
  },
  {
    category: "AI, Automation & Data",
    icon: <Bot className="w-4 h-4 text-emerald-600" />,
    badge: "Category 2",
    items: [
      { name: "WhatsApp AI Agents", desc: "Autonomous 24/7 lead response & voice bots", href: "/services/whatsapp-automation" },
      { name: "AI Voice Agents", desc: "Ultra-low latency conversational calling bots", href: "/services/ai-voice-agents" },
      { name: "Enterprise Workflow RPA", desc: "Zero-touch operations with n8n & Python", href: "/services/ai-automation" },
      { name: "CRM & ERP Two-Way Sync", desc: "HubSpot, Salesforce, Zoho auto-enrichment", href: "/services/crm-erp-automation" },
      { name: "Custom AI Employees (RAG)", desc: "Private assistants trained on company SOPs", href: "/services/custom-ai-solutions" },
    ]
  },
  {
    category: "Consulting & Teams",
    icon: <Briefcase className="w-4 h-4 text-amber-600" />,
    badge: "Category 5",
    items: [
      { name: "Strategic IT Consulting & CTO", desc: "Architecture audits & cloud cost reduction", href: "/services/it-consulting" },
      { name: "Dedicated Developer Squads", desc: "Vetted senior engineers in your time zone", href: "/services/dedicated-engineering-teams" },
      { name: "Software Maintenance & SLA", desc: "Guaranteed 15-min emergency response", href: "/services/software-maintenance-sla" },
    ]
  }
];

const navLinks = [
  { name: "Solutions", href: "/#solutions" },
  { name: "Process", href: "/#process" },
  { name: "Why Us", href: "/#the-shift" },
  { name: "FAQs", href: "/#why-automate" },
  { name: "Pricing", href: "/#pricing" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Unified smooth scroll and navigation handler
  const handleNavClick = (e, href) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          if (window.__lenis) {
            window.__lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
          window.history.pushState(null, "", href);
        }
      } else {
        e.preventDefault();
        navigate(href);
      }
    } else if (href === "/") {
      if (location.pathname === "/") {
        e.preventDefault();
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { immediate: false });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.pushState(null, "", "/");
      }
    }
  };

  // Safe fallback booking handler
  const handleBookCall = () => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      if (window.Cal) {
        try {
          window.Cal("modal", { calLink: CONFIG.calLink });
          return;
        } catch {
          // fallback
        }
      }
      window.open(`https://cal.com/${CONFIG.calLink}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 sm:p-3 md:p-5 pointer-events-none">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center justify-between px-3.5 sm:px-5 py-2 md:py-2.5 md:px-7 transition-all duration-300 w-full ${
          isScrolled 
            ? "max-w-6xl bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full md:py-2.5" 
            : "max-w-7xl bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-full md:py-3.5"
        }`}
      >
        {/* Left: Brand Identity / Logo */}
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, "/")}
          aria-label="TriNetra Technologies Home"
          className="flex items-center gap-2 sm:gap-3 shrink-0 group focus:outline-hidden cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="TriNetra Technologies - Full-Suite IT Services & AI Automation" 
            width="40"
            height="40"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform" 
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base md:text-xl font-black tracking-tight text-[#050505] whitespace-nowrap">
                TriNetra <span className="text-primary font-bold">Technologies</span>
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#050505]/50 tracking-wider uppercase -mt-0.5 hidden lg:block whitespace-nowrap">
              IT Services & AI Solutions
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 md:gap-2">
          
          {/* Services Dropdown Trigger */}
          <div 
            ref={dropdownRef} 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => handleNavClick(e, "/#services")}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                servicesOpen 
                  ? "bg-black/[0.04] text-primary" 
                  : "text-[#050505]/75 hover:text-[#050505] hover:bg-black/[0.03]"
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary" : "text-[#050505]/40"}`} />
            </button>

            {/* Mega Dropdown Panel */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/10 shadow-[0_24px_64px_rgba(0,0,0,0.12)] p-6 z-50"
                >
                  <div className="grid grid-cols-3 gap-6 mb-5">
                    {serviceDropdown.map((group, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/5">
                          <div className="w-6 h-6 rounded-lg bg-black/5 flex items-center justify-center">
                            {group.icon}
                          </div>
                          <span className="text-xs font-black text-[#050505] uppercase tracking-wider">
                            {group.category}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {group.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="group/item block p-2 rounded-xl hover:bg-black/[0.03] transition-colors"
                            >
                              <div className="text-xs font-bold text-[#050505] group-hover/item:text-primary transition-colors flex items-center justify-between">
                                <span>{item.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-primary" />
                              </div>
                              <p className="text-[10px] text-[#050505]/50 leading-snug line-clamp-1">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown Footer Banner */}
                  <div className="pt-3.5 border-t border-black/5 flex items-center justify-between text-xs">
                    <span className="text-[#050505]/50 font-medium text-[11px] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      12 flagship services ready for deployment
                    </span>
                    <button
                      type="button"
                      onClick={(e) => handleNavClick(e, "/#services")}
                      className="font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      <span>View All Services & Architecture</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-2 rounded-full text-xs font-bold text-[#050505]/75 hover:text-[#050505] hover:bg-black/[0.03] transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA & Contact Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button 
            onClick={handleBookCall}
            className="hidden md:inline-flex whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95 items-center gap-1.5 sm:gap-2 shrink-0 shadow-sm cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>

          {/* Mobile menu toggle */}
          <button 
            className="lg:hidden p-1.5 sm:p-2 text-[#050505] rounded-full hover:bg-black/5 transition-colors cursor-pointer shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute top-16 sm:top-20 left-2.5 right-2.5 sm:left-4 sm:right-4 lg:hidden pointer-events-auto bg-white/95 backdrop-blur-2xl p-5 sm:p-6 rounded-3xl flex flex-col gap-3 border border-black/10 shadow-[0_24px_64px_rgba(0,0,0,0.15)] max-h-[85vh] overflow-y-auto"
          >
            {/* Mobile Top Booking Action */}
            <div className="md:hidden pb-3 border-b border-black/5">
              <button 
                onClick={handleBookCall}
                className="w-full py-3 px-5 text-white bg-primary rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Services Accordion */}
            <div className="border-b border-black/5 pb-3">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-sm font-bold text-[#050505] py-2 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Our Services
                </span>
                <ChevronDown className={`w-4 h-4 text-[#050505]/40 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 pt-2 pl-2"
                  >
                    {serviceDropdown.map((cat, i) => (
                      <div key={i} className="space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-primary block">
                          {cat.category}
                        </span>
                        {cat.items.map((sub, j) => (
                          <Link
                            key={j}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs font-semibold text-[#050505]/80 py-1 hover:text-primary transition-colors"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-[#050505]/80 hover:text-primary py-2 transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#050505]/30" />
              </Link>
            ))}

            {/* Mobile Contact Quick Actions */}
            <div className="pt-3 border-t border-black/5 space-y-2">
              <a 
                href="tel:+919274092055"
                className="text-xs font-semibold text-[#050505]/70 hover:text-primary transition-colors flex items-center gap-2 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>+91 9274092055</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
