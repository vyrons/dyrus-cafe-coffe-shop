import React from 'react';
import { BiSolidCoffeeBean } from "react-icons/bi";
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const BestSeller = () => {
    const navigate = useNavigate();
    const products = [
        {
            name: 'Americano',
            desc: 'Clean, smooth, and quietly bold.',
            subDesc: 'Long espresso · Balanced finish',
            img: './img/img2.webp'
        },
        {
            name: 'Caramel Macchiato',
            desc: 'Smooth espresso with soft caramel sweetness.',
            subDesc: 'House caramel · Balanced layers',
            img: './img/img4.webp'
        },
        {
            name: 'Cortado',
            desc: 'Equal parts espresso and warm milk.',
            subDesc: 'Rich & smooth · No foam',
            img: './img/img3.webp'
        }
    ];

  return (
    <section id="bestseller" data-theme="dark" className="relative w-full h-auto min-h-dvh bg-[#593B1D] py-20 px-4 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center relative h-full w-full">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <BiSolidCoffeeBean className="size-[300px] lg:size-[500px] text-[#9E6933] opacity-10" />
        </div>

        <div className="flex justify-center mb-10 p-2 z-10">
          <h1 className="text-white font-novar text-[32px] lg:text-[40px] text-center">Best Seller Menu</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 z-10 w-full max-w-7xl">
            {products.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center space-y-4">
                <div className="relative flex w-full max-w-[250px] aspect-[2/3] shadow-lg rounded-xl overflow-hidden">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"/>
                </div>

                <div className="text-center">
                  <h1 className="text-white font-novar text-[24px] lg:text-[25px] p-1">{item.name}</h1>
                  <p className="text-white font-ranade text-[12px] p-1 whitespace-pre-line">{item.desc.replace(', ', ',\n')}</p>
                  <p className="text-[#E2C4A6] font-ranade text-[10px] p-1 font-medium tracking-wide">{item.subDesc}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-16 z-10">
            <Button
              id="btn-menu"
              title="View Menu"
              onClick={() => navigate('/menu')}
              containerClass="font-ranade hover:text-white w-[180px] lg:w-[200px] border border-[#C1803E] hover:bg-white/10 hover:backdrop-blur-sm hover:border-[#C1803E] hover:text-white bg-[#C1803E] text-white transition-all duration-300"
              />
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
