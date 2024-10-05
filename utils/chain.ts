import { getContract, createThirdwebClient, readContract, Chain } from 'thirdweb';
import { defineChain } from 'thirdweb';

export const scrollSepolia: Chain = defineChain({
    id: 534351,
    rpc: "https://scroll-sepolia.g.alchemy.com/v2/oeNnUfr7Hd7_6FP8bkciJLc4LhVh1HSO",
});