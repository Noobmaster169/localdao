import { ICommunity } from "@/models/community.models";
import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";

type BarPercentangeProps = {
  barPercentage: number;
  option: string;
};

const BarPercentage = ({ barPercentage, option }: BarPercentangeProps) => {
  return (
    <div className="w-2/3 flex">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-2">
          <div className="flex w-1/3 h-full gap-2">
            <p className="font-bold text-lg">{option}</p>
          </div>
          <div className="flex flex-row gap-3 w-full items-center">
            <div className="bg-[#4c4c4f] bg-opacity-20 rounded-lg h-[30px] p-1 relative w-full border border-[#4c4c4f] border-opacity-20 border-3">
              <span className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                {barPercentage.toFixed(2)}%
              </span>
              <div
                className="bg-gradient-to-r from-[#f5ff45] to-[#26e400] h-full rounded-md"
                style={{ width: `${barPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarPercentage;
