import Image from "next/image";
import CommunityCard from "@/components/CommunityCard";
import { title } from "process";
import { ICommunity } from "@/models/community.models";
import Hero from "@/components/Hero";
import CommunityPage from "@/components/CommunityPage";

export default function Home() {
  // bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#123c78] via-[#000812]  to-[#0c2c58]

  return (
    <>
      <div className="community-background z-[-1] absolute top-0 w-full h-screen left-0" />
      <CommunityPage />
    </>
  );
}
