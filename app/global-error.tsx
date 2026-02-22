"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            fontFamily: "sans-serif",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
            問題が発生しました
          </h2>
          <p style={{ color: "#4b5563", marginBottom: "1.5rem", textAlign: "center" }}>
            {error.message}
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 24px",
              backgroundColor: "#f3d77a",
              color: "#111",
              fontWeight: "bold",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            再試行
          </button>
        </div>
      </body>
    </html>
  );
}
