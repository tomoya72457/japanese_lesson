import type { Locale } from "@/app/constants/locale";
import Image from "next/image";
import Link from "next/link";
import LineIcon from "../shared/LineIcon";
import { LINE_BUTTON_LABELS } from "@/app/constants/locale";

export const INSTRUCTOR_SLUGS = ["seina-sato", "takeshi-matsuda", "ami-mase"] as const;
export type InstructorSlug = (typeof INSTRUCTOR_SLUGS)[number];

const INSTRUCTOR_IMAGES: Record<InstructorSlug, string> = {
  "seina-sato": "/images/SeinaSato.jpg",
  "takeshi-matsuda": "/images/TakeshiMathuda.png",
  "ami-mase": "/images/AmiMase.png",
};

const INSTRUCTOR_DATA: Record<
  InstructorSlug,
  {
    name: string;
    nameShort?: string;
    flag: string;
    tagline: string;
    engLevel: string;
    badge?: string;
    youtubeId?: string;
    about: { ja: string; en: string };
    sections: { title: string; content: string }[];
  }
> = {
  "seina-sato": {
    name: "Seina Sato",
    flag: "🇯🇵",
    tagline: "Nationally Certified Japanese Teacher | From Beginners to Advanced. Learn at your own pace and level up with confidence while having fun. Kids and adults are all welcome. English support available. A safe and comfortable learning environment.",
    engLevel: "Upper Intermediate",
    youtubeId: "gah6Az4e-8w",
    about: {
      ja: "横浜・神奈川出身。現在カナダ在住。明るく自然な標準語で話します。日本語・英語の両方でサポート可能です。",
      en: "From Yokohama, Kanagawa, Japan. Currently living in Canada. I speak bright, natural standard Japanese. I can support you in both Japanese and English!",
    },
    sections: [
      {
        title: "Recommended for",
        content: `• Beginners to advanced learners (Absolute beginners are very welcome!)
• Those who want to seriously improve conversation and vocabulary skills
• Learners who want to study "real Japanese," not just textbook language
• People who want to watch anime or movies without subtitles
• Those who want to read manga and books in Japanese
• Anyone interested in Japanese culture
• People planning to travel, live, work, or study in Japan
• Learners preparing for the JLPT
▶ All ages and all levels are welcome`,
      },
      {
        title: "About Me",
        content: `◆ From: Yokohama, Kanagawa, Japan
◆ Currently living in: Canada

I speak bright, natural standard Japanese.
I can support you in both Japanese and English!

◆ Hobbies
• Watching movies (I watch Netflix!)
• Anime (I love JoJo's Bizarre Adventure)
• Music (I enjoy many different genres)

◆ Experience
• I have experience supporting overseas learners of Japanese
• I adjust lesson pace according to each student and provide continuous support`,
      },
      {
        title: "Lesson Content",
        content: `Beginner
• Hiragana / Katakana
• Numbers / Time / Dates
• Pronunciation / Intonation
• Basic greetings / Self-introduction
• Beginner grammar / Vocabulary
• Simple Japanese for travel and daily life

Intermediate
• Natural conversation practice
• Vocabulary building / Kanji
• Casual and polite Japanese
• Reading & listening (understanding anime and movie dialogue)
• Free talk

Advanced
• Accurate and natural Japanese expressions
• Abstract and logical expression
• Discussions
• News reading
• Japanese culture and social topics
• Kanji usage differences
• Conversation in Japanese only

JLPT Preparation (N5–N1)
• Weakness analysis
• Practice questions
• Vocabulary & grammar reinforcement
• Test-taking strategies`,
      },
      {
        title: "My Strengths",
        content: `• I create a personalized study notebook just for you
• English support is available, so beginners can start with confidence
• I customize lessons based on your goals (conversation, grammar, vocabulary, reading, etc.)
• I'm happy to support not only your studies but also questions about life in Japan
• I respond to questions and messages within 24 hours`,
      },
      {
        title: "Message",
        content: `Japanese is not something you master overnight.

But if you continue in a way that fits you and enjoy the process, you will definitely improve.

The most important thing is not leaving your questions unanswered — and building small "I did it!" moments step by step.

In a relaxed and comfortable atmosphere, let's steadily level up at your own pace.

All goals are welcome. Let's create a study plan that fits you.

I look forward to meeting you in a trial lesson.`,
      },
    ],
  },
  "takeshi-matsuda": {
    name: "Takeshi Matsuda",
    nameShort: "Takeshi M.",
    flag: "🇯🇵",
    tagline: "Fun and smile-filled Japanese lessons for everyone!",
    engLevel: "Intermediate",
    badge: "Registered Japanese Language Teacher",
    youtubeId: "bdBnerbCIlQ",
    about: {
      ja: "大阪出身、現在は北海道・札幌在住。日本語教師養成講座修了、国家資格「日本語教師」取得。大学で教員養成・プロジェクトマネジメント、語学学校で日本語を教えています。",
      en: `Hi, I'm Takeshi, currently living in Japan!

I'm originally from Osaka, and now I live in Sapporo, Hokkaido.

I completed a Japanese language teacher training program and hold the national certification as a Registered Japanese Language Teacher.

Currently, I teach courses in teacher training and project management at a university, while also teaching Japanese at a language school.

In the past, I've worked as a web writer, NGO operator, junior high school teacher, and even managed a takoyaki shop!

My hobby is traveling, and I'm knowledgeable about history, culture, and geography.

Let's enjoy learning Japanese together!`,
    },
    sections: [],
  },
  "ami-mase": {
    name: "Ami Mase",
    flag: "🇯🇵",
    tagline: "Hi, I'm Ami! Nice to meet you! Let's enjoy learning Japanese together!!",
    engLevel: "Upper Intermediate",
    youtubeId: "gN51uVzSHv0",
    about: {
      ja: "愛知県出身。2026年3月からオーストラリアで保育士として働く予定。子供から大人まで幅広い年齢の方との会話が好きです。",
      en: `Hi, I'm Ami from Aichi, Japan!

Starting in March 2026, I'll be working as a childcare teacher in Australia.

I love talking with people of all ages — from kids to adults! Let's have lots of conversations together.

My top three favorite things are sleeping, eating, and chatting!

I also love going to see waterfalls and relaxing by the ocean.`,
    },
    sections: [],
  },
};

const LABELS = {
  aboutMe: { ja: "自己紹介", en: "About me" },
  recommendedFor: { ja: "おすすめの方", en: "Recommended for" },
  aboutMeSection: { ja: "自己紹介", en: "About Me" },
  lessonContent: { ja: "レッスン内容", en: "Lesson Content" },
  myStrengths: { ja: "私の強み", en: "My Strengths" },
  message: { ja: "メッセージ", en: "Message" },
  backToInstructors: { ja: "講師一覧に戻る", en: "Back to Instructors" },
  contactViaLine: { ja: "LINEで相談する", en: "Contact via LINE" },
  registeredTeacher: { ja: "登録日本語教師", en: "Registered Japanese Language Teacher" },
};

interface InstructorDetailContentProps {
  slug: InstructorSlug;
  locale: Locale;
}

export default function InstructorDetailContent({ slug, locale }: InstructorDetailContentProps) {
  const instructor = INSTRUCTOR_DATA[slug];
  if (!instructor) return null;

  const displayName = instructor.nameShort || instructor.name;
  const prefix = locale === "ja" ? "/ja" : "/en";

  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-12 bg-[#fdf8e7]">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href={`${prefix}/instructors`}
            className="inline-block text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            ← {LABELS.backToInstructors[locale]}
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {displayName} {instructor.flag}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{instructor.tagline}</p>
          <div className="mt-3 flex flex-wrap gap-2 items-center">
            <p className="text-sm text-gray-500">
              ENG: {instructor.engLevel} {locale === "ja" ? "レベル" : "level"}
            </p>
            {instructor.badge && (
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {instructor.badge}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{LABELS.aboutMe[locale]}</h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0 w-full md:w-48 aspect-square overflow-hidden border border-gray-200">
                <Image
                  src={INSTRUCTOR_IMAGES[slug]}
                  alt={instructor.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-left flex-grow min-w-0">
                {instructor.about[locale]}
              </div>
            </div>
          </div>

          {instructor.youtubeId && (
            <div>
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${instructor.youtubeId}`}
                  title={`${instructor.name} introduction video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border border-gray-200"
                />
              </div>
            </div>
          )}

          {instructor.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-left border border-gray-200 p-6">
                {section.content}
              </div>
            </div>
          ))}

          <div className="pt-8 border-t border-gray-200">
            <a
              href="https://line.me/R/ti/p/@203ctosj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[48px]"
            >
              <LineIcon size={20} className="flex-shrink-0" />
              {LABELS.contactViaLine[locale]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
