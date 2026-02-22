"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">問題が発生しました</h2>
      <p className="text-gray-600 mb-6 text-center">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#f3d77a] text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-colors"
      >
        再試行
      </button>
    </div>
  );
}
