"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import { ICommunity } from "@/models/community.models";
import CommunityCard from "./CommunityCard";


const mockData: ICommunity[] = [
  {
    _id: 2,
    surveyTitle: "Pepsi Challenge",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogo-marque.com%2Fwp-content%2Fuploads%2F2020%2F09%2FPepsi-Embleme.jpg&f=1&nofb=1&ipt=7ac82c48ab54e33ecbdf21626183c7c8db05040616bd535df938081cfb9c17fc&ipo=images",
    description:
      "Hello, Pepsi is here to conduct a new research on customer's favourite products. Which one of our product do you prefer?",
    country: "USA",
    region: "Manhattan",
    options: ["Pepsi", "Pepsi No Sugar", "Pepsi New Product"],
  },
  {
    _id: 3,
    surveyTitle: "Sprite Refresh",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0959%2F7176%2Fproducts%2Fsprite-logo_1024x1024.jpg%3Fv%3D1454413466&f=1&nofb=1&ipt=a9cb7c23ef0086e33f8e6751636e1e87f75d389a75fd93b50c058c0a4ff09102&ipo=images",
    description: "short desc",
    country: "USA",
    region: "Los Angeles",
    options: ["Sprite", "7Up", "Mountain Dew"],
  },
  {
    _id: 4,
    surveyTitle: "Mountain Dew Adventure",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
    description:
      "Which one is your favourite Mountain Dew Flavours",
    country: "Australia",
    region: "Sydney",
    options: ["Mountain Dew", "Red Code", "Raspberry"],
  },
];

const CommunityPage = () => {
  const [counter, setCounter] = useState<number>(0);
  const [data, setData] = useState<ICommunity[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {};

  return (
    <div className="flex justify-center items-center w-screen h-fit flex-grow absolute top-0 left-0 z-10 pb-[160px]">
      <div className="flex flex-grow flex-col gap-5 justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-16 mt-20 p-20 px-[150px] h-full">
          {mockData.map((community) => (
            <CommunityCard key={community._id} community={community} />
          ))}
          {data.map((community) => (
            <CommunityCard key={community._id} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
