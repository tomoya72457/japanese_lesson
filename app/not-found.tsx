import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-600 mb-6">お探しのページが見つかりませんでした</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#F3D77A] text-gray-900 font-bold rounded-full hover:bg-[#F3D77A]/90 transition-colors"
      >
        トップへ戻る
      </Link>
    </div>
  );
}
