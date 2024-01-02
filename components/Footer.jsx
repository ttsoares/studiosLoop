import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "/public/imgs/logo.svg";

import MENU_ITENS from "@/public/consts/menu";
import MID_SOC from "@/public/consts/social_med";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <Image
                src={Logo}
                alt="Logo LoopStudio"
                className="w-44 md:ml-3"
              />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {MENU_ITENS.map((item, index) => (
                <div key={index} className="h-10 group">
                  <Link href={item.link}>{item.text}</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {MID_SOC.map((item, index) => (
                <div key={index} className="h-10 group">
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt=""
                      className="h-7 group-hover:border-b-2 pb-1 group-hover:border-white"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="font-bold">
              &copy; 2024 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
