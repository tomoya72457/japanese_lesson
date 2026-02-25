"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Instagram } from "lucide-react";
import LineIcon from "./LineIcon";
import { getLocaleFromPathname, LINE_BUTTON_LABELS } from "@/app/constants/locale";

const FOOTER_CONTENT = {
  ja: {
    description:
      "多様なバックグラウンドを持つプロの日本語講師と、LINEで完結するオンラインレッスン。あなたの目標達成を、私たちが全力でサポートします。",
    services: "サービス",
    instagramLabel: "公式インスタグラム",
    support: "サポート・規約",
    links: {
      home: "トップページ",
      instructors: "講師一覧",
      pricing: "料金プラン",
      recruit: "講師募集",
      reviews: "レビュー",
      contact: "Contact",
      faq: "よくある質問",
      legal: "特定商取引法に基づく表記",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
  en: {
    description:
      "Professional Japanese instructors with diverse backgrounds. Online lessons via LINE. We fully support your goals.",
    services: "Services",
    instagramLabel: "Official Instagram",
    support: "Support & Legal",
    links: {
      home: "Home",
      instructors: "Instructors",
      pricing: "Pricing",
      recruit: "Join Us",
      reviews: "Student Reviews",
      contact: "Contact",
      faq: "FAQ",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },
};

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = FOOTER_CONTENT[locale];
  const prefix = locale === "en" ? "/en" : "/ja";

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
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
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://line.me/R/ti/p/@203ctosj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
              >
                <LineIcon size={18} className="flex-shrink-0" />
                {LINE_BUTTON_LABELS[locale]}
              </a>
              <a
                href="https://www.instagram.com/kind_japanese/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity min-w-[44px] min-h-[44px]"
              >
                <Instagram size={18} className="flex-shrink-0" />
                {content.instagramLabel}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900">{content.services}</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <Link href={prefix || "/"} className="hover:text-gray-900 transition-colors">
                  {content.links.home}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/instructors`} className="hover:text-gray-900 transition-colors">
                  {content.links.instructors}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/pricing`} className="hover:text-gray-900 transition-colors">
                  {content.links.pricing}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/recruit`} className="hover:text-gray-900 transition-colors">
                  {content.links.recruit}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/reviews`} className="hover:text-gray-900 transition-colors">
                  {content.links.reviews}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/contact`} className="hover:text-gray-900 transition-colors">
                  {content.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900">{content.support}</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  {content.links.faq}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/legal`} className="hover:text-gray-900 transition-colors">
                  {content.links.legal}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  {content.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  {content.links.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Kind Japanese. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Globe size={14} /> Global / 日本語
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
