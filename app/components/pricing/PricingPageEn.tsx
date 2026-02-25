import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import Button from "../shared/Button";

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
          <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              <div className="text-center md:text-left">
                <div className="inline-block bg-[#F3D77A]/20 text-[#F3D77A] px-3 py-1 rounded-full text-xs font-bold mb-4">
                  ¥0 enrollment & system fee
                </div>
                <h2 className="text-2xl text-gray-500 font-bold mb-2">
                  Base rate (25 min/session)
                </h2>
                <div className="flex items-baseline justify-center md:justify-start gap-1 text-gray-900">
                  <span className="text-3xl font-bold">¥</span>
                  <span className="text-6xl font-extrabold tracking-tighter">
                    3,000
                  </span>
                  <span className="text-xl font-medium text-gray-500">~</span>
                </div>
              </div>

              <div className="w-full md:w-auto flex-1 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#F3D77A]" />
                  What's included
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    One-on-one online lesson (25 min)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Customized curriculum
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    LINE support for learning & rescheduling
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-8 text-center md:text-left">
              *Rates may vary by instructor for specialized content (advanced business Japanese, technical terms, specific exam prep). Details provided at quote.
            </p>
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
          <Button
            variant="dark"
            icon={<MessageCircle size={20} />}
            className="text-lg px-10 py-4"
            href="#"
          >
            Consult about pricing via LINE
          </Button>
        </div>
      </section>
    </div>
  );
}
