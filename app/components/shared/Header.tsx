"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import Button from "./Button";

const navItems = [
  { id: "home", label: "トップ", href: "/" },
  { id: "instructors", label: "講師紹介", href: "/instructors" },
  { id: "pricing", label: "コース・料金", href: "/pricing" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurrentId = () => {
    if (pathname === "/") return "home";
    if (pathname === "/instructors") return "instructors";
    if (pathname === "/pricing") return "pricing";
    return "";
  };
  const currentPage = getCurrentId();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight cursor-pointer flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-gray-900">
            <Globe size={18} strokeWidth={2.5} />
          </div>
          <span>
            Nihongo<span className="text-accent">.</span>Pro
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-medium text-sm text-gray-600">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`hover:text-gray-900 transition-colors px-3 py-2 rounded-lg ${
                    currentPage === item.id ? "text-gray-900 bg-gray-50" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="dark" icon={<MessageCircle size={18} />} className="px-6 py-2.5 text-sm" href="#">
            LINE相談・予約
          </Button>
        </nav>

        <button
          className="md:hidden text-gray-900 p-2 bg-gray-50 rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-2 text-lg font-medium text-gray-600">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-xl ${
                    currentPage === item.id ? "bg-gray-50 text-gray-900" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Button
              variant="dark"
              icon={<MessageCircle size={20} />}
              className="w-full"
              href="#"
            >
              LINEで無料相談・予約
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
