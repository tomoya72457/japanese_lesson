"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Globe, ChevronDown } from "lucide-react";
import Button from "./Button";
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
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale: Locale = getLocaleFromPathname(pathname);
  const navItems = NAV_ITEMS[locale];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLangDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const getCurrentId = () => {
    if (pathname === "/ja" || pathname === "/en") return "home";
    if (pathname === "/ja/instructors" || pathname === "/en/instructors") return "instructors";
    if (pathname === "/ja/pricing" || pathname === "/en/pricing") return "pricing";
    if (pathname === "/ja/recruit" || pathname === "/en/recruit") return "recruit";
    if (pathname === "/ja/legal" || pathname === "/en/legal") return "legal";
    return "";
  };
  const currentPage = getCurrentId();

  const homeHref = locale === "ja" ? "/ja" : "/en";

  const getLocaleHref = (targetLocale: Locale) => {
    if (pathname.startsWith("/en")) {
      return targetLocale === "ja" ? pathname.replace("/en", "/ja") || "/ja" : pathname;
    }
    return targetLocale === "en" ? pathname.replace("/ja", "/en") : pathname;
  };

  const LanguageSelector = () => (
    <div className="relative" ref={langDropdownRef}>
      <button
        type="button"
        onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] md:min-h-[44px]"
        aria-label={LANGUAGE_SELECTOR_LABEL[locale]}
        aria-expanded={isLangDropdownOpen}
        aria-haspopup="true"
      >
        <Globe size={18} className="text-gray-600 flex-shrink-0" />
        <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
          {LANGUAGE_SELECTOR_LABEL[locale]}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-500 flex-shrink-0 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isLangDropdownOpen && (
        <div className="absolute right-0 top-full mt-1 py-1 bg-white border border-gray-200 rounded-lg min-w-[120px] overflow-hidden">
          <Link
            href={getLocaleHref("ja")}
            onClick={() => setIsLangDropdownOpen(false)}
            className={`block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${locale === "ja" ? "bg-gray-50 font-medium text-gray-900" : "text-gray-600"}`}
          >
            {LOCALE_LABELS.ja}
          </Link>
          <Link
            href={getLocaleHref("en")}
            onClick={() => setIsLangDropdownOpen(false)}
            className={`block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${locale === "en" ? "bg-gray-50 font-medium text-gray-900" : "text-gray-600"}`}
          >
            {LOCALE_LABELS.en}
          </Link>
        </div>
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
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-gray-900">
            <Globe size={18} strokeWidth={2.5} />
          </div>
          <span>
            Nihongo<span className="text-[#F3D77A]">.</span>Pro
          </span>
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
            <LanguageSelector />
            <Button variant="dark" icon={<MessageCircle size={18} />} className="px-6 py-2.5 text-sm" href="#">
              {LINE_BUTTON_LABELS[locale]}
            </Button>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
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
            <Button
              variant="dark"
              icon={<MessageCircle size={20} />}
              className="w-full"
              href="#"
            >
              {LINE_BUTTON_LABELS_MOBILE[locale]}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
