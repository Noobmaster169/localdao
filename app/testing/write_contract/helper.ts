import { prepareContractCall, toWei } from "thirdweb";
import { contract } from "../read_contract/page";


export const prepare_create_vote = prepareContractCall({
    contract: contract,
    // Pass the method signature that you want to call
    method: "function createVoting(string _name, string _uri, string[] _options) public returns (uint256)",
    // and the params for that method
    // Their types are automatically inferred based on the method signature
    params: ["Coca-cola New Flavour", "https://cocacola.com", ['Weed', 'Matcha', 'Grass', 'Rose']],
  });

export const prepare_vote = prepareContractCall({
    contract: contract,
    // Pass the method signature that you want to call
    method: "function vote(uint256 _id, uint256 _option, string _feedbackUri) public",
    // and the params for that method
    // Their types are automatically inferred based on the method signature
    params: [BigInt(2), BigInt(0), "https://cocacola.com"],
  });

