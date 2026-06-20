import { Users, Clock, Save, TrendingUp } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Benefits() {
  const { t } = useLanguage();
  const benefits = [
    {
      icon: Users,
      title: t("benefits.capture.title"),
      description: t("benefits.capture.desc")
    },
    {
      icon: Clock,
      title: t("benefits.availability.title"),
      description: t("benefits.availability.desc")
    },
    {
      icon: Save,
      title: t("benefits.save.title"),
      description: t("benefits.save.desc")
    },
    {
      icon: TrendingUp,
      title: t("benefits.increase.title"),
      description: t("benefits.increase.desc")
    }
  ];

  return (
    <section className="bg-[#0a1f14] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          {t("benefits.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#2d9e6b] transition-all group relative overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d9e6b] to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#2d9e6b] bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all">
                    <Icon className="w-7 h-7 text-[#2d9e6b]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
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
