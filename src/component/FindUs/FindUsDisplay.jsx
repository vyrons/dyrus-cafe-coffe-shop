import React, { useState, useEffect, useRef } from 'react'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'
import { FaMapLocationDot } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MenuDisplay = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('location');
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const tabs = [
    {
      id: 'location',
      label: 'Location',
      icon: <FaMapLocationDot className='size-6' />,
      content: 'Wangshu Inn, Liyue City'
    },
    {
      id: 'hours',
      label: 'Opening Hours',
      icon: <TbClockHour4Filled className='size-6' />,
      content: '09.00 – 22.00'
    },
    {
      id: 'parking',
      label: 'Parking',
      icon: <FaCar className='size-6' />,
      content: 'Available nearby'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex(tab => tab.id === current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, tabs]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsAutoPlay(false);
    
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 6000);
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.from('.findus-image', {
      opacity: 0,
      x: -50,
      duration: 1,
    })
    .from('.findus-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.5')
    .from('.findus-title', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.4')
    .from('.findus-tabs', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.4')
    .from('.findus-button', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.3');

  }, { scope: containerRef });

  return (
    <div ref={containerRef} data-theme="light" className='min-h-dvh w-full overflow-x-hidden pt-20 md:pt-12 p-8 md:p-12 lg:p-20 bg-stone-50'>
        <div className='flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto'>
          <div className='findus-image rounded-3xl overflow-hidden flex-shrink-0 lg:w-1/2'>
            <img src="./img/location.webp" alt="" className='h-[300px] lg:h-[450px] w-full object-cover scale-125' />
          </div>
          <div className="flex flex-col space-y-8 justify-center w-full lg:flex-1">
        <div className="flex flex-col space-y-3">
          <div className="findus-subtitle">
            <h2 className="font-ranade text-[20px] text-[#C1803E]">Find Your Way to Miaoshan</h2>
          </div>

          <div className="findus-title w-full max-w-[500px]">
            <h1 className="font-novar text-[32px] lg:text-[40px] leading-tight">
              Located in a calm corner, made for slow moments.
            </h1>
          </div>

          <div className='findus-tabs flex flex-col space-y-4'>
            <div className='flex space-x-2 border-b border-gray-200'>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 font-novar font-medium transition-all duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-[#C1803E] text-[#C1803E]'
                      : 'border-transparent text-gray-500 hover:text-[#C1803E]'
                  }`}
                >
                  <span className={activeTab === tab.id ? 'text-[#C1803E]' : 'text-gray-400'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className='p-4 bg-white rounded-lg shadow-sm min-h-[80px] flex items-center'>
              <p className='font-novar text-lg'>
                {tabs.find(tab => tab.id === activeTab)?.content}
              </p>
            </div>
          </div>
        </div>

        <div className="findus-button">
          <Button
            id="btn-findLocation"
            title="Find Location"
            onClick={() => window.open('https://genshin.hoyoverse.com/id/news/detail/103671', '_blank')}
            containerClass="font-ranade hover:text-[#C1803E] hover:border-[#C1803E] w-[180px] lg:w-[200px] border hover:backdrop-blur-sm hover:bg-transparent bg-[#C1803E] text-white transition-all duration-300"
          />
        </div>
      </div>
        </div>
    </div>
  )
}

export default MenuDisplay