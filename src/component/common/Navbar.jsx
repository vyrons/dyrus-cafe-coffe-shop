import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { Link } from 'react-router-dom';

const Navbar = () => {
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const [isDarkText, setIsDarkText] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
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

  useGSAP(() => {
    if (isMenuOpen && menuRef.current) {
      const tl = gsap.timeline();
      tl.from(menuRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out'
      })
      .from('.menu-link', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.2');
    }
  }, [isMenuOpen]);

  return (
    <>
      <div ref={containerRef} className={`fixed top-0 left-0 w-full px-5 md:px-20 py-4 text-sm font-ranade z-50 transition-colors duration-300 ${isDarkText ? 'text-black' : 'text-white'}`}>
        <div className="flex justify-between items-center bg-transparent">
          {/* logo */}
          <div>
            <h1 className="text-2xl font-novar">Miaoshan</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`hover:text-stone-400 transition-all duration-300`}>
              Home
            </Link>
            <Link to="/menu" className={`hover:text-stone-400 transition-all duration-300`}>
              Menu
            </Link>
            <Link to="/about" className={`hover:text-stone-400 transition-all duration-300`}>
              About Us
            </Link>
            <Link to="/findus" className={`hover:text-stone-400 transition-all duration-300`}>
              Find Us
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 bg-[#593B1D]/95 backdrop-blur-md z-40 md:hidden"
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-10">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="menu-link text-white font-novar text-5xl hover:text-[#C1803E] transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              onClick={closeMenu}
              className="menu-link text-white font-novar text-5xl hover:text-[#C1803E] transition-colors duration-300"
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className="menu-link text-white font-novar text-5xl hover:text-[#C1803E] transition-colors duration-300"
            >
              About Us
            </Link>
            <Link 
              to="/findus" 
              onClick={closeMenu}
              className="menu-link text-white font-novar text-5xl hover:text-[#C1803E] transition-colors duration-300"
            >
              Find Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
