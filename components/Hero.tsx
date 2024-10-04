"use client"
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';
import { useState } from "react";

const Hero = () => {
  const [titleIsTyping, setTitleIsTyping] = useState(true);
  const [subtitleIsTyping, setSubtitleIsTyping] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-screen absolute top-0 left-0 z-10 transition-opacity duration-1000 ease-in-out">
      <div className="flex flex-col gap-5 justify-center items-center pb-[160px]">
      <div
        className="
        text-p4 font-geist-sans font-semibold text-6xl tracking-wide
        bg-clip-text text-transparent bg-gradient-to-r from-p4 to-p1/40
        "
      >
      {titleIsTyping && <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString('LOCALDAO')
          .callFunction(() => {
          setShowSubtitle(true);
          setTitleIsTyping(false);
          })
          .pause()
          .start();
        }}
        options={{
        cursor: '|'
        }}
      />}

      {!titleIsTyping && <p>LOCALDAO</p>}
      </div>

      <div className="text-p5 font-geist-mono text-2xl tracking-wide">
      {showSubtitle && subtitleIsTyping &&
      <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString('Providing Valuable Information from the Local Community')
          .callFunction(() => {
        setSubtitleIsTyping(false);
        console.log(subtitleIsTyping)
          })
          .pause()
          .changeDelay(20) // Adjust the speed here (lower value = faster typing)
          .start();
        }}
        options={{
        cursor: '|'
        }}
      />}

      {!subtitleIsTyping && <p>Providing Valuable Information from the Local Community</p>}

      </div>
      </div>
      {!subtitleIsTyping && <div className="absolute bottom-[20%] flex flex-col justify-center items-center gap-3 transition-opacity duration-1000 ease-in-out">
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
      </div>}
    </div>
  );
};

export default Hero;
