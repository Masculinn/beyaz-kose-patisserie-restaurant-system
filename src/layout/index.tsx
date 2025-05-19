import Head from "next/head";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Beyaz Köşe Patisserie</title>
      </Head>
      <main
        className={`
          px-4 sm:px-6 md:px-8 
          max-w-screen-sm mx-auto 
          ${className} 
          relative
          min-h-screen
          bg-cover
          bg-gradient-to-br from-[#b1f7f7]/40 via-[#D7DFDF]/10  to-[#9AB1AF]
          
        `}
      >
        {children}
      </main>
    </>
  );
}
