import {
  MessageSquare,
  MessageCircle,
  Headphones,
  Target,
  Calendar,
  BrainCircuit,
} from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { SectionHeader } from "../ui/SectionHeader";
import { IconBox } from "../ui/IconBox";

const solutions = [
  {
    icon: MessageSquare,
    title: "solutions.chatbot.title",
    description: "solutions.chatbot.desc",
  },
  {
    icon: MessageCircle,
    title: "solutions.whatsapp.title",
    description: "solutions.whatsapp.desc",
  },
  {
    icon: Headphones,
    title: "solutions.support.title",
    description: "solutions.support.desc",
  },
  {
    icon: Target,
    title: "solutions.sales.title",
    description: "solutions.sales.desc",
  },
  {
    icon: Calendar,
    title: "solutions.appointment.title",
    description: "solutions.appointment.desc",
  },
  {
    icon: BrainCircuit,
    title: "solutions.internal.title",
    description: "solutions.internal.desc",
  },
];

export function Solutions() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="bg-transparent text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t("solutions.title")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br glass-card rounded-2xl p-8 border border-gray-700 hover:border-[#2d9e6b] transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-emerald-700/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-700/30 transition-all">
                  <IconBox icon={Icon} size="lg" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(solution.title)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(solution.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
