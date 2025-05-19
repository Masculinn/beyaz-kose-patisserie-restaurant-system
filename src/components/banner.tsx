import { BannerProps } from "@/interfaces";
import { BANNER_TEXT, MOTTO_TEXT, STORE_NAME } from "@/lib";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FC } from "react";

const text = [STORE_NAME, MOTTO_TEXT, BANNER_TEXT];

export const Banner: FC<BannerProps> = ({ className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0;
        return state + 1;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 z-50 bg-primary/70 w-full h-12 ${className} backdrop-blur-sm shadow-sm`}
    >
      <AnimatePresence mode="wait">
        <motion.h3
          className="text-white text-shadow-md tracking-tight"
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
};
