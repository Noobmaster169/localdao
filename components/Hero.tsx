import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen absolute top-0 left-0 z-10">
      <div className="flex flex-col gap-5 justify-center items-center pb-[160px]">
        <h1
          className="
          text-p4 font-geist-sans font-semibold text-6xl tracking-wide
            bg-clip-text text-transparent bg-gradient-to-r from-p4 to-p1/40
          "
        >
          LOCALDAO
        </h1>
        <p className="text-p5 font-geist-mono text-2xl tracking-wide">
          Providing Valuable Information from the Local Community
        </p>
      </div>
      <div className="absolute bottom-[20%] flex flex-col justify-center items-center gap-3">
        <p className="font-geist-mono text-p4 font-semibold text-xl">
          Powered By
        </p>
        <div className="flex justify-center items-center px-3 bg-p4 rounded-xl gap-4 bg-opacity-50 glowing-border">
          <Image
            src="https://framerusercontent.com/images/VkDWRpObJDOFgaJ1JQQ5YTM.png"
            alt="scroll"
            width={100}
            height={100}
          />
          <Image
            src="https://framerusercontent.com/images/nKgNpbqpV3J3dJJShj4It2aopo.png"
            alt="worldcoin"
            width={200}
            height={200}
          />
          <Image
            src="https://framerusercontent.com/images/GjHgeSyedg4lNC23CI9o6nbS7U.png"
            alt="thegraph"
            width={130}
            height={130}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
