import Image from "next/image";

import CREATIONS from "@/components/Creations";

export default function Home() {
  return (
    <section className="w-full -my-32">
      {/* Hero */}
      <div className="w-full h-[650px] relative">
        <Image
          src="/imgs/desktop/image-hero.jpg"
          alt="background desktop"
          fill
          // style={{
          //   objectFit: "contain",
          // }}
          className="hidden md:block"
        />
        <Image
          src="/imgs/mobile/image-hero.jpg"
          alt="background mobile"
          fill
          // style={{
          //   objectFit: "contain",
          // }}
          className="aspect-auto md:hidden"
        />
        <div className="w-[90%] ml-6 md:w-1/2 mt-32 mb-32 p-4 font-josefile text-4xl text-white uppercase border-2 md:ml-20 md:p-10 md:m-32 md:mx-0 md:text-6xl absolute top-24 left-0 font-light leading-none">
          Impressive Experiences That Deliver
        </div>
      </div>

      {/* Feature */}
      <div className="md:mb-60">
        <div className="relative  flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0 z-20">
          <Image
            src="/imgs/desktop/image-interactive.jpg"
            alt=""
            width={730}
            height={500}
          />

          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left font-light">
              The leader in interactive VR
            </h2>

            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>

      {/* Creations */}
      <CREATIONS />
    </section>
  );
}
