"use server";

import { VerificationLevel } from "@worldcoin/idkit-core";
import { verifyCloudProof } from "@worldcoin/idkit-core/backend";
import { NextRequest, NextResponse } from "next/server";

export type VerifyReply = {
  success: boolean;
  code?: string;
  attribute?: string | null;
  detail?: string;
};

interface IVerifyRequest {
  proof: {
    nullifier_hash: string;
    merkle_root: string;
    proof: string;
    verification_level: VerificationLevel;
  };
  signal?: string;
}

const app_id = process.env
  .NEXT_PUBLIC_WORLDCOIN_IDKIT_APP_ID as `app_${string}`;
const action = process.env.NEXT_PUBLIC_WORLDCOIN_IDKIT_ACTION_ID as string;

async function verify(
  proof: IVerifyRequest["proof"],
  signal?: string
): Promise<VerifyReply> {
  const verifyRes = await verifyCloudProof(proof, app_id, action, signal);
  if (verifyRes.success) {
    return { success: true };
  } else {
    return {
      success: false,
      code: verifyRes.code,
      attribute: verifyRes.attribute,
      detail: verifyRes.detail,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const result = await request.json();
    const verifyRes = await verify(result);
    return NextResponse.json(verifyRes);
  } catch (error) {
    console.error("Error in POST /api/verify:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
