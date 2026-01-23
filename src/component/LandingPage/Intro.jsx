import React, { useRef } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    tl.from('.intro-image', {
      opacity: 0,
      x: -60,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out'
    })
    .from('.intro-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.intro-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.intro-description', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.intro-button', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4');

  }, { scope: containerRef });

  return (
    <section 
      id="intro" 
      data-theme="light" 
      className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-center h-auto min-h-dvh w-full bg-stone-50 p-8 lg:p-20 overflow-hidden"
      ref={containerRef}
    >

      <div className="intro-image relative w-full max-w-[600px] h-[400px] lg:h-[400px] rounded-3xl flex-shrink-0">
        <img
          src="./img/img1.webp"
          alt="Interior of the coffee shop"
          className="rounded-3xl object-cover w-full h-full"
        />
      </div>


      <div className="flex flex-col space-y-8 justify-center w-full lg:w-auto">
        <div className="flex flex-col space-y-3">
          <div className="intro-subtitle">
            <h2 className="font-ranade text-[20px] text-[#C1803E]">More Than Just Coffee</h2>
          </div>

          <div className="intro-title w-full max-w-[500px]">
            <h1 className="font-novar text-[32px] lg:text-[40px] leading-tight">
              A place for stillness, warmth, and honest coffee.
            </h1>
          </div>

          <div className="intro-description">
             <p className="font-ranade text-[15px] leading-relaxed">
              A quiet corner to pause, reflect, and reconnect — <br className="hidden lg:block" />
              where warm light, gentle aromas, <br className="hidden lg:block" />
              and good coffee come together naturally.
            </p>
          </div>
        </div>

        <div className="intro-button">
          <Button
            id="btn-about"
            title="About Us"
            onClick={() => navigate('/about')}
            containerClass="font-ranade hover:text-[#C1803E] hover:border-[#C1803E] w-[180px] lg:w-[200px] border hover:backdrop-blur-sm hover:bg-transparent bg-[#C1803E] text-white transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
