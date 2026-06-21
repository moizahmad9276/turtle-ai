import { MessageSquare, Users, Calendar, Mail } from "lucide-react";
import { useBookDemo } from "../../hooks/useBookDemo";
import { useLanguage } from "../../../context/LanguageContext";
import { GreenButton } from "../ui/GreenButton";

const integrations = [
  { icon: Users, key: "hero.crm" },
  { icon: Calendar, key: "hero.calendar" },
  { icon: Mail, key: "hero.email" },
  { icon: MessageSquare, key: "hero.whatsapp" },
];

export function Hero() {
  const { t } = useLanguage();
  const { openBookDemo } = useBookDemo();

  return (
    <section className="bg-[#0a1f14] text-white py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GreenButton onClick={openBookDemo}>
                {t("hero.bookDemo")}
              </GreenButton>
              <GreenButton
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("use-cases")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.seeUseCases")}
              </GreenButton>
            </div>
            <p className="text-gray-400 text-sm">{t("hero.fastSetup")}</p>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2d9e6b] rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{t("hero.dashboard")}</p>
                    <p className="text-xs text-gray-400">
                      {t("hero.liveActive")}
                    </p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>

              {/* Chat preview */}
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-3">
                  {t("hero.chatWidgetPreview")}
                </p>
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

              {/* Lead captured */}
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-3">
                  {t("hero.leadCaptured")}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t("hero.name")}</span>
                    <span>John Smith</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t("hero.email")}</span>
                    <span>john@company.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t("hero.intent")}</span>
                    <span className="text-green-400">
                      {t("hero.qualified")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Integrations */}
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-3">
                  {t("hero.activeIntegrations")}
                </p>
                <div className="flex gap-3">
                  {integrations.map(({ icon: Icon, key }) => (
                    <div
                      key={key}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700"
                    >
                      <Icon className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#2d9e6b] opacity-20 blur-3xl -z-10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
