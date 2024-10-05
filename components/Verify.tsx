"use client";

import { VerificationLevel, IDKitWidget, useIDKit } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import Button from "./Button";

export default function Home() {
  const app_id = process.env
    .NEXT_PUBLIC_WORLDCOIN_IDKIT_APP_ID as `app_${string}`;
  const action = process.env.NEXT_PUBLIC_WORLDCOIN_IDKIT_ACTION_ID;

  if (!app_id) {
    throw new Error("app_id is not set in environment variables!");
  }
  if (!action) {
    throw new Error("action is not set in environment variables!");
  }

  const { setOpen } = useIDKit();

  const onSuccess = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
    window.alert("Successfully verified with World ID! Logging in...");
    window.location.href = "/"; // Redirect the user to the success page once they have been verified.
  };

  const handleProof = async (result: ISuccessResult) => {
    // console.log(
    //   "Proof received from IDKit, sending to backend:\n",
    //   JSON.stringify(result)
    // ); // Log the proof from IDKit to the console for visibility
    // const data = await verify(result);
    // if (data.success) {
    //   console.log("Successful response from backend:\n", JSON.stringify(data)); // Log the response from our backend for visibility
    // } else {
    //   throw new Error(`Verification failed: ${data.detail}`);
    // }
    console.log(
      "Proof received from IDKit, sending to backend:\n",
      JSON.stringify(result)
    );
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });
    console.log("Result from POST request:", res);
    if (!res.ok) {
      throw new Error(`HTTP error. status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Verification response:", data);
    console.log("data.success:", data.success);

    if (data.success) {
      console.log("Successful response from backend:\n", JSON.stringify(data)); // Log the response from our backend for visibility
    } else {
      throw new Error(`Verification failed: ${data.detail}`);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center align-middle">
        <IDKitWidget
          action={action}
          app_id={app_id}
          onSuccess={onSuccess}
          handleVerify={handleProof}
          verification_level={VerificationLevel.Device} // Change this to VerificationLevel.Device to accept Orb- and Device-verified users
        />
        <Button text="Verify with World ID" onClick={() => setOpen(true)} />
      </div>
    </div>
  );
}
