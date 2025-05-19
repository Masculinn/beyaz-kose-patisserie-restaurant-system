import { FC } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import { SplashProps } from "@/interfaces";
import { Logo } from "./logo";
import { brandFont } from "@/lib/fonts";
import { MOTTO_TEXT, STORE_NAME } from "@/lib";

const Splash: FC<SplashProps> = ({ onAnimationComplete }) => {
  return (
    <AnimatePresence>
      <m.div
        className="
          fixed inset-0
          flex flex-col justify-center items-center
          bg-white z-50
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        onAnimationComplete={onAnimationComplete}
      >
        <m.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col items-center justify-center ${brandFont.className}`}
        >
          <Logo height={125} width={125} />
          <m.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`text-4xl tracking-tighter font-extralight mt-4`}
          >
            {STORE_NAME}
          </m.h1>
          <m.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-md tracking-tighter mt-2"
          >
            {MOTTO_TEXT}
          </m.p>
        </m.div>
      </m.div>
    </AnimatePresence>
  );
};

export default Splash;
