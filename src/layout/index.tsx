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
      <main className={className}>{children}</main>
    </>
  );
}
