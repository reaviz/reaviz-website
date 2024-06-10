import { Nav } from "@/components/layout/nav";
import { Card } from "@/components/ui/card";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { IconCard } from "@/components/ui/icon-card";
import { SignatureDivider } from "@/components/ui/signature-divider";
import { TracingBeams } from "@/components/ui/tracing-beams";
import { AnimateIn } from "@/components/utils/AnimateIn";
import BatteryIcon from "@/icons/Battery";
import DribbbleIcon from "@/icons/Dribbble";
import GithubIcon from "@/icons/Github";
import KnowledgeIcon from "@/icons/Knowledge";
import LinkedinIcon from "@/icons/LinkedIn";
import SnapIcon from "@/icons/Snap";
import SwordsIcon from "@/icons/Swords";
import WaveIcon from "@/icons/Wave";
import WrenchIcon from "@/icons/Wrench";
import { cn } from "@/utils/cn";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reaviz - Data visualization library for React",
  description: "22+ Data Visualization Components for ReactJS",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          content={"22+ Data Visualization Components for ReactJS"}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main
        className={`flex min-h-screen w-full flex-col items-center overflow-y-hidden bg-gradient-to-b from-[#11111F] from-50% via-[#11111F] to-[#121212] ${inter.className} antiasliased overflow-x-hidden text-white`}
      >
        <div className="pointer-events-none absolute top-0 h-screen w-full bg-gradient-to-b from-[#00000020] to-transparent" />
        <header
          className={cn(
            `fixed top-0 z-50 flex w-full justify-center border-b border-[#9091A0] border-opacity-15 bg-[#11111F] transition-[backdrop-filter] md:bg-transparent`,
            isScrolled && "md:backdrop-blur-md",
          )}
        >
          <Nav />
        </header>
        <TracingBeams className="hidden md:block">
          <HeroParallax className="hidden md:block">
            <section className="container mt-40 flex flex-col px-4 md:items-center md:px-24">
              <div className="mb-4 flex flex-col gap-4 md:mb-20 md:items-center md:text-center">
                <a href="https://github.com/reaviz/reaviz" target="_blank">
                  <img
                    alt="GitHub stars"
                    src="https://img.shields.io/github/stars/reaviz/reaviz?style=social"
                  />
                </a>
                <h3 className="text-content text-4xl font-bold !leading-[150%] md:text-[60px] md:!leading-[120%]">
                  Enterprise ready <br />
                  <span className="md:text-[90px]">
                    Open-Source Data{" "}
                    <span className="md:bg-opacity-50 md:bg-gradient-to-b md:from-white md:to-neutral-400 md:bg-clip-text md:text-transparent">
                      Visualizations
                    </span>
                  </span>
                </h3>
                <p className="text-base text-content-secondary md:hidden">
                  Our collection of 22+ enterprise-grade, open-source data
                  visualization components for React provide the building blocks
                  you need to bring your data to life.
                </p>
                <div className="mb-24 flex items-center gap-4 md:hidden">
                  <Link className="flex-1" href="/docs">
                    <button className="w-full min-w-[125px] whitespace-nowrap rounded-md border border-primary bg-[#16161E] px-4 py-2 font-semibold text-content-primary shadow-button transition-colors hover:brightness-110">
                      Get Started
                    </button>
                  </Link>
                  <Link className="flex-1" href="https://storybook.reaviz.dev">
                    <button className="w-full min-w-[125px] whitespace-nowrap rounded-md bg-primary px-4 py-2 font-semibold text-content-primary shadow-button transition-colors hover:brightness-110">
                      Demos →
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </HeroParallax>
          <section className="container px-4 md:px-24">
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <AnimateIn>
                <Card>
                  <IconCard>
                    <WrenchIcon />
                  </IconCard>
                  <span className="text-xl font-semibold">
                    Highly Customizable
                  </span>
                  <span>
                    Built on D3 for high customization and flexibility
                  </span>
                </Card>
              </AnimateIn>
              <AnimateIn transition={{ delay: 0.05 }}>
                <Card>
                  <IconCard>
                    <WaveIcon />
                  </IconCard>
                  <span className="text-xl font-semibold">
                    Seamless Animations
                  </span>
                  <span>
                    Reaviz uses Framer Motion for smooth animations and
                    transitions.
                  </span>
                </Card>
              </AnimateIn>
              <AnimateIn transition={{ delay: 0.1 }}>
                <Card>
                  <IconCard>
                    <SnapIcon />
                  </IconCard>
                  <span className="text-xl font-semibold">Easy to Use</span>
                  <span>
                    Intuitive API for easy and quick creation of beautiful
                    charts with minimal code.
                  </span>
                </Card>
              </AnimateIn>
              <AnimateIn>
                <Card>
                  <IconCard>
                    <BatteryIcon />
                  </IconCard>
                  <span className="text-xl font-semibold">
                    Batteries-Included
                  </span>
                  <span>
                    Reaviz is pre-configured for great-looking charts from day
                    one.
                  </span>
                </Card>
              </AnimateIn>
              <AnimateIn transition={{ delay: 0.05 }}>
                <Card>
                  <IconCard>
                    <SwordsIcon />
                  </IconCard>
                  <span className="text-xl font-semibold">Battle-Tested</span>
                  <span>
                    Used in production across dozens of enterprise products.
                  </span>
                </Card>
              </AnimateIn>
              <AnimateIn transition={{ delay: 0.1 }}>
                <Card>
                  <IconCard>
                    <KnowledgeIcon />
                  </IconCard>
                  <span className="text-xl font-semibold">Open Source</span>
                  <span>
                    Free to use, and available for both personal and commercial
                    projects.
                  </span>
                </Card>
              </AnimateIn>
            </div>
          </section>
          <SignatureDivider className="w-full py-12 md:w-3/4" />
          <section className="container px-4 md:px-24">
            <div className="flex flex-col items-center gap-12 py-4 md:flex-row md:gap-4 md:py-24">
              <div className="z-10 flex flex-1 flex-col gap-8">
                <span className="text-4xl font-semibold md:text-6xl">
                  Real Code, Not Wrappers
                </span>
                <span className="text-content-secondary md:text-xl">
                  Reaviz is built with real code, not wrappers around existing
                  libraries. Everything from the select box to the radial charts
                  are all part of the Reaviz portfolio.
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex flex-1 flex-col gap-2 font-semibold">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        <path
                          d="M7.66644 4.50012C5.64111 4.50012 3.99978 6.14146 3.99978 8.16679V17.5001C3.99978 19.5255 5.64111 21.1668 7.66644 21.1668H11.3331V24.8335C11.3331 26.8466 12.9866 28.5001 14.9998 28.5001H24.3331C26.3463 28.5001 27.9998 26.8466 27.9998 24.8335V15.5001C27.9998 13.4869 26.3463 11.8335 24.3331 11.8335H20.6664V8.16679C20.6664 6.14146 19.0251 4.50012 16.9998 4.50012H7.66644ZM20.6664 13.8335H24.3331C25.2653 13.8335 25.9998 14.568 25.9998 15.5001V24.8335C25.9998 25.7656 25.2653 26.5001 24.3331 26.5001H14.9998C14.0676 26.5001 13.3331 25.7656 13.3331 24.8335V21.1668H16.9998C19.0251 21.1668 20.6664 19.5255 20.6664 17.5001V13.8335ZM4.31749 23.1525C4.0525 23.1566 3.79998 23.2658 3.61541 23.4559C3.43084 23.6461 3.32931 23.9018 3.33311 24.1668V25.5001C3.33311 27.5133 4.98659 29.1668 6.99978 29.1668H7.33311V29.7215C7.33311 30.0361 7.52291 30.3202 7.81358 30.4402C7.90958 30.4802 8.01045 30.5001 8.11045 30.5001C8.31312 30.5001 8.51193 30.4216 8.65993 30.2723L10.2159 28.7163C10.5199 28.4123 10.5199 27.9206 10.2159 27.6173L8.65993 26.0613C8.43793 25.8387 8.10491 25.772 7.81358 25.8934C7.52291 26.014 7.33311 26.2974 7.33311 26.6121V27.1668H6.99978C6.06763 27.1668 5.33311 26.4323 5.33311 25.5001V24.1668C5.33503 24.0329 5.31006 23.9001 5.25969 23.7761C5.20931 23.652 5.13455 23.5394 5.03984 23.4448C4.94512 23.3502 4.83239 23.2756 4.70831 23.2254C4.58423 23.1752 4.45133 23.1504 4.31749 23.1525Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-2xl md:text-4xl">
                        22<span className="text-primary">+</span>
                      </span>
                    </div>
                    <span className="md:text-xl">Charts</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 font-semibold">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        <path
                          d="M9.33301 8.50012C9.29429 8.50005 9.25559 8.50222 9.21712 8.50663C4.8643 8.56963 1.33301 12.1328 1.33301 16.5001C1.33301 20.8688 4.86637 24.434 9.22103 24.4949C9.25823 24.4987 9.29561 24.5005 9.33301 24.5001H22.6663C27.0728 24.5001 30.6663 20.9066 30.6663 16.5001C30.6663 12.0937 27.0728 8.50012 22.6663 8.50012H9.33301ZM9.33301 10.5001C12.6586 10.5001 15.333 13.1746 15.333 16.5001C15.333 19.8257 12.6586 22.5001 9.33301 22.5001C6.00745 22.5001 3.33301 19.8257 3.33301 16.5001C3.33301 13.1746 6.00745 10.5001 9.33301 10.5001ZM14.6025 10.5001H22.6663C25.9919 10.5001 28.6663 13.1746 28.6663 16.5001C28.6663 19.8257 25.9919 22.5001 22.6663 22.5001H14.6025C16.2713 21.0322 17.333 18.8886 17.333 16.5001C17.333 14.1117 16.2713 11.9681 14.6025 10.5001Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-2xl md:text-4xl">
                        50<span className="text-primary">+</span>
                      </span>
                    </div>
                    <span className="md:text-xl">Blocks</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="/docs">
                    <button className="bg-primary px-8 py-4 transition-all hover:brightness-125">
                      Get started
                    </button>
                  </Link>
                  <Link href="/docs/charts/area-chart">
                    <button className="border border-primary bg-transparent px-8 py-4 transition-all hover:brightness-125">
                      Preview
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative flex h-full min-h-[500px] max-w-[90vw] flex-1 items-center justify-center gap-4">
                <AnimateIn className="relative -bottom-20 left-0 z-10 min-w-[250px]">
                  <Image
                    src="/heatmap-block-small.png"
                    alt="Heatmap Block"
                    width={235}
                    height={350}
                    objectFit="contain"
                    className="rounded-xl shadow-card"
                  />
                </AnimateIn>
                <AnimateIn
                  className="relative -top-20 left-0 z-10 min-w-[250px]"
                  transition={{ delay: 0.05 }}
                >
                  <Image
                    src="/barchart-block-small.png"
                    alt="Bar Chart Block"
                    width={235}
                    height={350}
                    objectFit="contain"
                    className="rounded-xl shadow-card"
                  />
                </AnimateIn>
                <AnimateIn className="max-w-3/4 absolute z-0 h-[400px] w-[300px] rounded-full bg-[#2310FF] bg-opacity-50 blur-3xl backdrop-blur-3xl md:h-[600px] md:w-[500px]" />
              </div>
            </div>
          </section>
          <SignatureDivider className="relative z-10 w-full py-12 md:w-3/4" />
          <section className="container px-4 md:px-24">
            <div className="flex flex-col items-center gap-12 py-4 md:flex-row md:gap-4 md:py-24">
              <div className="relative flex h-full min-h-[400px] flex-1 items-center justify-center">
                <AnimateIn className="z-10 h-[446px] w-[375px] max-w-[90vw] shadow-card">
                  <Image
                    src="/barchart-block-medium.png"
                    alt="Bar Chart Block"
                    width={375}
                    height={446}
                    objectFit="contain"
                    className="rounded-2xl"
                  />
                </AnimateIn>
                <AnimateIn className="max-w-3/4 absolute z-0 h-[400px] w-[300px] rounded-full bg-[#105EFF] bg-opacity-50 blur-3xl backdrop-blur-3xl md:h-[600px] md:w-[700px]" />
              </div>
              <div className="z-10 flex flex-1 flex-col gap-8">
                <span className="text-4xl font-semibold md:text-6xl">
                  Highly flexible, enabling you to create custom charts.
                </span>
                <span className="text-content-secondary md:text-xl">
                  Almost all of the chart types allow you to pass JSX elements
                  in the props; this allows you to customize every aspect of
                  each element. Additionally, you can mix charts and their child
                  components together to make combination charts.
                </span>
                <div className="flex items-center gap-2">
                  <Link href="/docs">
                    <button className="bg-primary px-8 py-4 transition-all hover:brightness-125">
                      Get started
                    </button>
                  </Link>
                  <Link href="/docs/charts/area-chart">
                    <button className="border border-primary bg-transparent px-8 py-4 transition-all hover:brightness-125">
                      Preview
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <SignatureDivider className="w-full py-12 md:w-3/4" />
          <section className="container px-4 md:px-24">
            <div className="flex flex-col gap-8 py-4 md:py-24">
              <div className="flex flex-col">
                <span className="font-semibold text-primary md:text-xl">
                  Why Reaviz?
                </span>
                <span className="text-4xl font-semibold md:text-6xl">
                  Minimize time spent on tasks
                </span>
              </div>
              <div className="flex flex-col gap-x-4 gap-y-8 md:flex-row">
                <div className="flex flex-1 flex-col gap-2 md:text-xl">
                  <span className="font-semibold md:text-xl">
                    Accelerate your workflow and delivery
                  </span>
                  <p className="text-pretty text-content-secondary">
                    Creating and upkeeping a strong set of UI components demands
                    significant time and effort, often in repetitive work. Using
                    Reaviz components streamlines your process and cuts costs,
                    helping you deliver a superior product more efficiently.
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-2 md:text-xl">
                  <span className="font-semibold md:text-xl">
                    Zero In on Your Project
                  </span>
                  <p className="text-pretty text-content-secondary">
                    Developing reliable UI components is no easy feat. Dealing
                    with accessibility nuances and complex logic can impede
                    product feature progress. Reaviz enables you to focus on
                    your own engineering obstacles.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <footer className="container mt-12 px-4 py-6 text-base text-content-secondary md:mt-24 md:px-24">
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
