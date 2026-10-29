
import { motion } from "framer-motion";
import { Users, Zap, EyeOff, Workflow, Scale, BarChart3, ArrowRight } from "lucide-react";

const TheShift = () => {
  const pillars = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Free Your Team",
      hook: "What would your best people do with 15 hours back a week?",
      bullets: [
        "Stop losing your closers to admin work they shouldn't be doing",
        "Stop re-typing the same data across five different tools",
        "Less burnout, fewer people quietly checked out by Q3"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Move Faster Than Headcount Allows",
      hook: "Your competitor isn't beating you on price. They're beating you on speed.",
      bullets: [
        "Respond to leads in seconds — while your competitor's rep is still in a meeting",
        "Scale outreach without scaling payroll",
        "Run 24/7 without anyone working a night shift"
      ]
    },
    {
      icon: <EyeOff className="w-8 h-8 text-primary" />,
      title: "Stop Paying for Mistakes You Don't See",
      hook: "What's a missed follow-up actually costing you? Most owners have never run that number.",
      bullets: [
        "No more leads going cold because someone forgot to follow up",
        "No more deals lost to a 4-hour response time",
        "No more 'we'll catch it next quarter' — caught the moment it happens"
      ]
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Make Growth a System, Not a Scramble",
      hook: "Right now, does growth depend on you hiring the right person — or on a system that already works?",
      bullets: [
        "Onboard new demand without onboarding new staff",
        "Replace 'we need to hire for this' with 'we already have this covered'",
        "Build a business that runs the same whether you're in the room or not"
      ]
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Stop Losing Money to Human Inconsistency",
      hook: "Your best rep closes 40%. Your newest hire closes 12%. Why is that gap still your problem?",
      bullets: [
        "Every lead gets your best rep's process, every single time",
        "No more 'it depends who picked up the phone'",
        "Consistency that doesn't walk out the door when someone quits"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Stop Bleeding Hours on Reporting You Don't Trust",
      hook: "How many hours did your team spend last week building a report that was already outdated by Friday?",
      bullets: [
        "Numbers update themselves instead of someone pulling them manually",
        "No more decisions made on a spreadsheet that's three weeks stale",
        "Your CRM finally reflects what's actually happening, not what got typed in eventually"
      ]
    }
  ];

  return (
    <section id="the-shift" className="py-24 bg-white text-[#050505] relative overflow-hidden">
      {/* Subtle background glow to keep it aligned with the premium aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/[0.01] rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">THE SHIFT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#050505] tracking-tight leading-[1.15] mb-6"
          >
            From <span className="text-primary">Manual</span> Hustle <br className="hidden md:inline" />
            to <span className="text-primary">Autonomous</span> Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#050505]/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Here's something worth sitting with: every hour your team spends following up, qualifying, and re-entering data is an hour they're not spending on the work that actually grows revenue. Most businesses don't notice this — it's not one big loss, it's a hundred small ones, every single day. Automation doesn't just speed things up. It removes the ceiling that headcount puts on how fast you can grow.
          </motion.p>
        </div>

        {/* Pillars Grid (3 columns desktop, 2 columns tablet, 1 column mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start border-t border-zinc-200/80 pt-8 group"
            >
              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#050505] mb-2 tracking-tight">
                {pillar.title}
              </h3>

              {/* Hook */}
              <p className="text-sm font-semibold italic text-[#050505]/70 mb-6 leading-snug">
                "{pillar.hook}"
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 mt-auto">
                {pillar.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3 text-sm text-[#050505]/50 leading-relaxed font-medium">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheShift;
