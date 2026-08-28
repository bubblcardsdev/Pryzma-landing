import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pryzma",
  description: "Customisable Loyalty Platform for Restaurants",
  icons: {
    icon: "/Images/plogo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className="h-[100dvh] overflow-hidden flex flex-col bg-[#FFFFFF]">
        
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

      </body>
    </html>
  );
}
