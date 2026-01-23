import React, { useRef } from 'react'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MenuDisplay = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.from('.menu-image', {
      opacity: 0,
      x: -50,
      duration: 1,
    })
    .from('.menu-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.5')
    .from('.menu-title', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.4')
    .from('.menu-description', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.4')
    .from('.menu-button', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.3');

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      data-theme="light" 
      className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-center h-auto min-h-dvh w-full bg-stone-50 pt-20 md:pt-8 p-8 lg:p-20 overflow-hidden'
    >
      <div className='menu-image relative w-full max-w-[700px] h-[350px] lg:h-[450px] rounded-3xl flex-shrink-0 overflow-hidden'>
        <img src="./img/img9.webp" alt="Menu showcase" className='rounded-3xl object-cover w-full h-full' />
      </div>

      <div className="flex flex-col space-y-8 justify-center w-full lg:w-auto">
        <div className="flex flex-col space-y-3">
          <div className="menu-subtitle">
            <h2 className="font-ranade text-[20px] text-[#C1803E]">More Than Just Coffee</h2>
          </div>

          <div className="menu-title w-full max-w-[500px]">
            <h1 className="font-novar text-[32px] lg:text-[40px] leading-tight">
              A place for stillness, warmth, and honest coffee.
            </h1>
          </div>

          <div className="menu-description">
            <p className="font-ranade text-[15px] leading-relaxed">
              A quiet corner to pause, reflect, and reconnect <br className="hidden lg:block" />
              where warm light, gentle aromas, <br className="hidden lg:block" />
              and good coffee come together naturally.
            </p>
          </div>
        </div>

        <div className="menu-button">
          <Button
            id="btn-download"
            title="Download Menu"
            onClick={() => window.open('https://drive.google.com/file/d/13ZU7TQ0myL7Jqqe0aOVvSaBbPobxlRo0/view?usp=sharing', '_blank')}
            containerClass="font-ranade hover:text-[#C1803E] hover:border-[#C1803E] w-[180px] lg:w-[200px] border hover:backdrop-blur-sm hover:bg-transparent bg-[#C1803E] text-white transition-all duration-300"
          />
        </div>
      </div>
    </section>
  )
}

export default MenuDisplay