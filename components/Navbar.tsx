"use client";
import dynamic from 'next/dynamic'; 
import Link from "next/link";
import { links } from "@/constants/nav-links";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export default function NavBar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-screen py-10 transition-all duration-500 
        ${
          hasScrolled
            ? "pt-2 pb-3 bg-black bg-opacity-50 backdrop-blur-[8px]"
            : "bg-clear"
        }`}
    >
      <div className="container flex h-14 items-center ">
        <div className="w-screen sidebar-before">
          <nav className="w-full p-4 fixed top-0 left-0 right-0 z-50 flex justify-center">
            <div className="w-full mx-4 flex justify-between items-center">
              <div className="flex items-center nav-logo">
                <h1 className="hidden md:block font-semibold text-3xl tracking-wider font-geist-sans">
                  LOCALDAO
                </h1>
                <div className="opacity-0 pointer-events-none">
                  <WalletMultiButtonDynamic style={{background:"#345a5f"}} />
                  {/*<w3m-button/>*/}
                </div>
              </div>
              <div className="gap-12 hidden md:flex center nav-li">
                <PCNavLinks />
              </div>
              <div className="flex items-center nav-logo">
                <h1 className="hidden md:block text-semibold text-3xl tracking-wider opacity-0 pointer-events-none">
                  LOCAL DAO
                </h1>
                <div>
                  <WalletMultiButtonDynamic style={{background:"#345a5f"}} />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function PCNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-p1 font-semibold text-lg uppercase"
                : "font-semibold text-lg uppercase"
            } transition-colors hover:text-p1 duration-500`}
          >
            <h2>{link.name}</h2>
          </Link>
        );
      })}
    </>
  );
}
