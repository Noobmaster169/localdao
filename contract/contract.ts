import { getContract, createThirdwebClient, readContract } from 'thirdweb';
import { scrollSepoliaTestnet } from 'thirdweb/chains';
export { getVotingIDs, getVotingInfo, getFeedbackInfo, createVotingTask, voteForTask };


const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});

const contract = getContract({
    client,
    chain: scrollSepoliaTestnet,
    address: process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS as string,
    abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"string[]","name":"_options","type":"string[]"}],"name":"createVoting","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeedbacks","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"option","type":"uint256"},{"internalType":"string","name":"feedbackUri","type":"string"}],"internalType":"struct Dummy.Feedback[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getVoting","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"string[]","name":"options","type":"string[]"}],"internalType":"struct Dummy.Voting","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotingIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initializer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_option","type":"uint256"},{"internalType":"string","name":"_feedbackUri","type":"string"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votingIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
})

/** Reading Contract */
const getVotingIDs = async () => {
    const votingIds = await readContract({
        contract: contract,
        method: 'getVotingIds',
    })
    return votingIds;
};

const getVotingInfo = async (id: bigint) => {
    const votingInfo = await readContract({
        contract: contract,
        method: 'getVoting',
        params: [id],
    })
    return votingInfo;
};

const getFeedbackInfo = async (id: bigint) => {
    const feedbackInfo = await readContract({
        contract: contract,
        method: 'getFeedbacks',
        params: [id],
    })
    return feedbackInfo;
};

/** Writing -> Contract */
const createVotingTask = async (name: string, uri: string, options: string[]) => {
    const createdVoteTask = await readContract({
        contract: contract,
        method: 'createVoting',
        params: [name, uri, options],
    })
    return createdVoteTask;
};

const voteForTask = async (id: bigint, option: bigint, feedbackUri: string) => {
    const votedTask = await readContract({
        contract: contract,
        method: 'vote',
        params: [id, option, feedbackUri],
    })
    return votedTask;
};