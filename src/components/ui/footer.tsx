"use client";

import DribbbleIcon from "@/icons/Dribbble";
import GithubIcon from "@/icons/Github";
import LinkedinIcon from "@/icons/LinkedIn";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "reablocks-docs-theme";

export const Footer = ({ forceDark = false }: { forceDark?: boolean }) => {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="container mt-12 px-4 py-6 text-base text-content-secondary md:mt-24 md:px-24 mx-auto">
      <div className="flex items-center justify-between gap-2">
        <Link href="#">
          <Image
            draggable={false}
            src={resolvedTheme === "light" && !forceDark ? "/logo-light.png" : "/logo.svg"}
            alt="logo"
            width={122}
            height={24}
          />
        </Link>
        <span className="hidden md:block"> Made with ❤️ by{" "}
          <Link
            className="text-primary underline"
            href="https://goodcode.us?utm_source=reagraph"
          >
          Good Code
        </Link>
      </span>
        <div className="flex gap-4">
          <Link
            aria-label="GoodCode's GitHub profile"
            href="https://github.com/reaviz"
          >
            <GithubIcon className="h-5 w-5 transition-colors hover:text-content-primary" />
          </Link>
          <Link
            aria-label="GoodCode's Linkedin profile"
            href="https://linkedin.com/company/goodcodeus/"
          >
            <LinkedinIcon className="h-5 w-5 transition-colors hover:text-content-primary" />
          </Link>
          <Link
            aria-label="GoodCode's Dribbble profile"
            href="https://dribbble.com/goodcode"
          >
            <DribbbleIcon className="h-5 w-5 transition-colors hover:text-content-primary" />
          </Link>
        </div>
      </div>
      <div className="block self-center pb-4 pt-10 text-center md:hidden">
        <span>
          Made with ❤️ by{" "}
          <Link
            className="text-secondary underline"
            href="https://goodcode.us"
          >
            GoodCode
          </Link>
        </span>
      </div>
    </footer>
  );
};