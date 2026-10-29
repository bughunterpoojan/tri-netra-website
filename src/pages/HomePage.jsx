import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import WhyAutomate from "../components/WhyAutomate";
import TheShift from "../components/TheShift";
import Process from "../components/Process";
import AutomationDemo from "../components/AutomationDemo";
import Resources from "../components/Resources";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Custom Software, Mobile Apps & AI Solutions | TriNetra Technologies"
        description="TriNetra Technologies engineers modern web applications, native mobile apps, custom enterprise software, and autonomous AI automation for growing businesses."
        canonical="https://www.trinetra-technologies.in/"
        keywords="TriNetra Technologies, IT Services Company, Custom Software Development, Mobile App Development, iOS Android Apps, Web Applications, Enterprise SaaS, AI Automation Agency, AI Agent Solutions, WhatsApp Automation, AI Voice Agents, Enterprise Workflow Automation, CRM ERP Sync, Dedicated Engineering Teams, Virtual CTO, Software Maintenance SLA"
      />
      <main id="main-content">
        <Hero />
        <Services />
        <Industries />
        <WhyAutomate />
        <TheShift />
        <Process />
        <AutomationDemo />
        <Resources />
        <Pricing />
        <CTA />
      </main>
    </>
  );
};

export default HomePage;
