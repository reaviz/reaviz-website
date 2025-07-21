"use client";
import LogoIcon from "@/assets/logo.svg";
import { useTheme, Footer as NextraFooter, LandingFooter } from "reablocks-docs-theme";

export const Footer = () => (
  <NextraFooter className="flex w-full justify-center py-4">
    <LandingFooter
      logo={<LogoIcon className="h-fit w-[150px] text-[var(--foreground)]" />}
      className="py-6 text-base"
      libName="reaviz"
    />
  </NextraFooter>
);