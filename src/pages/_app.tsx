import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { primaryFont, brandFont } from "@/lib/fonts";
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${primaryFont.className} ${brandFont.variable}`}>
      <Component {...pageProps} />
    </Layout>
  );
}
