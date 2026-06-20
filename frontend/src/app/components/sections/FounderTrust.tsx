import { User } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function FounderTrust() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-8">
            {t("founderTrust.title")}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t("founderTrust.desc")}
          </p>
        </div>

        {/* Founder Card */}
        {/* Founder Cards */}
<div className="grid md:grid-cols-2 gap-8">

  {/* Noman */}
  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center">
    <div className="w-32 h-32 bg-gradient-to-br from-[#2d9e6b] to-[#1a7a50] rounded-full flex items-center justify-center mb-6">
      <User className="w-16 h-16 text-white" />
    </div>

    <h3 className="text-2xl font-bold text-[#111827] mb-2">
      {t("founderTrust.name")}
    </h3>

    <p className="text-[#2d9e6b] font-semibold mb-4">
      {t("founderTrust.role")}
    </p>

    <p className="text-gray-600 leading-relaxed">
      {t("founderTrust.bio")}
    </p>
  </div>


  {/* Moiz */}
  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center">
    <div className="w-32 h-32 bg-gradient-to-br from-[#2d9e6b] to-[#1a7a50] rounded-full flex items-center justify-center mb-6">
      <User className="w-16 h-16 text-white" />
    </div>

    <h3 className="text-2xl font-bold text-[#111827] mb-2">
      {t("founderTrust.name2")}
    </h3>

    <p className="text-[#2d9e6b] font-semibold mb-4">
      {t("founderTrust.role2")}
    </p>

    <p className="text-gray-600 leading-relaxed">
      {t("founderTrust.bio2")}
    </p>
  </div>

</div>
      </div>
    </section>
  );
}
