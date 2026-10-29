import { useEffect, useRef, Suspense, lazy } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";

// Code-split route pages for superior First Contentful Paint (FCP) and Core Web Vitals
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

function App() {
  const lenisRef = useRef(null);
  const location = useLocation();

  // ── Initialize Lenis smooth scroll once ──────────────────────────────────
  useEffect(() => {
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

    lenisRef.current = lenis;

    // Expose lenis on window so modals/subcomponents can call lenis.stop()/start()
    window.__lenis = lenis;

    // Ensure initial scroll position starts at top
    lenis.scrollTo(0, { immediate: true });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  // ── On every route change: reset Lenis scroll to top ─────────────────────
  // This prevents Lenis from staying in a stale state after client-side nav.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    // Re-enable scroll in case a modal had stopped it
    lenis.start();

    // Scroll to absolute top immediately (no animation) so the new page
    // always starts at position 0. ScrollToTop.jsx handles hash anchors.
    lenis.scrollTo(0, { immediate: true });

    // Recalculate dimensions after the route's new DOM tree mounts
    requestAnimationFrame(() => {
      lenis.resize();
    });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-[#050505] selection:bg-primary selection:text-white">
      {/* Scroll listener for route transitions */}
      <ScrollToTop />

      {/* Global UI Elements */}
      <div className="noise opacity-[0.03]" />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Routed Content with lightweight fallback */}
      <Suspense fallback={<div className="min-h-screen bg-[#fafafa]" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
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
};

export default App;
