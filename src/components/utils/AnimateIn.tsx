import { useViewportDimensions } from "@/hooks/useViewportDimensions";
import { Transition, UseInViewOptions, motion, useInView } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

export type AnimateInProps = {
  children?: ReactNode;
  options?: UseInViewOptions;
  transition?: Transition;
  className?: string;
};

export const AnimateIn: FC<AnimateInProps> = ({
  children,
  options,
  transition,
  className,
}) => {
  const ref = useRef(null);
  const { width } = useViewportDimensions();
  const isInView = useInView(ref, {
    margin: width > 1024 ? "-400px" : "-100px",
    once: true,
    ...options,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
