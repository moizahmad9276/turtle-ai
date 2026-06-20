import { MessageSquare, Users, Calendar, Mail } from "lucide-react";
import { useBookDemo } from "../../hooks/useBookDemo";
import { useLanguage } from "../../../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const { openBookDemo } = useBookDemo();
  return (
    <section className="bg-[#0a1f14] text-white py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
             {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openBookDemo} className="bg-[#2d9e6b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a7a50] transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50">
                {t("hero.bookDemo")}
              </button>
              <button
  onClick={() => document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" })}
  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0a1f14] transition-all"
>
  {t("hero.seeUseCases")}
</button>
            </div>
            <p className="text-gray-400 text-sm pt-4">
              {t("hero.fastSetup")}
            </p>
          </div>

          {/* Right Side - AI Dashboard Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2d9e6b] rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{t("hero.dashboard")}</p>
                    <p className="text-xs text-gray-400">{t("hero.liveActive")}</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Chat Widget Preview */}
              <div className="bg-gray-900 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-400 mb-3">{t("hero.chatWidgetPreview")}</p>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-[#2d9e6b] rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-3 h-3" />
                    </div>
                    <div className="bg-gray-800 rounded-lg rounded-tl-none p-3 text-sm">
                      {t("hero.chatPreview")}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#2d9e6b] rounded-lg rounded-tr-none p-3 text-sm max-w-[200px]">
                      {t("hero.chatMessage")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Captured Fields */}
              <div className="bg-gray-900 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-400 mb-3">{t("hero.leadCaptured")}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("hero.name")}</span>
                    <span>John Smith</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("hero.email")}</span>
                    <span>john@company.com</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("hero.intent")}</span>
                    <span className="text-green-400">{t("hero.qualified")}</span>
                  </div>
                </div>
              </div>

              {/* Integrations */}
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-3">{t("hero.activeIntegrations")}</p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">{t("hero.crm")}</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">{t("hero.calendar")}</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">{t("hero.email")}</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">{t("hero.whatsapp")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-[#2d9e6b] opacity-20 blur-3xl -z-10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
