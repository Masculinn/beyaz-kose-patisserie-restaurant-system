// layout.tsx
import Head from "next/head";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Splash from "@/components/splash";
import Footer from "@/components/footer";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Beyaz Köşe Patisserie</title>
      </Head>
      <AnimatePresence>{showSplash && <Splash key="splash" />}</AnimatePresence>
      <main
        className={`
            px-4 sm:px-6 md:px-8
            max-w-screen-sm mx-auto
            ${className}
            relative
            min-h-screen
            bg-cover
            bg-gradient-to-br from-[#b1f7f7]/40 via-[#D7DFDF]/10 to-[#9AB1AF]
          `}
      >
        {children}
        <Footer />
      </main>
    </>
  );
}
