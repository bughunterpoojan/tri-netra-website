import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-black/5 relative z-10 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex" aria-label="TriNetra Technologies Home">
              <img 
                src="/logo.png" 
                alt="TriNetra Technologies - AI Automation Agency and IT Services" 
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                className="w-12 h-12 object-contain" 
              />
              <span className="text-3xl font-black tracking-tighter text-[#050505]">TriNetra Technologies</span>
            </Link>
            <p className="text-[#050505]/60 max-w-sm mb-6 font-medium leading-relaxed text-sm">
              TriNetra Technologies is a full-cycle IT Services and AI Solutions company. We engineer custom web & mobile software, autonomous WhatsApp AI agents, enterprise workflow automations, and dedicated engineering teams.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter />} href="https://twitter.com" ariaLabel="Twitter Profile" />
              <SocialIcon icon={<Linkedin />} href="https://linkedin.com" ariaLabel="LinkedIn Profile" />
              <SocialIcon icon={<Github />} href="https://github.com" ariaLabel="GitHub Profile" />
            </div>
          </div>

          <div>
            <h3 className="font-black text-[#050505] uppercase tracking-widest text-xs mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/#services">All Services</FooterLink>
              <FooterLink to="/#solutions">Industry Solutions</FooterLink>
              <FooterLink to="/#process">Development Process</FooterLink>
              <FooterLink to="/#resources">Resources & Guides</FooterLink>
              <FooterLink to="/#why-automate">Automation FAQs</FooterLink>
              <FooterLink to="/#pricing">Pricing & ROI</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-[#050505] uppercase tracking-widest text-xs mb-6">IT Services & Solutions</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/services/whatsapp-automation">WhatsApp AI Automation</FooterLink>
              <FooterLink to="/services/ai-voice-agents">AI Voice Calling Agents</FooterLink>
              <FooterLink to="/services/ai-automation">Enterprise Workflow RPA</FooterLink>
              <FooterLink to="/services/custom-ai-solutions">Custom AI Employees (RAG)</FooterLink>
              <FooterLink to="/services/web-development">Custom Web Applications</FooterLink>
              <FooterLink to="/services/mobile-app-development">Mobile App Development</FooterLink>
              <FooterLink to="/services/dedicated-engineering-teams">Dedicated Engineering Teams</FooterLink>
              <FooterLink to="/services/it-consulting">Strategic IT Consulting</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-[#050505] uppercase tracking-widest text-xs mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#050505]/60 hover:text-[#050505] transition-colors cursor-default text-xs">
                <Mail className="w-4 h-4 shrink-0 text-primary" /> trinetratechnologies4@gmail.com
              </li>
              <li className="flex items-center gap-3 text-[#050505]/60 hover:text-[#050505] transition-colors cursor-default text-xs">
                <MapPin className="w-4 h-4 shrink-0 text-primary" /> Ahmedabad, Gujarat, India
              </li>
              <li className="flex items-start gap-3 text-[#050505]/60 hover:text-[#050505] transition-colors cursor-default text-xs">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-primary" /> 
                <div className="flex flex-col gap-1 leading-tight font-medium">
                  <span>+91 9274092055</span>
                  <span>+91 9274421856</span>
                  <span>+91 9274482285</span>
                  <span>+91 9274514575</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Search Bar in Footer */}
        <div className="py-6 border-t border-black/5 mb-8">
          <p className="text-[11px] font-bold text-[#050505]/40 uppercase tracking-wider mb-2">
            Target Search Capabilities:
          </p>
          <p className="text-xs text-[#050505]/50 leading-relaxed">
            AI Automation Agency • WhatsApp AI Agent Solutions • Voice AI Calling Automation • Custom Web Application Development • Mobile App Development iOS Android • Enterprise Workflow Automation (n8n) • Dedicated Engineering Teams • Strategic IT Consulting • Virtual CTO Ahmedabad • CRM ERP Automation • Private RAG AI Employees
          </p>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#050505]/20 text-xs font-bold uppercase tracking-widest">
            © 2026 TriNetra Technologies IT Services & AI Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[#050505]/20 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link to="/privacy" className="hover:text-[#050505] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#050505] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href, ariaLabel }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={ariaLabel}
    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#050505]/60 hover:text-primary hover:border-primary/50 transition-all"
  >
    {React.cloneElement(icon, { size: 18 })}
  </a>
);

const FooterLink = ({ children, to }) => (
  <li>
    <Link to={to} className="text-[#050505]/40 font-bold hover:text-[#050505] transition-colors">
      {children}
    </Link>
  </li>
);

export default Footer;
