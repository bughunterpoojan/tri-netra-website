import React from "react";
import { Rocket, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-black/5 relative z-10 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8 group">
              <img 
                src="/logo.png" 
                alt="TriNetra Technologies - AI Automation Agency" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-3xl font-black tracking-tighter text-[#050505]">TriNetra Technologies</span>
            </div>
            <p className="text-[#050505]/50 max-w-sm mb-8 font-medium leading-relaxed">
              We design and deploy high-performance AI Employees that transform how businesses scale. The future of work is autonomous.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Linkedin />} />
              <SocialIcon icon={<Github />} />
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#050505] uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#process">Process</FooterLink>
              <FooterLink href="#resources">Resources & Guides</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#050505] uppercase tracking-widest text-sm mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#050505]/40 hover:text-[#050505] transition-colors cursor-default">
                <Mail className="w-4 h-4" /> trinetratechnologies4@gmail.com
              </li>
              <li className="flex items-center gap-3 text-[#050505]/40 hover:text-[#050505] transition-colors cursor-default">
                <MapPin className="w-4 h-4" /> Ahmedabad, India
              </li>
              <li className="flex items-start gap-3 text-[#050505]/40 hover:text-[#050505] transition-colors cursor-default">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" /> 
                <div className="flex flex-col gap-1 text-sm leading-tight">
                  <span>9274092055</span>
                  <span>9274421856</span>
                  <span>9274482285</span>
                  <span>9274514575</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
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
