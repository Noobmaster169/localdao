import React from "react";

type buttonProps = {
  text?: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="font-geist-mono bg-gradient-to-r from-p6 to-p7 font-semibold tracking-wide rounded-lg text-lg text-black px-6 py-3 font-semibold"
    >
      {text}
    </button>
  );
};

export default Button;
