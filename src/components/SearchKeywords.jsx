import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, Bot, Database, Phone,
  Workflow, ArrowRight, Sparkles,
  Code2, Smartphone, Layout, Users, Briefcase, MessageSquare
} from "lucide-react";

const keywordCategories = [
  { id: "all", label: "All Capabilities" },
  { id: "software", label: "Web & Mobile Development" },
  { id: "ai", label: "AI & Conversational Agents" },
  { id: "automation", label: "Workflows & CRM Sync" },
  { id: "teams", label: "Dedicated Teams & Consulting" }
];

const capabilityKeywords = [
  // Web & Mobile Development
  {
    category: "software",
    slug: "web-development",
    keyword: "Custom Web Application Development",
    tagline: "High-Performance Full-Stack SaaS & Web Portals",
    desc: "Engineered in Next.js, React, Node.js, and PostgreSQL for enterprise responsiveness, airtight security, and cloud scalability.",
    deliverable: "Responsive web platform, robust API backend, automated CI/CD pipeline.",
    metrics: "< 1.1s load time • 99.9% uptime",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    category: "software",
    slug: "mobile-app-development",
    keyword: "Mobile App Development (iOS & Android)",
    tagline: "Cross-Platform Flutter & React Native Apps",
    desc: "Native-grade performance, offline-first data sync, biometrics, push notifications, and App Store / Google Play publishing.",
    deliverable: "Unified iOS & Android builds, App Store submissions, backend API integration.",
    metrics: "2.5x faster time-to-market",
    icon: <Smartphone className="w-5 h-5 text-indigo-500" />,
    badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20"
  },
  {
    category: "software",
    slug: "ui-ux-design",
    keyword: "UI/UX Design & Design Systems",
    tagline: "Research-Backed Interfaces & Interactive Figma Prototypes",
    desc: "Clean, intuitive user experience design, comprehensive component token libraries, and usability testing to maximize conversion rates.",
    deliverable: "Clickable Figma prototypes, design token libraries, developer handoff specs.",
    metrics: "+45% conversion uplift",
    icon: <Layout className="w-5 h-5 text-pink-500" />,
    badgeColor: "bg-pink-500/10 text-pink-600 border-pink-500/20"
  },

  // AI & Conversational Agents
  {
    category: "ai",
    slug: "whatsapp-automation",
    keyword: "WhatsApp AI Sales & Support Agent",
    tagline: "Autonomous 24/7 Lead Response on Official WhatsApp API",
    desc: "Connects official WhatsApp Business API to LLMs to answer inquiries, overcome objections, and qualify buyer intent in real-time.",
    deliverable: "Instant replies, automated CRM contact creation, real-time appointment booking.",
    metrics: "< 15 sec response • 24/7 coverage",
    icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
  },
  {
    category: "ai",
    slug: "ai-voice-agents",
    keyword: "Voice AI Calling & Screening Agent",
    tagline: "Human-Quality Voice Conversations & Booking Reminders",
    desc: "Voice agents powered by Vapi & LLMs that handle inbound calls, screen prospects conversationally, and eliminate appointment no-shows.",
    deliverable: "Inbound call routing, automated reminder phone calls, CRM transcript logs.",
    metrics: "Up to 30% fewer no-shows",
    icon: <Phone className="w-5 h-5 text-purple-500" />,
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    category: "ai",
    slug: "custom-ai-solutions",
    keyword: "Custom AI Employees & Private RAG",
    tagline: "Internal AI Assistants Trained on Company SOPs",
    desc: "Private AI agents equipped with vector search to retrieve facts from internal documentation, wikis, and databases without data leakage.",
    deliverable: "Slack/Teams bot, private vector database, role-based document access.",
    metrics: "100% private data isolation",
    icon: <Bot className="w-5 h-5 text-cyan-500" />,
    badgeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
  },

  // Workflows & CRM Sync
  {
    category: "automation",
    slug: "ai-automation",
    keyword: "Enterprise Workflow Automation (n8n & RPA)",
    tagline: "Zero-Touch Business Operations & Pipeline Connectors",
    desc: "Eliminate manual data transfers, automated PDF/invoice parsing, and cross-platform notifications using self-hosted n8n and Python.",
    deliverable: "Multi-system workflows, automated invoice OCR, Slack/Telegram alerts.",
    metrics: "Saves 25+ hours weekly",
    icon: <Workflow className="w-5 h-5 text-amber-500" />,
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20"
  },
  {
    category: "automation",
    slug: "crm-erp-automation",
    keyword: "CRM & ERP Two-Way Automation",
    tagline: "Real-Time Sync Across HubSpot, Salesforce & Sheets",
    desc: "Continuous data synchronization connecting leads, deals, meeting transcripts, and contact enrichment without manual keyboard entry.",
    deliverable: "Custom webhooks, data deduplication, auto-lead scoring and assignment.",
    metrics: "Saves 4-6 hours per rep",
    icon: <Database className="w-5 h-5 text-blue-500" />,
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },

  // Dedicated Teams & Consulting
  {
    category: "teams",
    slug: "dedicated-engineering-teams",
    keyword: "Dedicated Engineering Teams (Staff Augmentation)",
    tagline: "Vetted Senior Full-Stack Developers In Your Time Zone",
    desc: "Scale your product engineering speed with dedicated React, Next.js, Python, and mobile developers integrated directly into your sprints.",
    deliverable: "Dedicated full-time developers, daily standups, direct GitHub commits.",
    metrics: "< 7 days onboarding speed",
    icon: <Users className="w-5 h-5 text-rose-500" />,
    badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20"
  },
  {
    category: "teams",
    slug: "it-consulting",
    keyword: "Strategic IT Consulting & Virtual CTO",
    tagline: "Architecture Audits, Cloud Cost Optimization & Advisory",
    desc: "Senior engineering advisory for founders and enterprises: tech stack evaluation, cloud bill reductions, and digital scalability roadmap.",
    deliverable: "Comprehensive architecture review, cloud bill optimization, quarterly roadmap.",
    metrics: "Up to 40% cloud cost savings",
    icon: <Briefcase className="w-5 h-5 text-teal-500" />,
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
              Full IT & Automation Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#050505] tracking-tight mb-4"
          >
            Capabilities Index: <span className="text-primary italic">Software, AI & Teams</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#050505]/60 text-lg leading-relaxed font-medium"
          >
            Looking for specific technical services? Search through the complete capabilities delivered by <strong className="text-[#050505]">TriNetra Technologies</strong> to accelerate your digital growth.
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
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-black/[0.03] text-[#050505]/70 hover:bg-black/[0.06] hover:text-[#050505]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#050505]/40" />
            <input
              type="text"
              placeholder="Search services or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-black/[0.03] border border-black/5 focus:outline-hidden focus:border-primary/40 focus:bg-white transition-all text-[#050505]"
            />
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {filteredKeywords.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-6 rounded-3xl bg-white border border-black/5 hover:border-black/15 hover:shadow-xl hover:shadow-black/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.03] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.metrics}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#050505] mb-1 group-hover:text-primary transition-colors">
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

              <div className="pt-3 border-t border-black/5 flex flex-col gap-2">
                <Link
                  to={`/services/${item.slug}`}
                  className="text-xs font-bold text-primary hover:underline flex items-center justify-between"
                >
                  <span>Explore {item.keyword}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchKeywords;
