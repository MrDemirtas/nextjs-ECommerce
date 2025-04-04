// TSX -> TS + HTML
// JSX => JS + HTML

import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Footer from "./components/Footer";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "ECommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Sıfır bir nextjs projesi açıp 2 sayfalık kendinizi tanıtan bir websitesi geliştiriniz.
// 1- Ana sayfa
// 2- Projelerim sayfası

// API Çağrıları (Frontend)
// Dinamik Yapılar
// CSR - SSR
