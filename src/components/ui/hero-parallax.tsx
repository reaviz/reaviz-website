"use client";
import { cn } from "@/utils/cn";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export type HeroParallaxProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeroParallax = ({ children, className }: HeroParallaxProps) => {
  const ref = React.useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-15% start", "end start"],
  });

  const springConfig = {
    bounce: 0.1,
    damping: 100,
    stiffness: 1000,
    duration: 0.1,
  };

  const rotateXOuter = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [35, 0]),
    springConfig,
  );

  const translateYOuter = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-265, 0]),
    springConfig,
  );

  const translateZOuter = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [100, 0]),
    springConfig,
  );

  const rotateXInner = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [35, 0]),
    springConfig,
  );

  const translateYInner = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-282, -50]),
    springConfig,
  );

  const translateZInner = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [200, 50]),
    springConfig,
  );

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <div
        className={cn(
          "h-[800px] max-w-[100vw] pt-40 md:max-w-[1440px]",
          className,
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imagesLoaded === 3 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full items-center justify-center self-auto antialiased [perspective:1000px] [transform-style:preserve-3d]"
        >
          <motion.div
            style={{
              rotateX: rotateXOuter,
              translateZ: translateZOuter,
              translateY: translateYOuter,
            }}
          >
            <Image
              alt="Heatmap Chart"
              className="max-h-[30vw] max-w-[30vw] shadow-hero-chart"
              height={500}
              width={500}
              objectFit="cover"
              src={"/hero-chart1.png"}
              draggable={false}
              onLoad={() => {
                setImagesLoaded((prev) => prev + 1);
              }}
            />
          </motion.div>
          <motion.div
            style={{
              rotateX: rotateXInner,
              translateY: translateYInner,
              translateZ: translateZInner,
            }}
            className="z-50 -ml-12 -mr-12"
          >
            <Image
              alt="Area Chart"
              className="max-h-[30vw] max-w-[30vw] shadow-hero-chart"
              height={500}
              width={500}
              objectFit="cover"
              src={"/hero-chart2.png"}
              draggable={false}
              onLoad={() => {
                setImagesLoaded((prev) => prev + 1);
              }}
            />
          </motion.div>
          <motion.div
            style={{
              rotateX: rotateXOuter,
              translateY: translateYOuter,
              translateZ: translateZOuter,
            }}
          >
            <Image
              alt="Area Interpolated Chart"
              className="max-h-[30vw] max-w-[30vw] shadow-hero-chart"
              height={500}
              width={500}
              objectFit="cover"
              src={"/hero-chart3.png"}
              draggable={false}
              onLoad={() => {
                setImagesLoaded((prev) => prev + 1);
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
