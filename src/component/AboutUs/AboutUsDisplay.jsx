import React, { useRef } from 'react'
import LazyImage from '../common/LazyImage'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsContain = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from('.aboutus-image', {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out'
    })
    .from('.aboutus-heading', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from('.aboutus-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.aboutus-paragraph', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.3');

  }, { scope: containerRef });

  return (
    <div ref={containerRef} data-theme="light" className='min-h-dvh w-full overflow-x-hidden pt-20 md:pt-12 p-8 md:p-12 lg:p-20 bg-stone-50'>
      <div className='aboutus-image findus-image flex-shrink-0 lg:w-full relative'>
        <LazyImage 
          src="./img/img10.webp" 
          alt="About Miaoshan Cafe" 
          className='h-[300px] lg:h-[300px] w-full object-cover scale-125' 
          containerClassName='rounded-3xl overflow-hidden h-[300px] lg:h-[300px]'
        />
        <div className='absolute inset-0 bg-black/20 pointer-events-none'></div>
      </div>

      <div className='mt-12 lg:mt-8 w-full mx-auto'>
        <h1 className='aboutus-heading font-ranade text-[20px] text-[#C1803E]'>
          About Us
        </h1>
        <p className='aboutus-subtitle text-lg md:text-4xl text-black font-medium mb-5 mt-2'>
          Crafting Moments, Brewing Excellence
        </p>
        
        <div className='space-y-6 text-stone-700 leading-relaxed'>
          <p className='aboutus-paragraph text-base md:text-lg'>
            Welcome to <span className='font-semibold text-stone-900'>Miaoshan Cafe</span>, where every cup tells a story and every visit creates a memory. 
            Established with a passion for exceptional coffee and warm hospitality, we've been serving our community 
            with dedication and love since our first day.
          </p>
          
          <p className='aboutus-paragraph text-base md:text-lg'>
            Our journey began with a simple vision: to create a space where people can escape the hustle of daily life, 
            connect with friends, and savor meticulously crafted beverages. We source our beans from the finest coffee 
            regions around the world, working directly with farmers who share our commitment to quality and sustainability.
          </p>
          
          <p className='aboutus-paragraph text-base md:text-lg'>
            At Dyrus Cafe, we believe that great coffee is an art form. Our skilled baristas are trained to bring out 
            the unique characteristics of each bean, whether you prefer a bold espresso, a smooth latte, or a refreshing 
            cold brew. Every drink is prepared with precision, care, and a genuine desire to make your day a little brighter.
          </p>
          
          <p className='aboutus-paragraph text-base md:text-lg'>
            Beyond coffee, we're a community hub—a place where ideas are born, friendships flourish, and moments are cherished. 
            Our cozy atmosphere, friendly staff, and commitment to excellence make Dyrus Cafe more than just a coffee shop; 
            it's your home away from home.
          </p>
          
          <p className='aboutus-paragraph text-base md:text-lg font-medium text-stone-900'>
            Thank you for being part of our story. We look forward to serving you and creating unforgettable experiences, 
            one cup at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContain