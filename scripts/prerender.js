import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const pages = [
  // 1. Custom Web Applications
  {
    path: "services/web-development",
    title: "Custom Web Application Development | TriNetra Technologies",
    description: "Scale your business with full-stack custom web applications and SaaS platforms built on Next.js, React, and Node.js by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/web-development",
    h1: "Custom Web Application & SaaS Engineering",
    badge: "Core Engineering",
    content: "Enterprise-grade SaaS platforms, client portals, and cloud-native web applications engineered with modern full-stack architectures for unmatched speed, security, and scalability."
  },
  // 2. Mobile App Development
  {
    path: "services/mobile-app-development",
    title: "Mobile App Development (iOS & Android) | TriNetra Technologies",
    description: "High-performance cross-platform iOS and Android mobile apps engineered with Flutter and React Native by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/mobile-app-development",
    h1: "Mobile App Development (iOS & Android)",
    badge: "iOS & Android",
    content: "High-performance cross-platform and native mobile apps engineered with Flutter and React Native. Complete with offline sync, biometric security, and app store publishing."
  },
  // 3. UI/UX Design Systems
  {
    path: "services/ui-ux-design",
    title: "UI/UX Design & Design Systems | TriNetra Technologies",
    description: "Interactive Figma prototypes, design systems, and conversion-optimized UX design for modern digital products by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/ui-ux-design",
    h1: "UI/UX Design & Enterprise Design Systems",
    badge: "Design Systems",
    content: "Design systems that turn complex workflows into intuitive, conversion-focused user experiences. Interactive Figma prototypes, design tokens, and user research."
  },
  // 4. API & Microservices
  {
    path: "services/api-microservices",
    title: "Enterprise API & Microservices Architecture | TriNetra Technologies",
    description: "High-throughput RESTful and GraphQL APIs, cloud microservices, and secure API gateways engineered by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/api-microservices",
    h1: "Enterprise API & Microservices Architecture",
    badge: "Cloud Architecture",
    content: "High-throughput RESTful and GraphQL APIs, cloud microservices, and secure API gateways engineered for high concurrency and sub-millisecond latency."
  },
  // 5. WhatsApp Automation
  {
    path: "services/whatsapp-automation",
    title: "WhatsApp AI Agents & Business API Automation | TriNetra Technologies",
    description: "Autonomous 24/7 WhatsApp AI agents for instant lead qualification, meeting scheduling, and support automation by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/whatsapp-automation",
    h1: "WhatsApp AI & Conversational Automation",
    badge: "Autonomous Agents",
    content: "Autonomous WhatsApp AI agents that handle lead qualification, objection handling, appointment booking, and CRM sync 24/7 with zero human intervention."
  },
  // 6. AI Voice Agents
  {
    path: "services/ai-voice-agents",
    title: "Conversational AI Voice Calling Agents | TriNetra Technologies",
    description: "Ultra-low latency conversational AI voice agents for inbound receptionist calls and outbound sales outreach by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/ai-voice-agents",
    h1: "AI Voice Calling Agents & Telephony",
    badge: "Voice Telephony",
    content: "Ultra-low latency conversational AI phone agents that sound natural, handle complex objections, transfer calls, and book meetings in real time."
  },
  // 7. Workflow RPA
  {
    path: "services/ai-automation",
    title: "Enterprise Workflow Automation & RPA | TriNetra Technologies",
    description: "Zero-touch business process automation, n8n orchestration, and custom Python automation pipelines by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/ai-automation",
    h1: "Enterprise Workflow Automation & RPA",
    badge: "Process Automation",
    content: "Eliminate repetitive manual tasks with zero-touch business operations, automated data pipelines, and intelligent workflow orchestration built with n8n and Python."
  },
  // 8. CRM ERP Automation
  {
    path: "services/crm-erp-automation",
    title: "CRM & ERP Two-Way Sync Automation | TriNetra Technologies",
    description: "Real-time bidirectional synchronization between HubSpot, Salesforce, Zoho CRM, and ERP systems by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/crm-erp-automation",
    h1: "CRM & ERP Two-Way Sync Automation",
    badge: "Data Pipelines",
    content: "Real-time bidirectional data synchronization and automated deal enrichment between HubSpot, Salesforce, Zoho CRM, and ERP platforms."
  },
  // 9. Custom AI Solutions & RAG
  {
    path: "services/custom-ai-solutions",
    title: "Custom AI Solutions & Private RAG Employees | TriNetra Technologies",
    description: "Private AI employees, internal company knowledge base RAG, and fine-tuned LLM solutions engineered by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/custom-ai-solutions",
    h1: "Custom AI Solutions & Private RAG",
    badge: "Proprietary AI",
    content: "Private AI employees and retrieval-augmented generation systems trained securely on your company SOPs, documents, and internal knowledge bases."
  },
  // 10. IT Consulting
  {
    path: "services/it-consulting",
    title: "Strategic IT Consulting & Virtual CTO | TriNetra Technologies",
    description: "Technical due diligence, software architecture audits, and fractional CTO advisory for growing startups by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/it-consulting",
    h1: "Strategic IT Consulting & Virtual CTO",
    badge: "Executive Advisory",
    content: "Strategic technology advisory, enterprise architecture audits, cloud cost optimization, and fractional CTO leadership to de-risk your technology investments."
  },
  // 11. Dedicated Teams
  {
    path: "services/dedicated-engineering-teams",
    title: "Dedicated Engineering Teams & Staff Augmentation | TriNetra Technologies",
    description: "Hire vetted senior full-stack developers, React, Node.js, Python, and Flutter engineers from India with TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/dedicated-engineering-teams",
    h1: "Dedicated Engineering Teams & Staff Augmentation",
    badge: "Staff Augmentation",
    content: "Scale your development velocity with vetted senior React, Node.js, Python, and Flutter engineers integrated directly into your agile sprints."
  },
  // 12. Software Maintenance & SLA
  {
    path: "services/software-maintenance-sla",
    title: "Software Maintenance & 24/7 SLA Support | TriNetra Technologies",
    description: "Guaranteed 24/7 application uptime monitoring, bug fixing, and continuous software modernization SLA by TriNetra Technologies.",
    canonical: "https://www.trinetra-technologies.in/services/software-maintenance-sla",
    h1: "Software Maintenance & 24/7 SLA Support",
    badge: "Guaranteed SLA",
    content: "Round-the-clock application monitoring, legacy modernizations, critical bug fixing, and continuous software optimization with guaranteed SLA response times."
  },
  // 13. Privacy Policy
  {
    path: "privacy",
    title: "Privacy Policy | TriNetra Technologies",
    description: "Read the official Privacy Policy of TriNetra Technologies. Learn how we safeguard your confidential business data and personal information.",
    canonical: "https://www.trinetra-technologies.in/privacy",
    h1: "Privacy Policy",
    badge: "Compliance",
    content: "TriNetra Technologies is committed to maintaining strict data privacy, enterprise confidentiality, and secure handling of client information."
  },
  // 14. Terms of Service
  {
    path: "terms",
    title: "Terms of Service | TriNetra Technologies",
    description: "Review the Terms of Service for TriNetra Technologies governing our IT services, custom software engineering, and AI automation deliverables.",
    canonical: "https://www.trinetra-technologies.in/terms",
    h1: "Terms of Service",
    badge: "Legal",
    content: "Clear and transparent terms governing IT engineering deliverables, service level agreements, intellectual property ownership, and client engagements."
  }
];

function prerender() {
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("dist/index.html does not exist. Run vite build first!");
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, "utf-8");

  console.log(`Starting pre-rendering for ${pages.length} non-canonical / subpage routes...`);

  pages.forEach((page) => {
    let html = templateHtml;

    // 1. Replace Title
    html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);

    // 2. Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
      `<meta name="description" content="${page.description}" />`
    );

    // 3. Replace Canonical Tag with Exact Self-Referencing Canonical!
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
      `<link rel="canonical" href="${page.canonical}" />`
    );

    // 4. Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:url" content="${page.canonical}" />`
    );

    // 5. Replace Twitter Card Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/s,
      `<meta name="twitter:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s,
      `<meta name="twitter:description" content="${page.description}" />`
    );

    // 6. Replace Pre-rendered Content inside <div id="root">
    const pagePreRenderContent = `
    <header style="padding: 1.25rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(0,0,0,0.05);">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <a href="/" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
          <img src="/logo.png" alt="TriNetra Technologies Logo" width="36" height="36" style="display: inline-block;" />
          <span style="font-size: 1.25rem; font-weight: 900; color: #050505;">TriNetra <span style="color: #0066ff;">Technologies</span></span>
        </a>
      </div>
      <nav style="display: flex; gap: 1.5rem; font-size: 0.875rem; font-weight: 700;">
        <a href="/" style="color: #333; text-decoration: none;">Home</a>
        <a href="/#services" style="color: #333; text-decoration: none;">All Services</a>
        <a href="/#solutions" style="color: #333; text-decoration: none;">Solutions</a>
        <a href="/#process" style="color: #333; text-decoration: none;">Process</a>
        <a href="/#pricing" style="color: #333; text-decoration: none;">Pricing</a>
      </nav>
    </header>

    <main style="max-width: 1000px; margin: 0 auto; padding: 4rem 1.5rem;">
      <nav aria-label="Breadcrumb" style="margin-bottom: 2rem; font-size: 0.875rem; color: #666;">
        <a href="/" style="color: #0066ff; text-decoration: none;">Home</a> &gt; 
        <a href="/#services" style="color: #0066ff; text-decoration: none; margin: 0 0.5rem;">Services</a> &gt; 
        <span style="color: #333; font-weight: bold; margin-left: 0.5rem;">${page.h1}</span>
      </nav>

      <span style="display: inline-block; padding: 0.35rem 1rem; border-radius: 9999px; background: rgba(0,102,255,0.08); color: #0066ff; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 1.5rem;">
        ${page.badge}
      </span>

      <h1 style="font-size: 3rem; font-weight: 900; line-height: 1.15; color: #050505; margin: 0 0 1.5rem 0; letter-spacing: -0.02em;">
        ${page.h1}
      </h1>

      <p style="font-size: 1.25rem; color: rgba(5,5,5,0.7); line-height: 1.6; font-weight: 500; margin-bottom: 2.5rem;">
        ${page.content}
      </p>

      <div style="margin-bottom: 4rem;">
        <a href="https://cal.com/trinetra-technologies" style="display: inline-block; padding: 0.85rem 2rem; background: #0066ff; color: #ffffff; text-decoration: none; border-radius: 1rem; font-weight: 700; font-size: 0.95rem; margin-right: 1rem;">Book Strategy Call</a>
        <a href="/#services" style="display: inline-block; padding: 0.85rem 2rem; background: rgba(0,0,0,0.05); color: #050505; text-decoration: none; border-radius: 1rem; font-weight: 700; font-size: 0.95rem;">Explore Other Services</a>
      </div>
    </main>

    <footer style="padding: 2.5rem 1.5rem; text-align: center; border-top: 1px solid rgba(0,0,0,0.08); color: rgba(5,5,5,0.6); font-size: 0.875rem;">
      <p style="margin: 0 0 0.5rem 0;">&copy; 2026 TriNetra Technologies. All rights reserved. Ahmedabad, Gujarat, India.</p>
      <p style="margin: 0;">
        <a href="mailto:trinetratechnologies4@gmail.com" style="color: #0066ff; text-decoration: none;">trinetratechnologies4@gmail.com</a> |
        <a href="tel:+919274092055" style="color: #0066ff; text-decoration: none; margin-left: 0.5rem;">+91 9274092055</a> |
        <a href="/privacy" style="color: #050505; text-decoration: none; margin-left: 0.5rem;">Privacy Policy</a> |
        <a href="/terms" style="color: #050505; text-decoration: none; margin-left: 0.5rem;">Terms of Service</a>
      </p>
    </footer>
    `;

    // Replace <div id="root">...</div> content
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/s, `<div id="root">${pagePreRenderContent}</div>`);

    // Target folder inside dist
    const targetDir = path.join(distDir, page.path);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetHtmlPath = path.join(targetDir, "index.html");
    fs.writeFileSync(targetHtmlPath, html, "utf-8");
    console.log(`✓ Pre-rendered: ${page.path}/index.html (Canonical: ${page.canonical})`);
  });

  console.log("Successfully pre-rendered all 14 routes with 100% self-referencing canonicals!");
}

prerender();
