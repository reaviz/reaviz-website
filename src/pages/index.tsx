import { motion } from "framer-motion";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav } from "@/components/layout/nav";
import { TracingBeams } from "@/components/ui/tracing-beams";
import { useViewportDimensions } from "@/hooks/useViewportDimensions";
import DribbbleIcon from "@/icons/Dribbble";
import GithubIcon from "@/icons/Github";
import LinkedinIcon from "@/icons/LinkedIn";
import SparklesIcon from "@/icons/Sparkles";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reaviz - Data visualization library for React",
  description:
    "22+ Data Visualization Components for ReactJS",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { width } = useViewportDimensions();

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
    <>
      <Head>
        <title>reaviz - Data visualization library for React</title>
        <meta
          name="description"
          content={
            "22+ Data Visualization Components for ReactJS"
          }
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main
        className={`flex min-h-screen w-full flex-col items-center overflow-y-hidden bg-gradient-to-b from-[#11111F] from-50% via-[#11111F] to-[#121212] ${inter.className} antiasliased overflow-x-hidden text-white`}
      >
        <div className="absolute pointer-events-none top-0 h-screen w-full bg-gradient-to-b from-[#00000020] to-transparent" />
        <header
          className={cn(
            `fixed top-0 z-50 flex w-full justify-center border-b border-[#9091A0] border-opacity-15 bg-[#11111F] transition-[backdrop-filter] md:bg-transparent`,
            isScrolled && "md:backdrop-blur-md",
          )}
        >
          <Nav />
        </header>
        <TracingBeams className="hidden md:block">
          <section className="container mt-40 px-4 md:px-24">
            <div className="mb-4 flex flex-col items-start gap-4 md:mb-20 md:max-w-[50%]">
              <a href="https://github.com/reaviz/reaviz" target="_blank">
                <img
                  alt="GitHub stars"
                  src="https://img.shields.io/github/stars/reaviz/reaviz?style=social"
                />
              </a>
              <h3 className="text-content text-4xl font-bold !leading-[150%] md:text-6xl md:!leading-[120%]">
                Enterprise ready{" "}
                <span className="text-secondary">Open-Source</span> Data Visualizations
              </h3>
              <p className="mt-4 text-base text-content-secondary md:text-lg">
                Our collection of 22+ enterprise-grade, open-source data visualization components for React
                provide the building blocks you need to bring your data to life.
              </p>
            </div>
          </section>
          <footer className="container px-4 py-6 text-base text-content-secondary md:px-24">
            <div className="flex items-center justify-between gap-2">
              <Link href="#">
                <Image
                  draggable={false}
                  src="/logo.svg"
                  alt="logo"
                  width={122}
                  height={24}
                />
              </Link>
              <span className="hidden md:block">
                Made with ❤️ by{" "}
                <Link
                  className="text-secondary underline"
                  href="https://goodcode.us"
                >
                  GoodCode
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
        </TracingBeams>
      </main>
    </>
  );
}
