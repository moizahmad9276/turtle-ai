import { useState, useEffect, useRef } from "react";
import { useBookDemo } from "./useBookDemo";

const industryDetails: Record<string, { useCases: string[]; example: string }> = {
  "Real Estate": {
    useCases: ["Qualify buyer & seller leads 24/7", "Schedule property viewings automatically", "Answer FAQs about listings", "Follow up with cold leads"],
    example: "An agent that chats with website visitors, asks budget/location questions, qualifies them, and books a viewing — all without agent involvement."
  },
  "Healthcare": {
    useCases: ["Book appointments & send reminders", "Answer patient FAQs", "Collect pre-visit information", "Handle insurance queries"],
    example: "A clinic assistant that books appointments, collects symptoms in advance, and sends reminders — reducing no-shows by 40%."
  },
  "E-commerce": {
    useCases: ["Handle order tracking & returns", "Recommend products based on preferences", "Recover abandoned carts", "Answer shipping & policy questions"],
    example: "A shopping assistant that recovers abandoned carts via WhatsApp and upsells related products during support conversations."
  },
  "Professional Services": {
    useCases: ["Qualify inbound leads", "Book discovery calls automatically", "Answer service & pricing questions", "Collect client briefs"],
    example: "A law firm assistant that qualifies leads, explains services, and books consultations — handling 80% of enquiries without staff."
  },
  "Education": {
    useCases: ["Answer admissions FAQs", "Guide students through enrollment", "Send course reminders", "Handle fee & schedule queries"],
    example: "An enrollment agent that answers prospective student questions 24/7 and books campus tours or demo classes automatically."
  },
  "SaaS": {
    useCases: ["Onboard new users conversationally", "Handle support tickets & FAQs", "Qualify trial users for sales", "Gather product feedback"],
    example: "A support agent that resolves 70% of tier-1 tickets automatically and escalates complex issues to the right team member."
  }
};

const industries = Object.keys(industryDetails);

export function Industries() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const { openBookDemo } = useBookDemo();
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-rotate unless paused
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setSelected(prev => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  // Resume auto-rotate when section scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPaused(false); // reset when user scrolls away
          setSelected(0);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const detail = industryDetails[industries[selected]];

  return (
    <section ref={sectionRef} id="industries" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-12">
          Built for Multiple Industries
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industries.map((industry, index) => (
            <button
              key={industry}
              onClick={() => {
                setSelected(index);
                setPaused(true); // stop rotating on manual click
              }}
              className={`border-2 rounded-xl px-8 py-4 font-semibold transition-all cursor-pointer ${
                selected === index
                  ? "bg-[#2d9e6b] border-[#2d9e6b] text-white"
                  : "bg-gray-50 border-gray-200 hover:border-[#2d9e6b] text-[#111827]"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 border-2 border-[#2d9e6b] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#111827] mb-6">
            TurtleAI for <span className="text-[#2d9e6b]">{industries[selected]}</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#2d9e6b] font-semibold uppercase tracking-wider text-xs mb-4">What we automate</p>
              <ul className="space-y-3">
                {detail.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-[#2d9e6b] font-semibold uppercase tracking-wider text-xs mb-3">Real example</p>
              <p className="text-gray-600 leading-relaxed">{detail.example}</p>
            </div>
          </div>

          <button
            onClick={openBookDemo}
            className="mt-8 bg-[#2d9e6b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a7a50] transition-all shadow-lg shadow-emerald-500/30"
          >
            Build this for my business →
          </button>
        </div>
      </div>
    </section>
  );
}