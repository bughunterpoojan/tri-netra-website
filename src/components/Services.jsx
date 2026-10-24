import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, CalendarCheck, BarChart3, Bot, Mail, Cpu, X, ArrowRight, 
  CheckCircle2, Search, Send, Zap, MousePointer2, Target, Smartphone,
  MessageSquare, Bell, ShieldCheck, FileText, Database, RefreshCw, Wand2, GitMerge,
  Map, AlertTriangle, Briefcase, Settings2
} from "lucide-react";
import { CONFIG } from "../config";

const services = [
  {
    title: "AI Lead Generation",
    description: "Automated discovery, enrichment, and outreach — tailored to your ICP",
    icon: <Users className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    details: {
      stats: [
        { label: "Conversion lift, <5 min response", value: "21x" },
        { label: "Avg. B2B response time today", value: "42 hrs" },
        { label: "Leads never contacted at all", value: "73%" }
      ],
      whatWeAutomate: [
        {
          title: "Sourcing & enrichment",
          desc: "Scrape and verify prospects matching your exact ICP, pulled across data sources daily.",
          icon: <Target className="w-5 h-5" />
        },
        {
          title: "Outreach at scale",
          desc: "Personalized multi-step email sequences sent across rotated inboxes for deliverability.",
          icon: <Send className="w-5 h-5" />
        },
        {
          title: "Instant qualification",
          desc: "Replies and inbound leads scored and routed in minutes, not days.",
          icon: <Zap className="w-5 h-5" />
        }
      ],
      techStack: ["Apollo.io", "Instantly", "Apify", "n8n", "Clay"],
      problem: "Leads contacted within 5 minutes convert 21x more than 30+ minutes.",
      solution: "Automated discovery, enrichment, and outreach — tailored to your ICP",
      features: ["Verified Email Discovery", "LinkedIn Profile Analysis", "ICP Scoring Matrix", "Real-time CRM Sync"]
    }
  },
  {
    title: "AI Appointment Setting",
    description: "Qualifying, scheduling, and confirming — without a human touching a calendar",
    icon: <CalendarCheck className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    details: {
      stats: [
        { label: "Conversion lift, instant booking", value: "30% → 67%" },
        { label: "No-show reduction with AI reminders", value: "up to 30%" },
        { label: "Bookings resolved with zero human input", value: "89%" }
      ],
      whatWeAutomate: [
        {
          title: "Conversational qualification",
          desc: "Voice or chat agent asks the right questions before a slot is ever offered.",
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          title: "Live calendar booking",
          desc: "Syncs directly to your real-time availability — no double-booking.",
          icon: <CalendarCheck className="w-5 h-5" />
        },
        {
          title: "Confirmations & reminders",
          desc: "Automated SMS/email touches before the appointment, with one-tap reschedule.",
          icon: <Bell className="w-5 h-5" />
        }
      ],
      techStack: ["Vapi", "n8n", "Google Calendar", "WhatsApp Business API", "Twilio"],
      problem: "Every missed appointment is money walking out the door. A calendar that books and confirms itself doesn't get tired.",
      solution: "Qualifying, scheduling, and confirming — without a human touching a calendar",
      features: ["Multi-channel Presence", "2-Way Calendar Sync", "Natural Language Conversational", "Lead Qualification Scoring"]
    }
  },
  {
    title: "WhatsApp & Sales AI Agents",
    description: "Autonomous WhatsApp agents that qualify leads, handle objections, and close — 24/7 over chat or voice",
    icon: <Bot className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    details: {
      stats: [
        { label: "More qualified leads with AI agents", value: "+50%" },
        { label: "Shorter sales cycle", value: "-30%" },
        { label: "Sales teams adding conversational AI", value: "63%" }
      ],
      whatWeAutomate: [
        {
          title: "Real-time objection handling",
          desc: "Agent reads context and pushes back on price, timing, and trust objections instantly.",
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: "Chat or voice, same agent",
          desc: "One agent handles website chat, WhatsApp, and live calls without losing context.",
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          title: "Closes or hands off cleanly",
          desc: "Simple deals close end-to-end; complex ones get routed to a human with full context.",
          icon: <FileText className="w-5 h-5" />
        }
      ],
      techStack: ["Vapi", "OpenAI / Claude API", "n8n", "WhatsApp Business API", "CRM (HubSpot / Pipedrive)"],
      problem: "Your best closer can't work every chat at once. This one can. An agent that never gets tired of the same objection.",
      solution: "Autonomous agents that qualify, handle objections, and close — over chat or voice",
      features: ["Voice & Chat Capabilities", "Custom Brand Voice", "Objection Handling Matrix", "CRM Transaction Logging"]
    }
  },
  {
    title: "CRM Automation",
    description: "Clean, synced data across every platform — without anyone touching a keyboard",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    details: {
      stats: [
        { label: "Hours saved per rep, weekly", value: "4-6 hrs" },
        { label: "Reps' time lost to admin work", value: "~70%" },
        { label: "Reps spending 1+ hr/day on manual entry", value: "32%" }
      ],
      whatWeAutomate: [
        {
          title: "Real-time sync",
          desc: "Every new lead or status change updates instantly across CRM, sheets, and messaging tools.",
          icon: <RefreshCw className="w-5 h-5" />
        },
        {
          title: "Auto-enrichment",
          desc: "Incoming contacts get verified, enriched, and tagged the moment they're captured.",
          icon: <Wand2 className="w-5 h-5" />
        },
        {
          title: "Pipeline automation",
          desc: "Deals move stages and tasks get assigned automatically based on activity.",
          icon: <GitMerge className="w-5 h-5" />
        }
      ],
      techStack: ["n8n", "HubSpot", "Pipedrive", "Google Sheets", "Apollo.io"],
      problem: "Dirty CRM data isn't a minor annoyance. It's a forecast you can't trust. Every duplicate is a decision made on bad information.",
      solution: "Clean, synced data across every platform — without anyone touching a keyboard",
      features: ["Automated Data Enrichment", "Cross-platform Sync (Zapier/Make)", "Meeting Summary Extraction", "AI Task Assignment"]
    }
  },
  {
    title: "Email Outreach Systems",
    description: "High-deliverability cold email, built to feel personal at scale",
    icon: <Mail className="w-8 h-8" />,
    color: "from-indigo-500 to-blue-500",
    details: {
      stats: [
        { label: "Reply rate, generic blast vs personalized", value: "2-3% → 18%" },
        { label: "Replies that come from a follow-up, not email 1", value: "42%" },
        { label: "Reps who never send a second message", value: "48%" }
      ],
      whatWeAutomate: [
        {
          title: "Deliverability infrastructure",
          desc: "Domain warmup, SPF/DKIM/DMARC setup, and inbox rotation so your emails land in primary.",
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: "AI-personalized sequences",
          desc: "Every email written around the prospect's actual context, not just a merge-tagged name.",
          icon: <Wand2 className="w-5 h-5" />
        },
        {
          title: "Automated follow-up cadence",
          desc: "2-3 well-timed follow-ups sent automatically, so no reply gets left on the table.",
          icon: <RefreshCw className="w-5 h-5" />
        }
      ],
      techStack: ["Instantly", "Apollo.io", "Apify", "n8n", "OpenAI / Claude API"],
      problem: "Most cold email doesn't fail on copy. It fails before it's even opened. Bad infrastructure and no follow-up kill more campaigns than weak writing.",
      solution: "High-deliverability cold email, built to feel personal at scale",
      features: ["AI Personalization Lines", "Spin-tax Free Variations", "Deliverability Monitoring", "Multi-inbox Management"]
    }
  },
  {
    title: "Custom AI Employees",
    description: "Built around your actual workflow — not the other way around",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-cyan-500 to-teal-500",
    details: {
      stats: [
        { label: "Automation initiatives delivering expected ROI", value: "Only 26%" },
        { label: "Custom systems vs generic templates", value: "100% Unique" },
        { label: "First version vs Final version tuned", value: "Post-Launch" }
      ],
      whatWeAutomate: [
        {
          title: "We map the real process",
          desc: "Not what's on a slide — what actually happens between your team and tools.",
          icon: <Map className="w-5 h-5" />
        },
        {
          title: "We find where it breaks",
          desc: "The bottleneck, the manual handoff, the step someone repeats 50x a week.",
          icon: <AlertTriangle className="w-5 h-5" />
        },
        {
          title: "We build it into your logic",
          desc: "An agent or workflow shaped to your rules, your edge cases, and your tools.",
          icon: <Settings2 className="w-5 h-5" />
        }
      ],
      techStack: ["n8n", "OpenAI / Claude API", "Vapi", "Custom APIs", "Your existing stack"],
      problem: "Only 26% of automation initiatives deliver the ROI companies expected. Off-the-shelf tools get bent to fit processes they weren't built for.",
      solution: "Built around your actual workflow — not the other way around",
      features: ["Internal Document Retrieval (RAG)", "Third-party API Integration", "Custom LLM Fine-tuning", "Autonomous Task Execution"]
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#050505]"
          >
            Capabilities That <span className="text-primary italic">Scale</span>.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
            className="text-[#050505]/60 text-lg max-w-2xl mx-auto"
          >
            Replace manual labor with high-performance AI systems designed to grow with you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Modern Modal / Tab Overlay */}
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
              layoutId={`service-${selectedService.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass overflow-hidden rounded-[3rem] border border-black/[0.05] shadow-[0_32px_128px_rgba(0,0,0,0.1)] max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-3 rounded-full hover:bg-black/5 transition-colors z-50 bg-white/50 backdrop-blur-sm shadow-sm"
              >
                <X className="w-6 h-6 text-[#050505]/60" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Dynamic Content */}
                <div className="p-8 md:p-12 border-r border-black/[0.03]">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/5`}>
                    {selectedService.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#050505] mb-4 leading-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-base text-[#050505]/60 mb-8 leading-relaxed">
                    {selectedService.details.solution}
                  </p>
                  
                  {selectedService.details.stats ? (
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {selectedService.details.stats.map((stat, i) => (
                        <div key={i} className="p-5 rounded-[2rem] bg-black/[0.02] border border-black/5 flex flex-col justify-center">
                          <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                          <div className="text-[10px] font-bold text-[#050505]/40 leading-tight uppercase tracking-widest">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">Core Tech Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.details.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-black/[0.02] border border-black/[0.05] rounded-xl text-xs font-bold text-[#050505]/70">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {!selectedService.details.stats && (
                    <div className="mb-0">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#050505]/30 mb-3">The Challenge</h4>
                      <p className="text-sm font-medium text-[#050505]/80 italic">"{selectedService.details.problem}"</p>
                    </div>
                  )}
                </div>

                {/* Right Side: Action Context */}
                <div className="p-8 md:p-12 bg-black/[0.01] flex flex-col justify-center">
                  {selectedService.details.whatWeAutomate ? (
                    <div className="space-y-6 mb-8">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#050505]/30">What we automate</h4>
                      <div className="space-y-4">
                        {selectedService.details.whatWeAutomate.map((item, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="w-9 h-9 shrink-0 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                              {item.icon}
                            </div>
                            <div>
                              <h5 className="font-bold text-[#050505] text-sm mb-1">{item.title}</h5>
                              <p className="text-xs text-[#050505]/50 leading-snug">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 mb-8">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#050505]/30">Deployment</h4>
                      <ul className="space-y-3">
                        {["Audit & Data Mapping", "Architecture Design", "Live Testing", "Full Autonomous Scale"].map((step, i) => (
                          <li key={i} className="flex items-center gap-4 text-xs font-bold text-[#050505]">
                            <span className="w-6 h-6 rounded-lg bg-white border border-black/[0.05] flex items-center justify-center text-[10px]">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedService.details.techStack && (
                    <div className="mb-8">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#050505]/30 mb-3">Tools in this stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.details.techStack.map((tool, i) => (
                          <div key={i} className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-[10px] font-bold text-[#050505]/60">
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={() => {
                        setSelectedService(null);
                        window.Cal && window.Cal("modal", { calLink: CONFIG.calLink });
                    }}
                    className="w-full py-4 bg-primary text-white rounded-2xl font-black text-base flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
                  >
                    Deploy This System <ArrowRight className="w-5 h-5" />
                  </button>
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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    onClick={onClick}
    className="group relative p-8 rounded-[2rem] glass hover:border-black/10 transition-all cursor-pointer overflow-hidden"
  >
    {/* Gradient Glow */}
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />
    
    <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black/10 transition-transform duration-500">
      <div className="text-primary">{service.icon}</div>
    </div>

    <h3 className="text-2xl font-bold mb-4 text-[#050505] group-hover:text-primary transition-colors">{service.title}</h3>
    <p className="text-[#050505]/50 leading-relaxed mb-6">
      {service.description}
    </p>

    <div className="flex items-center gap-2 text-sm font-bold text-[#050505]/40 group-hover:text-[#050505] transition-colors">
      Learn more <ArrowRight className="w-4 h-4" />
    </div>
  </motion.div>
);

export default Services;
