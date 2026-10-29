
import { 
  Globe, Smartphone, Layout, Layers, Bot, Workflow, BarChart3, 
  Cpu, Briefcase, Users, ShieldCheck, Code2, Database, Zap, 
  FileCheck2, Server, MessageSquare, Sparkles, Target, RefreshCw,
  Clock, CheckCircle2, PhoneCall
} from "lucide-react";

export const serviceCategories = [
  { id: "all", label: "All IT Solutions", count: 12 },
  { id: "cat-1", label: "Web, Mobile & Software", count: 4 },
  { id: "cat-2", label: "AI, Automation & Data", count: 5 },
  { id: "cat-5", label: "IT Consulting & Dedicated Teams", count: 3 }
];

export const servicesData = [
  // ==========================================
  // CATEGORY 1: WEB, MOBILE & SOFTWARE ENGINEERING
  // ==========================================
  {
    id: "web-dev",
    slug: "web-development",
    category: "cat-1",
    categoryLabel: "Software Engineering",
    title: "Custom Web Application Development",
    metaTitle: "Custom Web Application Development | TriNetra Technologies",
    metaDescription: "Scale your business with full-stack custom web applications and SaaS platforms built on Next.js, React, and Node.js by TriNetra Technologies.",
    primaryKeyword: "Custom Web Application Development",
    h1: "Custom Web Application & SaaS Engineering",
    description: "Enterprise-grade SaaS platforms, client portals, and cloud-native web applications engineered with modern full-stack architectures for unmatched speed, security, and scalability.",
    iconName: "Globe",
    color: "from-blue-600 to-cyan-500",
    badge: "Core Engineering",
    pills: ["Next.js & React", "Node.js & Python", "PostgreSQL", "Cloud Scalable"],
    relatedSlugs: ["mobile-app-development", "ui-ux-design", "api-microservices", "ai-automation"],
    details: {
      stats: [
        { label: "Core Web Vitals & Load Speed", value: "< 1.1s" },
        { label: "High-Availability Uptime", value: "99.9%" },
        { label: "Production Deployment Reliability", value: "100%" }
      ],
      whatWeDeliver: [
        {
          title: "Full-Stack Web Architectures",
          desc: "Lightning-fast frontend experiences (Next.js/React) backed by resilient API services and clean database schemas.",
          iconName: "Code2"
        },
        {
          title: "Enterprise SaaS & Admin Dashboards",
          desc: "Role-based access control (RBAC), multi-tenant data isolation, billing engines, and real-time analytics dashboards.",
          iconName: "Layout"
        },
        {
          title: "Performance, Security & SEO Engineering",
          desc: "Server-side rendering, edge caching, OWASP security hardening, and complete SEO technical optimization.",
          iconName: "ShieldCheck"
        }
      ],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker"],
      problem: "Off-the-shelf templates and low-code site builders collapse under enterprise load, slow down conversion rates, and create costly technical debt.",
      solution: "Custom-engineered full-stack web applications tailored to your exact operational workflows, designed to scale to millions of users without breaking.",
      features: [
        "Full-Stack Custom SaaS Architecture",
        "Role-Based Access Control (RBAC)",
        "Automated CI/CD Deployment Pipelines",
        "Sub-Second Page Load Optimization"
      ]
    }
  },
  {
    id: "mobile-dev",
    slug: "mobile-app-development",
    category: "cat-1",
    categoryLabel: "Mobile Engineering",
    title: "Mobile App Development (iOS & Android)",
    metaTitle: "Mobile App Development (iOS & Android) | TriNetra Technologies",
    metaDescription: "Engineer native and cross-platform mobile apps for iOS and Android using Flutter and React Native with TriNetra Technologies.",
    primaryKeyword: "Mobile App Development iOS Android",
    h1: "Mobile App Development for iOS & Android",
    description: "Native and cross-platform mobile apps featuring fluid 60fps animations, offline-first data sync, biometric security, and seamless hardware and cloud integration.",
    iconName: "Smartphone",
    color: "from-indigo-600 to-violet-500",
    badge: "iOS & Android",
    pills: ["React Native", "Flutter", "Offline Sync", "App Store & Play Store"],
    relatedSlugs: ["web-development", "ui-ux-design", "api-microservices", "whatsapp-automation"],
    details: {
      stats: [
        { label: "Faster Launch via Unified Codebase", value: "2.5x" },
        { label: "App Store & Play Store Approval", value: "100%" },
        { label: "Crash-Free Sessions Target", value: "99.8%" }
      ],
      whatWeDeliver: [
        {
          title: "Cross-Platform & Native Mobile Apps",
          desc: "Engineered in Flutter or React Native to ship a unified, pixel-perfect app to both iOS and Android simultaneously.",
          iconName: "Smartphone"
        },
        {
          title: "Hardware Integration & Offline Sync",
          desc: "Deep integration with camera, biometrics, GPS, local SQLite storage, background sync, and push notifications.",
          iconName: "Zap"
        },
        {
          title: "End-to-End Store Launch & Support",
          desc: "Store compliance audits, Apple Developer / Google Play publishing, and automated OTA feature updates.",
          iconName: "FileCheck2"
        }
      ],
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite", "GraphQL", "OneSignal"],
      problem: "Building separate iOS and Android native apps doubles your engineering costs, fragments your team, and delays feature rollouts.",
      solution: "High-performance unified cross-platform mobile apps with native speed, shared state management, and streamlined updates.",
      features: [
        "Cross-Platform iOS & Android Deployments",
        "Biometric & Keychain Security Auth",
        "Offline-First Data Synchronization",
        "Seamless In-App Purchases & Payments"
      ]
    }
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    category: "cat-1",
    categoryLabel: "Product Design",
    title: "UI/UX Design & Product Strategy",
    metaTitle: "UI/UX Design Systems & Product Strategy | TriNetra Technologies",
    metaDescription: "Transform digital experiences with research-driven UI/UX design systems, interactive Figma prototypes, and conversion optimization by TriNetra Technologies.",
    primaryKeyword: "UI UX Design Systems",
    h1: "UI/UX Design Systems & Product Strategy",
    description: "Research-backed user interfaces, enterprise design systems, and interactive clickable prototypes that turn complex software into intuitive, high-converting customer experiences.",
    iconName: "Layout",
    color: "from-fuchsia-600 to-pink-500",
    badge: "Design Systems",
    pills: ["Figma Systems", "Interactive Prototyping", "UX Audits", "WCAG 2.1"],
    relatedSlugs: ["web-development", "mobile-app-development", "ai-automation"],
    details: {
      stats: [
        { label: "Average Conversion Rate Uplift", value: "+45%" },
        { label: "Engineering Handoff Speed", value: "3x Faster" },
        { label: "User Task Completion Rate", value: "94%" }
      ],
      whatWeDeliver: [
        {
          title: "User Journey & Wireframe Architecture",
          desc: "In-depth competitor research, user persona mapping, and architectural wireframes to eliminate UX friction.",
          iconName: "Target"
        },
        {
          title: "High-Fidelity Interactive Prototypes",
          desc: "Clickable Figma prototypes with micro-interactions, responsive states, and real-world animation feedback.",
          iconName: "Sparkles"
        },
        {
          title: "Scalable Design Token Systems",
          desc: "Complete component design system with tokens for colors, typography, spacing, and dark/light modes.",
          iconName: "Layers"
        }
      ],
      techStack: ["Figma", "FigJam", "Design Tokens", "Framer", "Adobe CC", "WCAG 2.1 Accessibility"],
      problem: "Clunky, confusing interfaces alienate high-value customers, inflate support tickets, and severely lower conversion rates.",
      solution: "Stunning, brand-aligned interfaces crafted with ergonomic precision that captivate users and guide them effortlessly toward conversion.",
      features: [
        "Comprehensive Figma Component Libraries",
        "Accessible, WCAG 2.1 Compliant Design",
        "Interactive Clickable Product Prototypes",
        "Developer-Ready Design Handoff Specs"
      ]
    }
  },
  {
    id: "api-backend",
    slug: "api-microservices",
    category: "cat-1",
    categoryLabel: "Backend & Systems",
    title: "API Engineering & Microservices Architecture",
    metaTitle: "API Engineering & Microservices Architecture | TriNetra Technologies",
    metaDescription: "Build high-throughput, secure REST and GraphQL APIs and cloud microservices architecture engineered by TriNetra Technologies.",
    primaryKeyword: "API Engineering Microservices Architecture",
    h1: "API Engineering & Microservices Architecture",
    description: "High-throughput REST and GraphQL microservices, secure API gateways, and legacy system refactoring built to connect fragmented systems with low latency and high fault tolerance.",
    iconName: "Layers",
    color: "from-teal-600 to-emerald-500",
    badge: "High Throughput",
    pills: ["GraphQL & REST", "Microservices", "Redis Caching", "API Gateway"],
    relatedSlugs: ["web-development", "crm-erp-automation", "ai-automation"],
    details: {
      stats: [
        { label: "API Response Latency Target", value: "< 85ms" },
        { label: "Concurrent Request Capacity", value: "15,000+ req/s" },
        { label: "Automated Test Coverage", value: "> 92%" }
      ],
      whatWeDeliver: [
        {
          title: "Resilient Microservices & Gateways",
          desc: "Decoupled backends with centralized authentication, rate limiting, and automated load balancing.",
          iconName: "Server"
        },
        {
          title: "Third-Party & Legacy Modernization",
          desc: "Connect legacy databases with modern cloud APIs without risking downtime or data loss.",
          iconName: "Workflow"
        },
        {
          title: "In-Memory Caching & Database Tuning",
          desc: "Redis cache layers, connection pooling, and optimized SQL indexing for ultra-fast throughput.",
          iconName: "Database"
        }
      ],
      techStack: ["Node.js", "Python FastAPI", "GraphQL", "Redis", "PostgreSQL", "Docker", "Swagger/OpenAPI"],
      problem: "Monolithic legacy codebases and unoptimized databases cause frequent downtime, high cloud bills, and sluggish load times.",
      solution: "Modular, horizontally scalable backend microservices protected by robust caching and enterprise authentication protocols.",
      features: [
        "DDoS Shielding & Rate Limiting",
        "OAuth2 & JWT Enterprise Security",
        "Redis Distributed In-Memory Caching",
        "Automated OpenAPI & Swagger Documentation"
      ]
    }
  },

  // ==========================================
  // CATEGORY 2: AI, INTELLIGENT AUTOMATION & DATA
  // ==========================================
  {
    id: "whatsapp-ai",
    slug: "whatsapp-automation",
    category: "cat-2",
    categoryLabel: "Conversational AI",
    title: "WhatsApp & Conversational AI Agents",
    metaTitle: "WhatsApp Automation & AI Agents | TriNetra Technologies",
    metaDescription: "Deploy 24/7 autonomous WhatsApp AI agents for instant lead qualification, objection handling, and appointment booking with TriNetra Technologies.",
    primaryKeyword: "WhatsApp Automation WhatsApp AI Agents",
    h1: "WhatsApp Automation & Conversational AI Agents",
    description: "Autonomous multi-lingual AI agents over WhatsApp and Voice that engage inbound leads, resolve objections, qualify buyer budgets, and book meetings directly into your calendar 24/7.",
    iconName: "Bot",
    color: "from-emerald-500 to-green-600",
    badge: "Flagship AI",
    pills: ["WhatsApp API", "Voice AI (Vapi)", "24/7 Qualification", "Cal.com Sync"],
    relatedSlugs: ["ai-voice-agents", "ai-automation", "crm-erp-automation", "custom-ai-solutions"],
    details: {
      stats: [
        { label: "Instant Lead Response Time", value: "< 15s" },
        { label: "Qualified Pipeline Increase", value: "+50%" },
        { label: "Human Support Burden Reduced", value: "65%" }
      ],
      whatWeDeliver: [
        {
          title: "Official WhatsApp Cloud API Setup",
          desc: "Verified Meta business profile, template approvals, and multi-agent routing infrastructure.",
          iconName: "MessageSquare"
        },
        {
          title: "Dynamic Objection Handling",
          desc: "LLMs trained on your exact pricing, FAQs, and sales scripts to overcome customer doubts instantly.",
          iconName: "ShieldCheck"
        },
        {
          title: "Voice AI & Instant Scheduling",
          desc: "Human-sounding inbound and outbound voice calling agents synced with real-time calendar availability.",
          iconName: "Zap"
        }
      ],
      techStack: ["Meta WhatsApp Cloud API", "OpenAI / Claude API", "Vapi", "Twilio", "n8n", "HubSpot"],
      problem: "Leads not answered within 5 minutes are 21x less likely to convert. Human reps sleep, take holidays, and miss weekend inquiries.",
      solution: "An intelligent, polite sales and support AI agent that never sleeps, handles hundreds of simultaneous chats, and closes meetings.",
      features: [
        "Voice & Chat Unified Context",
        "Custom Brand Voice Calibration",
        "2-Way Calendar Booking Integration",
        "Automatic CRM Deal Stage Updates"
      ]
    }
  },
  {
    id: "workflow-rpa",
    slug: "ai-automation",
    category: "cat-2",
    categoryLabel: "Intelligent RPA",
    title: "Enterprise Workflow Automation (RPA)",
    metaTitle: "AI Automation & Enterprise Workflow Solutions | TriNetra Technologies",
    metaDescription: "Streamline operations with enterprise AI workflow automation from TriNetra Technologies. Eliminate manual data entry, connect CRMs, and automate repetitive tasks.",
    primaryKeyword: "AI Automation Enterprise Workflow Solutions",
    h1: "Enterprise AI Automation & Workflow Solutions",
    description: "Zero-touch business process automation connecting your CRM, communication tools, financial software, and databases to eliminate repetitive manual labor.",
    iconName: "Workflow",
    color: "from-amber-500 to-orange-600",
    badge: "Process Automation",
    pills: ["n8n & Zapier", "Python Micro-Bots", "Zero Data Entry", "OCR Processing"],
    relatedSlugs: ["whatsapp-automation", "crm-erp-automation", "custom-ai-solutions", "api-microservices"],
    details: {
      stats: [
        { label: "Admin Hours Saved Weekly", value: "25+ hrs" },
        { label: "Human Data Entry Error Rate", value: "0%" },
        { label: "Operating Cost Savings", value: "Up to 60%" }
      ],
      whatWeDeliver: [
        {
          title: "Custom n8n & Python Pipelines",
          desc: "Self-hosted, highly secure workflows that run complex multi-step processes between tools automatically.",
          iconName: "Workflow"
        },
        {
          title: "Intelligent Document & Invoice OCR",
          desc: "Extract text, invoice line-items, and purchase orders from PDFs and auto-populate accounting software.",
          iconName: "FileCheck2"
        },
        {
          title: "Real-Time Telegram & Slack Alerts",
          desc: "Instant notifications and approval action buttons pushed to team communication channels.",
          iconName: "Zap"
        }
      ],
      techStack: ["n8n", "Make.com", "Zapier", "Python", "Google Cloud Vision", "PostgreSQL", "Webhooks"],
      problem: "Employees waste up to 30% of their workday manually moving data between spreadsheets, emails, and internal portals.",
      solution: "Robust, self-healing automation pipelines that execute data transfers, invoice processing, and notifications automatically.",
      features: [
        "Self-Hosted Private n8n Deployments",
        "Automated Error Handling & Retry Queues",
        "Document Parsing & PDF Synthesis",
        "Bi-Directional Webhook Routing"
      ]
    }
  },
  {
    id: "ai-voice",
    slug: "ai-voice-agents",
    category: "cat-2",
    categoryLabel: "Voice Intelligence",
    title: "AI Voice Agents & Autonomous Calling",
    metaTitle: "AI Voice Agents & Autonomous Calling | TriNetra Technologies",
    metaDescription: "Engage prospects with natural-sounding AI voice agents. TriNetra Technologies builds automated voice screening, call routing, and appointment reminder bots.",
    primaryKeyword: "AI Voice Agents Voice Automation",
    h1: "AI Voice Agents & Autonomous Calling Solutions",
    description: "Ultra-low-latency, human-sounding inbound and outbound voice agents that answer customer questions, qualify high-intent prospects, and confirm appointments 24/7.",
    iconName: "PhoneCall",
    color: "from-purple-600 to-indigo-500",
    badge: "Voice Automation",
    pills: ["Vapi & Twilio", "Sub-600ms Latency", "Inbound Call Routing", "Live Calendar Booking"],
    relatedSlugs: ["whatsapp-automation", "ai-automation", "crm-erp-automation"],
    details: {
      stats: [
        { label: "Conversational Response Latency", value: "< 600ms" },
        { label: "Appointment Attendance Boost", value: "+40%" },
        { label: "24/7 After-Hours Call Capture", value: "100%" }
      ],
      whatWeDeliver: [
        {
          title: "Conversational Inbound Call Answering",
          desc: "Direct telephony lines that answer inquiries, verify caller intent, and route high-value leads immediately.",
          iconName: "PhoneCall"
        },
        {
          title: "Automated Outbound Appointment Reminders",
          desc: "Proactive voice check-ins that confirm attendance and eliminate expensive meeting no-shows.",
          iconName: "Zap"
        },
        {
          title: "Live Call Transcripts & CRM Sync",
          desc: "Summarized caller notes and key bullet points logged directly into HubSpot, Salesforce, or your CRM.",
          iconName: "Database"
        }
      ],
      techStack: ["Vapi", "Twilio", "Deepgram", "OpenAI Realtime API", "n8n", "Cal.com"],
      problem: "Busy teams miss inbound phone calls while in meetings or after hours, losing high-intent buyers to competitors.",
      solution: "Trained voice agents that sound remarkably natural, handle complex conversational nuances, and confirm bookings.",
      features: [
        "Sub-Second Natural Interruption Handling",
        "Custom Pronunciation & Regional Accent Support",
        "Direct Live Agent Call Transfer Protocol",
        "Automated CRM Call Logging & Transcription"
      ]
    }
  },
  {
    id: "crm-erp",
    slug: "crm-erp-automation",
    category: "cat-2",
    categoryLabel: "CRM & Operations",
    title: "CRM & ERP System Automation & Sync",
    metaTitle: "CRM & ERP System Automation & Sync | TriNetra Technologies",
    metaDescription: "Eliminate data silos with real-time bi-directional CRM and ERP automation across HubSpot, Salesforce, and Zoho with TriNetra Technologies.",
    primaryKeyword: "CRM ERP Automation",
    h1: "CRM & ERP System Automation & Sync",
    description: "Clean, synchronized, and enriched data across HubSpot, Salesforce, Zoho, Pipedrive, and ERP systems without anyone touching a keyboard.",
    iconName: "BarChart3",
    color: "from-blue-500 to-indigo-600",
    badge: "Revenue Ops",
    pills: ["HubSpot & Salesforce", "Zoho & Pipedrive", "Lead Enrichment", "Auto Pipeline"],
    relatedSlugs: ["ai-automation", "whatsapp-automation", "custom-ai-solutions", "api-microservices"],
    details: {
      stats: [
        { label: "Hours Saved Per Sales Rep Weekly", value: "4-6 hrs" },
        { label: "CRM Contact Enrichment Rate", value: "98.5%" },
        { label: "Pipeline Velocity Increase", value: "+35%" }
      ],
      whatWeDeliver: [
        {
          title: "Real-Time Bi-Directional Sync",
          desc: "Synchronize leads, deal stages, and meeting notes seamlessly across CRM, ERP, and communication tools.",
          iconName: "RefreshCw"
        },
        {
          title: "Automated Contact Enrichment",
          desc: "Auto-pull verified company size, LinkedIn profiles, and verified emails the moment a contact fills a form.",
          iconName: "Sparkles"
        },
        {
          title: "Deal Pipeline Progression Automations",
          desc: "Automatically trigger follow-ups, contract generation, and rep assignment when deals change stages.",
          iconName: "Target"
        }
      ],
      techStack: ["HubSpot API", "Salesforce", "Zoho CRM", "Pipedrive", "Apollo.io", "Clay", "n8n"],
      problem: "Dirty CRM databases and manual logging lead to lost revenue forecasts, neglected leads, and frustrated sales teams.",
      solution: "Fully automated revenue operations infrastructure where every interaction is logged and enriched in real time.",
      features: [
        "Automated Prospect Lead Scoring",
        "Meeting Transcript Extraction to Deals",
        "Stale Opportunity Inactivity Alerts",
        "Custom ERP Webhook Integrations"
      ]
    }
  },
  {
    id: "ai-employees",
    slug: "custom-ai-solutions",
    category: "cat-2",
    categoryLabel: "Autonomous AI",
    title: "Custom AI Employees & Knowledge Base (RAG)",
    metaTitle: "Custom AI Solutions & Autonomous AI Employees | TriNetra Technologies",
    metaDescription: "Build private, secure custom AI employees and RAG knowledge systems trained on your company SOPs and data with TriNetra Technologies.",
    primaryKeyword: "Custom AI Solutions AI Employees Private RAG",
    h1: "Custom AI Solutions & Private AI Employees",
    description: "Specialized internal AI assistants trained securely on your company's SOPs, proprietary documentation, and tickets to execute tasks and answer queries with zero data leakage.",
    iconName: "Cpu",
    color: "from-cyan-500 to-blue-600",
    badge: "Enterprise AI",
    pills: ["Private RAG", "Vector Search", "LangChain & LlamaIndex", "SOP Co-Pilot"],
    relatedSlugs: ["ai-automation", "whatsapp-automation", "it-consulting"],
    details: {
      stats: [
        { label: "Internal Query Resolution Speed", value: "< 4s" },
        { label: "Employee Onboarding Acceleration", value: "4x" },
        { label: "Data Isolation & Privacy", value: "100% Secure" }
      ],
      whatWeDeliver: [
        {
          title: "Retrieval-Augmented Generation (RAG)",
          desc: "Search and synthesize answers strictly from your private documents, wikis, and historical project files.",
          iconName: "Database"
        },
        {
          title: "Role-Gated Internal Assistants",
          desc: "Deploy AI assistants in Slack, Teams, or internal portals with department-specific permission controls.",
          iconName: "ShieldCheck"
        },
        {
          title: "Multi-Step Autonomous Task Execution",
          desc: "Empower AI employees to pull reports, draft replies, check inventory, and execute system actions.",
          iconName: "Cpu"
        }
      ],
      techStack: ["OpenAI / Claude API", "LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "FastAPI", "Python"],
      problem: "Company wisdom remains buried across scattered PDFs, Google Docs, and senior employees' memories, paralyzing output.",
      solution: "A dedicated AI co-worker that retains entire institutional memory and provides instant, verified answers with source citations.",
      features: [
        "100% Private Vector Database Embedding",
        "Direct Document Citation Links",
        "Slack & Microsoft Teams Bot Integrations",
        "Zero Model Retraining Data Leakage"
      ]
    }
  },

  // ==========================================
  // CATEGORY 5: IT CONSULTING & DEDICATED TEAMS
  // ==========================================
  {
    id: "it-consulting",
    slug: "it-consulting",
    category: "cat-5",
    categoryLabel: "Strategic Advisory",
    title: "Strategic IT Consulting & Virtual CTO",
    metaTitle: "Strategic IT Consulting & Virtual CTO Services | TriNetra Technologies",
    metaDescription: "Accelerate technical roadmaps and optimize cloud infrastructure costs with strategic IT consulting and virtual CTO advisory from TriNetra Technologies.",
    primaryKeyword: "Strategic IT Consulting Virtual CTO",
    h1: "Strategic IT Consulting & Virtual CTO Services",
    description: "Senior-level technology leadership for startups and scaling businesses: system architecture design, cloud bill reduction, vendor evaluation, and digital roadmap execution.",
    iconName: "Briefcase",
    color: "from-amber-600 to-yellow-500",
    badge: "Executive Advisory",
    pills: ["Virtual CTO", "Architecture Audit", "Cloud Cost Optimization", "Tech Roadmap"],
    relatedSlugs: ["dedicated-engineering-teams", "software-maintenance-sla", "web-development"],
    details: {
      stats: [
        { label: "Cloud & Infrastructure Cost Savings", value: "Up to 40%" },
        { label: "Architecture Risk Mitigation", value: "100%" },
        { label: "Engineering Sprint Velocity", value: "2x Boost" }
      ],
      whatWeDeliver: [
        {
          title: "Full-Spectrum Architecture & Tech Audit",
          desc: "Identify security vulnerabilities, architectural bottlenecks, and single points of failure in existing systems.",
          iconName: "Target"
        },
        {
          title: "Cloud Infrastructure Cost Optimization",
          desc: "Rightsize AWS, Azure, and Google Cloud workloads to eliminate waste and dramatically reduce monthly bills.",
          iconName: "BarChart3"
        },
        {
          title: "Fractional CTO & Hiring Advisory",
          desc: "Direct technology planning, developer interviewing, and vendor negotiations from a veteran perspective.",
          iconName: "Briefcase"
        }
      ],
      techStack: ["AWS / GCP / Azure", "Enterprise Architecture", "SOC2 Readiness", "Agile & DevOps Strategy"],
      problem: "Founders and leadership teams often make costly tech choices, hire misaligned agencies, and build unscalable stacks without veteran technical guidance.",
      solution: "Experienced technology advisory on an agile, on-demand basis to make sure every dollar invested in software fuels tangible company growth.",
      features: [
        "Independent Codebase & Security Audits",
        "Quarterly Technology Roadmapping",
        "Vendor RFP & Tool Selection Oversight",
        "Virtual CTO On-Demand Guidance"
      ]
    }
  },
  {
    id: "staff-augmentation",
    slug: "dedicated-engineering-teams",
    category: "cat-5",
    categoryLabel: "Dedicated Talent",
    title: "Dedicated Engineering Teams (Staff Augmentation)",
    metaTitle: "Dedicated Engineering Teams & Staff Augmentation | TriNetra Technologies",
    metaDescription: "Scale your engineering velocity with pre-vetted senior software engineers and dedicated developer squads from TriNetra Technologies.",
    primaryKeyword: "Dedicated Engineering Teams Staff Augmentation",
    h1: "Dedicated Engineering Teams & Staff Augmentation",
    description: "Scale your development capacity instantly with handpicked, pre-vetted full-stack developers, AI engineers, mobile developers, and QA specialists dedicated to your product.",
    iconName: "Users",
    color: "from-rose-500 to-red-600",
    badge: "Scale Your Team",
    pills: ["Pre-Vetted Engineers", "Time-Zone Aligned", "Daily Standups", "Fast Onboarding"],
    relatedSlugs: ["it-consulting", "web-development", "mobile-app-development", "software-maintenance-sla"],
    details: {
      stats: [
        { label: "Rapid Onboarding & Integration", value: "< 7 Days" },
        { label: "Vetted Senior Talent Pass Rate", value: "Top 3%" },
        { label: "Cost Efficiency vs Domestic Hiring", value: "Up to 60%" }
      ],
      whatWeDeliver: [
        {
          title: "Handpicked Dedicated Developers",
          desc: "Senior engineers working exclusively for your company in your time zone with zero context switching.",
          iconName: "Users"
        },
        {
          title: "Seamless Sprint Integration",
          desc: "Engineers join your Slack, Jira, GitHub, and daily standups as a natural extension of your team.",
          iconName: "Workflow"
        },
        {
          title: "Flexible Scaling & Zero Recruiting Overhead",
          desc: "Scale capacity up or down as project demands change without long-term recruitment liabilities.",
          iconName: "Clock"
        }
      ],
      techStack: ["React / Next.js", "Node.js / Express", "Python / AI / ML", "Flutter / React Native", "PostgreSQL / MongoDB", "DevOps"],
      problem: "Recruiting senior engineers locally takes 3-6 months, exorbitant recruiter commissions, and high overhead costs.",
      solution: "Pre-vetted, high-caliber software engineers ready to write clean, tested code inside your repository starting next week.",
      features: [
        "100% Dedicated Full-Time or Part-Time",
        "Direct Slack & GitHub Collaboration",
        "No Recruiting or Retainer Overhead",
        "Daily Progress Reports & Code Commits"
      ]
    }
  },
  {
    id: "maintenance-sla",
    slug: "software-maintenance-sla",
    category: "cat-5",
    categoryLabel: "Managed IT",
    title: "Software Maintenance & 24/7 SLA Support",
    metaTitle: "Software Maintenance & 24/7 SLA Support | TriNetra Technologies",
    metaDescription: "Protect your digital assets with round-the-clock uptime monitoring, security patching, and guaranteed emergency SLA support by TriNetra Technologies.",
    primaryKeyword: "Software Maintenance SLA Support",
    h1: "Software Maintenance & 24/7 SLA Support",
    description: "Continuous proactive monitoring, vulnerability patching, database optimization, and guaranteed response SLAs to keep your web, mobile, and automation assets 100% operational.",
    iconName: "ShieldCheck",
    color: "from-emerald-600 to-teal-600",
    badge: "Guaranteed SLA",
    pills: ["24/7 Monitoring", "Zero Downtime", "Security Patches", "Emergency SLA"],
    relatedSlugs: ["it-consulting", "web-development", "api-microservices", "dedicated-engineering-teams"],
    details: {
      stats: [
        { label: "Critical Incident Response SLA", value: "< 15 Mins" },
        { label: "Uptime Maintenance SLA", value: "99.95%" },
        { label: "Proactive Security Audits", value: "Weekly" }
      ],
      whatWeDeliver: [
        {
          title: "24/7 Real-Time Uptime Monitoring",
          desc: "Continuous health checks, alert escalation, and automated incident response before users notice an issue.",
          iconName: "ShieldCheck"
        },
        {
          title: "Proactive Security & Dependency Patches",
          desc: "Regular updates to packages, libraries, operating systems, and SSL certificates to block vulnerabilities.",
          iconName: "CheckCircle2"
        },
        {
          title: "Database Backups & Recovery Testing",
          desc: "Automated daily cloud backups with regular disaster recovery simulations to ensure business continuity.",
          iconName: "Database"
        }
      ],
      techStack: ["Sentry", "Datadog", "AWS CloudWatch", "UptimeRobot", "Docker", "PostgreSQL", "GitHub Security"],
      problem: "Unmaintained software slowly decays. Vulnerabilities go unnoticed, dependencies break, and unexpected downtime destroys customer trust.",
      solution: "Round-the-clock technical stewardship ensuring your software platforms remain fast, secure, and always open for business.",
      features: [
        "Guaranteed 15-Minute Emergency SLA",
        "Proactive Vulnerability Scans",
        "Automated Multi-Region Backups",
        "Monthly Engineering Health Reports"
      ]
    }
  }
];

// Helper to render Lucide icon from string identifier
export const getServiceIcon = (name, className = "w-8 h-8") => {
  switch (name) {
    case "Globe": return <Globe className={className} />;
    case "Smartphone": return <Smartphone className={className} />;
    case "Layout": return <Layout className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Bot": return <Bot className={className} />;
    case "Workflow": return <Workflow className={className} />;
    case "BarChart3": return <BarChart3 className={className} />;
    case "Cpu": return <Cpu className={className} />;
    case "Briefcase": return <Briefcase className={className} />;
    case "Users": return <Users className={className} />;
    case "ShieldCheck": return <ShieldCheck className={className} />;
    case "Code2": return <Code2 className={className} />;
    case "Database": return <Database className={className} />;
    case "Zap": return <Zap className={className} />;
    case "FileCheck2": return <FileCheck2 className={className} />;
    case "Server": return <Server className={className} />;
    case "MessageSquare": return <MessageSquare className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "Target": return <Target className={className} />;
    case "RefreshCw": return <RefreshCw className={className} />;
    case "Clock": return <Clock className={className} />;
    case "CheckCircle2": return <CheckCircle2 className={className} />;
    case "PhoneCall": return <PhoneCall className={className} />;
    default: return <Sparkles className={className} />;
  }
};
