"use client";
// src/components/Banner.tsx
import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[650px] bg-teal-100 flex justify-center items-center">
      
      
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Left Content */}
        <div className="text-left space-y-4">
          <h2 className="text-[#292b2c] font-roboto font-bold animate-fadeInDown mb-4 uppercase text-[1rem] opacity-200 translate-y-0 transition-all delay-200">NEW TRENDING</h2>
          <h1 className="text-[70px] mb-5 font-bold capitalize text-gray-800">Sofa Collection</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.
          </p>
          <button className="relative z-10 inline-block text-[#333] bg-transparent border border-[#333] rounded-[40px] overflow-hidden cursor-pointer uppercase px-[35px] py-[12px] font-normal text-[1rem] leading-normal opacity-100 transition-all duration-[800ms] ease-in-out hover:text-white hover:bg-[#333] hover:border-transparent">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-[500px] h-[500px]">
          {/* Replace 'banner.png' with your own image */}
          <Image 
            src="/banner.png" // Make sure to place this image in the 'public' folder
            alt="Sofa Collection"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
