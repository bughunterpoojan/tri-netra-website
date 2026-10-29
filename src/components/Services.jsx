import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ArrowRight, Check, ChevronRight, Sparkles
} from "lucide-react";
import { CONFIG } from "../config";
import { servicesData, serviceCategories, getServiceIcon } from "../data/servicesData";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  // ── Lock background scroll while modal is open ────────────────────────────
  // Stops Lenis (smooth scroll) and freezes body so only the modal scrolls.
  useEffect(() => {
    const lenis = window.__lenis;
    if (selectedService) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    }
    return () => {
      // Safety cleanup if component unmounts with modal open
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const filteredServices = servicesData.filter((service) => 
    activeCategory === "all" ? true : service.category === activeCategory
  );

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#fafafa]">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Full-Suite IT Services & AI Solutions
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-5 md:mb-6 tracking-tight text-[#050505] leading-[1.18] sm:leading-[1.1]"
          >
            Enterprise Capabilities That <br className="hidden sm:inline" />
            <span className="text-primary italic">Scale Your Entire Tech Stack</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#050505]/60 text-lg max-w-3xl mx-auto leading-relaxed font-medium"
          >
            From <strong className="text-[#050505]">full-stack web & mobile apps</strong> to autonomous <strong className="text-[#050505]">WhatsApp AI agents</strong>, custom <strong className="text-[#050505]">workflow automation</strong>, and <strong className="text-[#050505]">dedicated engineering teams</strong> — TriNetra Technologies turns technology into your highest-yielding asset.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-10 max-w-4xl mx-auto"
          >
            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? "text-white bg-primary shadow-lg shadow-primary/25 scale-105" 
                      : "text-[#050505]/70 bg-white border border-black/5 hover:border-black/20 hover:text-[#050505]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                    isActive ? "bg-white/20 text-white" : "bg-black/5 text-[#050505]/60"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                onClick={() => setSelectedService(service)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Fast CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl glass border border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary/5 via-white to-primary/5"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[#050505] mb-1">
              Need a Custom Solution or Full-Scale IT Transformation?
            </h3>
            <p className="text-sm text-[#050505]/60 font-medium">
              We engineer custom tech architectures tailored directly to your business bottlenecks.
            </p>
          </div>
          <button
            onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
            className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 shrink-0 flex items-center gap-2"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Modern Detailed Modal View */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-white/80 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`service-${selectedService.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              data-lenis-prevent
              className="relative w-full max-w-4xl glass rounded-[2.5rem] md:rounded-[3rem] border border-black/[0.08] shadow-[0_32px_128px_rgba(0,0,0,0.12)] max-h-[90vh] overflow-y-auto z-10 bg-white/95"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                aria-label="Close details"
                className="absolute top-6 right-6 p-3 rounded-full hover:bg-black/5 transition-colors z-50 bg-white/80 backdrop-blur-md shadow-sm border border-black/5 text-[#050505]/70 hover:text-[#050505]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Overview & Core Metrics */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/[0.05] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white shadow-lg shadow-black/10`}>
                        {getServiceIcon(selectedService.iconName, "w-8 h-8")}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 text-[#050505]/70">
                        {selectedService.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-[#050505] mb-3 leading-tight">
                      {selectedService.title}
                    </h3>
                    
                    <p className="text-sm text-[#050505]/60 mb-6 leading-relaxed font-medium">
                      {selectedService.details.solution}
                    </p>
                    
                    {/* Key Stats Bar */}
                    <div className="grid grid-cols-1 gap-2.5 mb-6">
                      {selectedService.details.stats.map((stat, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-black/[0.02] border border-black/5 flex items-center justify-between">
                          <span className="text-xs font-bold text-[#050505]/60 leading-tight">
                            {stat.label}
                          </span>
                          <span className="text-xl font-black text-primary">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* The Challenge / Problem Solved */}
                    <div className="p-4 rounded-2xl bg-primary/[0.03] border border-primary/10 mb-6">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">
                        The Business Problem We Solve
                      </h4>
                      <p className="text-xs font-medium text-[#050505]/70 italic leading-relaxed">
                        "{selectedService.details.problem}"
                      </p>
                    </div>
                  </div>

                  {/* Core Features Tag Cloud */}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#050505]/40 block mb-2">
                      Key Capabilities Included
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedService.details.features.map((feat, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-black/[0.03] border border-black/5 rounded-lg text-[11px] font-bold text-[#050505]/70">
                          <Check className="w-3 h-3 text-primary" /> {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: What We Deliver & Action */}
                <div className="p-8 md:p-12 bg-black/[0.01] flex flex-col justify-between">
                  <div>
                    {/* What We Deliver List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#050505]/40 mb-4">
                        What We Deliver
                      </h4>
                      <div className="space-y-4">
                        {selectedService.details.whatWeDeliver.map((item, i) => (
                          <div key={i} className="flex gap-3.5">
                            <div className="w-8 h-8 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mt-0.5">
                              {getServiceIcon(item.iconName || "Sparkles", "w-4 h-4")}
                            </div>
                            <div>
                              <h5 className="font-bold text-[#050505] text-xs mb-0.5">{item.title}</h5>
                              <p className="text-[11px] text-[#050505]/60 leading-snug">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mb-8">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#050505]/40 mb-2.5">
                        Tools & Technologies in this Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedService.details.techStack.map((tool, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white border border-black/5 rounded-md text-[10px] font-bold text-[#050505]/70 shadow-2xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div>
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        window.Cal && window.Cal("modal", { calLink: CONFIG.calLink });
                      }}
                      className="w-full py-3.5 px-6 bg-primary text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-primary/20"
                    >
                      <span>Request Scope & Estimate for This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <div className="mt-3 text-center">
                      <Link
                        to={`/services/${selectedService.slug}`}
                        onClick={() => setSelectedService(null)}
                        className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <span>Open dedicated page for {selectedService.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <p className="text-[10px] text-center text-[#050505]/40 font-bold uppercase tracking-wider mt-2.5">
                      Direct Strategy Call • 100% Custom Scoped • No Generic Plans
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceCard = ({ service, index, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ y: -6 }}
    onClick={onClick}
    className="group relative p-8 rounded-[2rem] glass hover:border-black/15 transition-all cursor-pointer overflow-hidden flex flex-col justify-between border border-black/5 shadow-sm hover:shadow-xl hover:shadow-black/5 bg-white/70"
  >
    {/* Subtle Glow on hover */}
    <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
    
    <div>
      {/* Card Header: Category Badge & Pill */}
      <div className="flex items-center justify-between mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300`}>
          {getServiceIcon(service.iconName, "w-8 h-8")}
        </div>
        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-black/[0.04] text-[#050505]/60 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          {service.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-[#050505] group-hover:text-primary transition-colors leading-snug">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-xs text-[#050505]/60 leading-relaxed mb-6 font-medium line-clamp-3">
        {service.description}
      </p>

      {/* Tech / Feature Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {service.pills.map((pill, i) => (
          <span 
            key={i} 
            className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-black/[0.02] border border-black/5 text-[#050505]/70"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>

    {/* Footer CTA & Crawlable HTML Link */}
    <div className="pt-4 border-t border-black/5">
      <div className="flex items-center justify-between text-xs font-bold text-[#050505]/60 group-hover:text-primary transition-colors mb-2">
        <span>Explore Architecture & Deliverables</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
      <Link 
        to={`/services/${service.slug}`}
        onClick={(e) => e.stopPropagation()}
        className="text-[11px] font-bold text-primary hover:underline inline-flex items-center gap-1"
      >
        <span>View {service.title} details</span>
        <ChevronRight className="w-3 h-3" />
      </Link>
    </div>
  </motion.div>
);

export default Services;
