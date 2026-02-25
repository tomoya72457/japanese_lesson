import type { Locale } from "@/app/constants/locale";

const LEGAL_CONTENT = {
  ja: {
    title: "特定商取引法に基づく表記",
    sections: [
      {
        title: "販売事業名",
        items: [
          ["販売事業名", "Kind Japanese"],
          [
            "住所・電話番号",
            "※請求があった場合、遅滞なく開示いたします。",
          ],
        ],
      },
      {
        title: "所在地",
        items: [["所在地", "※請求があった場合、遅滞なく開示いたします。"]],
      },
      {
        title: "電話番号",
        items: [
          [
            "電話番号",
            "※請求があった場合、遅滞なく開示いたします。\n（お問い合わせはメールまたはLINE公式アカウントにてお願いいたします）\nLINE公式アカウントID：@203ctosj",
          ],
        ],
      },
      {
        title: "メールアドレス",
        items: [["メールアドレス", "kindjapanese0@gmail.com"]],
      },
      {
        title: "運営責任者",
        items: [["運営責任者", "笹川 伶之"]],
      },
      {
        title: "販売価格",
        items: [
          ["Single Lesson", "$20"],
          ["Mini Pack (5 lessons)", "$95"],
          ["Growth Pack (10 lessons)", "$170"],
          ["Master Pack (15+ lessons)", "$225〜"],
          [
            "備考",
            "※価格は税込み、為替の変動により変更される場合があります。",
          ],
        ],
      },
      {
        title: "商品（サービス）内容",
        items: [
          [
            "内容",
            "オンラインでの日本語レッスン（1回25分）を提供します。\nオンライン会議ツール（Zoom など）を使用します。",
          ],
        ],
      },
      {
        title: "商品（サービス）の引き渡し時期",
        items: [
          [
            "時期",
            "決済完了後、予約スケジュールに基づきレッスンを提供します。",
          ],
        ],
      },
      {
        title: "支払い方法",
        items: [
          [
            "方法",
            "Stripe（クレジットカード決済）\n※銀行振込には対応していません。",
          ],
        ],
      },
      {
        title: "支払い時期",
        items: [
          [
            "時期",
            "翌月のレッスン料金は、当月20日〜月末までにお支払いください。\n単発レッスンの場合は予約時に決済が必要です。",
          ],
        ],
      },
      {
        title: "追加手数料",
        items: [
          [
            "手数料",
            "追加手数料はありません。\n（インターネット通信料はお客様負担となります）",
          ],
        ],
      },
      {
        title: "キャンセル・返金ポリシー",
        items: [
          [
            "基本",
            "すべての支払いは返金不可となります。ただし下記の場合は例外として対応します。",
          ],
          [
            "生徒都合のキャンセル",
            "レッスン開始の24時間前までのご連絡で振替が可能。\n24時間以内のキャンセルは消化扱いとなり返金不可。\nレッスン開始後、10分経過しても連絡がない場合はキャンセル扱い。",
          ],
          [
            "講師都合のキャンセル",
            "代替日のご提案、または返金対応を行います。",
          ],
          [
            "技術的トラブル（通信障害・Zoom不具合など）",
            "レッスンを再度スケジュールします。",
          ],
        ],
      },
      {
        title: "役務提供の期限（レッスンの有効期限）",
        items: [
          [
            "期限",
            "レッスンパックのレッスンは購入した月のみ有効とし、翌月への繰り越しはできません。",
          ],
        ],
      },
      {
        title: "返品について",
        items: [
          [
            "返品",
            "オンラインレッスンの性質上、提供済みサービスの返品はできません。",
          ],
        ],
      },
      {
        title: "販売数量の制限",
        items: [
          [
            "制限",
            "特に制限はありませんが、講師のスケジュールにより予約枠が埋まる場合があります。",
          ],
        ],
      },
      {
        title: "動作環境",
        items: [
          [
            "必要な環境",
            "レッスンには以下の環境が必要です：\n\n・安定したインターネット回線\n\n・Zoom などのビデオ通話アプリ\n\n・PC / スマートフォン / タブレット",
          ],
        ],
      },
    ],
  },
  en: {
    title: "Legal Notice (Specified Commercial Transaction Act)",
    sections: [
      {
        title: "Business Name",
        items: [
          ["Business Name", "Kind Japanese"],
          [
            "Address & Phone",
            "Disclosed upon request without delay.",
          ],
        ],
      },
      {
        title: "Address",
        items: [["Address", "Disclosed upon request without delay."]],
      },
      {
        title: "Phone Number",
        items: [
          [
            "Phone Number",
            "Disclosed upon request without delay.\n(Please contact us via email or LINE Official Account)\nLINE Official Account ID: @203ctosj",
          ],
        ],
      },
      {
        title: "Email",
        items: [["Email", "kindjapanese0@gmail.com"]],
      },
      {
        title: "Operations Manager",
        items: [["Operations Manager", "Sasayuki Reiji"]],
      },
      {
        title: "Pricing",
        items: [
          ["Single Lesson", "$20"],
          ["Mini Pack (5 lessons)", "$95"],
          ["Growth Pack (10 lessons)", "$170"],
          ["Master Pack (15+ lessons)", "$225~"],
          [
            "Note",
            "Prices include tax. Prices may change due to exchange rate fluctuations.",
          ],
        ],
      },
      {
        title: "Service Description",
        items: [
          [
            "Description",
            "Online Japanese lessons (25 min per session).\nUses online meeting tools (Zoom, etc.).",
          ],
        ],
      },
      {
        title: "Service Delivery",
        items: [
          [
            "Timing",
            "Lessons provided according to schedule after payment completion.",
          ],
        ],
      },
      {
        title: "Payment Method",
        items: [
          [
            "Method",
            "Stripe (credit card).\nBank transfer not supported.",
          ],
        ],
      },
      {
        title: "Payment Timing",
        items: [
          [
            "Timing",
            "Monthly lesson fees due between the 20th and end of the current month.\nSingle lessons require payment at booking.",
          ],
        ],
      },
      {
        title: "Additional Fees",
        items: [
          [
            "Fees",
            "No additional fees.\n(Internet connection costs are customer responsibility.)",
          ],
        ],
      },
      {
        title: "Cancellation & Refund Policy",
        items: [
          [
            "General",
            "All payments are non-refundable. Exceptions below.",
          ],
          [
            "Student-initiated cancellation",
            "Reschedule possible if notified 24 hours before lesson start.\nCancellation within 24 hours counts as used; no refund.\nNo-show after 10 min from start = cancellation.",
          ],
          [
            "Instructor-initiated cancellation",
            "Alternative date offered or refund provided.",
          ],
          [
            "Technical issues (connection, Zoom, etc.)",
            "Lesson will be rescheduled.",
          ],
        ],
      },
      {
        title: "Service Validity (Lesson Expiry)",
        items: [
          [
            "Validity",
            "Lesson pack purchases are valid for the month of purchase only. No rollover to next month.",
          ],
        ],
      },
      {
        title: "Returns",
        items: [
          [
            "Returns",
            "Due to the nature of online lessons, services already provided cannot be returned.",
          ],
        ],
      },
      {
        title: "Sales Limits",
        items: [
          [
            "Limits",
            "No specific limits, but availability may be limited by instructor schedules.",
          ],
        ],
      },
      {
        title: "System Requirements",
        items: [
          [
            "Requirements",
            "The following are required:\n\n・Stable internet connection\n\n・Video call app (Zoom, etc.)\n\n・PC / smartphone / tablet",
          ],
        ],
      },
    ],
  },
};

interface LegalPageContentProps {
  locale: Locale;
}

export default function LegalPageContent({ locale }: LegalPageContentProps) {
  const content = LEGAL_CONTENT[locale];

  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            {content.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {content.sections.map((section, idx) => (
              <div
                key={idx}
                className="border border-gray-200 p-6 md:p-8"
              >
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <dl className="space-y-4">
                  {section.items.map(([term, desc], i) => (
                    <div key={i} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                      <dt className="font-medium text-gray-700 sm:w-48 flex-shrink-0">
                        {term}
                      </dt>
                      <dd className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {desc}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
