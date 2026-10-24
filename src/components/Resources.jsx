import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, Download, ExternalLink, Bot, CheckSquare, 
  Workflow, ArrowRight, ShieldCheck, Sparkles, BookOpen 
} from "lucide-react";

const downloadableResources = [
  {
    title: "WhatsApp AI Agent Architecture Blueprint",
    category: "Architecture Guide",
    description: "Complete blueprint showing how to connect WhatsApp Business API with LLMs and CRM systems to qualify leads 24/7.",
    format: "PDF Blueprint",
    tag: "Most Popular",
    icon: <Bot className="w-6 h-6 text-emerald-500" />,
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    actionText: "Download Free Blueprint"
  },
  {
    title: "Business Workflow Automation Checklist",
    category: "Audit Checklist",
    description: "A 15-point audit checklist to identify operational bottlenecks and calculate hours saved by deploying AI employees.",
    format: "Interactive Checklist",
    tag: "High Value",
    icon: <CheckSquare className="w-6 h-6 text-blue-500" />,
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    actionText: "Get Checklist Guide"
  },
  {
    title: "AI ROI & Scale Benchmark Report",
    category: "Research Report",
    description: "Data-driven insights on how modern companies scale revenue while reducing manual data entry and response times.",
    format: "Executive Summary",
    tag: "2026 Edition",
    icon: <Workflow className="w-6 h-6 text-purple-500" />,
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    actionText: "Read Benchmark Report"
  }
];

const authoritativeLinks = [
  {
    name: "WhatsApp Business Platform Documentation",
    provider: "Meta Developers Official",
    url: "https://developers.facebook.com/docs/whatsapp/",
    description: "Official API guides for WhatsApp Cloud API, Webhooks, and automated messaging compliance.",
    badge: "API Reference"
  },
  {
    name: "OpenAI Developer Platform Documentation",
    provider: "OpenAI Official",
    url: "https://platform.openai.com/docs/",
    description: "Comprehensive developer guides for fine-tuning, function calling, and autonomous LLM agents.",
    badge: "AI Models"
  },
  {
    name: "n8n Workflow Automation Framework",
    provider: "n8n.io Official Docs",
    url: "https://docs.n8n.io/",
    description: "Fair-code enterprise workflow automation documentation with 400+ native integrations.",
    badge: "Automation Docs"
  },
  {
    name: "Cal.com Open-Source Scheduling API",
    provider: "Cal.com Developer Hub",
    url: "https://cal.com/docs",
    description: "Infrastructure reference for programmatic calendar synchronization and appointment routing.",
    badge: "Scheduling Hub"
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-24 relative overflow-hidden bg-white/50 border-t border-black/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Knowledge Hub & Guides</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#050505] tracking-tight mb-4"
          >
            Free Resources to <span className="text-primary italic">Scale Your Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#050505]/60 text-lg leading-relaxed"
          >
            Explore our curated blueprints, checklists, and authoritative industry documentation to learn how an AI automation company builds reliable workflows.
          </motion.p>
        </div>

        {/* Downloadable / Actionable Resources Grid (Slide 3) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#050505]">Value-Add Blueprints & Guides</h3>
              <p className="text-sm text-[#050505]/50">Actionable tools designed to help business owners understand automation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-black/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-black/[0.03] border border-black/5">
                      {resource.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${resource.badgeColor}`}>
                      {resource.tag}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#050505]/40 uppercase tracking-wider block mb-2">
                    {resource.category} • {resource.format}
                  </span>

                  <h4 className="text-xl font-bold text-[#050505] mb-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h4>

                  <p className="text-sm text-[#050505]/60 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <a
                    href="#why-automate"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                    title={`View details for ${resource.title}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>{resource.actionText}</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Authoritative Outbound Links Section (Slide 4 & Slide 5) */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-black/[0.02] to-black/[0.05] border border-black/5">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">
              Authoritative Industry Sources & References
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-[#050505] mb-3">
              Official Technical Documentation
            </h3>
            <p className="text-sm text-[#050505]/60 leading-relaxed">
              We build on verified, enterprise-grade APIs and open documentation. Refer to official documentation below for technical specifications:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authoritativeLinks.map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-black/5 hover:border-primary/40 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      {link.provider}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/[0.04] text-[#050505]/60">
                      {link.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#050505] mb-2">
                    {link.name}
                  </h4>

                  <p className="text-xs text-[#050505]/60 leading-relaxed mb-4">
                    {link.description}
                  </p>
                </div>

                {/* SEO Best Practice: Descriptive anchor text + rel="noopener noreferrer" + target="_blank" */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors pt-3 border-t border-black/5"
                  title={`Open official documentation for ${link.name} (External Link)`}
                >
                  <span>Explore {link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resources;
