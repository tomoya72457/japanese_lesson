import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import Button from "../shared/Button";

const instructors = [
  {
    id: 1,
    name: "Sakura Sato",
    furigana: "佐藤 さくら",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Business Japanese", "JLPT N1/N2", "Advanced"],
    location: "Tokyo, Japan",
    bio: "Leveraging overseas sales experience at a major trading company to provide practical business Japanese instruction. From meeting presentations to email writing and cross-cultural communication—develop Japanese skills that make you immediately effective in global business.",
    message:
      "Let's go beyond \"correct Japanese\" and master Japanese that moves people's hearts. I'll fully support your career growth.",
  },
  {
    id: 2,
    name: "Kenta Tanaka",
    furigana: "田中 健太",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Beginners welcome", "Daily conversation", "English support"],
    location: "Vancouver, Canada",
    bio: "5 years of teaching experience at a Canadian language school. Can provide detailed support in English, so even complete beginners feel at ease. Values diversity and creates a relaxed atmosphere.",
    message:
      "In language learning, mistakes are the seeds of success. Let's talk a lot and have fun in a safe environment!",
  },
  {
    id: 3,
    name: "Mayumi Suzuki",
    furigana: "鈴木 真由美",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["JLPT prep", "Interview prep", "Academic"],
    location: "Kyoto, Japan",
    bio: "Long-time instructor at a university international center. Deep knowledge of JLPT trends and strategies for efficient score improvement. Also skilled in logical writing structure and self-expression in interviews.",
    message:
      "Clear strategy is key to reaching your goals. I'll analyze your strengths and challenges and provide customized lessons to get you there fastest.",
  },
  {
    id: 4,
    name: "Takuya Yamada",
    furigana: "山田 拓也",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Conversation skills", "Pronunciation", "Intermediate"],
    location: "Osaka, Japan",
    bio: "NHK language program production experience enables practical conversation and pronunciation instruction. Fun lessons using movies and dramas help you master natural Japanese nuance.",
    message:
      "Language is alive. Let's explore \"Japanese that communicates\" together—something you can't get from textbooks alone.",
  },
  {
    id: 5,
    name: "Misaki Takahashi",
    furigana: "高橋 美咲",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Kids Japanese", "Teacher training", "Culture"],
    location: "Sydney, Australia",
    bio: "Over 10 years at overseas Japanese schools. From fun lessons for children to training for aspiring teachers—wide range of support. Lessons that introduce Japanese culture are highly rated.",
    message:
      "The world of Japanese is infinitely vast. Let's enjoy the journey of learning together, starting from your interests.",
  },
];

export default function InstructorsPageEn() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-[#fdf8e7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Your partners in
            <br className="md:hidden" />
            growth
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Experienced professional Japanese instructors with diverse backgrounds. The right instructor will support you to your goals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-square overflow-hidden p-6 pb-0 min-h-[280px]">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1 border border-gray-100">
                    <MapPin size={12} className="text-[#F3D77A]" />
                    {instructor.location}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {instructor.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {instructor.furigana}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-4">
                    {instructor.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 flex-grow">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {instructor.bio}
                    </p>
                  </div>

                  <div className="mb-8 p-4 bg-[#F3D77A]/10 rounded-xl relative">
                    <div className="absolute top-4 left-4 text-[#F3D77A] opacity-20">
                      <MessageCircle size={32} />
                    </div>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed relative z-10 italic pl-2">
                      &quot;{instructor.message}&quot;
                    </p>
                  </div>

                  <Button variant="outline" className="w-full mt-auto text-sm" href="#">
                    Ask about this instructor
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Not sure which instructor to choose?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Our counselors will listen to your learning goals and level, then recommend the best instructor for you.
          </p>
          <Button variant="dark" icon={<MessageCircle size={18} />} href="#">
            Free LINE learning consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
