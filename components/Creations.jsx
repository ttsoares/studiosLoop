import React from "react";
import Image from "next/image";

import CREATIONS from "@/public/consts/creations";

const Creations = () => {
  return (
    <div
      cy-test="creations"
      className="container max-w-6xl mx-auto my-36 px-6 text-gray-900 md:px-0"
    >
      <div className="flex items-center justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button className="hidden px-12 py-1 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white md:block">
          See All
        </button>
      </div>

      <div
        cy-test="creations_grid"
        className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 text-2xl text-white uppercase "
      >
        {CREATIONS.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden hover:cursor-pointer"
          >
            <Image
              cy-test={item.text}
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
            <div
              cy-test={`overlay-${item.text}`}
              className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"
            ></div>
            <h5>{item.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creations;
