"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

import Logo from "/public/imgs/logo.svg";
import Hamburger from "/public/imgs/icon-hamburger.svg";
import Close from "/public/imgs/icon-close.svg";

import MENU_ITENS from "@/public/consts/menu";

const Nav = () => {
  const [showBM, setShowBM] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setShowBM(!showBM);
  }

  function routeTo(link) {
    setShowBM(false);
    router.push(link);
  }

  return (
    <section
      cy-test="nav"
      className="w-full pt-10 lg:my-4 h-24 lg:h-26 flex items-center justify-between md:justify-start relative px-10 md:px-20 z-20 text-white"
    >
      <Link href="/">
        <div className="h-10 w-26 flex hover:animate-pulse">
          <Image src={Logo} alt="Logo LoopStudio" />
        </div>
      </Link>

      {/* SM */}
      <div className="md:hidden ">
        {showBM ? (
          <div className="absolute -mt-5 inset-0 w-full min-h-screen  bg-black ">
            <div className="absolute top-[100px] right-0 w-full h-72 p-10 space-y-3">
              {MENU_ITENS.map((item, index) => (
                <div key={index} className="text-lg text-white uppercase">
                  <p
                    class="hover:text-pink-500 hover:cursor-pointer"
                    onClick={() => routeTo(item.link)}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div
              cy-test="closeIcon"
              onClick={toggleMenu}
              className="p-2 absolute top-12 right-12 text-3xl font-bold"
            >
              <Image src={Close} alt="Close menu" width={20} height={20} />
            </div>
          </div>
        ) : (
          <div
            cy-test="burgerIcon"
            onClick={toggleMenu}
            className="p-2 text-3xl font-bold"
          >
            <Image src={Hamburger} alt="Open menu" width={20} height={20} />
          </div>
        )}
      </div>

      {/* MD and LG */}
      <div className="hidden md:flex flex-1 h-20 items-center justify-end w-full space-x-6 font-bold text-white">
        {MENU_ITENS.map((item, index) => (
          <div key={index} className="h-10 group">
            <Link cy-test={item.link} href={item.link}>
              {item.text}
            </Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nav;
