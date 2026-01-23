import React from 'react';
import LazyImage from './LazyImage';
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="findus" data-theme="dark" className="relative h-screen min-h-[600px] w-full overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/img/footer.webp"
          alt="Coffee Shop Ambiance"
          className="h-full w-full object-cover"
          containerClassName="h-full w-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-20">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="max-w-md">
                <h2 className="font-novar text-[32px] lg:text-[40px] leading-tight mb-6">
                    Connect <br /> With Us
                </h2>
                <p className="font-ranade text-[15px] text-stone-300">
                    Join our community for updates, exclusive offers, and a daily dose of calm.
                </p>
            </div>

            <div className="flex flex-col gap-8 font-ranade text-[15px]">
                <a href="#" className="hover:text-[#C1803E] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#C1803E] transition-colors">Twitter</a>
                <a href="#" className="hover:text-[#C1803E] transition-colors">Facebook</a>
            </div>
        </div>


        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 border-t border-white/20 pt-10">
            
            <div className="flex flex-col gap-2">
                <h3 className="font-novar text-[20px]">Miaoshan</h3>
                <p className="font-ranade text-[15px] text-stone-400">
                    © 2026 Miaoshan Coffee. <br /> All rights reserved.
                </p>
            </div>

            <div className="flex gap-10 font-ranade text-[15px] text-stone-300">
                <div className="flex flex-col gap-2">
                    <span className="text-white font-medium uppercase tracking-wider mb-2">Visit Us</span>
                    <p>Wangshu Inn</p>
                    <p>Liyue, Teyvat</p>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white font-medium uppercase tracking-wider mb-2">Contact</span>
                    <p>hello@miaoshan.com</p>
                    <p>+62 8-- ---- ----</p>
                </div>
            </div>
            

             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 opacity-10 pointer-events-none w-full text-center">
                <h1 className="font-novar text-right text-[15vw] leading-none whitespace-nowrap">MIAOSHAN</h1>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
