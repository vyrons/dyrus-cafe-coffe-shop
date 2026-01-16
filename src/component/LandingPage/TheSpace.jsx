import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Button from '../common/Button';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const images = [
  './img/img5.webp',
  './img/img6.webp',
  './img/img7.webp',
  './img/img8.webp',
];

const TheSpace = () => {

  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray(".slide");
    if (slides.length === 0) return;


    gsap.set(slides, { opacity: 0, zIndex: 0 });
    gsap.set(slides[0], { opacity: 1, zIndex: 1 });

    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalDuration = 4;
    const fadeDuration = 1.5;

    const playNext = () => {
      const nextIndex = (currentIndex + 1) % totalSlides;
      const currentSlide = slides[currentIndex];
      const nextSlide = slides[nextIndex];

      const tl = gsap.timeline({
        onComplete: () => {
          currentIndex = nextIndex;
          gsap.delayedCall(intervalDuration, playNext);
        }
      });

      // Crossfade logic:
      // Ensure next slide is on top and transparent
      tl.set(nextSlide, { zIndex: 1, opacity: 0 })
        .set(currentSlide, { zIndex: 0 }) 
        .to(nextSlide, { opacity: 1, duration: fadeDuration, ease: "power2.inOut" })
        .set(currentSlide, { opacity: 0 });
    };


    gsap.delayedCall(intervalDuration, playNext);

  }, { scope: containerRef });

  return (
    <div id="the-space" data-theme="light" ref={containerRef} className="h-full w-screen bg-stone-50 flex flex-col justify-center items-center p-10 lg:p-20">
      <div className="flex flex-col text-center justify-center mb-10">
        <h1 className="font-novar text-[40px]">The Space</h1>
        <h1 className="font-ranade text-[#C1803E] text-[15px]">A place to slow down.</h1>
      </div>

      <div className="relative w-full h-[400px] max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="slide absolute inset-0 w-full h-full bg-stone-50"
          >
            <img
              src={src}
              alt={`Interior Space view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className='mt-10'>
          <Button
            id="btn-about"
            title="Find Us"
            onClick={() => navigate('/findus')}
            containerClass="font-ranade hover:text-[#C1803E] hover:border-[#C1803E] w-[180px] lg:w-[200px] border hover:backdrop-blur-sm hover:bg-transparent bg-[#C1803E] text-white transition-all duration-300"
          />
      </div>
    </div>
  );
};

export default TheSpace;
