import React from "react";
import Modal from "react-modal";
import { Styles } from "react-modal";
import { useState } from "react";
import Image from "next/image";
import { ICommunity } from "@/models/community.models";

type CommunityFocusedViewProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  community: ICommunity;
};

const CommunityFocusedView = ({
  community,
  isOpen,
  setIsOpen,
}: CommunityFocusedViewProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width: "auto",
      maxWidth: "1600px",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#FFFFFF",
      border: "3px solid #2EF2FF",
      borderRadius: "10px", // Add this line for rounded border
      padding: "0px",
      boxShadow: "0 0 20px 5px #40A4FF",
      zIndex: 1001,
    },
  };

  // border-[#40A4FF] border-[3px] shadow-[0_0_20px_#40A4FF]

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
        <div className="flex flex-grow h-full w-[100vh] transform transition hover:shadow-lg p-16 bg-[#050915]">
          {/* Image */}
          <Image
            src={community.imageUrl}
            alt="coverImage"
            width={250}
            height={250}
            className="h-[250px] w-[250px] object-cover"
          />
          {/* Text */}
          <div className="flex flex-col pb-4 px-8 gap-1 font-geist-mono">
            <h1 className="text-2xl font-semibold text-p4">
              {community.title}
            </h1>
            <p className="text-md font-semibold text-p5">
              Location: <span className="text-p4">{community.location}</span>
            </p>
            <p className="text-md pt-2 text-primary text-p5">
              {community.description}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CommunityFocusedView;
