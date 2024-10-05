"use client";

import Image from "next/image";
import React, { useState } from "react";
import Verify from "@/components/Verify";

const page = () => {
  const [hasLoggedIn, setHasLoggedIn] = useState<boolean>(false);
  return (
    <>
      <div className="community-background z-[-1] absolute top-0 w-full h-screen left-0" />
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="box-big bg-darkBlue bg-opacity-50">
          <div className="flex justify-center items-center h-full w-full gap-8 mx-5">
            {hasLoggedIn ? (
              <div className="flex justify-center items-start gap-8">
                <Image
                  src="/kfc_cat.jpg"
                  alt="profile picture"
                  height={350}
                  width={350}
                  className="rounded-2xl"
                />
                <div className="flex flex-col gap-8 font-geist-mono">
                  <h1 className="text-5xl text-p4">User Profile</h1>
                  <div className="flex flex-col gap-1">
                    <span className="text-p5 text-sm">User :</span>
                    <span className="text-p4 text-lg truncate">
                      0x1a8Nj4k7u0l32GyOvca7zB65SdA89TaGA7tV
                    </span>
                    <span className="text-p5 text-sm mt-2">Location :</span>
                    <span className="text-p4 text-lg">Selangor, Malaysia</span>
                    <span className="text-p5 text-sm mt-2">Activity :</span>
                    <span className="text-p4 text-lg">
                      108 Surveys Completed
                    </span>
                    <span className="text-p5 text-sm mt-2">ETH Earned :</span>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/eth-logo.png"
                        alt="ETH"
                        width={24}
                        height={24}
                      />
                      <span className="text-p4 text-lg">
                        0.0382591607 (USD$92.72)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-12">
                <h1 className="text-7xl text-p5 font-geist-mono font-semibold">
                  User Not Found
                </h1>
                <Verify
                  hasLoggedIn={hasLoggedIn}
                  setHasLoggedIn={setHasLoggedIn}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
