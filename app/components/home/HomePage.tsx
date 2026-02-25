"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Globe,
  BookOpen,
  Users,
  Star,
  AlertCircle,
  CreditCard,
  Calendar,
  Video,
} from "lucide-react";
import Button from "../shared/Button";
import LineIcon from "../shared/LineIcon";
import LineSection from "./LineSection";

const HERO_BG_URL =
  "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80)";

export default function HomePage() {
  const [bgPosition, setBgPosition] = useState<string>("center");

  useEffect(() => {
    const updatePosition = () => {
      setBgPosition(window.innerWidth <= 767 ? "75% center" : "center");
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div>
      <section
        className="relative min-h-[70vh] lg:h-screen w-full overflow-hidden -mt-24 pt-24"
        style={{
          backgroundImage: HERO_BG_URL,
          backgroundSize: "cover",
          backgroundPosition: bgPosition,
        }}
      >
        {/* 左側のグラデーションオーバーレイ（テキスト可読性のため） */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/80"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[70vh] lg:min-h-screen flex items-center py-10 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-gray-900">
              世界とつながる、<br />
              <span className="text-primary">あなただけの</span>
              <br />
              日本語レッスン
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              多様な経験を持つプロ講師が、あなたの目標達成をサポート。面倒なアプリは不要、LINEでご質問等承ります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://line.me/R/ti/p/@203ctosj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
              >
                <LineIcon size={18} className="flex-shrink-0" />
                LINEで無料相談・予約
              </a>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 bg-white/95 border-gray-400 text-gray-900 hover:border-primary hover:bg-white shadow-md"
                href="/ja/instructors"
              >
                講師を見てみる
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LineSection locale="ja" />

      <section className="py-14 border-y border-gray-100 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
            こんな目的で利用されています
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "💼", label: "ビジネス日本語" },
              { icon: "🎓", label: "日本留学準備" },
              { icon: "📝", label: "JLPT対策" },
              { icon: "🗣️", label: "日常会話" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 p-5 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-2xl md:text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <span className="font-semibold text-gray-700 text-center text-sm md:text-base">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
              日本語学習で、立ち止まっていませんか？
            </h2>
            <p className="text-gray-500">私たちは、あなたの悩みに寄り添い、一緒に解決策を見つけます。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "会話の自信がない",
                desc: "文法はわかるのに、いざという時に言葉が出ない",
              },
              {
                title: "ビジネスで不安",
                desc: "敬語やメールなど、適切な表現ができているか心配",
              },
              {
                title: "試験スコアが伸びない",
                desc: "JLPTの読解や聴解で壁にぶつかっている",
              },
              {
                title: "学習が続かない",
                desc: "モチベーションの維持や、予約システムが面倒",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 text-[#F3D77A] shadow-sm">
                  <AlertCircle size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-gray-900">
                あなたらしさを引き出す、
                <br />
                新しい学習体験
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kind Japaneseは、単なる語学レッスンではありません。あなたのバックグラウンドを尊重し、目標に合わせた最適なアプローチを提供する教育プラットフォームです。
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Users size={24} />,
                    title: "多様な専門性を持つプロ講師",
                    desc: "ビジネス経験者から試験対策のプロまで、あなたに合う講師が見つかります。",
                  },
                  {
                    icon: <BookOpen size={24} />,
                    title: "完全カスタマイズカリキュラム",
                    desc: "強みを伸ばし、弱点を補強する、あなた専用の学習プランを作成します。",
                  },
                  {
                    icon: <MessageCircle size={24} />,
                    title: "シームレスなLINE連携",
                    desc: "予約から学習相談まで、すべて使い慣れたLINEアプリで完結します。",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Friendly instructor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 hidden md:flex">
                <CheckCircle2 className="text-[#F3D77A]" size={24} />
                <span className="font-bold text-gray-900 text-sm">
                  レッスン満足保証
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
                世界基準のプロ講師陣
              </h2>
              <p className="text-gray-500">
                厳格な基準をクリアした、経験豊富な講師がサポートします。
              </p>
            </div>
            <Button
              variant="ghost"
              className="hidden md:flex text-[#F3D77A]"
              href="/ja/instructors"
            >
              講師プロフィールはこちら <ArrowRight size={18} className="ml-1" />
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scroll-smooth">
            {[
              { name: "Seina Sato", role: "国家資格取得の日本語教師", img: "/images/SeinaSato.jpg", slug: "seina-sato" },
              { name: "Takeshi Matsuda", role: "笑顔あふれる楽しいレッスン", img: "/images/TakeshiMathuda.png", slug: "takeshi-matsuda" },
              { name: "Ami Mase", role: "一緒に日本語を楽しく学ぼう", img: "/images/AmiMase.png", slug: "ami-mase" },
            ].map((inst, i) => (
              <Link
                key={i}
                href={`/ja/instructors/${inst.slug}`}
                className="flex-shrink-0 w-[200px] md:w-[240px] group cursor-pointer block"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative">
                  <Image
                    src={inst.img}
                    alt={inst.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      詳細を見る <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900">{inst.name}</h3>
                <p className="text-sm text-gray-500">{inst.role}</p>
              </Link>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 md:hidden" href="/ja/instructors">
            講師プロフィールはこちら
          </Button>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900 text-center">
            ご利用の流れ
          </h2>
          <p className="text-gray-500 mb-12 text-center text-sm md:text-base">
            複雑な手続きは一切不要。5つのステップで簡単に始められます。
          </p>

          <div className="relative">
            {/* 縦の接続線 */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-0">
              {[
                {
                  num: "1",
                  title: "公式LINEアカウントを追加",
                  desc: "はじめに、メインの連絡ツールとして使用している公式LINEアカウントを追加してください。",
                  icon: <MessageCircle size={20} />,
                },
                {
                  num: "2",
                  title: "体験レッスンの日程を決める",
                  desc: "LINEで、講師と体験レッスンの日程・時間を決めます。",
                  icon: <Calendar size={20} />,
                },
                {
                  num: "3",
                  title: "体験レッスンを受ける（Zoom / Google Meet）",
                  desc: "体験レッスンは、指定の日時にZoomまたはGoogle Meetでオンラインで行われます。",
                  icon: <Video size={20} />,
                },
                {
                  num: "4",
                  title: "コースを選んでレッスン開始",
                  desc: "続けたい場合は、お求めに合うコースに申し込み、レッスンを開始します。",
                  icon: <CreditCard size={20} />,
                },
                {
                  num: "5",
                  title: "月次レビュー",
                  desc: "講師による月次レビューで、学習の進捗を確認できます。",
                  icon: <Star size={20} />,
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 md:gap-6 py-6 border-b border-gray-200 last:border-b-0 first:pt-0"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold">
                      {step.num}
                    </div>
                    <div className="flex mt-2 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-grow min-w-0 pt-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 text-center">
            （ご質問があれば、いつでもLINEで講師にメッセージできます。）
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(243,215,122,0.1)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgba(79,209,197,0.1)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                あなたの可能性を
                <br className="md:hidden" />
                広げる、
                <br />
                最初のステップ。
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                まずはLINEで無料相談。専任スタッフがあなたの目標や現状を丁寧にヒアリングし、最適な学習プランをご提案します。
              </p>
              <a
                href="https://line.me/R/ti/p/@203ctosj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
              >
                <LineIcon size={18} className="flex-shrink-0" />
                LINEで無料相談を始める
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
