import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "../components/layout/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillSwap",
  description: "Platform for exchanging skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            {children}
          </div>
          <footer style={{ textAlign: 'center', padding: '24px 0', background: '#f5f5f5', color: '#888' }}>
            SkillSwap ©{new Date().getFullYear()} demo project
          </footer>
        </div>
      </body>
    </html>
  );
}
