import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import LineIcon from "../shared/LineIcon";

export default function PricingPageEn() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Simple, transparent
            <br />
            pricing
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            No enrollment fee.
            <br className="md:hidden" />
            A flexible system—pay only for what you need, at your own pace.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 md:p-14 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    name: "Single Lesson",
                    price: "$20",
                    detail: "$20 / lesson",
                  },
                  {
                    name: "Mini Pack (5 lessons)",
                    price: "$95",
                    detail: "Save $5, $19 / lesson",
                  },
                  {
                    name: "Growth Pack (10 lessons)",
                    price: "$170",
                    detail: "Save $30, $17 / lesson",
                  },
                  {
                    name: "Master Pack (15+ lessons)",
                    price: "$225+",
                    detail: "Save $75+, $15 / lesson",
                  },
                ].map((plan, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 p-6 flex flex-col justify-between"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-2xl font-extrabold text-gray-900 mb-1">
                      {plan.price}
                    </div>
                    <p className="text-sm text-gray-600">{plan.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                All lesson packs must be used within the month they are purchased. Unused lessons cannot be carried over to the next month.
              </p>

              <p className="text-gray-400 text-xs">
                *Rates may vary by instructor for specialized content (advanced business Japanese, technical terms, specific exam prep). Details provided at quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Smart payment
            </h2>
            <p className="text-gray-500">
              Secure online payment system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle size={28} />,
                title: "1. Set conditions",
                desc: "Tell us your preferred schedule and instructor via LINE.",
              },
              {
                icon: <CreditCard size={28} />,
                title: "2. Online payment",
                desc: "Pay by credit card via our secure link.",
              },
              {
                icon: <CheckCircle2 size={28} />,
                title: "3. Booking complete",
                desc: "After payment confirmation, we send your lesson URL.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center relative"
              >
                {idx < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-gray-300 w-6 h-6 z-10" />
                )}
                <div className="w-14 h-14 rounded-xl bg-[#F3D77A]/20 flex items-center justify-center text-[#F3D77A] mb-6">
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
            Start with a quote
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            "What would monthly cost for once a week?" or "I want to know costs for intensive study"—we'll create a free quote tailored to your plan via LINE.
          </p>
          <a
            href="https://line.me/R/ti/p/@203ctosj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold text-base rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[56px]"
          >
            <LineIcon size={22} className="flex-shrink-0" />
            Consult about pricing via LINE
          </a>
        </div>
      </section>
    </div>
  );
}
