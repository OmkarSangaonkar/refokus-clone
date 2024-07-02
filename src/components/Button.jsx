/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({
  title1 = "Get Started",
  title2 = "Get Started",
  isArrow = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-36 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`text-sm font-medium transform transition-transform duration-500 ${
          isHovered ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        {isHovered ? title1 : title2}
      </span>
      {isArrow && (
        <IoIosReturnRight
          className={`transform transition-transform duration-500 delay-150 ${
            isHovered ? "animate-slide-in" : "animate-slide-out"
          }`}
        />
      )}
    </div>
  );
};

export default Button;
