import type { Locale } from "@/app/constants/locale";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Zineb Naoum",
    location: "Italy",
    rating: 5,
    text: "I like it — it's very professional, and I think he is good at helping people learn Japanese. I'm planning to take 4–6 lessons. ありがとうございます、たけし。",
  },
  {
    name: "D.D.",
    location: "Indonesia",
    rating: 5,
    text: "It's very good, and the sensei makes me understand Japanese even more!",
  },
  {
    name: "L.L.",
    location: "Springfield, IL / United States",
    rating: 5,
    text: "Takeshi introduced himself clearly, and I was able to understand the majority of the lesson. He made me feel proud of my efforts in trying to understand. I'm glad I did a trial lesson and wouldn't hesitate to take more.",
  },
  {
    name: "R.S.",
    location: "Hyderabad / India",
    rating: 5,
    text: "Takeshi-san is an absolute gem! He was so sweet, patient, and kind to me. He encouraged me while waiting for me to find the right Japanese words and taught me new words and sentences. I truly enjoyed learning something new!",
  },
  {
    name: "R.Q.T",
    location: "Perú",
    rating: 5,
    text: "Nice teacher, very patient, kind and also he does his best to communicate with me in english. I really enjoyed this pre-lesson.",
  },
  {
    name: "Nic B",
    location: "America – Colorado",
    rating: 5,
    text: "I was able to meet with Seina-sensei for my introductory lesson. She was very warm and welcoming, which made me feel much less self-conscious when trying to speak Japanese. We briefly covered introductions, culture-based vocabulary, and reviewed pictures to build context and understanding. I'm really looking forward to future lessons and improving my conversational Japanese! Thank you so much, Seina-sensei!!",
  },
];

const PAGE_CONTENT = {
  ja: {
    title: "受講生の声",
    subtitle: "レッスンを受けた方のリアルな感想",
  },
  en: {
    title: "Student Reviews",
    subtitle: "What our students say",
  },
};

interface ReviewsPageContentProps {
  locale: Locale;
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} className="fill-[#F3D77A] text-[#F3D77A]" />
      ))}
    </div>
  );
}

export default function ReviewsPageContent({ locale }: ReviewsPageContentProps) {
  const content = PAGE_CONTENT[locale];

  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            {content.title}
          </h1>
          <p className="text-gray-600">{content.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="border border-gray-200 p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                    <Quote size={24} className="text-gray-400" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                      <StarRating count={review.rating} />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-left">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
