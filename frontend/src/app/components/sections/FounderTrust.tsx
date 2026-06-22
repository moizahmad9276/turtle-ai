import { User } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { SectionHeader } from "../ui/SectionHeader";

const founders = [
  {
    name: "Noman Ahmed Lodhi",
    roleKey: "founderTrust.role",
    bioKey: "founderTrust.bio",
  },
  {
    name: "Moiz Ahmad",
    roleKey: "founderTrust.role2",
    bioKey: "founderTrust.bio2",
  },
];

export function FounderTrust() {
  const { t } = useLanguage();

  return (
    <section className="bg-transparent py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionHeader
            title={t("founderTrust.title")}
            subtitle={t("founderTrust.desc")}
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map(({ name, roleKey, bioKey }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-[#2d9e6b] to-[#1a7a50] rounded-full flex items-center justify-center mb-6">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">{name}</h3>
              <p className="text-[#2d9e6b] font-semibold mb-4">{t(roleKey)}</p>
              <p className="text-gray-600 leading-relaxed">{t(bioKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
