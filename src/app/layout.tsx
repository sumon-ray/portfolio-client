import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";
// import Navbar from "@/components/Navbar/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Front-End Developer",
  description:
    "Professional portfolio showcasing front-end development skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
        {/* <Navbar /> */}
        <main className=" text-white bg-[#171b39] ">{children}</main>
        {/* </ThemeProvider> */}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
// bg-gradient-to-b from-slate-950 to-slate-900
