import './globals.css'

import type { Metadata } from "next";
import { Instrument_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "Solo Leveling System - SLS",
  description: "ARISE",
};

const instrumentSans = Instrument_Sans({
  weight: ['400','500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-instrumentSans'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable}`}>
      <body className=" bg-[url(/background.png)] bg-cover bg-no-repeat bg-center text-white antialiased">
        <main className=" max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  );
}
