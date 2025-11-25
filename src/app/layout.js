import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Our Best Services",
  description: "Ma Construction Maintenance - Top Services in World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

        <link rel="icon" href="https://i.ibb.co.com/8gbbcBb8/logo.png" sizes="any" />
      </Head>
      <body
        className={` bg-amber-50 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
