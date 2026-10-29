
import { motion } from "framer-motion";

const cases = [
  {
    client: "Nexus Corp",
    result: "73%",
    metric: "Reduction in admin work",
    description: "Automated their entire procurement workflow using custom AI agents.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    client: "Swift Sales",
    result: "5x",
    metric: "Increase in response speed",
    description: "Implemented a 24/7 lead qualification agent that responds in < 30 seconds.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    client: "Global Logistics",
    result: "42 hrs",
    metric: "Saved weekly",
    description: "Automated schedule coordination and driver communication via AI.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-[#050505]">Impact that <span className="text-primary italic">Matters</span>.</h2>
            <p className="text-[#050505]/50 text-lg max-w-xl">
              Real world results for companies that dared to automate.
            </p>
          </div>
          <button className="px-8 py-4 glass rounded-2xl font-bold hover:bg-black/5 transition-colors border border-black/5 text-[#050505]">
            View All Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group flex flex-col glass rounded-[2.5rem] overflow-hidden border border-black/5"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.client} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/20 px-3 py-1 rounded-full backdrop-blur-md">Featured Project</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-[#050505]/60 mb-2">{item.client}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black text-[#050505]">{item.result}</span>
                  <span className="text-sm font-bold text-primary uppercase tracking-tighter">{item.metric}</span>
                </div>
                <p className="text-[#050505]/40 leading-relaxed group-hover:text-[#050505]/70 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
