import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StacksAnalizer",
  description: "AI powered wallet analyzer on Stacks",
  other: {
    "talentapp:project_verification": "d66a865c9bb7213e13ff7e9153e9ee8800bc09f1acea9ecea21eea36e79ae844d49b31c026606d65a5db73c606b09ab1080b8488145628811dad59c53051f14c"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
