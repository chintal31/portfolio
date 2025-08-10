import type { AppProps } from "next/app";
import { Playfair_Display, Noto_Sans, Open_Sans, Pavanam } from "next/font/google";
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

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const pavanam = Pavanam({
  variable: "--font-pavanam",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${playfair.variable} ${notoSans.variable} ${openSans.variable} ${pavanam.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
