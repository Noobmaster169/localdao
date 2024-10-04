import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import { useState } from "react";
import Image from 'next/image';
import { ICommunity } from '@/models/community.models';

type CommunityFocusedViewProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  community: ICommunity;
}

const CommunityFocusedView = ({community, isOpen, setIsOpen}: CommunityFocusedViewProps) => {

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1000,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "auto",
      maxWidth: '1200px',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#FFFFFF",
      border: "3px solid #40A4FF",
      borderRadius: "10px", // Add this line for rounded border
      padding: "0px",
      boxShadow: '0 0 20px 5px #40A4FF',
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
      <div className="flex flex-col flex-grow h-full w-full transform transition hover:shadow-lg justify-between">
        {/* Image */}
        <div className="overflow-hidden max-h-[80vh] min-w-[50vh]">
            <Image
            src={community.imageUrl}
            alt="coverImage"
            width={450}
            height={225}
            className="w-full object-contain"
            />
        </div>
        {/* Text */}
        <div className="flex flex-col p-4 bg-black gap-1">
          <h1 className="text-2xl font-semibold line-clamp-1">{community.title}</h1>
          <p className="text-xl font-semibold line-clamp-3">Location: {community.location}</p>
          <p className="text-md line-clamp-1 pt-2 text-primary">{community.description}</p>
        </div>
      </div>
      </Modal>
    </div>
  );
};

export default CommunityFocusedView;