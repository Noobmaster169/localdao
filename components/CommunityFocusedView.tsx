import React from "react";
import Modal from "react-modal";
import { Styles } from "react-modal";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ICommunity } from "@/models/community.models";
import { IoMdClose } from "react-icons/io";
import OptionTag from "./OptionTag";
import Button from "./Button";

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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
        <div className="flex flex-col gap-4 h-full w-full justify-center items-center bg-[#050915]">
          <div className="flex flex-grow h-fit w-[100vh] transform transition hover:shadow-lg p-16 pb-8">
            {/* Image */}
            <Image
              src={community.imageUrl}
              alt="coverImage"
              width={250}
              height={250}
              className="h-[250px] w-[250px] object-cover"
            />
            {/* Text */}
            <div className="flex flex-col pb-4 px-8 gap-1 font-geist-mono w-full h-full">
              <h1 className="text-2xl font-semibold text-p4">
                {community.surveyTitle}
              </h1>
              <p className="text-md font-semibold text-p5">
                Location:{" "}
                <span className="text-p4">
                  {community.region}, {community.country}
                </span>
              </p>
              <p className="text-md pt-2 text-primary text-p5">
                {community.description}
              </p>
              <div className="w-full h-full grid grid-cols-2 py-4 gap-4">
                {community.options.map((option, index) => (
                  <OptionTag
                    key={index}
                    option={option}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pb-16">
            <Button text="Send Transaction" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CommunityFocusedView;
