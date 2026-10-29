import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileCheck2, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";

const TermsOfService = () => {
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.start();
      window.__lenis.resize();
    }
  }, []);
  return (
    <>
      <SEO
        title="Terms of Service | TriNetra Technologies"
        description="Review the Terms of Service for TriNetra Technologies. Clear, transparent terms governing our IT services, custom software engineering, and AI automation deliverables."
        canonical="https://www.trinetra-technologies.in/terms"
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
                Terms of Service
              </li>
            </ol>
          </nav>

          <div className="p-8 md:p-14 rounded-3xl bg-white border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-[#050505]">
                  Terms of Service
                </h1>
                <p className="text-xs text-[#050505]/50 font-bold uppercase tracking-wider mt-1">
                  Last Updated: October 2026
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-[#050505]/70 leading-relaxed font-medium">
              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">1. Agreement to Terms</h2>
                <p>
                  By accessing or engaging TriNetra Technologies ("TriNetra", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our website and services.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">2. Scope of IT & AI Services</h2>
                <p>
                  TriNetra Technologies delivers professional IT consulting, full-stack web and mobile application engineering, conversational WhatsApp AI agents, automated workflow pipelines, and dedicated developer teams under formal client agreements and statements of work (SOW).
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">3. Intellectual Property & Code Ownership</h2>
                <p>
                  Upon full payment of agreed project milestone invoices, all custom software code, customized agent logic, and proprietary architectures engineered exclusively for the client belong entirely to the client, unless specified otherwise in a master service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">4. Third-Party Integrations & APIs</h2>
                <p>
                  Our solutions frequently interface with third-party providers including Meta WhatsApp Cloud API, OpenAI, Anthropic Claude, Twilio, HubSpot, and cloud hosting infrastructure. Clients are responsible for adhering to applicable third-party API usage policies and licensing agreements.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#050505] mb-2">5. Contact & Questions</h2>
                <p>
                  For any legal or terms inquiries, reach out to our team at:
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

export default TermsOfService;

