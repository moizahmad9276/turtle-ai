import { useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0a1f14] border border-emerald-900 rounded-2xl flex flex-col shadow-2xl text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900 bg-[#0a1f14]">
          <div>
            <h3 className="text-[#2d9e6b] font-bold text-xl">TurtleAI</h3>
            <p className="text-xs text-gray-400 mt-0.5">{t("privacy.badge")}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-emerald-950 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s1.title")}
            </h2>
            <p>{t("privacy.s1.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s2.title")}
            </h2>
            <p className="mb-4">{t("privacy.s2.intro")}</p>
            <ul className="space-y-3 list-none">
              {[
                "privacy.s2.item1",
                "privacy.s2.item2",
                "privacy.s2.item3",
                "privacy.s2.item4",
                "privacy.s2.item5",
              ].map((key, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s3.title")}
            </h2>
            <p className="mb-4">{t("privacy.s3.intro")}</p>
            <ul className="space-y-3 list-none">
              {[
                "privacy.s3.item1",
                "privacy.s3.item2",
                "privacy.s3.item3",
                "privacy.s3.item4",
                "privacy.s3.item5",
                "privacy.s3.item6",
                "privacy.s3.item7",
              ].map((key, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s4.title")}
            </h2>
            <p className="mb-4">{t("privacy.s4.intro")}</p>
            <ul className="space-y-3 list-none">
              {[
                "privacy.s4.item1",
                "privacy.s4.item2",
                "privacy.s4.item3",
                "privacy.s4.item4",
              ].map((key, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s5.title")}
            </h2>
            <p>{t("privacy.s5.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s6.title")}
            </h2>
            <p>{t("privacy.s6.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s7.title")}
            </h2>
            <p className="mb-4">{t("privacy.s7.intro")}</p>
            <ul className="space-y-3 list-none">
              {[
                "privacy.s7.item1",
                "privacy.s7.item2",
                "privacy.s7.item3",
                "privacy.s7.item4",
                "privacy.s7.item5",
                "privacy.s7.item6",
                "privacy.s7.item7",
              ].map((key, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {t("privacy.s7.contact")}{" "}
              <a
                href="mailto:hello@turtleai.com"
                className="text-[#2d9e6b] hover:underline"
              >
                hello@turtleai.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s8.title")}
            </h2>
            <p>{t("privacy.s8.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s9.title")}
            </h2>
            <p>{t("privacy.s9.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s10.title")}
            </h2>
            <p>{t("privacy.s10.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {t("privacy.s11.title")}
            </h2>
            <p>{t("privacy.s11.intro")}</p>
            <div className="mt-4 bg-emerald-950/50 border border-emerald-800 rounded-xl p-5">
              <p className="font-semibold text-white">TurtleAI</p>
              <p className="mt-1 text-sm">
                {t("terms.email")}{" "}
                <a
                  href="mailto:hello@turtleai.com"
                  className="text-[#2d9e6b] hover:underline"
                >
                  hello@turtleai.com
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-emerald-900 bg-[#0a1f14]">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-800 text-white rounded-xl hover:bg-[#2d9e6b] font-medium text-sm transition-all shadow-md"
          >
            {t("privacy.understand")}
          </button>
        </div>
      </div>
    </div>
  );
}
