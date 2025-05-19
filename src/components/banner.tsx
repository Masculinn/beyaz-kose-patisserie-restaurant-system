import { BannerProps } from "@/interfaces";
import { FC } from "react";

export const Banner: FC<BannerProps> = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 z-50 bg-primary/70 w-full h-12 ${className} backdrop-blur-md shadow-xs`}
    >
      {children}
    </div>
  );
};
