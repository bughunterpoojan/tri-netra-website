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
        title="Custom Software & AI Solutions | TriNetra Technologies"
        description="TriNetra Technologies is a full-cycle IT services firm engineering custom web applications, native mobile apps, enterprise software, and autonomous AI automation."
        canonical="https://www.trinetra-technologies.in/"
        keywords="TriNetra Technologies, custom software development, web application development, mobile app development, AI automation services, AI agent development, WhatsApp automation, AI voice agents, Ahmedabad IT company"
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