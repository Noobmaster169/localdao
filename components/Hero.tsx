"use client";

import Image from "next/image";
import React from "react";
import Verify from "./Verify";
import { useRouter } from "next/navigation";
import Button from "./Button";

const Hero = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen absolute top-0 left-0 z-10">
      <div className="flex flex-col gap-5 justify-center items-center pb-[100px]">
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
          {/* <Verify /> */}
          <Button text="Launch App" onClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

export default Hero;