import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import Button from "../shared/Button";

export default function PricingPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            シンプルで透明性の高い
            <br />
            料金体系
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            入会金は不要。あなたの学習ペースに合わせて、必要な分だけ受講できる柔軟なシステムです。
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              <div className="text-center md:text-left">
                <div className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  入会金・システム利用料 0円
                </div>
                <h2 className="text-2xl text-gray-500 font-bold mb-2">
                  基本料金 (1回25分)
                </h2>
                <div className="flex items-baseline justify-center md:justify-start gap-1 text-gray-900">
                  <span className="text-3xl font-bold">¥</span>
                  <span className="text-6xl font-extrabold tracking-tighter">
                    3,000
                  </span>
                  <span className="text-xl font-medium text-gray-500">〜</span>
                </div>
              </div>

              <div className="w-full md:w-auto flex-1 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-accent" />
                  料金に含まれるもの
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    マンツーマンオンラインレッスン（25分）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    個別カスタマイズされたカリキュラム作成
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    LINEでの学習相談・予約変更サポート
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-8 text-center md:text-left">
              ※専門的な内容（高度なビジネス日本語、専門用語、特定の試験対策等）をご希望の場合は、講師により料金が異なる場合がございます。詳細はお見積もり時にご案内いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              決済もスマートに
            </h2>
            <p className="text-gray-500">
              安心のオンライン決済システムを導入しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle size={28} />,
                title: "1. 条件の決定",
                desc: "LINEで希望日時や講師の条件をお伝えください。",
              },
              {
                icon: <CreditCard size={28} />,
                title: "2. オンライン決済",
                desc: "発行されたセキュアなリンクからクレジットカードでお支払い。",
              },
              {
                icon: <CheckCircle2 size={28} />,
                title: "3. 予約完了",
                desc: "お支払い確認後、レッスン受講用のURLをお送りします。",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative"
              >
                {idx < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-gray-300 w-6 h-6 z-10" />
                )}
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6">
                  {step.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            まずはお見積もりから
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            「週1回ペースでの月額は？」「短期集中での費用感を知りたい」など、あなたのプランに合わせたお見積もりをLINEにて無料で作成いたします。
          </p>
          <Button
            variant="dark"
            icon={<MessageCircle size={20} />}
            className="text-lg px-10 py-4 shadow-lg"
            href="#"
          >
            LINEで料金について相談する
          </Button>
        </div>
      </section>
    </div>
  );
}
