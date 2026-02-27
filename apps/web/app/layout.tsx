// main layout file to import and
// initialize site-wide parameters
"use client";

//import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavButton from "@/components/NavButton";
import { useState } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geist_mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Quack",
//   description: "Gust - take your notes at your own speed",
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [selected, setSelected] = useState("review");

  function showPermanent() {}

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geist_mono.variable} antialiased`}
      >
        <nav className="flex content-center items-center w-full h-12 border-b-[1]">
          <NavButton
            isSelected={selected === "review"}
            onClick={() => {
              setSelected("review");
            }}
          >
            Review
          </NavButton>
          <NavButton
            isSelected={selected === "permanent"}
            onClick={() => {
              setSelected("permanent");
              showPermanent;
            }}
          >
            Permanent
          </NavButton>
          <NavButton isSelected={selected === "login"} className="ml-auto">
            Login
          </NavButton>
        </nav>
        {children}
      </body>
    </html>
  );
}
