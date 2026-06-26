import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivers",
    role: "CEO, NexGen Media",
    content: "TriNetra Technologies didn't just automate our business; they fundamentally changed how we scale. We're doing 3x the volume with the same team size.",
    avatar: "AR"
  },
  {
    name: "Sarah Chen",
    role: "Founder, Bloom SEO",
    content: "The lead qualification agent they built is scarily good. It handles objections better than some of our junior reps did.",
    avatar: "SC"
  },
  {
    name: "Marcus Thorne",
    role: "COO, Peak Realty",
    content: "We saved over 40 hours a week on scheduling. The ROI was immediate and obvious. Best investment this year.",
    avatar: "MT"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-[#050505]">Words from the <span className="text-primary italic">Future</span>.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-10 rounded-[2.5rem] border border-black/5 relative group"
            >
              <Quote className="w-12 h-12 text-primary opacity-20 absolute top-8 right-10 group-hover:scale-125 transition-transform duration-500" />
              
              <p className="text-lg text-[#050505]/70 italic leading-relaxed mb-10 relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-xs text-white">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-[#050505]">{item.name}</h4>
                  <p className="text-xs text-[#050505]/40 font-black uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
