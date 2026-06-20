import { Sparkles } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function Founder() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#2d9e6b] bg-opacity-10 px-6 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-[#2d9e6b]" />
          <span className="text-[#2d9e6b] font-semibold">{t("founder.eyebrow")}</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-8">
          {t("founder.title")}
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
          {t("founder.description1")}
        </p>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t("founder.description2")}
        </p>
      </div>
    </section>
  );
}
