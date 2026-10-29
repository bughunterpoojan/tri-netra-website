
import { motion } from "framer-motion";

const logos = [
  "Google", "OpenAI", "HubSpot", "Notion", "Slack", "Zapier", "Make", "n8n"
];

const TrustSection = () => {
  return (
    <section className="py-20 border-y border-black/5 bg-black/[0.02]">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#050505]/30">Trusted by modern industry leaders</p>
      </div>
      
      <div className="flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-none items-center gap-12 md:gap-24 px-12"
        >
          {[...logos, ...logos].map((logo, index) => (
            <span 
              key={index}
              className="text-2xl md:text-4xl font-black text-[#050505]/10 hover:text-[#050505]/40 transition-colors cursor-default select-none tracking-tighter"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
