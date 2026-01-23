import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './component/LandingPage/LandingPage'
import Menu from './component/Menu/Menu'
import AboutUs from './component/AboutUs/AboutUs'
import FindUs from './component/FindUs/FindUs'
import ScrollToTop from './component/common/ScrollToTop'
import CustomCursor from './component/UI/CustomCursor'
import Lenis from 'lenis'
import gsap from 'gsap'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove();
    };
  }, []);

  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/findus" element={<FindUs />}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </Router>
  )
}

export default App