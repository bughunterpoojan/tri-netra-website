import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const lenis = window.__lenis;

    // On initial page load or browser refresh (F5): ALWAYS start from top (0, 0)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo(0, 0);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      // If the browser reloaded with an anchor hash in the URL (e.g. #services),
      // clean it up so the user starts fresh at the top of the homepage
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      return;
    }

    // Subsequent in-app route changes or anchor clicks
    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Allow DOM to finish mounting when transitioning between routes
      const timer = setTimeout(() => {
        try {
          const targetId = hash.replace("#", "");
          const element = document.getElementById(targetId) || document.querySelector(hash);
          if (element) {
            if (lenis) {
              lenis.scrollTo(element, { offset: -80 });
            } else {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        } catch {
          // Guard against invalid selector errors
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
