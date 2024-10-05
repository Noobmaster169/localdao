"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect} from "react";
import Button from "./Button";
import { ICommunity } from "@/models/community.models";
import CommunityCard from "./CommunityCard";
import { getContract, createThirdwebClient, readContract, Chain } from 'thirdweb';
import ABI from '@/contract/localDAO/abi.json';
import { scrollSepolia } from 'viem/chains';

const client: any = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});
const scrollSepoliaChain = {
  ...scrollSepolia,
  rpc: scrollSepolia.rpcUrls.default.http[0],
  blockExplorers: [
    {
      name: scrollSepolia.blockExplorers.default.name,
      url: scrollSepolia.blockExplorers.default.url,
      apiUrl: scrollSepolia.blockExplorers.default.apiUrl,
    },
  ],
}
const contract :any = getContract({
  client,
  chain: scrollSepoliaChain,
  address: "0x39683204f4822A75A3264a9e6583e9105fAD3fAc",
  abi: ABI as any
})


const CommunityPage = () => {
  const [counter, setCounter] = useState<number>(0);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const counter = await readContract({
      contract: contract,
      method: 'function getCounter() public view returns (uint256)',
      params: []
    })
    alert(counter);
    return counter;
  };

  const mockData: ICommunity[] = [
    {
      _id: 2,
      title: "Pepsi Challenge",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogo-marque.com%2Fwp-content%2Fuploads%2F2020%2F09%2FPepsi-Embleme.jpg&f=1&nofb=1&ipt=7ac82c48ab54e33ecbdf21626183c7c8db05040616bd535df938081cfb9c17fc&ipo=images",
      description:
        "Pepsi Challenge lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc long long long long long long long long long long long long long",
      location: "New York",
    },
    {
      _id: 3,
      title: "Sprite Refresh",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0959%2F7176%2Fproducts%2Fsprite-logo_1024x1024.jpg%3Fv%3D1454413466&f=1&nofb=1&ipt=a9cb7c23ef0086e33f8e6751636e1e87f75d389a75fd93b50c058c0a4ff09102&ipo=images",
      description: "short desc",
      location: "Los Angeles",
    },
    {
      _id: 4,
      title: "Fanta Fun",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F05%2FFanta-Symbol.jpg&f=1&nofb=1&ipt=63323531e8cca8457bd7a4a557f33a1e444f135b2b92e838301372081ff4bb2f&ipo=images",
      description:
        "Fanta Fun lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "London",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description:
        "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    },
  ];

  return (
    <div className="flex justify-center items-center w-screen h-fit flex-grow absolute top-0 left-0 z-10 pb-[160px]">
      <div className="flex flex-grow flex-col gap-5 justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-16 mt-20 p-20 px-[150px] h-full">
          {mockData.map((community) => (
            <CommunityCard key={community._id} community={community} />
          ))}
        </div>
        <button onClick={getCounter}>Get Counter</button>
      </div>
    </div>
  );
};

export default CommunityPage;