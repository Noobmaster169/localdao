import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="background z-[-1] absolute top-0 w-full h-full left-0" />
      <Hero />
    </>
  );
}