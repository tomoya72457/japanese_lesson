import Link from "next/link";
import Image from "next/image";
import LineIcon from "../shared/LineIcon";
import { LINE_BUTTON_LABELS } from "@/app/constants/locale";

const instructors = [
  {
    id: 1,
    slug: "seina-sato",
    name: "Seina Sato",
    flag: "🇯🇵",
    bio: "🎖️ 国家資格取得の日本語教師｜初級〜上級まで対応 🐣自分のペースで...",
    jpnLevel: "professional",
    engLevel: "upper intermediate",
    lessons: null,
    isNew: true,
    image: "/images/SeinaSato.jpg",
  },
  {
    id: 2,
    slug: "takeshi-matsuda",
    name: "Takeshi Matsuda",
    flag: "🇯🇵",
    bio: "笑顔あふれる楽しい日本語レッスン！",
    jpnLevel: "professional",
    engLevel: "intermediate",
    lessons: 120,
    isNew: false,
    image: "/images/TakeshiMathuda.png",
  },
  {
    id: 3,
    slug: "ami-mase",
    name: "Ami Mase",
    flag: "🇯🇵",
    bio: "はじめまして、あみです！一緒に日本語を楽しく学びましょう",
    jpnLevel: "Native",
    engLevel: "upper intermediate",
    lessons: 64,
    isNew: false,
    image: "/images/AmiMase.png",
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

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="flex gap-5">
                {/* 写真 */}
                <div className="flex-shrink-0 w-36 h-36 bg-gray-100 overflow-hidden">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* テキスト */}
                <div className="flex flex-col gap-1.5 min-w-0">
                  <h3 className="font-bold text-gray-900 underline underline-offset-2">
                    {instructor.name} {instructor.flag}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {instructor.bio}
                  </p>
                  <Link
                    href={`/ja/instructors/${instructor.slug}`}
                    className="text-sm underline underline-offset-2 text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    詳細を見る
                  </Link>
                  <div className="text-sm text-gray-700 space-y-0.5 mt-1">
                    <p>
                      JPN:{" "}
                      <span className="text-blue-600 font-medium">
                        {instructor.jpnLevel}
                      </span>
                    </p>
                    <p>ENG: {instructor.engLevel}</p>
                    {instructor.isNew ? (
                      <p className="font-medium text-gray-700">New</p>
                    ) : (
                      <p className="text-gray-500">{instructor.lessons} レッスン</p>
                    )}
                  </div>
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
