"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import LineIcon from "../shared/LineIcon";

const LINE_ADD_URL = "https://line.me/R/ti/p/@203ctosj";
const LINE_ID = "@203ctosj";
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(LINE_ADD_URL)}`;

const CONTENT = {
  ja: {
    heading: "無料体験レッスンのお申し込み",
    lead: (
      <>
        LINEで友だち追加をして、希望の日時を送るだけ。
        <br />
        「まずは相談したい」「見積もりだけ知りたい」という方もお気軽にご連絡ください。
      </>
    ),
    buttonLabel: "LINEで今すぐ予約する",
    subLabel: "ID検索:",
    copiedMessage: "コピーしました",
    qrLabel: "QRコードをスキャン",
  },
  en: {
    heading: "Book a Free Trial Lesson",
    lead: (
      <>
        Just add us on LINE and send your preferred date and time.
        <br />
        We also welcome those who just want to consult or get a quote—feel free to reach out.
      </>
    ),
    buttonLabel: "Book Now on LINE",
    subLabel: "Search by ID:",
    copiedMessage: "Copied!",
    qrLabel: "Scan QR code",
  },
};

type Locale = "ja" | "en";

interface LineSectionProps {
  locale: Locale;
}

export default function LineSection({ locale }: LineSectionProps) {
  const [copied, setCopied] = useState(false);
  const content = CONTENT[locale];

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(LINE_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = LINE_ID;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-14 px-6 bg-white border-b border-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {content.heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left">
            {content.lead}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-6 w-full md:w-auto">
            <a
              href={LINE_ADD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[90%] sm:w-[80%] md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
            >
              <LineIcon size={24} className="flex-shrink-0" />
              {content.buttonLabel}
            </a>

            <button
              type="button"
              onClick={handleCopyId}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors min-w-[44px] min-h-[44px]"
            >
              <span>{content.subLabel}</span>
              <code className="select-all font-mono bg-gray-100 px-2 py-1 rounded">
                {LINE_ID}
              </code>
              {copied ? (
                <Check size={16} className="text-[#06C755] flex-shrink-0" />
              ) : (
                <Copy size={16} className="flex-shrink-0" />
              )}
              {copied && (
                <span className="text-xs text-[#06C755]">{content.copiedMessage}</span>
              )}
            </button>
          </div>

          <div className="hidden md:block flex-shrink-0">
            <div className="border border-gray-200 p-3 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={QR_CODE_URL}
                alt="LINE QR Code"
                width={150}
                height={150}
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                {content.qrLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
