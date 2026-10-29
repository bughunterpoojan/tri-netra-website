import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Code2, Rocket, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business bottlenecks, data flows, and team operations to identify key automation and software opportunities.",
    deliverable: "Bottleneck Audit & Architecture Plan",
    lucideIcon: <Search className="w-3.5 h-3.5" strokeWidth={2} />
  },
  {
    icon: "02",
    title: "System Architecture",
    description: "We architect a custom AI workflow leveraging the latest LLMs, clean data models, and direct integrations with your existing tools.",
    deliverable: "Integrations & Data Schema Spec",
    lucideIcon: <Compass className="w-3.5 h-3.5" strokeWidth={2} />
  },
  {
    icon: "03",
    title: "Agile Development",
    description: "Our engineers build custom applications and train your AI employees on your internal knowledge base with end-to-end sandbox validation.",
    deliverable: "Engineered AI Agents & CI/CD",
    lucideIcon: <Code2 className="w-3.5 h-3.5" strokeWidth={2} />
  },
  {
    icon: "04",
    title: "Deployment & Scale",
    description: "Launch your solutions into production with zero downtime, full observability, real-time logging, and continuous performance optimization.",
    deliverable: "Live Production & Continuous SLA",
    lucideIcon: <Rocket className="w-3.5 h-3.5" strokeWidth={2} />
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const [curvePoints, setCurvePoints] = useState([]);
  const [curvePath, setCurvePath] = useState("");
  const [activeStep, setActiveStep] = useState(null);

  // Dynamically calculate smooth Bezier curve anchored precisely at the center of the step badges.
  // Because badges are at the top, the curve flows between badges and NEVER touches the text below!
  const calculateCurve = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const icons = container.querySelectorAll("[data-step-icon]");
    if (icons.length < 4) return;

    const containerRect = container.getBoundingClientRect();

    const points = Array.from(icons).map((icon) => {
      const rect = icon.getBoundingClientRect();
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      };
    });

    setCurvePoints(points);

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
    // Small delay to let Framer Motion mount layout
    const timer = setTimeout(calculateCurve, 300);
    window.addEventListener("resize", calculateCurve);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateCurve);
    };
  }, [calculateCurve]);

  return (
    <section id="process" className="py-28 relative overflow-hidden bg-[#fafafa]">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Execution Methodology
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-5 md:mb-6 tracking-tight text-[#050505] leading-[1.18] sm:leading-[1.1]"
          >
            Seamless <span className="text-primary italic">Transformation</span>.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#050505]/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            From manual complexity to autonomous reliability in 4 clear, engineered phases.
          </motion.p>
        </div>

        {/* Workflow Container */}
        <div className="relative max-w-6xl mx-auto" ref={containerRef}>
          
          {/* Desktop SVG Dynamic Energy Curve (Strictly connecting badges at top — never touches text) */}
          {curvePoints.length === 4 && (
            <svg 
              className="absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none" 
              style={{ zIndex: 1 }}
            >
              <defs>
                {/* Flowing Linear Gradient */}
                <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#00A3FF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#9333EA" stopOpacity="0.8" />
                </linearGradient>

                {/* Traveling Energy Pulse Gradient */}
                <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#00A3FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Static Dashed Ambient Track */}
              <path 
                d={curvePath}
                stroke="#0066FF" 
                strokeOpacity="0.12" 
                strokeWidth="2.5" 
                strokeDasharray="6 6"
                fill="none" 
              />

              {/* 2. Main Animated Gradient Line */}
              <motion.path
                d={curvePath}
                stroke="url(#curve-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* 3. Glowing Ambient Aura */}
              <motion.path
                d={curvePath}
                stroke="#0066FF"
                strokeOpacity="0.2"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* 4. Continuous Traveling Beam / Comet Pulse */}
              <motion.path
                d={curvePath}
                stroke="url(#pulse-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="50 350"
                animate={{ strokeDashoffset: [-400, 400] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />

              {/* 5. Concentric Radar Pulse Rings around each Step Node */}
              {curvePoints.map((pt, i) => (
                <g key={i}>
                  <motion.circle
                    cx={pt.x}
                    cy={pt.y}
                    r="24"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="1.5"
                    animate={{ scale: [0.85, 1.45, 0.85], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                  />
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#0066FF" />
                </g>
              ))}
            </svg>
          )}

          {/* Mobile Vertical Connected Track */}
          <div className="lg:hidden absolute left-7 top-6 bottom-20 w-[2px] pointer-events-none z-0">
            <div className="absolute inset-0 border-l-2 border-dashed border-primary/20" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-accent to-secondary origin-top shadow-[0_0_12px_rgba(0,102,255,0.5)]"
            />
          </div>

          {/* Steps Grid (Alternating elegant vertical rhythm on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10 pt-4">
            {steps.map((step, i) => {
              // Graceful alternating vertical offset on desktop creates the wave alignment
              const staggerClass = (i === 1 || i === 3) ? "lg:-translate-y-6" : "lg:translate-y-4";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  onMouseEnter={() => { setActiveStep(i); calculateCurve(); }}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group relative flex flex-col justify-between p-7 rounded-[2.5rem] bg-white/90 backdrop-blur-xl border transition-all duration-300 shadow-sm ${
                    activeStep === i
                      ? "border-primary/50 shadow-2xl shadow-primary/15 scale-[1.02]"
                      : "border-black/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                  } ${staggerClass}`}
                >
                  {/* Subtle Background Ghost Numeral */}
                  <div className="absolute top-3 right-6 text-7xl font-black text-black/[0.03] select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                    {step.icon}
                  </div>

                  {/* Card Content Top */}
                  <div className="relative z-10">
                    
                    {/* Step Icon Badge (Curve anchors precisely at this center) */}
                    <div className="flex items-center justify-between mb-8">
                      <div 
                        data-step-icon={i}
                        className="relative w-14 h-14 rounded-2xl bg-white border-2 border-primary/20 group-hover:border-primary flex items-center justify-center font-black text-primary text-base shadow-lg shadow-black/[0.04] group-hover:shadow-primary/25 transition-all duration-300 group-hover:scale-110 z-20"
                      >
                        <span>{step.icon}</span>

                        {/* Floating Corner Mini Tool Icon */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-white border border-black/10 flex items-center justify-center text-primary shadow-xs">
                          {step.lucideIcon}
                        </div>
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-black/[0.03] text-[#050505]/60 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        Phase {step.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#050505] mb-3 group-hover:text-primary transition-colors leading-snug">
                      {step.title}
                    </h3>

                    {/* Description - Positioned with ample safety margin below the curve */}
                    <p className="text-xs text-[#050505]/65 leading-relaxed font-medium mb-8">
                      {step.description}
                    </p>
                  </div>

                  {/* Card Bottom Deliverable Pill */}
                  <div className="pt-4 border-t border-black/5 flex items-center gap-2 relative z-10">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[11px] font-bold text-[#050505]/80 leading-tight">
                      {step.deliverable}
                    </span>
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
