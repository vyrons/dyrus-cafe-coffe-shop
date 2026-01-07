import React from "react";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section id="hero" data-theme="dark">
      <div className="relative overflow-hidden h-dvh w-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/hero.webp"
            alt="hero bg"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>

        <div className="relative z-10 flex items-center justify-center h-full p-20 md:mt-10">
          <div className="flex flex-col justify-center">
            <h1 className="font-novar text-white text-5xl md:text-6xl lg:text-[55px]">
              Every Cup <br /> Begins a Story.
            </h1>
            <div className="flex flex-col xl:flex-row xl:gap-[400px] mt-10">
              <p className="relative z-10 text-white font-ranade xl:text-[15px]">
                Since 2025, born from a passion for craft and simplicity, we
                design coffee moments that connect people <br />
                and inspire calm in the everyday rush.
              </p>

              <div className="flex items-center mt-10 gap-3 ">
                <Button
                  id="btn-1"
                  title="Visit the Café"
                  containerClass="font-ranade bg-white w-[180px] lg:w-[200px] border border-transparent hover:backdrop-blur-sm hover:bg-white/10 hover:backdrop-blur-lg hover:border-stone-200 hover:text-stone-200 transition-all duration-300"
                />
                <Button
                  id="btn-2"
                  title="Our Menu"
                  containerClass="font-ranade text-white w-[140px] lg:w[200px] hover:text-stone-400"
                />
              </div>
            </div>

            <div className="w-full md:w-[700px] lg:w-[880px] xl:w-[1100px] border border-t mt-10"></div>

            <div className="flex gap-[50px] xl:gap-[150px]">
              <div>
                <h1 className="text-white font-novar text-4xl xl:text-6xl mt-10">
                  100+
                </h1>
                <p className="text-white font-ranade mt-5">Cups Brewed</p>
              </div>
              <div>
                <h1 className="text-white font-novar text-4xl xl:text-6xl mt-10">
                  50+
                </h1>
                <p className="text-white font-ranade mt-5">Local Farmers</p>
              </div>
              <div>
                <h1 className="text-white font-novar text-4xl xl:text-6xl mt-10">
                  3K+
                </h1>
                <p className="text-white font-ranade mt-5">Customers Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
