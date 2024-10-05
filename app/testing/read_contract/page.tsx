"use client";
import { getContract, createThirdwebClient, readContract } from 'thirdweb';
import ABI from './abi.json'
import { defineChain } from 'thirdweb';

export const myChain = defineChain({
    id: 534351,
    rpc: "https://534351.rpc.thirdweb.com",
});

export const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});

const anyABI :any = ABI
export const contract = getContract({
    client,
    chain: myChain,
    address: process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS as string,
    abi: anyABI
})

export default function Contract(){
    console.log(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID)
    console.log("Contract Address:", process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS)

    /** Reading Contract */
    const getVotingIDs = async () => {
        alert("Calling")
        console.log("Getting Voting IDs")
        const votingIds = await readContract({
            contract: contract,
            method: 'function getVotingIds() public view returns (uint256[])',
            params: []
        })
        alert(votingIds)
        return votingIds;
    };

    const getVotingInfo = async (id: bigint) => {
        const votingInfo = await readContract({
            contract: contract,
            method: 'function getVoting(uint256 id) public view returns (uint256, address, string, string, string[])',
            params: [id],
        })
        return votingInfo;
    };

    const getFeedbackInfo = async (id: bigint) => {
        const feedbackInfo = await readContract({
            contract: contract,
            method: 'function getFeedbacks(uint256 id) public view returns (uint256, uint256, string)',
            params: [id],
        })
        return feedbackInfo;
    };

    return(
    <div className="pt-32">
        <button onClick={getVotingIDs}>Get Voting IDs</button>
        {/* <button onClick={getVotingInfo(BigInt("20373937516785195204438676153292408865360980958912105255762314586451729719499"))}>Get Voting Info</button> */}
    </div>
    )
}

