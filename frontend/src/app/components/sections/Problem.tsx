import { UserX, Clock, TrendingDown, Globe } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

const problems = [
  { icon: UserX,       title: "problem.visitors.title",     description: "problem.visitors.desc" },
  { icon: Clock,       title: "problem.agents.title",       description: "problem.agents.desc" },
  { icon: TrendingDown, title: "problem.slow.title",        description: "problem.slow.desc" },
  { icon: Globe,       title: "problem.international.title", description: "problem.international.desc" },
];

export function Problem() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] text-center mb-16">
          {t("problem.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                    {t(problem.title)}
                  </h3>
                  <p className="text-gray-600">
                    {t(problem.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
