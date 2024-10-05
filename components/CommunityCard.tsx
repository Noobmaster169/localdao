"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { ICommunity } from "@/models/community.models";
import CommunityFocusedView from "./CommunityFocusedView";

type communityCardProps = {
  community: ICommunity;
};

const CommunityCard = ({ community }: communityCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        className="
          flex flex-col box w-full h-full items-center justify-center bg-opacity-50 bg-darkBlue
          hover:cursor-pointer transform transition duration-300  pb-4 z-15"
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-clear w-full flex flex-col items-center justify-center">
          <Image
            src={community.imageUrl}
            alt="coverImage"
            width={250}
            height={250}
            className="h-[250px] w-[250px] object-cover object-center z-5 p-8 rounded-lg opacity-80"
          />
          <div className="flex flex-col items-center justify-center px-2">
            <h1 className="text-2xl font-semibold line-clamp-1 -mt-2 font-geist-mono pb-1 text-center text-p4 z-10">
              {community.surveyTitle}
            </h1>
          </div>
        </div>
      </div>
      <CommunityFocusedView
        community={community}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default CommunityCard;
