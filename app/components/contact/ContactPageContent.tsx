import type { Locale } from "@/app/constants/locale";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/kind_japanese?igsh=bHhmOWsxNTRoZWNm";

const CONTACT_CONTENT = {
  ja: {
    title: "お問い合わせ",
    description: "ご質問・ご相談は公式インスタグラムのDMからお気軽にどうぞ。",
    buttonLabel: "kind_japanese 公式インスタグラム",
  },
  en: {
    title: "Contact",
    description: "Feel free to reach out via DM on our official Instagram.",
    buttonLabel: "Official Instagram @kind_japanese",
  },
};

interface ContactPageContentProps {
  locale: Locale;
}

export default function ContactPageContent({ locale }: ContactPageContentProps) {
  const content = CONTACT_CONTENT[locale];

  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-gray-900">
            {content.title}
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            {content.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-bold text-lg rounded-full hover:opacity-90 transition-opacity min-w-[44px] min-h-[48px]"
          >
            <Instagram size={24} />
            {content.buttonLabel}
          </a>
        </div>
      </section>
    </div>
  );
}
