import React from 'react';
import Button from '../common/Button';

const Intro = () => {
  return (
    <section id="intro" data-theme="light" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-center h-auto min-h-dvh w-full bg-stone-50 p-8 lg:p-20 overflow-hidden">

      <div className="relative w-full max-w-[600px] h-[400px] lg:h-[600px] rounded-3xl flex-shrink-0">
        <img
          src="./img/img1.webp"
          alt="Interior of the coffee shop"
          className="rounded-3xl object-cover w-full h-full"
        />
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
            id="btn-about"
            title="About Us"
            containerClass="font-ranade hover:text-[#C1803E] hover:border-[#C1803E] w-[180px] lg:w-[200px] border hover:backdrop-blur-sm hover:bg-transparent bg-[#C1803E] text-white transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
