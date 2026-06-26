import React from "react";
import { motion } from "framer-motion";
import { Circle, UserCheck, PhoneCall, Headphones, FileText, Settings } from "lucide-react";

const agents = [
  { name: "Sales Agent", tasks: 142, metric: "24% Conv. Rate", icon: <PhoneCall className="w-5 h-5" /> },
  { name: "Lead Qual. Agent", tasks: 890, metric: "98% Accuracy", icon: <UserCheck className="w-5 h-5" /> },
  { name: "Support Agent", tasks: 2451, metric: "1.2m Avg Resp", icon: <Headphones className="w-5 h-5" /> },
  { name: "Content Agent", tasks: 56, metric: "89 SEO Score", icon: <FileText className="w-5 h-5" /> },
  { name: "Operations Agent", tasks: 124, metric: "42h Saved/Wk", icon: <Settings className="w-5 h-5" /> },
];

const AgentShowcase = () => {
  return (
    <section className="py-24 bg-primary/[0.03]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#050505]">Meet Your New <span className="text-primary italic">Department</span>.</h2>
          <p className="text-[#050505]/50 max-w-2xl mx-auto font-medium">
            Our AI employees handle the heavy lifting while you focus on high-level strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-3xl border border-black/5 flex flex-col items-center text-center group transition-all hover:bg-black/[0.02]"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  {agent.icon}
                </div>
                <div className="absolute -top-1 -right-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-[#050505] mb-1">{agent.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#050505]/30 mb-6 flex items-center gap-1.5 justify-center">
                <Circle className="w-2 h-2 fill-green-500 text-transparent" /> Online
              </p>

              <div className="w-full space-y-3 pt-4 border-t border-black/5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#050505]/40 font-bold uppercase">Tasks Today</span>
                  <span className="text-xs font-mono font-bold text-[#050505]">{agent.tasks}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#050505]/40 font-bold uppercase">Efficiency</span>
                  <span className="text-xs font-mono font-bold text-primary">{agent.metric}</span>
                </div>
              </div>

              {/* Fake pulse line animation */}
              <div className="mt-6 w-full h-8 flex items-end gap-1 overflow-hidden opacity-30">
                {[...Array(12)].map((_, j) => (
                  <motion.div 
                    key={j}
                    animate={{ height: ["20%", "80%", "40%", "100%", "30%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.1 }}
                    className="flex-1 bg-primary rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;
