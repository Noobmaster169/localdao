import { type IVerifyResponse, verifyCloudProof } from "@worldcoin/idkit";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const proof = req.body;
  const app_id = process.env.APP_ID as `app_${string}`;
  const action_id = process.env.ACTION_ID;

  if (!app_id || !action_id) {
    res
      .status(400)
      .send({ success: false, message: "Missing app_id or action_id" });
    return;
  }

  const verifyRes = (await verifyCloudProof(
    proof,
    app_id,
    action_id
  )) as IVerifyResponse;

  if (verifyRes.success) {
    res.status(200).send(verifyRes);
  } else {
    res.status(400).send(verifyRes);
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const proof = req.body;
  const app_id = process.env.APP_ID as `app_${string}`;
  const action_id = process.env.ACTION_ID;

  if (!app_id || !action_id) {
    res
      .status(400)
      .send({ success: false, message: "Missing app_id or action_id" });
    return;
  }

  const verifyRes = (await verifyCloudProof(
    proof,
    app_id,
    action_id
  )) as IVerifyResponse;

  if (verifyRes.success) {
    res.status(200).send(verifyRes);
  } else {
    res.status(400).send(verifyRes);
  }
}
