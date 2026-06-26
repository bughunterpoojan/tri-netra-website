import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (selector, direction = "up") => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      let x = 0;
      let y = 0;
      
      if (direction === "up") y = 50;
      if (direction === "down") y = -50;
      if (direction === "left") x = 50;
      if (direction === "right") x = -50;

      gsap.fromTo(el, 
        { 
          opacity: 0, 
          x: x, 
          y: y 
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, [selector, direction]);
};
