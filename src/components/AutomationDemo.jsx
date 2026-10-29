import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Search, CheckCircle, Calendar, Sparkles } from "lucide-react";

const events = [
  { id: 1, type: "New Lead", message: "New lead arrived from Instagram", icon: <Sparkles className="text-yellow-600" /> },
  { id: 2, type: "Processing", message: "AI Agent analyzing lead profile...", icon: <Terminal className="text-primary" /> },
  { id: 3, type: "Qualified", message: "Lead qualified: High Intent - Enterprise", icon: <Search className="text-secondary" /> },
  { id: 4, type: "Action", message: "Personalized outreach sent via Email", icon: <Send className="text-accent" /> },
  { id: 5, type: "Success", message: "Meeting booked for Monday 10:00 AM", icon: <Calendar className="text-green-600" /> },
];

const AutomationDemo = () => {
  const [activeEvents, setActiveEvents] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvents(prev => {
        const nextEvent = events[count % events.length];
        const newList = [nextEvent, ...prev.slice(0, 3)];
        setCount(prevCount => prevCount + 1);
        return newList;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section id="demo" className="py-24 bg-[#fafafa] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-[#050505]">
              Watch <span className="text-primary italic">Live</span> <br />
              Automation.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl glass border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle />
                </div>
                <div>
                  <h3 className="font-bold text-[#050505] mb-1">Zero Input Required</h3>
                  <p className="text-sm text-[#050505]/50">Once configured, the system handles the entire lifecycle of a customer autonomously.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl glass border-black/5 opacity-70">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-[#050505]/80 shrink-0">
                  <Terminal />
                </div>
                <div>
                  <h3 className="font-bold text-[#050505] mb-1">Intelligent Reasoning</h3>
                  <p className="text-sm text-[#050505]/50">Our agents use advanced LLMs to make decisions based on your business logic.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Fake Dashboard */}
            <div className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-2xl shadow-primary/5">
              {/* Toolbar */}
              <div className="px-6 py-4 border-b border-black/5 bg-black/[0.02] flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-400/50" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#050505]/20">Live Monitor v2.4.0</span>
              </div>

              {/* Console Output */}
              <div className="p-8 min-h-[400px] flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {activeEvents.map((event, i) => (
                    <motion.div
                      key={`${event.id}-${count}-${i}`}
                      initial={{ opacity: 0, x: -20, scale: 0.95 }}
                      animate={{ opacity: 1 - i * 0.25, x: 0, scale: 1 }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-2xl bg-black/[0.02] border border-black/5 flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-[10px] font-black uppercase text-primary tracking-widest">{event.type}</span>
                          <span className="text-[8px] font-mono text-[#050505]/20">Just now</span>
                        </div>
                        <p className="text-sm font-medium text-[#050505]/80">{event.message}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {activeEvents.length === 0 && (
                 <div className="flex-1 flex flex-col items-center justify-center text-white/20">
                    <Sparkles className="w-12 h-12 mb-4 animate-pulse" />
                    <p className="font-mono text-xs">Waiting for events...</p>
                 </div>
                )}
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDemo;
