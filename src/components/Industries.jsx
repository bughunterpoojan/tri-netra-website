import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Monitor, Stethoscope, ShoppingCart, Users2, 
  ArrowUpRight, Sparkles, Megaphone, HeartPulse, UserSearch
} from "lucide-react";

const industries = [
  {
    title: "Marketing Agencies",
    stat: "Zero",
    statLabel: "Missed leads — followed up instantly",
    icon: <Megaphone className="w-6 h-6" />,
    accent: "text-blue-600",
    bgAccent: "bg-blue-600/10",
    gradient: "from-blue-600/5",
    borderHover: "hover:border-blue-300"
  },
  {
    title: "Real Estate",
    stat: "More",
    statLabel: "viewings, less chasing — Booked 24/7",
    icon: <Building2 className="w-6 h-6" />,
    accent: "text-amber-600",
    bgAccent: "bg-amber-600/10",
    gradient: "from-amber-600/5",
    borderHover: "hover:border-amber-300"
  },
  {
    title: "E-Commerce",
    stat: "Cart",
    statLabel: "Recovery — automated follow-ups for every abandoned order",
    icon: <ShoppingCart className="w-6 h-6" />,
    accent: "text-emerald-600",
    bgAccent: "bg-emerald-600/10",
    gradient: "from-emerald-600/5",
    borderHover: "hover:border-emerald-300"
  },
  {
    title: "Recruitment",
    stat: "Vetted",
    statLabel: "before you blink — Candidates screened the moment they apply",
    icon: <UserSearch className="w-6 h-6" />,
    accent: "text-violet-600",
    bgAccent: "bg-violet-600/10",
    gradient: "from-violet-600/5",
    borderHover: "hover:border-violet-300"
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4"
          >
            <Sparkles className="w-4 h-4" /> Specialized Solutions
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight"
          >
            Tailored Solutions for <span className="text-blue-600">Every Industry</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <IndustryCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ 
      scale: 1.02, 
      y: -4,
      transition: { duration: 0.25, ease: "easeOut" }
    }}
    className={`group relative p-10 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm overflow-hidden flex flex-col items-start transition-colors duration-300 min-h-[320px] ${item.borderHover}`}
  >
    {/* Radial Gradient Wash */}
    <div className={`absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-from),transparent_70%)] ${item.gradient} z-0`} />

    {/* Icon Chip */}
    <div className="flex items-center justify-between w-full mb-8 relative z-10">
      <motion.div 
        whileHover={{ rotate: 5, scale: 1.1 }}
        className={`w-14 h-14 rounded-2xl ${item.bgAccent} flex items-center justify-center ${item.accent} shrink-0`}
      >
        {React.cloneElement(item.icon, { strokeWidth: 1.5, className: "w-7 h-7" })}
      </motion.div>
      <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
    </div>

    {/* Content Group */}
    <div className="relative z-10 mt-auto">
      <div className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-3">
        {item.title}
      </div>
      <div className={`text-5xl font-black ${item.accent} tracking-tighter mb-2`}>
        {item.stat}
      </div>
      <div className="text-sm font-semibold text-zinc-900 tracking-tight">
        {item.statLabel}
      </div>
    </div>
  </motion.div>
);

export default Industries;