import React from "react";
import Modal from "react-modal";
import { Styles } from "react-modal";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ICommunity } from "@/models/community.models";
import { IoMdClose } from "react-icons/io";
import OptionTag from "./OptionTag";
import Button from "./Button";
import { CgSpinner } from "react-icons/cg";
import BarPercentage from "./BarPercentange";

type CommunityReviewProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  community: ICommunity;
};

const CommunityReview = ({
  community,
  isOpen,
  setIsOpen,
}: CommunityReviewProps) => {
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
      minWidth: "1200px",
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

  return (
    <div className="gap-2 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
        <div className="flex flex-col gap-4 h-full w-full justify-center items-center bg-[#050915] p-4 pb-8">
          <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
            <h1 className="text-2xl font-semibold text-[#40A4ff]">
              Voting Result
            </h1>
            {community.options.map((option, index) => {
              return (
                <BarPercentage
                  barPercentage={100 / community.options.length}
                  option={option}
                  key={index}
                />
              );
            })}
            <h1 className="pt-4 text-2xl font-semibold text-[#40A4ff]">Demographic</h1>
          </div>
          <div className="w-full h-full flex justify-between gap-2">
            <div className="w-1/2 h-full">
              <div className="flex w-full h-full items-center justify-center">
                <h1 className="p-4 text-lg font-semibold text-p4">Age</h1>
              </div>
              <div className="flex flex-col h-full items-center justify-center gap-4">
                <BarPercentage barPercentage={40} option={"1-18"} />
                <BarPercentage barPercentage={30} option={"18-30"} />
                <BarPercentage barPercentage={15} option={"30-50"} />
                <BarPercentage barPercentage={10} option={"50-70"} />
                <BarPercentage barPercentage={5} option={">70"} />
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col">
              <div className="flex w-full justify-center">
              <h1 className="p-4 text-lg font-semibold text-p4">Gender</h1>
              </div>
              <div className="flex flex-col h-full items-center justify-center gap-4">
              <BarPercentage barPercentage={35} option={"Male"} />
              <BarPercentage barPercentage={45} option={"Female"} />
              <BarPercentage barPercentage={20} option={"Unspecified"} />
              </div>
            </div>
          </div>
          <button
              type="button"
              className="items-center justify-center px-6 py-3 bg-gradient-to-tl from-[#ba3030] to-[#df1b1b]
              text-background rounded-lg glow-button font-semibold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
        </div>
      </Modal>
    </div>
  );
};

export default CommunityReview;
