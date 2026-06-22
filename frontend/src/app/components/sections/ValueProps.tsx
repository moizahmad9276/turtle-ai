import { Target, Headphones, Calendar, BookOpen } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { SectionHeader } from "../ui/SectionHeader";
import { IconBox } from "../ui/IconBox";

const valueProps = [
  {
    icon: Target,
    title: "valueProps.lead.title",
    description: "valueProps.lead.desc",
  },
  {
    icon: Headphones,
    title: "valueProps.support.title",
    description: "valueProps.support.desc",
  },
  {
    icon: Calendar,
    title: "valueProps.booking.title",
    description: "valueProps.booking.desc",
  },
  {
    icon: BookOpen,
    title: "valueProps.knowledge.title",
    description: "valueProps.knowledge.desc",
  },
];

export function ValueProps() {
  const { t } = useLanguage();

  return (
    <section className="bg-transparent py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t("valueProps.title")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-emerald-700/20 rounded-xl flex items-center justify-center mb-6">
                  <IconBox icon={Icon} size="lg" />
                </div>

                <h3 className="text-xl font-semibold text-[#111827] mb-3">
                  {t(prop.title)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(prop.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
