import { useEffect, useState } from "react";
import { Zap, TrendingUp, Clock } from "lucide-react";
import { useBookDemo } from "../../hooks/useBookDemo";
import { useLanguage } from "../../../context/LanguageContext";

// Declare Voiceflow types for TypeScript
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

  // Function to programmatically open the chat widget
  const openChat = () => {
    if (window.voiceflow?.chat) {
      try {
        window.voiceflow.chat.open();
      } catch (error) {
        console.error('Failed to open Voiceflow chat:', error);
      }
    }
  };

  const results = [
    {
      icon: Zap,
      label: t("featured.stat1")
    },
    {
      icon: TrendingUp,
      label: t("featured.stat2")
    },
    {
      icon: Clock,
      label: t("featured.stat3")
    }
  ];

  return (
    <section id="demo" className="bg-[#0a1f14] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#2d9e6b] bg-opacity-20 px-6 py-2 rounded-full mb-6">
            <span className="text-white font-semibold">{t("featured.eyebrow")}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("featured.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("featured.subtitle")}
          </p>
        </div>

        {/* Results Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-emerald-700/20 rounded-xl flex items-center justify-center flex-shrink-0">
  <Icon className="w-6 h-6 text-[#2d9e6b]" />
</div>
                <p className="font-semibold text-lg">{result.label}</p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openChat}
            className="bg-[#2d9e6b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a7a50] transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
          >
            {t("featured.openChat")}
          </button>
          <button onClick={openBookDemo} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0a1f14] transition-all">
            {t("featured.bookDemo")}
          </button>
        </div>
      </div>
    </section>
  );
}
