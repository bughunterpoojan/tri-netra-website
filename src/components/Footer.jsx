import React from "react";
import { Rocket, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-black/5 relative z-10 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 group">
              <img 
                src="/logo.png" 
                alt="TriNetra Technologies - AI Automation Agency" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-3xl font-black tracking-tighter text-[#050505]">TriNetra Technologies</span>
            </div>
            <p className="text-[#050505]/60 max-w-sm mb-6 font-medium leading-relaxed text-sm">
              TriNetra Technologies is a leading AI Automation Agency. We engineer autonomous WhatsApp AI agents, custom workflow automations, and intelligent AI employees that scale your revenue 24/7.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Linkedin />} />
              <SocialIcon icon={<Github />} />
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#050505] uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#capabilities">Capabilities</FooterLink>
              <FooterLink href="#process">Process</FooterLink>
              <FooterLink href="#resources">Resources & Guides</FooterLink>
              <FooterLink href="#why-automate">FAQs</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#050505] uppercase tracking-widest text-xs mb-6">Core Solutions</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#capabilities">WhatsApp AI Agents</FooterLink>
              <FooterLink href="#capabilities">AI Lead Generation</FooterLink>
              <FooterLink href="#capabilities">CRM Automation</FooterLink>
              <FooterLink href="#capabilities">Cold Email Systems</FooterLink>
              <FooterLink href="#capabilities">Autonomous AI Employees</FooterLink>
              <FooterLink href="#capabilities">n8n Workflow Integrations</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#050505] uppercase tracking-widest text-xs mb-6">Contact</h4>
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
            Target Search Keywords:
          </p>
          <p className="text-xs text-[#050505]/50 leading-relaxed">
            AI Automation Agency India • WhatsApp AI Agent Development • Custom AI Workflows • CRM Automation Agency • n8n Workflow Automation • Cold Email Infrastructure • AI Lead Generation Agency • Autonomous AI Employees • Appointment Booking Bot • Voice AI Calling Agent • AI Consulting Ahmedabad
          </p>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#050505]/20 text-xs font-bold uppercase tracking-widest">
            © 2026 TriNetra Technologies AI Automation Agency. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[#050505]/20 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#050505] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#050505] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#050505]/60 hover:text-primary hover:border-primary/50 transition-all">
    {React.cloneElement(icon, { size: 18 })}
  </a>
);

const FooterLink = ({ children, href }) => (
  <li>
    <a href={href} className="text-[#050505]/40 font-bold hover:text-[#050505] transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;
