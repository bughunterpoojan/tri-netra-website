import React from "react";
import { motion } from "framer-motion";
import { Building2, ShoppingCart, HeartPulse, Laptop, Store, UserSearch } from "lucide-react";

const industries = [
  {
    name: "Marketing Agencies",
    stat: "90% lead processing speed",
    icon: <Laptop />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-50 to-white",
  },
  {
    name: "Real Estate",
    stat: "40% more viewings booked",
    icon: <Building2 />,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-purple-50 to-white",
  },
  {
    name: "E-Commerce",
    stat: "3x cart recovery rate",
    icon: <ShoppingCart />,
    className: "md:col-span-1 md:row-span-2 bg-gradient-to-br from-pink-50 to-white",
  },
  {
    name: "Healthcare",
    stat: "Automated patient intake",
    icon: <HeartPulse />,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-emerald-50 to-white",
  },
  {
    name: "Recruitment",
    stat: "Instant candidate vetting",
    icon: <UserSearch />,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-br from-cyan-50 to-white",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-black/[0.02]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-[#050505]">
            Tailored Solutions for <br />
            <span className="text-primary italic">Every Industry</span>.
          </h2>
          <p className="text-[#050505]/50 max-w-xl">
            We don't believe in one-size-fits-all. Our AI agents are trained on your specific industry data and processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[150px]">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group rounded-3xl overflow-hidden glass border border-black/5 flex flex-col justify-end p-8 ${item.className}`}
            >
              <div className="absolute top-8 left-8 p-3 rounded-2xl bg-black/5 text-[#050505] group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                {item.icon}
              </div>
              
              <div className="relative z-10 transition-all group-hover:translate-x-2">
                <h3 className="text-2xl font-black text-[#050505] mb-2">{item.name}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-widest">{item.stat}</p>
              </div>

              {/* Animated background element */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,transparent_70%)] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
