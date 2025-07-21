"use client";

import LogoIcon from "@/assets/logo.svg";

import { Navbar } from "reablocks-docs-theme";

export const Nav = () => (
  <Navbar
    className="font-inter"
    logo={
      <div className="flex items-center gap-2">
        <LogoIcon className="h-fit w-[105px] text-[var(--foreground)]" />
      </div>
    }
    projectLink="https://github.com/reaviz/reaviz"
  />
);
