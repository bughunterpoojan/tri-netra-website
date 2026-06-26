import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Code2, Rocket } from "lucide-react";

const AMPLITUDE = 15; // shallow vertical swing in px

const steps = [
  {
    title: "Discovery",
    description: "We dive deep into your business bottlenecks and identify key automation opportunities.",
    icon: "01",
    lucideIcon: <Search className="w-3.5 h-3.5" strokeWidth={1.5} />
  },
  {
    title: "System Design",
    description: "We architect a custom AI workflow leveraging the latest LLMs and automation tools.",
    icon: "02",
    lucideIcon: <Compass className="w-3.5 h-3.5" strokeWidth={1.5} />
  },
  {
    title: "Development",
    description: "Our engineers build and train your AI employees on your internal knowledge base.",
    icon: "03",
    lucideIcon: <Code2 className="w-3.5 h-3.5" strokeWidth={1.5} />
  },
  {
    title: "Deployment",
    description: "Launch your agents into production with full monitoring and continuous optimization.",
    icon: "04",
    lucideIcon: <Rocket className="w-3.5 h-3.5" strokeWidth={1.5} />
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const [curvePoints, setCurvePoints] = useState([]);
  const [curvePath, setCurvePath] = useState("");


  const calculateCurve = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const titles = container.querySelectorAll('[data-step-title]');
    if (titles.length < 4) return;

    const containerRect = container.getBoundingClientRect();

    // Anchor the curve at the bottom edge of each step title (h3)
    // This places it between the title and the body text
    const anchorPoints = Array.from(titles).map((title) => {
      const rect = title.getBoundingClientRect();
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.bottom - containerRect.top + 6, // 6px below title baseline
      };
    });

    // Compute a baseline Y (average of all anchor Y values)
    const avgY = anchorPoints.reduce((sum, p) => sum + p.y, 0) / anchorPoints.length;

    // Create curve points: each point sits at its x, with a gentle
    // alternating offset from the baseline (shallow S-wave)
    const points = anchorPoints.map((pt, i) => ({
      x: pt.x,
      y: avgY + (i % 2 === 0 ? -AMPLITUDE : AMPLITUDE),
    }));

    setCurvePoints(points);

    // Build smooth cubic bezier S-curve
    if (points.length >= 2) {
      let d = `M ${points[0].x},${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const curr = points[i];
        const next = points[i + 1];
        const cpx = (curr.x + next.x) / 2;
        d += ` C ${cpx},${curr.y} ${cpx},${next.y} ${next.x},${next.y}`;
      }
      setCurvePath(d);

    }
  }, []);

  useEffect(() => {
    // Delay to let framer-motion entry animations settle
    const timer = setTimeout(calculateCurve, 400);
    window.addEventListener('resize', calculateCurve);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateCurve);
    };
  }, [calculateCurve]);



  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#050505]">
            Seamless <span className="text-primary italic">Transformation</span>.
          </h2>
          <p className="text-[#050505]/50 text-xl max-w-2xl font-medium">
            From chaos to autonomous in 4 simple steps.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Blue Connecting Curve (Desktop) */}
          {curvePoints.length === 4 && (
            <svg 
              className="absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none" 
              style={{ zIndex: 1 }}
            >
              {/* Dashed track */}
              <path 
                d={curvePath}
                stroke="#0066FF" 
                strokeOpacity="0.1" 
                strokeWidth="2.5" 
                strokeDasharray="8 6"
                fill="none" 
              />
              {/* Solid animated blue curve */}
              <motion.path
                d={curvePath}
                stroke="#0066FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 5, ease: "easeInOut" }}
              />
              {/* Glow effect */}
              <motion.path
                d={curvePath}
                stroke="#0066FF"
                strokeOpacity="0.25"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                style={{ filter: 'blur(6px)' }}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 5, ease: "easeInOut" }}
              />
              {/* Dots at each step position */}
              {curvePoints.map((pt, i) => (
                <motion.circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="5"
                  fill="#0066FF"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 1, ease: "easeOut" }}
                />
              ))}
            </svg>
          )}

          {/* Vertical Connecting Line (Mobile / Tablet) */}
          <div className="absolute left-6 top-6 bottom-24 w-0.5 lg:hidden" style={{ zIndex: 1, background: 'linear-gradient(to bottom, #0066FF22, #0066FF, #0066FF22)' }} />
          <motion.div
            className="absolute left-6 top-6 bottom-24 w-0.5 lg:hidden origin-top"
            style={{ zIndex: 2, backgroundColor: '#0066FF' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 lg:py-12">
            {steps.map((step, i) => {
              // Alternate vertical offset on desktop only
              const offsetClass = (i === 1 || i === 3) ? "lg:-translate-y-8" : "lg:translate-y-0";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className={`relative group pt-12 lg:pt-0 transition-transform duration-300 ${offsetClass}`}
                >
                  {/* Large Ghost Numeral in background */}
                  <motion.div 
                    initial={{ opacity: 0.03 }}
                    whileInView={{ 
                      opacity: [0.03, 0.12, 0.03],
                      transition: { delay: i * 0.5 + 0.1, duration: 0.8, ease: "easeInOut" }
                    }}
                    viewport={{ once: true }}
                    className="text-[120px] font-black text-black/[0.03] absolute -top-10 -left-4 select-none group-hover:text-primary/10 transition-colors pointer-events-none z-0"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Step Card Content */}
                  <div className="relative z-10">
                    {/* Number Badge with Overlay Icon */}
                    <motion.div 
                      initial={{ scale: 1 }}
                      whileInView={{ 
                        scale: [1, 1.1, 1],
                        transition: { delay: i * 0.5 + 0.2, duration: 0.6, ease: "easeInOut" }
                      }}
                      viewport={{ once: true }}
                      data-step-icon={i}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary mb-8 group-hover:scale-110 transition-transform relative"
                    >
                      {step.icon}
                      
                      {/* Icon overlay on the bottom-right corner */}
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-primary shadow-sm z-20">
                        {step.lucideIcon}
                      </div>
                    </motion.div>

                    <h3 
                      data-step-title={i}
                      className="text-2xl font-bold mb-4 text-[#050505]"
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#050505]/40 leading-relaxed group-hover:text-[#050505]/60 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
