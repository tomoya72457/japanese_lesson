import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import Button from "../shared/Button";

const instructors = [
  {
    id: 1,
    name: "佐藤 さくら",
    furigana: "Sakura Sato",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["ビジネス日本語", "JLPT N1/N2", "上級者"],
    location: "Tokyo, Japan",
    bio: "大手商社での海外営業経験を活かし、実践的なビジネス日本語指導を提供。会議での発言、メール作成、異文化コミュニケーションなど、グローバルビジネスで即戦力となる日本語力を育成します。",
    message:
      "「正しい日本語」を超えて、相手の「心を動かす日本語」を一緒に身につけましょう。あなたのキャリアアップを全力でサポートします。",
  },
  {
    id: 2,
    name: "田中 健太",
    furigana: "Kenta Tanaka",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["初級者歓迎", "日常会話", "英語対応可"],
    location: "Vancouver, Canada",
    bio: "カナダの語学学校で5年間の指導経験あり。英語でのきめ細かいサポートが可能なため、ゼロから日本語を始める方でも安心です。多様性を重んじ、リラックスした雰囲気作りを心がけています。",
    message:
      "語学学習において失敗は成功の素です。安心できる環境で、楽しくたくさんお話ししましょう！",
  },
  {
    id: 3,
    name: "鈴木 真由美",
    furigana: "Mayumi Suzuki",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["JLPT対策", "進学・就職面接", "アカデミック"],
    location: "Kyoto, Japan",
    bio: "大学の留学生センターで長年指導。JLPTの出題傾向と対策を熟知しており、効率的なスコアアップを実現します。また、論理的な文章構成や面接での自己表現の指導も得意としています。",
    message:
      "目標達成には明確な戦略が必要です。あなたの強みと課題を分析し、最短ルートでゴールへ導くカスタマイズレッスンを提供します。",
  },
  {
    id: 4,
    name: "山田 拓也",
    furigana: "Takuya Yamada",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["会話力強化", "発音矯正", "中級者"],
    location: "Osaka, Japan",
    bio: "NHKの語学番組制作経験を活かし、実践的な会話力と発音指導に定評あり。映画やドラマを使った楽しいレッスンで、自然な日本語のニュアンスを習得していただけます。",
    message:
      "言葉は生き物です。教科書だけでは得られない「伝わる日本語」を、一緒に探求していきましょう。",
  },
  {
    id: 5,
    name: "高橋 美咲",
    furigana: "Misaki Takahashi",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["子ども日本語", "日本語教師養成", "文化紹介"],
    location: "Sydney, Australia",
    bio: "海外の補習校で10年以上の指導経験。お子様向けの楽しいレッスンから、日本語教師を目指す方への養成講座まで幅広く対応。日本文化に触れながら学べる授業が好評です。",
    message:
      "日本語の世界は無限に広がっています。あなたの興味を入口に、一緒に学びの旅を楽しみましょう。",
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-square overflow-hidden p-6 pb-0 min-h-[280px]">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm">
                    <MapPin size={12} className="text-accent" />
                    {instructor.location}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {instructor.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {instructor.furigana}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-4">
                    {instructor.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 flex-grow">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {instructor.bio}
                    </p>
                  </div>

                  <div className="mb-8 p-4 bg-teal-50/50 rounded-xl relative">
                    <div className="absolute top-4 left-4 text-accent opacity-20">
                      <MessageCircle size={32} />
                    </div>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed relative z-10 italic pl-2">
                      &quot;{instructor.message}&quot;
                    </p>
                  </div>

                  <Button variant="outline" className="w-full mt-auto text-sm" href="#">
                    この講師について質問する
                  </Button>
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
          <Button variant="dark" icon={<MessageCircle size={18} />} href="#">
            LINEで学習相談をする（無料）
          </Button>
        </div>
      </section>
    </div>
  );
}
