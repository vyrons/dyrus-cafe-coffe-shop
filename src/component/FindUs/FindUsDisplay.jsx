import React from 'react'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'

const MenuDisplay = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="light" className='h-dvh w-screen p-20 lg:p-20 bg-stone-50'>
        <div className='flex space-x-8'>
          <div className='rounded-3xl overflow-hidden'>
            <img src="./img/location.webp" alt="" className='h-[450px] w-full object-cover scale-125' />
          </div>
          <div className="flex flex-col space-y-8 justify-center w-full lg:w-auto">
        <div className="flex flex-col space-y-3">
          <div>
            <h2 className="font-ranade text-[20px] text-[#C1803E]">More Than Just Coffee</h2>
          </div>

          <div className="w-full max-w-[500px]">
            <h1 className="font-novar text-[32px] lg:text-[40px] leading-tight">
              A place for stillness, warmth, and honest coffee.
            </h1>
          </div>

          <div>
             <p className="font-ranade text-[15px] leading-relaxed">
              A quiet corner to pause, reflect, and reconnect — <br className="hidden lg:block" />
              where warm light, gentle aromas, <br className="hidden lg:block" />
              and good coffee come together naturally.
            </p>
          </div>
        </div>

        <div>
          <Button
            id="btn-download"
            title="Download Menu"
            onClick={() => window.open('https://drive.google.com/file/d/13ZU7TQ0myL7Jqqe0aOVvSaBbPobxlRo0/view?usp=sharing', '_blank')}
            containerClass="font-ranade hover:text-[#C1803E] hover:border-[#C1803E] w-[180px] lg:w-[200px] border hover:backdrop-blur-sm hover:bg-transparent bg-[#C1803E] text-white transition-all duration-300"
          />
        </div>
      </div>
        </div>
    </div>
  )
}

export default MenuDisplay