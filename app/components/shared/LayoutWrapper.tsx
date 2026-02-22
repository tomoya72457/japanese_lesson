import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-primary selection:text-gray-900">
      <Header />
      <main className="pt-24 pb-20">{children}</main>
      <Footer />
    </div>
  );
}
