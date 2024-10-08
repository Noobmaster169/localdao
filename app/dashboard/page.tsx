"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Verify from "@/components/Verify";
import UploadJSONForm from "@/components/UploadJSONForm";
import { createWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";

const client: any = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});

const page = () => {
  const [hasLoggedIn, setHasLoggedIn] = useState<boolean>(true);
  const [hasUploaded, setHasUploaded] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const account = useActiveAccount();
  console.log("Account from useActiveAccount():", account);

  return (
    <>
      <div className="community-background z-[-1] absolute top-0 w-full h-screen left-0" />
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div
          className={`${
            hasLoggedIn && !hasUploaded ? "box-big" : "box-big"
          } bg-darkBlue bg-opacity-50`}
        >
          <div className="flex justify-center items-center h-full w-full gap-8 mx-5">
            {hasUploaded ? (
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
                      {account?.address}
                    </span>
                    <span className="text-p5 text-sm mt-2">Location :</span>
                    <span className="text-p4 text-lg">
                      {region && region.concat(", ")} {country}
                    </span>
                    <span className="text-p5 text-sm mt-2">Activity :</span>
                    <span className="text-p4 text-lg">0 Surveys Completed</span>
                    <span className="text-p5 text-sm mt-2">ETH Earned :</span>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/eth-logo.png"
                        alt="ETH"
                        width={24}
                        height={24}
                      />
                      <span className="text-p4 text-lg">0.00 (USD$0.00)</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : hasLoggedIn ? (
              <div className="mt-5 flex flex-col justify-center items-center">
                <p className="text-4xl mt-6 font-semibold text-p6 text-center pt-6 font-geist-mono">
                  Intialize New User
                </p>

                <UploadJSONForm
                  hasUploaded={hasUploaded}
                  setHasUploaded={setHasUploaded}
                  country={country}
                  setCountry={setCountry}
                  region={region}
                  setRegion={setRegion}
                />
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-12">
                <h1 className="text-6xl text-p5 font-geist-mono font-semibold">
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
