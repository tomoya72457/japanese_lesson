import Link from "next/link";
import LineIcon from "../shared/LineIcon";
import { LINE_BUTTON_LABELS } from "@/app/constants/locale";

const instructors = [
  {
    id: 1,
    slug: "seina-sato",
    name: "Seina Sato",
    flag: "🇯🇵",
    bio: "国家資格取得の日本語教師｜初級〜上級まで対応",
    jpnLevel: "ネイティブ（プロ）",
    engLevel: "上級中級",
    lessons: null,
    isNew: true,
  },
  {
    id: 2,
    slug: "takeshi-matsuda",
    name: "Takeshi Matsuda",
    flag: "🇯🇵",
    bio: "笑顔あふれる楽しい日本語レッスン！",
    jpnLevel: "ネイティブ（プロ）",
    engLevel: "中級",
    lessons: 120,
    isNew: false,
  },
  {
    id: 3,
    slug: "ami-mase",
    name: "Ami Mase",
    flag: "🇯🇵",
    bio: "はじめまして、あみです！一緒に日本語を楽しく学びましょう",
    jpnLevel: "ネイティブ",
    engLevel: "上級中級",
    lessons: 64,
    isNew: false,
  },
];

export default function InstructorsPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            あなたの成長を
            <br className="md:hidden" />
            支えるパートナー
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            多様なバックグラウンドを持つ、経験豊富なプロの日本語講師陣。あなたにぴったりの講師が、目標達成まで伴走します。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="border border-gray-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {instructor.name} {instructor.flag}
                    </h3>
                    {instructor.isNew ? (
                      <span className="text-xs font-bold text-white bg-gray-900 px-2 py-0.5 rounded">New</span>
                    ) : (
                      <span className="text-xs text-gray-500">{instructor.lessons} レッスン</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {instructor.bio}
                  </p>
                  <div className="space-y-1.5 text-xs text-gray-500 mb-6">
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700 w-10">JPN:</span>
                      <span>{instructor.jpnLevel}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700 w-10">ENG:</span>
                      <span>{instructor.engLevel}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href={`/ja/instructors/${instructor.slug}`}
                    className="text-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href="https://line.me/R/ti/p/@203ctosj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-h-[44px]"
                  >
                    <LineIcon size={16} className="flex-shrink-0" />
                    LINEで相談する
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            講師選びに迷ったら？
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            専任カウンセラーがあなたの学習目的やレベルをお伺いし、最適な講師をご提案します。
          </p>
          <a
            href="https://line.me/R/ti/p/@203ctosj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
          >
            <LineIcon size={18} className="flex-shrink-0" />
            {LINE_BUTTON_LABELS.ja}
          </a>
        </div>
      </section>
    </div>
  );
}
