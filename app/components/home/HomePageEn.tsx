"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Globe,
  BookOpen,
  Users,
  Star,
  AlertCircle,
  CreditCard,
  Briefcase,
  GraduationCap,
  FileText,
  MessageSquare,
} from "lucide-react";
import Button from "../shared/Button";
import LineIcon from "../shared/LineIcon";
import LineSection from "./LineSection";

const HERO_BG_URL =
  "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80)";

export default function HomePageEn() {
  const [bgPosition, setBgPosition] = useState<string>("center");

  useEffect(() => {
    const updatePosition = () => {
      setBgPosition(window.innerWidth <= 767 ? "75% center" : "center");
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div>
      <section
        className="relative min-h-[70vh] lg:h-screen w-full overflow-hidden -mt-24 pt-24"
        style={{
          backgroundImage: HERO_BG_URL,
          backgroundSize: "cover",
          backgroundPosition: bgPosition,
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/80"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[70vh] lg:min-h-screen flex items-center py-10 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-gray-900">
              Connect with the world,
              <br />
              <span className="text-primary">Your own</span>
              <br />
              Japanese lessons
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professional instructors with diverse experience support your goals. No complicated apps needed—ask questions and book via LINE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://line.me/R/ti/p/@203ctosj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
              >
                <LineIcon size={18} className="flex-shrink-0" />
                Free LINE Consultation
              </a>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 bg-white/95 border-gray-400 text-gray-900 hover:border-primary hover:bg-white"
                href="/en/instructors"
              >
                View Instructors
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-gray-700">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Student"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p>
                <span className="font-bold text-gray-900">1,000+</span>
                {" "}students learning worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <LineSection locale="en" />

      <section className="py-14 border-y border-gray-100 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
            Popular learning goals
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Briefcase size={28} className="text-primary" />, label: "Business Japanese" },
              { icon: <GraduationCap size={28} className="text-primary" />, label: "Study in Japan" },
              { icon: <FileText size={28} className="text-primary" />, label: "JLPT Prep" },
              { icon: <MessageSquare size={28} className="text-primary" />, label: "Daily Conversation" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 p-5 md:p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center" aria-hidden>
                  {item.icon}
                </span>
                <span className="font-semibold text-gray-700 text-center text-sm md:text-base">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
              Feeling stuck with Japanese?
            </h2>
            <p className="text-gray-500">We listen to your concerns and find solutions together.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lack confidence in conversation",
                desc: "You know the grammar, but words don't come out when it matters",
              },
              {
                title: "Worried about business Japanese",
                desc: "Unsure if your keigo and emails are appropriate",
              },
              {
                title: "Exam scores not improving",
                desc: "Hitting a wall with JLPT reading and listening",
              },
              {
                title: "Struggling to stay motivated",
                desc: "Booking systems feel tedious, motivation fades",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 text-[#F3D77A] border border-gray-100">
                  <AlertCircle size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-gray-900">
                A new learning experience
                <br />
                that brings out your best
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kind Japanese is more than a language lesson. We respect your background and provide an educational platform with the best approach for your goals.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Users size={24} />,
                    title: "Professional instructors with diverse expertise",
                    desc: "From business veterans to exam specialists—find the right instructor for you.",
                  },
                  {
                    icon: <BookOpen size={24} />,
                    title: "Fully customized curriculum",
                    desc: "We create a learning plan tailored to you—strengthen strengths, address weaknesses.",
                  },
                  {
                    icon: <MessageCircle size={24} />,
                    title: "Seamless LINE integration",
                    desc: "From booking to learning support, everything happens in the LINE app you already use.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Friendly instructor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 hidden md:flex">
                <CheckCircle2 className="text-[#F3D77A]" size={24} />
                <span className="font-bold text-gray-900 text-sm">
                  Satisfaction Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
                World-class professional instructors
              </h2>
              <p className="text-gray-500">
                Experienced instructors who meet strict standards support you.
              </p>
            </div>
            <Button
              variant="ghost"
              className="hidden md:flex text-[#F3D77A]"
              href="/en/instructors"
            >
              View all instructors <ArrowRight size={18} className="ml-1" />
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scroll-smooth">
            {[
              { name: "Sakura.S", role: "Business Japanese Expert", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Kenta.T", role: "Beginners & Pronunciation", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Mayumi.S", role: "JLPT & Academic", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Takuya.Y", role: "Conversation & Pronunciation", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Misaki.T", role: "Kids Japanese & Culture", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            ].map((inst, i) => (
              <Link
                key={i}
                href="/en/instructors"
                className="flex-shrink-0 w-[200px] md:w-[240px] group cursor-pointer block"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative">
                  <Image
                    src={inst.img}
                    alt={inst.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      View details <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900">{inst.name}</h3>
                <p className="text-sm text-gray-500">{inst.role}</p>
              </Link>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 md:hidden" href="/en/instructors">
            View all instructors
          </Button>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">
            How to get started
          </h2>
          <p className="text-gray-500 mb-16">
            No complicated procedures. Start easily in 4 simple steps.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200"></div>
            {[
              { num: "01", title: "Add LINE", icon: <MessageCircle /> },
              { num: "02", title: "Goal consultation", icon: <Users /> },
              { num: "03", title: "Schedule & payment", icon: <CreditCard /> },
              { num: "04", title: "Start lessons", icon: <Globe /> },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-primary mb-4 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(243,215,122,0.1)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgba(79,209,197,0.1)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Your first step to
                <br className="md:hidden" />
                unlock your
                <br />
                potential.
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Start with a free LINE consultation. Our staff will listen to your goals and current level, then propose the best learning plan for you.
              </p>
              <a
                href="https://line.me/R/ti/p/@203ctosj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold text-sm rounded-full hover:bg-[#06C755]/90 transition-colors min-w-[44px] min-h-[44px]"
              >
                <LineIcon size={18} className="flex-shrink-0" />
                Start free LINE consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
