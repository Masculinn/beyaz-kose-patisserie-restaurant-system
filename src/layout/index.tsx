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
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Beyaz Köşe Patisserie</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Tatlılarımızda yaza özel %20 ye varan indirim sizlerle! Manisanin kalbinde sizlere gülümsemenin en beyaz halini tatlılarımızla yaşatıyoruz."
        />
        <meta property="og:title" content="Beyaz Köşe Patisserie" />
        <meta
          property="og:description"
          content="Tatlılarımızda yaza özel %20'ye varan indirim sizlerle! Manisanin kalbinde sizlere gülümsemenin en beyaz halini tatlılarımızla yaşatıyoruz.
          "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://beyazkosepatisserie.netlify.app/"
        />
        <meta
          property="og:image"
          content="http://beyazkosepatisserie.netlify.app/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
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
