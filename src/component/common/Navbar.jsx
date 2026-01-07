import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const containerRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isDarkText, setIsDarkText] = useState(false);

  useGSAP(() => {

    const showAnim = gsap.from(containerRef.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      } 
    });


    const sections = document.querySelectorAll("[data-theme]");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80px",
        end: "bottom 80px",
        onEnter: () => setIsDarkText(section.getAttribute("data-theme") === "light"),
        onEnterBack: () => setIsDarkText(section.getAttribute("data-theme") === "light"),
      });
    });

  }, { scope: containerRef });

  const navClass = `fixed top-0 left-0 w-full px-5 md:px-20 py-4 text-sm font-ranade z-50 transition-colors duration-300 ${isDarkText ? 'text-black' : 'text-white'}`;

  return (
    <div ref={containerRef} className={navClass}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-novar">Miaoshan</h1>
        </div>


        <div className="hidden md:flex space-x-8">
          <a href="#home" className={`hover:text-stone-400 transition-all duration-300`}>
            Home
          </a>
          <a href="#bestseller" className={`hover:text-stone-400 transition-all duration-300`}>
            Menu
          </a>
          <a href="#about" className={`hover:text-stone-400 transition-all duration-300`}>
            About
          </a>
          <a href="#findus" className={`hover:text-stone-400 transition-all duration-300`}>
            Find Us
          </a>
        </div>


        <div className="md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
