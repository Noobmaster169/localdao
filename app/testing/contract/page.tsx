"use client";
import { getContract, createThirdwebClient, readContract } from 'thirdweb';
import { scrollSepoliaTestnet } from 'thirdweb/chains';
import ABI from './abi.json'


export default function Contract(){
    console.log(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID)
    console.log("Contract Address:", process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS)

    const client = createThirdwebClient({
        clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
    });

    const anyABI :any = ABI
    const contract = getContract({
        client,
        chain: scrollSepoliaTestnet,
        address: process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS as string,
        abi: anyABI
    })

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

    // const getVotingInfo = async (id: bigint) => {
    //     const votingInfo = await readContract({
    //         contract: contract,
    //         method: 'getVoting',
    //         params: [id],
    //     })
    //     return votingInfo;
    // };

    // const getFeedbackInfo = async (id: bigint) => {
    //     const feedbackInfo = await readContract({
    //         contract: contract,
    //         method: 'getFeedbacks',
    //         params: [id],
    //     })
    //     return feedbackInfo;
    // };

    return(
    <div className="pt-32">
        <button onClick={getVotingIDs}>Get Voting IDs</button>
    </div>
    )
}

/** Writing -> Contract */
// const createVotingTask = async (name: string, uri: string, options: string[]) => {
//     const createdVoteTask = await readContract({
//         contract: contract,
//         method: 'createVoting',
//         params: [name, uri, options],
//     })
//     return createdVoteTask;
// };

// const voteForTask = async (id: bigint, option: bigint, feedbackUri: string) => {
//     const votedTask = await readContract({
//         contract: contract,
//         method: 'vote',
//         params: [id, option, feedbackUri],
//     })
//     return votedTask;
// };

