import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { twMerge } from 'tailwind-merge'

const dmSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Favvy Apparel",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")} >
        {children}
      </body>
    </html>
  );
}
