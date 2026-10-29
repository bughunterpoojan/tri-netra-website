
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Send, ArrowRight, ShieldCheck, Clock, Target, BadgeCheck } from "lucide-react";
import { CONFIG } from "../config";

const cards = [
  {
    icon: <Search className="w-5 h-5" />,
    label: "THE PROBLEM",
    heading: "\"How much will this cost me?\"",
    body: "Most businesses we talk to have been burned by flat-rate tools that do 60% of the job. We don't sell software licenses. We build systems that solve a specific problem — so we price it that way.",
  },
  {
    icon: <SlidersHorizontal className="w-5 h-5" />,
    label: "OUR PROCESS",
    heading: "\"How does it actually work?\"",
    body: "We start by understanding where your team is losing the most time and money. Then we scope the exact automation that eliminates that. You only pay for what moves the needle.",
  },
  {
    icon: <Send className="w-5 h-5" />,
    label: "WHAT YOU GET",
    heading: "\"What's included in my quote?\"",
    body: "A full breakdown of the workflow, tools used, timeline, and ROI estimate — before you commit to anything. No surprises. No upsells hidden in fine print.",
  },
];

const stats = [
  { value: "48hrs", label: "Average time to receive your proposal", icon: <Clock className="w-4 h-4" /> },
  { value: "100%", label: "Custom-scoped, never templated", icon: <Target className="w-4 h-4" /> },
  { value: "₹0", label: "Cost to get a quote", icon: <BadgeCheck className="w-4 h-4" /> },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#fafafa]">
      <div className="container mx-auto px-6">

        {/* Section Headline — matches "Watch Live Automation." */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter text-[#050505] leading-[1.18] sm:leading-[1.1]"
          >
            No Guesswork.{" "}
            <br />
            No <span className="text-primary italic">Generic Plans</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-[#050505]/50 max-w-xl"
          >
            Because your bottleneck isn't the same as everyone else's — and your solution shouldn't be either.
          </motion.p>
        </div>

        {/* 3-Column Cards — matches AutomationDemo feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-[2rem] glass hover:border-black/10 transition-all"
            >
              {/* Icon — same as AutomationDemo icon container */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mb-6">
                {card.icon}
              </div>

              {/* Label — same as Live Monitor labels */}
              <span className="text-[10px] font-black uppercase text-primary tracking-widest block mb-3">
                {card.label}
              </span>

              {/* Heading — same as "Zero Input Required" */}
              <h3 className="font-bold text-[#050505] mb-3">
                {card.heading}
              </h3>

              {/* Body — same as feature card description */}
              <p className="text-sm text-[#050505]/50 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Block — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 pt-4 flex flex-col items-center text-center"
        >
          {/* Tag */}
          <span className="text-2xl md:text-3xl font-black uppercase text-primary tracking-widest block mb-6">
            Custom Quote
          </span>

          {/* Heading */}
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-[#050505] mb-4">
            Tell us what's broken.
          </h3>
          <p className="text-[#050505]/50 text-sm mb-6 max-w-xl">
            We'll tell you what it costs to fix it.
          </p>

          {/* Body */}
          <p className="text-sm text-[#050505]/50 leading-relaxed max-w-xl mb-8">
            We've never sent the same quote twice. After a short discovery call, we map your workflow, identify the exact failure points, and send you a detailed proposal — usually within 48 hours.
          </p>

          {/* CTA button */}
          <button
            onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
            className="px-10 py-5 text-2xl font-black text-white bg-primary rounded-full hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 flex items-center gap-4 mb-6"
          >
            Get My Custom Quote <ArrowRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Trust line */}
          <span className="flex items-center gap-2 text-[#050505]/30 text-sm">
            <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
            No commitment. No sales pitch. Just clarity.
          </span>
        </motion.div>

        {/* Trust Micro-Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-primary scale-125">{stat.icon}</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#050505]">
                  {stat.value}
                </span>
              </div>
              <p className="text-[#050505]/30 text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
