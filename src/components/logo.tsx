import { LogoProps } from "@/interfaces";
import { STORE_NAME } from "@/lib";
import Image from "next/image";
import { FC } from "react";

export const Logo: FC<LogoProps> = ({
  className,
  isAnimated = false,
  height = 50,
  width = 50,
}) => {
  return (
    <Image
      src="/logo.png"
      height={height}
      width={width}
      priority
      loading="eager"
      alt={`${STORE_NAME} logo`}
      className={`rounded-full ${isAnimated && "animate-bounce"} ${className}`}
    />
  );
};
