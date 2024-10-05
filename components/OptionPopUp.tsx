import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import { useState } from "react";
import Image from 'next/image';
import { Input } from './ui/input';

type OptionPopUpProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: Array<string>,
  setOptions: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const OptionPopUp = ({isOpen, setIsOpen, options, setOptions}: OptionPopUpProps) => {

  const [newOption, setNewOption] = useState("")

  const handleClick = () => {
    setOptions([...options, newOption])
    setIsOpen(false)
  }

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "auto",
      maxWidth: '1200px',
      minWidth: '400px',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#000000",
      borderRadius: "10px",
      padding: "0px",
      border: "3px solid #40A4FF",
      boxShadow: '0 0 30px #40A4FF'
    },
  };

  return (
    <div className="gap-4 flex-col flex p-6">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
      <div className="
      flex flex-col flex-grow h-full w-full transform transition hover:shadow-lg"
      >
        {/* Text */}
        <div className="flex flex-col p-4 gap-4 items-center justify-center">
          <h1 className="text-xl font-semibold line-clamp-1 text-primary">Add New Option</h1>
          <Input 
            placeholder="New Option"
            onChange={(e) => {
              setNewOption(e.target.value)
            }}
          />
          <button
          className="font-semibold p-2 rounded-2xl flex items-center justify-center w-1/2 text-lg text-white bg-[#40A4FF] drop-shadow-xl hover:bg-opacity-100"
          onClick={handleClick}
          >
            Add Option
          </button>
        </div>
      </div>
      </Modal>
    </div>
  );
};

export default OptionPopUp;