"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import LineIcon from "./LineIcon";
import {
  NAV_ITEMS,
  LINE_BUTTON_LABELS,
  LINE_BUTTON_LABELS_MOBILE,
  LANGUAGE_SELECTOR_LABEL,
  LOCALE_LABELS,
  getLocaleFromPathname,
  type Locale,
} from "@/app/constants/locale";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const locale: Locale = getLocaleFromPathname(pathname);
  const navItems = NAV_ITEMS[locale];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurrentId = () => {
    if (pathname === "/ja" || pathname === "/en") return "home";
    if (pathname.startsWith("/ja/instructors") || pathname.startsWith("/en/instructors")) return "instructors";
    if (pathname === "/ja/pricing" || pathname === "/en/pricing") return "pricing";
    if (pathname === "/ja/reviews" || pathname === "/en/reviews") return "reviews";
    if (pathname === "/ja/recruit" || pathname === "/en/recruit") return "recruit";
    if (pathname === "/ja/contact" || pathname === "/en/contact") return "contact";
    if (pathname === "/ja/legal" || pathname === "/en/legal") return "legal";
    return "";
  };
  const currentPage = getCurrentId();
  const homeHref = locale === "ja" ? "/ja" : "/en";

  const getLocaleHref = (targetLocale: Locale): string => {
    if (pathname.startsWith("/en")) {
      return targetLocale === "ja" ? pathname.replace("/en", "/ja") || "/ja" : pathname;
    }
    if (pathname.startsWith("/ja")) {
      return targetLocale === "en" ? pathname.replace("/ja", "/en") : pathname;
    }
    return targetLocale === "ja" ? "/ja" : "/en";
  };

  const LangDropdown = () => (
    <div className="relative z-[110]">
      <button
        type="button"
        onClick={() => setLangOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px]"
        aria-label={LANGUAGE_SELECTOR_LABEL[locale]}
        aria-expanded={langOpen}
        aria-haspopup="true"
      >
        <Globe size={18} className="text-gray-600 flex-shrink-0" aria-hidden="true" />
        <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
          {LANGUAGE_SELECTOR_LABEL[locale]}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-500 flex-shrink-0 transition-transform ${langOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {langOpen && (
        <>
          {/* Overlay to close on outside click */}
          <div
            className="fixed inset-0 z-[108]"
            onClick={() => setLangOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 py-1 bg-white border border-gray-200 rounded-lg min-w-[120px] overflow-hidden z-[109]">
            <a
              href={getLocaleHref("ja")}
              onClick={() => setLangOpen(false)}
              className={`block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${locale === "ja" ? "bg-gray-50 font-medium text-gray-900" : "text-gray-600"}`}
            >
              {LOCALE_LABELS.ja}
            </a>
            <a
              href={getLocaleHref("en")}
              onClick={() => setLangOpen(false)}
              className={`block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${locale === "en" ? "bg-gray-50 font-medium text-gray-900" : "text-gray-600"}`}
            >
              {LOCALE_LABELS.en}
            </a>
          </div>
        </>
      )}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href={homeHref}
          className="text-2xl font-bold tracking-tight cursor-pointer flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src="/images/IMG_3981.jpg"
              alt="Kind Japanese"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span>Kind Japanese</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-medium text-sm text-gray-600 whitespace-nowrap">
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
          <div className="flex items-center gap-3">
            <LangDropdown />
            <a
              href="https://line.me/R/ti/p/@203ctosj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
            >
              <LineIcon size={18} className="flex-shrink-0" />
              {LINE_BUTTON_LABELS[locale]}
            </a>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LangDropdown />
          <button
            className="text-gray-900 p-2 bg-gray-50 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-4">
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
            <a
              href="https://line.me/R/ti/p/@203ctosj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#06C755] text-white font-bold text-base rounded-full hover:bg-[#06C755]/90 transition-colors min-h-[48px]"
            >
              <LineIcon size={20} className="flex-shrink-0" />
              {LINE_BUTTON_LABELS_MOBILE[locale]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
