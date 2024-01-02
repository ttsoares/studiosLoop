import React from "react";
import Image from "next/image";

import CREATIONS from "@/public/consts/creations";

const Creations = () => {
  return (
    <div className="container max-w-6xl mx-auto my-36 px-6 text-gray-900 md:px-0">
      <div className="flex items-center justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button className="hidden px-12 py-1 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white md:block">
          See All
        </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 text-2xl text-white uppercase ">
        {CREATIONS.map((item, index) => (
          <div key={index} className="group item hover:cursor-pointer">
            <Image
              src={item.imgDsk}
              alt={item.text}
              width={262}
              height={464}
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            <Image
              src={item.imgMob}
              alt={item.text}
              width={262}
              height={464}
              className="w-full md:hidden"
            />
            <div className="item-gradient"></div>
            <h5>{item.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creations;
