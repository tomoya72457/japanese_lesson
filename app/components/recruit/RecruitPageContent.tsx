import type { Locale } from "@/app/constants/locale";
import { Instagram } from "lucide-react";

const RECRUIT_CONTENT = {
  ja: {
    title: "講師の募集について",
    body: "日本語の資格を持っている方を募集しています。資格の種類、実務経験は問いません。興味のある方は、kind_japaneseの公式インスタグラムのDMからご連絡ください。",
    instagramLabel: "kind_japanese 公式インスタグラム",
    instagramHref: "https://www.instagram.com/kind_japanese/",
  },
  en: {
    title: "Instructor Recruitment",
    body: "We are looking for instructors with Japanese language qualifications. The type of qualification and work experience are not required. If you are interested, please contact us via DM on our official Instagram @kind_japanese.",
    instagramLabel: "Official Instagram @kind_japanese",
    instagramHref: "https://www.instagram.com/kind_japanese/",
  },
};

interface RecruitPageContentProps {
  locale: Locale;
}

export default function RecruitPageContent({ locale }: RecruitPageContentProps) {
  const content = RECRUIT_CONTENT[locale];

  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-gray-900">
            {content.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border border-gray-200 p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-10 text-left">
              {content.body}
            </p>
            <div className="flex justify-center">
              <a
                href={content.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-medium rounded-full hover:opacity-90 transition-opacity min-w-[44px] min-h-[44px]"
              >
                <Instagram size={20} />
                {content.instagramLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
