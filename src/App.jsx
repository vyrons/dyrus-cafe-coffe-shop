import React, { useEffect } from 'react'
import LandingPage from './component/LandingPage/LandingPage'
import Lenis from 'lenis'
import gsap from 'gsap'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();


    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);


  }, []);

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App