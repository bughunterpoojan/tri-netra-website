import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.start();
      window.__lenis.resize();
    }
  }, []);
  return (
    <>
      <SEO
        title="Privacy Policy | TriNetra Technologies"
        description="Read the official Privacy Policy of TriNetra Technologies. Learn how we safeguard your confidential business data, personal information, and proprietary software."
        canonical="https://www.trinetra-technologies.in/privacy"
      />

      <div className="pt-28 pb-20 bg-[#fafafa] min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#050505]/50">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#050505]/30" />
              </li>
              <li className="text-[#050505] font-bold" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>

          <div className="p-8 md:p-14 rounded-3xl bg-white border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-[#050505]">
                  Privacy Policy
                </h1>
                <p className="text-xs text-[#050505]/50 font-bold uppercase tracking-wider mt-1">
                  Last Updated: October 2026
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-[#050505]/70 leading-relaxed font-medium">
              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">1. Overview</h2>
                <p>
                  TriNetra Technologies ("we", "us", or "our") is dedicated to safeguarding the privacy and security of visitors to our website (https://www.trinetra-technologies.in/) and clients utilizing our IT services, custom software engineering, and AI automation solutions.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">2. Information We Collect</h2>
                <p>
                  We only collect information necessary to deliver and improve our technical solutions:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Contact Details:</strong> Name, company email, phone number, and company name submitted via inquiry forms or calendar bookings.</li>
                  <li><strong>Project Requirements:</strong> Technical details and workflow parameters shared during discovery calls to scope automation pipelines.</li>
                  <li><strong>Usage Analytics:</strong> Anonymized standard server logs and technical telemetry to ensure website speed, reliability, and security.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">3. Zero Data Resale Guarantee</h2>
                <p>
                  TriNetra Technologies never sells, rents, or monetizes client data or visitor contact information. All client data and internal systems we interact with remain under strict non-disclosure obligations.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">4. AI Models & Proprietary Data Isolation</h2>
                <p>
                  When engineering custom AI assistants, WhatsApp AI agents, or RAG systems for clients, proprietary business documentation and data are never used to train public foundational models. Data stays isolated within secure, role-gated private vector databases.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">5. Contact Information</h2>
                <p>
                  For any privacy inquiries or data requests, please contact us directly at:
                </p>
                <p className="mt-2 text-primary font-bold">
                  Email: trinetratechnologies4@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

