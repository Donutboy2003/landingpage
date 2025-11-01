import FooterSimple from "@/components/simple";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { COLOR_PALETTE } from "@/interfaces/color_palette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuk",
  description: "Your Everyday Ride, Shared.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background antialiased`}
        style={{
          backgroundColor: COLOR_PALETTE.WHITE,
          color: COLOR_PALETTE.BLUE,
        }}
      >
        {}
        {children}
        <div className="grow"></div>
        <FooterSimple />
      </body>
    </html>
  );
}
