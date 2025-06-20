import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
// import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const local = localFont({
//   src: [
//     {
//       path: "../public/fonts/Satoshi-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Satoshi-LightItalic.woff2",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "../public/fonts/Satoshi-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Satoshi-Italic.woff2",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../public/fonts/Satoshi-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Satoshi-MediumItalic.woff2",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "../public/fonts/Satoshi-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Satoshi-BoldItalic.woff2",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "../public/fonts/Satoshi-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Satoshi-BlackItalic.woff2",
//       weight: "900",
//       style: "italic",
//     },
//   ],
//   variable: "--font-local",
// });

export const metadata: Metadata = {
  title: "Nathan Skibicki | Portfolio",
  description:
    "Information about me, work experience, projects, notes, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark selection:bg-gray-300 selection:text-black">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
