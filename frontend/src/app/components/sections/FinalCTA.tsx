import { ArrowRight, Mail } from "lucide-react";
import { useBookDemo } from "../../hooks/useBookDemo";
import { useLanguage } from "../../../context/LanguageContext";
import { GreenButton } from "../ui/GreenButton";

export function FinalCTA() {
  const { openBookDemo } = useBookDemo();
  const { t } = useLanguage();

  return (
    <section className="bg-[#0a1f14] text-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-6xl font-bold">
          {t("finalCta.title")}
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t("finalCta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GreenButton onClick={openBookDemo} size="lg">
            {t("finalCta.bookDemo")}{" "}
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </GreenButton>
          <a
            href="mailto:hello@turtleai.com"
            className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0a1f14] transition-all inline-flex items-center justify-center gap-3"
          >
            <Mail className="w-5 h-5" />
            {t("finalCta.contact")}
          </a>
        </div>
        <p className="text-gray-400 text-sm">{t("finalCta.badge")}</p>
      </div>
    </section>
  );
}
