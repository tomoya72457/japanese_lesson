import Link from "next/link";
import { Globe, MessageCircle } from "lucide-react";
import Button from "./Button";

export default function Footer() {
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
                Nihongo<span className="text-accent">.</span>Pro
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
              多様なバックグラウンドを持つプロの日本語講師と、LINEで完結するオンラインレッスン。あなたの目標達成を、私たちが全力でサポートします。
            </p>
            <Button variant="outline" icon={<MessageCircle size={18} />} className="px-6 py-3 text-sm" href="#">
              LINE公式アカウント
            </Button>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900">サービス</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  トップページ
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-gray-900 transition-colors">
                  講師一覧
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-900 transition-colors">
                  料金プラン
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900">サポート・規約</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  利用規約
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
