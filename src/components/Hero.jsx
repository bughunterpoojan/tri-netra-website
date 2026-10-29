import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Database, MessageSquare, Mail, CheckCircle2, Zap, Users, Phone } from "lucide-react";
import { useMagnetic } from "../hooks/useMagnetic";
import { CONFIG } from "../config";

const Hero = () => {
  const containerRef = useRef(null);
  const magneticButtonRef = useMagnetic();

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen pt-28 sm:pt-32 pb-16 md:pb-20 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px] animate-pulse delay-700" />
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/5 border border-primary/10 mb-5 sm:mb-6 backdrop-blur-sm shadow-sm max-w-full"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-ping shrink-0" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] text-primary text-center">
            TriNetra Technologies • Full-Suite IT Services & AI Solutions
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#050505] to-[#050505]/60 leading-[1.18] sm:leading-[1.1]"
        >
          Custom Software, Apps & <br className="hidden sm:inline" />
          Intelligent <span className="text-primary italic">AI Solutions.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-xl text-[#050505]/65 max-w-3xl mx-auto mb-8 sm:mb-10 font-medium leading-relaxed px-2"
        >
          TriNetra Technologies engineers modern web applications, native mobile apps, enterprise cloud software, and autonomous AI systems designed to scale your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <button 
            ref={magneticButtonRef}
            onClick={() => window.Cal && window.Cal("modal", { calLink: CONFIG.calLink })}
            className="w-full sm:w-auto group relative px-6 py-3.5 sm:px-8 sm:py-4 bg-primary rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden transition-all shadow-2xl shadow-primary/30 text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center gap-2 text-white">
              Book a Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button 
            onClick={() => { const el = document.getElementById("demo"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} 
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-black/5 border border-black/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black/10 transition-all hover:scale-105 active:scale-95 text-[#050505] cursor-pointer text-sm sm:text-base"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-[#050505]" /> Watch Demo
          </button>
        </motion.div>

        {/* Workflow Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-14 sm:mt-24 relative max-w-[90rem] mx-auto w-full px-2 sm:px-4"
        >
          <div className="glass rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] p-6 sm:p-10 md:p-20 relative border border-black/[0.03] shadow-2xl shadow-black/[0.02] overflow-hidden">
            {/* Animated Connection Lines (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden md:block pointer-events-none opacity-20">
              <svg className="w-full h-[300px]" viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none">
                <motion.path 
                  d="M0 100 L 1000 100" 
                  stroke="url(#gradient-line)" 
                  strokeWidth="4" 
                  strokeDasharray="20 30"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient-line" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgb(var(--primary))" />
                    <stop offset="0.5" stopColor="rgb(var(--secondary))" />
                    <stop offset="1" stopColor="rgb(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-row justify-between items-center gap-8 sm:gap-6 md:gap-4 relative z-10">
              <WorkflowStep 
                icon={<Database className="text-primary w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />} 
                status="Active"
                delay={0} 
              />
              <WorkflowStep 
                icon={<Zap className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />} 
                status="Active"
                delay={0.1} 
              />
              <WorkflowStep 
                icon={<MessageSquare className="text-secondary w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />} 
                status="Processing"
                delay={0.2} 
              />
              <WorkflowStep 
                icon={<Users className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />} 
                status="Active"
                delay={0.3} 
              />
              <WorkflowStep 
                icon={<Mail className="text-accent w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />} 
                status="Standby"
                delay={0.4} 
              />
              <WorkflowStep 
                icon={<Phone className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />} 
                status="Standby"
                delay={0.5} 
              />
              <WorkflowStep 
                icon={<CheckCircle2 className="text-green-500 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />} 
                status="Complete"
                delay={0.6} 
              />
            </div>

            {/* Live Activity Notification Overlay */}
            <ActivityNotification />

            {/* Floating particles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [(i * 160) % 900, (i * 220 + 80) % 900],
                    y: [(i * 35) % 180, (i * 55 + 20) % 180],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                  className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WorkflowStep = ({ icon, status, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: delay + 1.2 }}
    className="flex flex-col items-center group flex-1"
  >
    <div className="relative">
      {/* Outer Pulse */}
      {status === "Processing" && (
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-[-15px] sm:inset-[-20px] rounded-[2rem] sm:rounded-[3rem] bg-primary/20 -z-10"
        />
      )}
      
      {/* Huge Icon Container */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] glass flex items-center justify-center shadow-xl shadow-black/[0.03] border border-black/[0.05] relative group-hover:scale-110 group-hover:shadow-primary/10 transition-all duration-700">
        <div className="relative z-10">{icon}</div>
        
        {/* Large Progress Ring */}
        {status === "Processing" && (
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="rgb(var(--primary))"
              strokeWidth="3"
              strokeDasharray="100 200"
              animate={{ strokeDashoffset: [200, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        )}
      </div>

      {/* Floating Status Badge */}
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-5 py-1 sm:py-2 bg-white border border-black/[0.08] rounded-xl sm:rounded-2xl shadow-lg shadow-black/[0.05] whitespace-nowrap"
      >
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
            status === "Active" ? "bg-blue-500 animate-pulse" :
            status === "Processing" ? "bg-orange-500 animate-spin" :
            status === "Complete" ? "bg-green-500" :
            "bg-gray-400"
          }`} />
          <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-[#050505]/70">{status}</span>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const ActivityNotification = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, -20] }}
    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
    className="absolute top-4 right-8 hidden lg:flex items-center gap-3 glass py-3 px-5 rounded-full border-primary/20 shadow-xl z-20"
  >
    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
      <Zap className="w-3 h-3 text-primary animate-pulse" />
    </div>
    <span className="text-[10px] font-black uppercase text-primary tracking-[0.2em] leading-none mb-0.5">Live Processing</span>
  </motion.div>
);

export default Hero;
