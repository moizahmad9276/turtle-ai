import { useState } from "react";
import logo from "../../../assets/logo.png";
import { useLanguage } from "../../../context/LanguageContext";
import { SectionHeader } from "../ui/SectionHeader";

type Message = {
  role: "agent" | "caller";
  text: string;
};

type UseCase = {
  industry: string;
  emoji: string;
  problem: string;
  outcome: string;
  conversation: Message[];
};

const useCases: UseCase[] = [
  {
    industry: "useCases.dental.industry",
    emoji: "🦷",
    problem: "useCases.dental.problem",
    outcome: "useCases.dental.outcome",
    conversation: [
      { role: "agent", text: "useCases.dental.conv1.agent" },
      { role: "caller", text: "useCases.dental.conv2.caller" },
      { role: "agent", text: "useCases.dental.conv3.agent" },
      { role: "caller", text: "useCases.dental.conv4.caller" },
      { role: "agent", text: "useCases.dental.conv5.agent" },
      { role: "caller", text: "useCases.dental.conv6.caller" },
      { role: "agent", text: "useCases.dental.conv7.agent" },
    ],
  },
  {
    industry: "useCases.law.industry",
    emoji: "⚖️",
    problem: "useCases.law.problem",
    outcome: "useCases.law.outcome",
    conversation: [
      { role: "agent", text: "useCases.law.conv1.agent" },
      { role: "caller", text: "useCases.law.conv2.caller" },
      { role: "agent", text: "useCases.law.conv3.agent" },
      { role: "caller", text: "useCases.law.conv4.caller" },
      { role: "agent", text: "useCases.law.conv5.agent" },
      { role: "caller", text: "useCases.law.conv6.caller" },
      { role: "agent", text: "useCases.law.conv7.agent" },
    ],
  },
  {
    industry: "useCases.salon.industry",
    emoji: "💆",
    problem: "useCases.salon.problem",
    outcome: "useCases.salon.outcome",
    conversation: [
      { role: "agent", text: "useCases.salon.conv1.agent" },
      { role: "caller", text: "useCases.salon.conv2.caller" },
      { role: "agent", text: "useCases.salon.conv3.agent" },
      { role: "caller", text: "useCases.salon.conv4.caller" },
      { role: "agent", text: "useCases.salon.conv5.agent" },
      { role: "caller", text: "useCases.salon.conv6.caller" },
      { role: "agent", text: "useCases.salon.conv7.agent" },
    ],
  },
  {
    industry: "useCases.realestate.industry",
    emoji: "🏠",
    problem: "useCases.realestate.problem",
    outcome: "useCases.realestate.outcome",
    conversation: [
      { role: "agent", text: "useCases.realestate.conv1.agent" },
      { role: "caller", text: "useCases.realestate.conv2.caller" },
      { role: "agent", text: "useCases.realestate.conv3.agent" },
      { role: "caller", text: "useCases.realestate.conv4.caller" },
      { role: "agent", text: "useCases.realestate.conv5.agent" },
      { role: "caller", text: "useCases.realestate.conv6.caller" },
      { role: "agent", text: "useCases.realestate.conv7.agent" },
    ],
  },
  {
    industry: "useCases.hvac.industry",
    emoji: "🔧",
    problem: "useCases.hvac.problem",
    outcome: "useCases.hvac.outcome",
    conversation: [
      { role: "agent", text: "useCases.hvac.conv1.agent" },
      { role: "caller", text: "useCases.hvac.conv2.caller" },
      { role: "agent", text: "useCases.hvac.conv3.agent" },
      { role: "caller", text: "useCases.hvac.conv4.caller" },
      { role: "agent", text: "useCases.hvac.conv5.agent" },
      { role: "caller", text: "useCases.hvac.conv6.caller" },
      { role: "agent", text: "useCases.hvac.conv7.agent" },
    ],
  },
  {
    industry: "useCases.restaurant.industry",
    emoji: "🍽️",
    problem: "useCases.restaurant.problem",
    outcome: "useCases.restaurant.outcome",
    conversation: [
      { role: "agent", text: "useCases.restaurant.conv1.agent" },
      { role: "caller", text: "useCases.restaurant.conv2.caller" },
      { role: "agent", text: "useCases.restaurant.conv3.agent" },
      { role: "caller", text: "useCases.restaurant.conv4.caller" },
      { role: "agent", text: "useCases.restaurant.conv5.agent" },
      { role: "caller", text: "useCases.restaurant.conv6.caller" },
      { role: "agent", text: "useCases.restaurant.conv7.agent" },
    ],
  },
];

export function UseCases() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number>(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="bg-[#0a1f14] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          eyebrow={t("useCases.realCall")}
          title={t("useCases.title")}
          subtitle={t("useCases.subtitle")}
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Industry selector */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {useCases.map((uc, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl font-semibold text-left whitespace-nowrap lg:whitespace-normal transition-all flex-shrink-0 lg:flex-shrink ${active === i
                    ? "bg-[#2d9e6b] text-white shadow-lg shadow-emerald-500/30"
                    : "bg-emerald-950/40 border border-emerald-900 text-gray-400 hover:border-[#2d9e6b] hover:text-white"
                  }`}
              >
                <span className="text-2xl">{uc.emoji}</span>
                <span className="text-sm">{t(uc.industry)}</span>
              </button>
            ))}
          </div>

          {/* Conversation panel */}
          <div className="bg-[#0d2318] border border-emerald-900 rounded-2xl overflow-hidden">
            {/* Panel header */}
            <div className="bg-emerald-950/60 border-b border-emerald-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{current.emoji}</span>
                <div>
                  <p className="font-semibold text-white">
                    {t(current.industry)}
                  </p>
                  <p className="text-xs text-gray-400">{t(current.problem)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">
                  {t("useCases.liveDemo")}
                </span>
              </div>
            </div>

            {/* Conversation */}
            <div className="p-6 space-y-4 min-h-[380px]">
              {current.conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "caller" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "agent" && (
                    <div className="w-7 h-7 rounded-full overflow-hidden mr-2 flex-shrink-0 mt-1">
                      <img
                        src={logo}
                        alt="TurtleAI"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "agent"
                        ? "bg-emerald-950 border border-emerald-800 text-gray-200 rounded-tl-none"
                        : "bg-[#2d9e6b] text-white rounded-tr-none"
                      }`}
                  >
                    {t(msg.text)}
                  </div>
                  {msg.role === "caller" && (
                    <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-xs ml-2 flex-shrink-0 mt-1">
                      👤
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Outcome bar */}
            <div className="border-t border-emerald-900 px-6 py-4 bg-emerald-950/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3">
                    <path
                      d="M4 10.5l4 4 8-8"
                      stroke="#4ade80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">
                  <span className="text-emerald-400 font-semibold">
                    {t("useCases.result")}{" "}
                  </span>
                  {t(current.outcome)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
