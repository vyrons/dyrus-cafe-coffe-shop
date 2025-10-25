import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-5 md:px-20 py-4 text-sm font-ranade z-20 bg-transparent">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <h1 className="text-white text-2xl font-novar">Dyru's</h1>
        </div>

        {/* navbar */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white">
            Home
          </a>
          <a href="#menu" className="text-white">
            Menu
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#findus" className="text-white">
            Find Us
          </a>
        </div>

        {/* hamburger nav (utk mobile) */}
        <div className="md:hidden">
          {/* based on daisyUI template */}
          <button class="$$btn $$btn-square $$btn-ghost" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
