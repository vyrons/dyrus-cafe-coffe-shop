import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3  ${containerClass}`}
    >
        <span className="relative inline-flex overflow-hidden font-ranade text-xs uppercase">
            <div className="duration-300">
                {title}
            </div>
        </span>
    </button>
  );
};

export default Button;
