import React from 'react';
import Navbar from '../common/Navbar';
import Hero from './Hero';
import Intro from './Intro';
import BestSeller from './BestSeller';
import TheSpace from './TheSpace';

import Footer from '../common/Footer';

const LandingPage = () => {
  return (
    <section>
        <Navbar/>
        <Hero/>
        <Intro />
        <BestSeller />
        <TheSpace />
        <Footer />
    </section>
  )
}

export default LandingPage;