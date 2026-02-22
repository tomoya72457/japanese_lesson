import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nihongo.Pro - 日本語レッスン",
  description: "世界とつながる、あなただけの日本語レッスン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
