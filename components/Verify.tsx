"use client";
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import React from "react";
import Button from "./Button";

const handleVerify = async (proof: ISuccessResult) => {
  const res = await fetch("/api/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(proof),
  });
  if (!res.ok) {
    throw new Error("It happens here");
  }
};

const onError = (error: any) => {
  console.error("Error occurred: ", error);
};

const onSuccess = (result: ISuccessResult) => {
  console.log("World ID popup closed: ", result);
  window.location.href = "/success"; // redirect them to the success page once done.
};

export default function Verify() {
  return (
    <IDKitWidget
      app_id="app_staging_7b3977fde4e8a5a48200d0917f45ed6b"
      action="test_id"
      // On-cloud supports Device and Orb
      verification_level={VerificationLevel.Device}
      handleVerify={handleVerify}
      onSuccess={onSuccess}
      onError={onError}
    >
      {({ open }) => <Button text="Launch Now" onClick={open} />}
    </IDKitWidget>
  );
}
