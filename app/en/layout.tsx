import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nihongo.Pro - Japanese Lessons",
  description: "Connect with the world through your own Japanese lessons",
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
