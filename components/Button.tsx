import React from "react";

import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
// 1. import the extension you want to use
import { transfer } from "thirdweb/extensions/erc20";
import { client } from "@/constants";

type buttonProps = {
  text?: string;
  onClick?: () => void;
};

const USDC = getContract({
  client,
  address: "0x5c9Bd57011D394e2dFA8F9B7b669C8c0F263531F",
  chain: sepolia,
});

const Button = ({ text, onClick }: buttonProps) => {
  //////////////////////////////////////////////////////////////////////////
  // for testing only
  const { mutate: sendTransaction, isPending } = useSendTransaction();

  const onHandleClick = () => {
    // 4. execute the transaction (send 15 USDC to the target address)
    const transaction = transfer({
      contract: USDC,
      amount: 15,
      to: "",
    });
    sendTransaction(transaction);
  };
  //////////////////////////////////////////////////////////////////////////

  // return <button onClick={onClick}>{text}</button>;
  return <button onClick={onHandleClick}>{text}</button>;
};

export default Button;
