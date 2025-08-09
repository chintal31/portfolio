import type { AppProps } from "next/app";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import Head from "next/head";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${playfair.variable} ${notoSans.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
