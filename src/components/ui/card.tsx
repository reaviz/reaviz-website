import { cn } from "@/utils/cn";
import React, { FC } from "react";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-3xl bg-[rgba(9,9,25,0.30)] p-[30px]",
        className,
      )}
    >
      {children}
    </div>
  );
};
