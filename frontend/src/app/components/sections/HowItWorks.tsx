import { Search, PenTool, Code, Rocket, BarChart } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { IconBox } from "../ui/IconBox";
import { SectionHeader } from "../ui/SectionHeader";

const steps = [
  {
    icon: Search,
    title: "howItWorks.step1.title",
    description: "howItWorks.step1.desc",
  },
  {
    icon: PenTool,
    title: "howItWorks.step2.title",
    description: "howItWorks.step2.desc",
  },
  {
    icon: Code,
    title: "howItWorks.step3.title",
    description: "howItWorks.step3.desc",
  },
  {
    icon: Rocket,
    title: "howItWorks.step4.title",
    description: "howItWorks.step4.desc",
  },
  {
    icon: BarChart,
    title: "howItWorks.step5.title",
    description: "howItWorks.step5.desc",
  },
];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t("howItWorks.title")} light={false} />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Step number + connector line */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#2d9e6b] text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-gray-200" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <IconBox icon={step.icon} size="md" />
                  <div>
                    <h3 className="text-2xl font-semibold text-[#111827] mb-2">
                      {t(step.title)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(step.description)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
