import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true); // Start as true to prevent flash
  
  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);
    
    // Only run cursor logic on desktop
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if(!cursor) return;

    // Initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.15, // Smooth follow
            ease: "power2.out"
        });
    };

    const handleHover = () => {
        gsap.to(cursor, { 
            scale: 2.5,
            backgroundColor: "transparent",
            borderWidth: "2px",
            borderColor: "white",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleHoverOut = () => {
        gsap.to(cursor, { 
            scale: 1, 
            backgroundColor: "white",
            borderWidth: "0px",
            borderColor: "transparent",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    window.addEventListener("mousemove", moveCursor);
    
    // Add hover listeners to clickable elements
    const addListeners = () => {
        const clickables = document.querySelectorAll("a, button, .cursor-pointer, input, select, textarea");
        clickables.forEach(el => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleHoverOut);
        });
        return clickables;
    };

    let clickables = addListeners();

    // Mutation observer to handle dynamically added elements
    const observer = new MutationObserver(() => {
        clickables.forEach(el => {
             el.removeEventListener("mouseenter", handleHover);
             el.removeEventListener("mouseleave", handleHoverOut);
        });
        clickables = addListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
        window.removeEventListener("mousemove", moveCursor);
        observer.disconnect();
        clickables.forEach(el => {
            el.removeEventListener("mouseenter", handleHover);
            el.removeEventListener("mouseleave", handleHoverOut);
        });
    };
  }, []);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <div 
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 w-6 h-6 rounded-full z-[9999] pointer-events-none mix-blend-difference bg-white"
      style={{ 
        transform: 'translate3d(0,0,0)', // Hardware accelerate
        border: '0px solid transparent'
      }}
    />
  );
};

export default CustomCursor;
