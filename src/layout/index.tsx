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
        `}
      >
        {children}
      </main>
    </>
  );
}
