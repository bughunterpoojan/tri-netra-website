import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, ChevronRight
} from "lucide-react";
import SEO from "../components/SEO";
import { servicesData, getServiceIcon } from "../data/servicesData";
import { CONFIG } from "../config";

const ServiceDetail = () => {
  const { slug } = useParams();

  // Ensure Lenis recalculates layout height on mount / route transition
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.start();
      window.__lenis.resize();
    }
  }, [slug]);

  // Find the service by slug or fallback to ID alias match
  const service = servicesData.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!service) {
    return <Navigate to="/#services" replace />;
  }

  // Get related services for internal linking
  const relatedServices = servicesData.filter((item) => 
    service.relatedSlugs?.includes(item.slug)
  ).slice(0, 3);

  // Schema.org structured data for this service
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.trinetra-technologies.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.trinetra-technologies.in/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://www.trinetra-technologies.in/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `https://www.trinetra-technologies.in/services/${service.slug}#service`,
        "name": service.title,
        "serviceType": service.categoryLabel,
        "description": service.description,
        "provider": {
          "@type": "ProfessionalService",
          "name": "TriNetra Technologies",
          "url": "https://www.trinetra-technologies.in/"
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": service.title,
          "itemListElement": service.details.features.map((feat) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": feat
            }
          }))
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://www.trinetra-technologies.in/services/${service.slug}`}
        keywords={`${service.primaryKeyword}, ${service.title}, TriNetra Technologies, IT Services India, AI Automation`}
        schema={serviceJsonLd}
      />

      <div className="pt-28 pb-20 bg-[#fafafa] min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Breadcrumbs Navigation with structured schema */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#050505]/50 flex-wrap">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#050505]/30" />
              </li>
              <li>
                <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#050505]/30" />
              </li>
              <li className="text-[#050505] font-bold" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          {/* Hero Header Block */}
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {service.categoryLabel} • {service.badge}
              </span>
            </motion.div>

            {/* Exactly ONE H1 per page containing primary keywords */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-[#050505] tracking-tight mb-6 leading-[1.15]"
            >
              {service.h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#050505]/70 max-w-3xl leading-relaxed font-medium mb-8"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
                className="px-8 py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/#services"
                className="px-6 py-3.5 bg-black/5 hover:bg-black/10 text-[#050505] font-bold rounded-2xl transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>View All Services</span>
              </Link>
            </motion.div>
          </div>

          {/* Performance & Quality Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {service.details.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-black/5 shadow-sm flex flex-col justify-between"
              >
                <span className="text-3xl md:text-4xl font-black text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-[#050505]/60 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Section: What We Deliver */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#050505] tracking-tight mb-2">
                What We Engineer & Deliver
              </h2>
              <p className="text-sm text-[#050505]/60 font-medium">
                Comprehensive technical deliverables engineered for high reliability, performance, and long-term maintainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.details.whatWeDeliver.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:border-black/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {getServiceIcon(item.iconName || "Sparkles", "w-6 h-6")}
                    </div>
                    <h3 className="text-lg font-bold text-[#050505] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#050505]/60 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Problem vs Solution Comparison Block */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 rounded-3xl bg-red-500/[0.04] border border-red-500/10">
              <span className="text-[11px] font-black uppercase tracking-widest text-red-600 block mb-3">
                The Industry Bottleneck
              </span>
              <h2 className="text-xl md:text-2xl font-black text-[#050505] mb-3">
                Why Traditional Approaches Fail
              </h2>
              <p className="text-sm text-[#050505]/70 leading-relaxed font-medium">
                {service.details.problem}
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-primary/[0.04] border border-primary/15">
              <span className="text-[11px] font-black uppercase tracking-widest text-primary block mb-3">
                The TriNetra Solution
              </span>
              <h2 className="text-xl md:text-2xl font-black text-[#050505] mb-3">
                How TriNetra Eliminates This
              </h2>
              <p className="text-sm text-[#050505]/70 leading-relaxed font-medium">
                {service.details.solution}
              </p>
            </div>
          </section>

          {/* Key Features & Tech Stack */}
          <section className="mb-16 p-8 md:p-12 rounded-3xl bg-white border border-black/5 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-[#050505] mb-6">
                  Key Technical Features & Guarantees
                </h2>
                <ul className="space-y-4">
                  {service.details.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#050505]/80 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-black text-[#050505] mb-6">
                  Core Technologies & Frameworks
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.details.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-black/[0.03] border border-black/5 text-xs font-bold text-[#050505]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#050505]/50 mt-6 leading-relaxed">
                  Every solution is engineered with strict production standards, end-to-end automated testing, and comprehensive technical documentation.
                </p>
              </div>
            </div>
          </section>

          {/* Related Services Internal Linking */}
          {relatedServices.length > 0 && (
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#050505] tracking-tight mb-2">
                  Related Services & Integrations
                </h2>
                <p className="text-sm text-[#050505]/60 font-medium">
                  Connect {service.title} with complementary solutions to build an end-to-end digital ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/services/${rel.slug}`}
                    className="group p-6 rounded-3xl bg-white border border-black/5 shadow-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">
                        {rel.categoryLabel}
                      </span>
                      <h3 className="text-base font-bold text-[#050505] group-hover:text-primary transition-colors mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-[#050505]/60 leading-relaxed font-medium line-clamp-3">
                        {rel.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                      <span>Explore {rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Conversion CTA Strip */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-primary/20 shadow-xl shadow-primary/5 text-center flex flex-col items-center">
            <Sparkles className="w-10 h-10 text-primary mb-4" />
            <h2 className="text-2xl md:text-4xl font-black text-[#050505] tracking-tight mb-3">
              Ready to Accelerate with {service.title}?
            </h2>
            <p className="text-sm md:text-base text-[#050505]/60 max-w-xl mx-auto mb-8 font-medium">
              Discuss your technical architecture and operational goals directly with our senior engineering team.
            </p>
            <button
              onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
