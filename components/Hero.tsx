"use client"
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import Button from "./Button";
import Verify from "./Verify";

{/* <div className="flex flex-col gap-5 justify-center items-center pb-[160px]">
        <h1
          className="
          text-p4 font-geist-sans font-semibold text-hella-large tracking-wider
            bg-clip-text text-transparent bg-gradient-to-r from-p4 to-[#7b809d]
          "
        >
          LOCALDAO
        </h1>
        <p className="text-p5 font-geist-mono font-bold text-2xl tracking-wide -mt-8">
          Providing <span className="text-p6">Valuable Information</span> from
          the Local Community
        </p>
        <div className="mt-8">
          <Verify />
          {/* <Button text="Launch App" /> */}
        </div>
      </div> */}

const Hero = () => {
  const [titleIsTyping, setTitleIsTyping] = useState(true);
  const [subtitleIsTyping, setSubtitleIsTyping] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-screen absolute top-0 left-0 z-10">
      <div className="flex flex-col gap-5 justify-center items-center pb-[160px]">
        <h1
          className="
          text-p4 font-geist-sans font-semibold text-hella-large tracking-wider w-fit
            bg-clip-text text-transparent bg-gradient-to-r from-p4 to-[#7b809d]
          "
        >
          LOCALDAO
        </h1>
        <p className="text-p5 font-geist-mono font-bold text-2xl tracking-wide -mt-8">
          Providing <span className="text-p6">Valuable Information</span> from
          the Local Community
        </p>
        <div className="mt-8">
          <Button text="Launch App" />
        </div>
      </div>
      <div className="absolute bottom-[10%] flex flex-col justify-center items-center gap-5 
      ">
        <p className="font-geist-mono text-p4 font-semibold text-xl">
          Powered By
        </p>
        <div className="flex justify-center items-center px-6 rounded-2xl gap-4">
          <Image
        src="/scroll-lighttext.png"
        alt="scroll"
        width={100}
        height={100}
          />
          <Image
        src="/worldcoin-lighttext.png"
        alt="worldcoin"
        width={150}
        height={150}
          />
          <Image
        src="/thegraph-lighttext.png"
        alt="thegraph"
        width={130}
        height={130}
          />
          <Image
        src="/tlsnotary-lighttext.png"
        alt="tlsnotary"
        width={130}
        height={130}
        className="ml-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
