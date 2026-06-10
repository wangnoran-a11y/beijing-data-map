import type { Metadata } from "next";
import "./globals.css";

import LoginGate from "@/components/LoginGate";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "北京数据地图",
  description: "北京数据集团数据地图平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full bg-[#F7F8FA] font-sans">
        <LoginGate>
          <Header />

          <main>{children}</main>
        </LoginGate>
      </body>
    </html>
  );
}