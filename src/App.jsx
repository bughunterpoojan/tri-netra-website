import React, { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyAutomate from "./components/WhyAutomate";
import TheShift from "./components/TheShift";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import AutomationDemo from "./components/AutomationDemo";
import Pricing from "./components/Pricing";
import Resources from "./components/Resources";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-[#fafafa] text-[#050505] selection:bg-primary selection:text-white">
        {/* Global UI Elements */}
        <div className="noise opacity-[0.03]" />
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Content */}
        <main>
          <Hero />
          <Services />
          <Industries />
          <WhyAutomate />
          <TheShift />
          <Process />
          <AutomationDemo />
          <Resources />
          <Pricing />
          <CTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-follower");
    
    const moveCursor = (e) => {
      if (cursor) {
        cursor.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="cursor-follower fixed w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference" />
  );
}

export default App;

