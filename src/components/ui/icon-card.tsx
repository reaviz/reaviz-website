import { cn } from "@/utils/cn";
import React, { FC } from "react";

export type IconCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const IconCard: FC<IconCardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-fit rounded-xl bg-[linear-gradient(180deg,rgba(201,201,214,0.05)0%,rgba(201,201,214,0.12)100%)] p-6 backdrop-blur",
      )}
    >
      {children}
    </div>
  );
};
