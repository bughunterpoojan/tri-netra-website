import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Bot, Zap, Database, Mail, Phone, CalendarCheck, 
  Workflow, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, 
  Globe, MessageSquare, Flame
} from "lucide-react";
import { CONFIG } from "../config";

const keywordCategories = [
  { id: "all", label: "All Capabilities" },
  { id: "whatsapp", label: "WhatsApp & Voice AI" },
  { id: "leads", label: "Lead Gen & Sales" },
  { id: "crm", label: "CRM & Workflows" },
  { id: "enterprise", label: "Custom AI Employees" }
];

const capabilityKeywords = [
  {
    category: "whatsapp",
    keyword: "WhatsApp AI Agent",
    tagline: "Autonomous 24/7 Lead Response on WhatsApp",
    desc: "Connects official WhatsApp Business API to LLMs to answer questions, handle objections, and qualify buyer intent in real-time.",
    deliverable: "Instant replies, CRM contact creation, automatic appointment booking.",
    metrics: "< 30 sec response • 24/7 coverage",
    icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
  },
  {
    category: "whatsapp",
    keyword: "Voice AI Calling Agent",
    tagline: "Human-Quality Voice Screening & Reminders",
    desc: "Voice agents powered by Vapi & LLMs that make and receive calls, qualify leads conversationally, and minimize appointment no-shows.",
    deliverable: "Inbound call triage, outbound booking confirmations, call recordings logged in CRM.",
    metrics: "Up to 30% fewer no-shows",
    icon: <Phone className="w-5 h-5 text-purple-500" />,
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    category: "leads",
    keyword: "AI Lead Generation & Enrichment",
    tagline: "ICP Prospect Discovery & Automated Scoring",
    desc: "Autonomous scraping and data verification from Apollo, LinkedIn, and web sources tailored specifically to your ideal customer profile.",
    deliverable: "Verified corporate emails, phone numbers, ICP score, auto-pushed to CRM.",
    metrics: "21x higher lead conversion",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    category: "leads",
    keyword: "Cold Email Outreach Infrastructure",
    tagline: "High-Deliverability Inboxes & Personalized Sequences",
    desc: "Multi-domain warmup, SPF/DKIM/DMARC configuration, inbox rotation, and hyper-personalized AI email sequences at scale.",
    deliverable: "Warmup automation, automated 3-stage follow-ups, primary tab deliverability.",
    metrics: "Up to 18% reply rate",
    icon: <Mail className="w-5 h-5 text-indigo-500" />,
    badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20"
  },
  {
    category: "crm",
    keyword: "CRM Automation & n8n Workflows",
    tagline: "Real-time Two-Way Sync across HubSpot & Sheets",
    desc: "End-to-end data pipeline syncing inbound leads, sales pipeline stages, notes, and task assignments with zero manual data entry.",
    deliverable: "Custom n8n and Zapier webhooks, deduplication, contact enrichment.",
    metrics: "Saves 4-6 hours/rep weekly",
    icon: <Database className="w-5 h-5 text-cyan-500" />,
    badgeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
  },
  {
    category: "crm",
    keyword: "AI Appointment Booking & Calendar Sync",
    tagline: "Frictionless Scheduling on Cal.com & Google Calendar",
    desc: "Conversational scheduling via chat and voice that verifies availability, books time slots, and sends instant calendar invites with reminders.",
    deliverable: "Time zone auto-detection, rescheduling links, CRM deal updates.",
    metrics: "89% booked without human input",
    icon: <CalendarCheck className="w-5 h-5 text-rose-500" />,
    badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20"
  },
  {
    category: "enterprise",
    keyword: "Autonomous AI Employees",
    tagline: "Custom Multi-Agent Workflows Tailored to Your Stack",
    desc: "Bespoke AI agents equipped with custom memory, tool integrations, and decision trees to perform complex multi-step operations autonomously.",
    deliverable: "End-to-end mapped workflows, error fallbacks, executive monitoring dashboard.",
    metrics: "100% custom-tailored",
    icon: <Workflow className="w-5 h-5 text-amber-500" />,
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20"
  },
  {
    category: "enterprise",
    keyword: "AI Automation Agency India",
    tagline: "World-Class Automation Engineering from Ahmedabad",
    desc: "TriNetra Technologies provides enterprise-grade AI automation consulting, system architecture, and maintenance for clients in India and worldwide.",
    deliverable: "Complete implementation, ongoing monitoring, security-compliant API integrations.",
    metrics: "Global & Domestic Delivery",
    icon: <Globe className="w-5 h-5 text-teal-500" />,
    badgeColor: "bg-teal-500/10 text-teal-600 border-teal-500/20"
  }
];

const SearchKeywords = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKeywords = capabilityKeywords.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = 
      item.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden bg-white border-t border-black/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Search & Discover Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#050505] tracking-tight mb-4"
          >
            What We Automate: <span className="text-primary italic">Keywords & Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#050505]/60 text-lg leading-relaxed"
          >
            Looking for specific automation solutions? Explore the core systems built by <strong className="text-[#050505]">TriNetra Technologies</strong> to eliminate bottlenecks and scale operations.
          </motion.p>
        </div>

        {/* Filter Tabs & Live Search Input */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {keywordCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-black/[0.04] text-[#050505]/70 hover:bg-black/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#050505]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search keyword (e.g. WhatsApp)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-black/10 bg-black/[0.02] focus:bg-white focus:border-primary/50 outline-none transition-all"
            />
          </div>
        </div>

        {/* Capability Keyword Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {filteredKeywords.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border border-black/5 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-black/[0.03] border border-black/5">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.metrics}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#050505] mb-1 group-hover:text-primary transition-colors">
                  {item.keyword}
                </h3>
                <p className="text-xs font-bold text-primary/80 mb-3">
                  {item.tagline}
                </p>

                <p className="text-xs text-[#050505]/60 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="p-3 rounded-2xl bg-black/[0.02] border border-black/5 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#050505]/40 block mb-1">
                    Deliverable:
                  </span>
                  <p className="text-[11px] font-medium text-[#050505]/80">
                    {item.deliverable}
                  </p>
                </div>
              </div>

              <button
                onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
                className="w-full pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-primary group-hover:text-primary/80"
              >
                <span>Automate This</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Global SEO Keyword Search Summary Footer */}
        <div className="max-w-5xl mx-auto p-6 md:p-8 rounded-3xl bg-gradient-to-r from-primary/[0.03] via-black/[0.02] to-primary/[0.03] border border-black/5 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-[#050505]">
              Popular Search Terms Indexed for TriNetra Technologies
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "TriNetra Technologies",
              "AI Automation Agency India",
              "WhatsApp AI Agent",
              "Custom AI Workflows",
              "CRM Automation Agency",
              "AI Appointment Booking Agent",
              "Cold Email Infrastructure Setup",
              "n8n Workflow Automation",
              "Autonomous AI Employees",
              "Lead Qualification Chatbot",
              "AI Company Ahmedabad"
            ].map((kw, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-white border border-black/5 text-[#050505]/70 shadow-2xs"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SearchKeywords;
