import React from "react";
import { motion } from "framer-motion";
import { Building2, RefreshCw, Wallet, Clock, ArrowRight, ShieldAlert, Users, Map, MessageSquare } from "lucide-react";
import { useMagnetic } from "../hooks/useMagnetic";
import { CONFIG } from "../config";

const WhyAutomate = () => {
  const magneticButtonRef = useMagnetic();

  const cards = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Is my business too small for AI automation?",
      body: "You don't need an enterprise budget. TriNetra Technologies designs lean, focused systems that eliminate your single biggest operational bottleneck and deliver immediate ROI."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Why does typical automation fail?",
      body: "Most agency automation fails because it relies on rigid generic templates. We map and engineer workflows around your exact business logic and existing tool stack."
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "What is the true cost and ROI?",
      body: "Our solutions are priced against the high-value leads and weekly staff hours you're currently losing — paying for themselves in saved labor and captured revenue."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "How long does setup take?",
      body: "We manage the entire engineering, API integration, and testing cycle. Your team simply steps into a fully operational, automated pipeline within days."
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "What if a workflow breaks or encounters errors?",
      body: "Unlike amateur bots that fail silently, TriNetra builds automated fallback loops, uptime monitoring, and instant alert notifications so issues are handled before clients notice."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Will AI employees replace my human team?",
      body: "No. AI employees eliminate repetitive admin work like data entry, manual follow-ups, and calendar ping-pong, enabling your top people to focus on high-ticket closing and client care."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "How do I know it will work for my industry?",
      body: "We map your actual customer journey and operational handoffs before writing a single line of automation code, eliminating guesswork and guaranteeing workflow alignment."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "How is an AI agent different from a standard chatbot?",
      body: "A basic chatbot only matches canned FAQ answers. TriNetra's WhatsApp and web AI agents actively qualify budgets, handle sales objections, schedule calendar slots, and sync live CRM deals."
    }
  ];

  return (
    <section id="why-automate" className="py-24 relative overflow-hidden bg-[#fafafa]">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">WHY AUTOMATE</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#050505] tracking-tight leading-[1.15]"
          >
            The Real <span className="text-primary">Question</span> Isn't 'Should I Automate.' <br className="hidden md:inline" />
            It's 'What Is <span className="text-primary">Manual Work</span> Already <span className="text-primary">Costing</span> Me?'
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#050505]/60 text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed font-medium"
          >
            Every lead that waits an hour for a reply. Every booking lost to a missed call. Every hour your team spends on data entry instead of closing deals. That's not free — it's just a cost you're not measuring yet.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            // Centering logic for the last two cards on desktop (index 6 and 7)
            let columnClass = "col-span-6 md:col-span-3 lg:col-span-2";
            if (index === 6) {
              columnClass = "col-span-6 md:col-span-3 lg:col-start-2 lg:col-span-2";
            } else if (index === 7) {
              columnClass = "col-span-6 md:col-span-3 lg:col-start-4 lg:col-span-2";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative p-8 rounded-[2rem] glass hover:border-black/10 transition-all duration-300 overflow-hidden flex flex-col items-start text-left ${columnClass}`}
              >
                {/* Icon container */}
                <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black/10 transition-transform duration-500 text-primary">
                  {card.icon}
                </div>

                {/* Card content */}
                <h3 className="text-lg font-bold mb-2 text-[#050505]">{card.title}</h3>
                <p className="text-sm text-[#050505]/50 leading-relaxed font-medium">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button Block */}
        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button 
              ref={magneticButtonRef}
              onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
              className="group relative px-8 py-4 bg-primary rounded-2xl font-bold flex items-center gap-2 overflow-hidden transition-all shadow-2xl shadow-primary/30 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                See how it fits your business <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutomate;
