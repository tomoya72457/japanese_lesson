"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, MessageCircle } from "lucide-react";
import Button from "./Button";
import { getLocaleFromPathname } from "@/app/constants/locale";

const FOOTER_CONTENT = {
  ja: {
    description:
      "多様なバックグラウンドを持つプロの日本語講師と、LINEで完結するオンラインレッスン。あなたの目標達成を、私たちが全力でサポートします。",
    lineButton: "LINE公式アカウント",
    services: "サービス",
    support: "サポート・規約",
    links: {
      home: "トップページ",
      instructors: "講師一覧",
      pricing: "料金プラン",
      recruit: "講師募集",
      faq: "よくある質問",
      legal: "特定商取引法に基づく表記",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
  en: {
    description:
      "Professional Japanese instructors with diverse backgrounds. Online lessons via LINE. We fully support your goals.",
    lineButton: "Official LINE Account",
    services: "Services",
    support: "Support & Legal",
    links: {
      home: "Home",
      instructors: "Instructors",
      pricing: "Pricing",
      recruit: "Join Us",
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
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-gray-900">
                <Globe size={18} strokeWidth={2.5} />
              </div>
              <span>
                Nihongo<span className="text-[#F3D77A]">.</span>Pro
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
              {content.description}
            </p>
            <Button variant="outline" icon={<MessageCircle size={18} />} className="px-6 py-3 text-sm" href="#">
              {content.lineButton}
            </Button>
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
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Nihongo.Pro. All rights reserved.</p>
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
