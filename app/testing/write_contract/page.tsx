"use client";
import { sendAndConfirmTransaction } from "thirdweb";
import { Account, createWallet } from "thirdweb/wallets";
import { client } from "@/constants";
import { prepare_create_vote, prepare_vote } from "./helper";
import { useEffect, useState } from "react";
 
export default function WriteContract() {
    const [account, setAccount] = useState<Account | null>(null);

    useEffect(() => {
        const connectWallet = async () => {
            const wallet = createWallet("io.metamask");
            const connectedAccount = await wallet.connect({ client });
            setAccount(connectedAccount);
        };
        connectWallet();
    }, []);

    const createVote = async () => {
        if (!account) {
            console.error("Account not connected");
            return;
        }
        await sendAndConfirmTransaction({
            transaction: prepare_create_vote,
            account,
        });
        console.log("Vote created");
    };

    const castVote = async () => {
        if (!account) {
            console.error("Account not connected");
            return;
        }
        await sendAndConfirmTransaction({
            transaction: prepare_vote,
            account,
        });
        console.log("Vote casted");
    }

    return (
        <div className="pt-32">
            <button onClick={createVote} disabled={!account}>Create Vote</button>
            <button onClick={castVote} disabled={!account}>Cast Vote</button>
        </div>
    );
}