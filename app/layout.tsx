import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kind Japanese - Japanese Lessons",
  description: "Connect with the world through your own Japanese lessons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
