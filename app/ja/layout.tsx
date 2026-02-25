import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nihongo.Pro - 日本語レッスン",
  description: "世界とつながる、あなただけの日本語レッスン",
};

export default function JaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
