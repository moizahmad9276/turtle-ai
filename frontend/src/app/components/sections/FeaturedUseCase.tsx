import { useEffect, useState } from "react";
import { Zap, TrendingUp, Clock } from "lucide-react";
import { useBookDemo } from "../../hooks/useBookDemo";
import { useLanguage } from "../../../context/LanguageContext";
import { IconBox } from "../ui/IconBox";
import { GreenButton } from "../ui/GreenButton";
import { SectionHeader } from "../ui/SectionHeader";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: unknown) => void;
        open: () => void;
        close: () => void;
      };
    };
  }
}

const results = [
  { icon: Zap, label: "featured.stat1" },
  { icon: TrendingUp, label: "featured.stat2" },
  { icon: Clock, label: "featured.stat3" },
];

export function FeaturedUseCase() {
  const [chatLoaded, setChatLoaded] = useState(false);
  const { openBookDemo } = useBookDemo();
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.voiceflow?.chat) {
        setChatLoaded(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const openChat = () => {
    try {
      window.voiceflow?.chat?.open();
    } catch (e) {
      console.error("Failed to open chat:", e);
    }
  };

  return (
    <section id="demo" className="bg-transparent text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t("featured.eyebrow")}
          title={t("featured.title")}
          subtitle={t("featured.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {results.map(({ icon, label }, i) => (
            <div
              key={i}
              className="bg-gradient-to-br glass-card rounded-2xl p-6 border border-gray-700 flex items-center gap-4"
            >
              <IconBox icon={icon} size="md" />
              <p className="font-semibold text-lg">{t(label)}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GreenButton onClick={openChat}>{t("featured.openChat")}</GreenButton>
          <GreenButton variant="outline" onClick={openBookDemo}>
            {t("featured.bookDemo")}
          </GreenButton>
        </div>
      </div>
    </section>
  );
}
