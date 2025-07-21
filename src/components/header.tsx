"use client";

import { Nav } from "./nav";
import { cn } from "@/utils/cn";
import { FC, useEffect, useState } from "react";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledCheck = window.scrollY > 80;
      setIsScrolled(isScrolledCheck);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        `fixed top-0 z-50 flex w-full justify-center border-b border-[#9091a026] bg-[#11111F] transition-[backdrop-filter] md:bg-transparent`,
        isScrolled && "md:backdrop-blur-md",
      )}
    >
      <Nav />
    </header>
  )
}