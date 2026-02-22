"use client";

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
} from "lucide-react";
import Button from "../shared/Button";

export default function HomePage() {
  return (
    <div>
      <section
        className="relative min-h-[70vh] lg:h-screen w-full overflow-hidden -mt-24 pt-24"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 左側のグラデーションオーバーレイ（テキスト可読性のため） */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/80"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[70vh] lg:min-h-screen flex items-center py-10 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-6">
              <Star size={16} className="fill-current" />
              <span>受講生の満足度 98%</span>
            </div>
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
              <Button variant="primary" icon={<MessageCircle size={20} />} className="text-lg px-8 py-4" href="#">
                LINEで無料相談・予約
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 bg-white/95 border-gray-400 text-gray-900 hover:border-primary hover:bg-white shadow-md"
                href="/instructors"
              >
                講師を見てみる
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Student"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p>
                世界中で<span className="font-bold text-gray-900">1,000+</span>
                名が学習中
              </p>
            </div>
          </div>
        </div>
      </section>

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
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 text-accent shadow-sm">
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
                Nihongo.Proは、単なる語学レッスンではありません。あなたのバックグラウンドを尊重し、目標に合わせた最適なアプローチを提供する教育プラットフォームです。
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
                <CheckCircle2 className="text-accent" size={24} />
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
              className="hidden md:flex text-accent"
              href="/instructors"
            >
              すべての講師を見る <ArrowRight size={18} className="ml-1" />
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scroll-smooth">
            {[
              { name: "Sakura.S", role: "ビジネス日本語エキスパート", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Kenta.T", role: "初級者・発音矯正サポート", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Mayumi.S", role: "JLPT・アカデミック指導", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Takuya.Y", role: "会話力強化・発音矯正", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Misaki.T", role: "子ども日本語・文化紹介", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            ].map((inst, i) => (
              <Link
                key={i}
                href="/instructors"
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
          <Button variant="outline" className="w-full mt-8 md:hidden" href="/instructors">
            すべての講師を見る
          </Button>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">
            学習スタートまでの流れ
          </h2>
          <p className="text-gray-500 mb-16">
            複雑な手続きは一切不要。4つのステップで簡単に始められます。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200"></div>
            {[
              { num: "01", title: "LINE追加", icon: <MessageCircle /> },
              { num: "02", title: "目標ヒアリング", icon: <Users /> },
              { num: "03", title: "日程調整・決済", icon: <CreditCard /> },
              { num: "04", title: "レッスン開始", icon: <Globe /> },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-sm flex items-center justify-center text-primary mb-4 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(243,215,122,0.1)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgba(79,209,197,0.1)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                あなたの可能性を広げる、
                <br />
                最初のステップ。
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                まずはLINEで無料相談。専任スタッフがあなたの目標や現状を丁寧にヒアリングし、最適な学習プランをご提案します。
              </p>
              <Button
                variant="primary"
                icon={<MessageCircle size={24} />}
                className="text-xl px-10 py-5"
                href="#"
              >
                LINEで無料相談を始める
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
