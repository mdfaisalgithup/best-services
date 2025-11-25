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
  title: "Ma Construction Maintenance Ltd",
  description: "Your Trusted Building & Property Maintenance Partner in New Zealand",
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
