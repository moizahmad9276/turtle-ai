import { useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const { t } = useLanguage();
  // Close on Escape key press
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
      {/* Click outside wrapper */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0a1f14] border border-emerald-900 rounded-2xl flex flex-col shadow-2xl text-white overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900 bg-[#0a1f14]">
          <div>
            <h3 className="text-[#2d9e6b] font-bold text-xl">TurtleAI</h3>
            <p className="text-xs text-gray-400 mt-0.5">{t("terms.badge")}</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-emerald-950 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s1.title")}</h2>
            <p>{t("terms.s1.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s2.title")}</h2>
            <p>{t("terms.s2.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s3.title")}</h2>
            <p className="mb-4">{t("terms.s3.intro")}</p>
            <ul className="space-y-3 list-none">
              {[
                t("terms.s3.item1"),
                t("terms.s3.item2"),
                t("terms.s3.item3"),
                t("terms.s3.item4"),
                t("terms.s3.item5")
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s4.title")}</h2>
            <p className="mb-4">{t("terms.s4.intro")}</p>
            <ul className="space-y-3 list-none">
              {[
                t("terms.s4.item1"),
                t("terms.s4.item2"),
                t("terms.s4.item3"),
                t("terms.s4.item4"),
                t("terms.s4.item5")
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s5.title")}</h2>
            <p>{t("terms.s5.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s6.title")}</h2>
            <p>{t("terms.s6.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s7.title")}</h2>
            <p>{t("terms.s7.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s8.title")}</h2>
            <p>{t("terms.s8.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s9.title")}</h2>
            <p>{t("terms.s9.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s10.title")}</h2>
            <p>{t("terms.s10.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s11.title")}</h2>
            <p>{t("terms.s11.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s12.title")}</h2>
            <p>{t("terms.s12.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("terms.s13.title")}</h2>
            <p>{t("terms.s13.intro")}</p>
            <div className="mt-4 bg-emerald-955/50 border border-emerald-800 rounded-xl p-5">
              <p className="font-semibold text-white">TurtleAI</p>
              <p className="mt-1 text-sm">{t("terms.email")} <a href="mailto:hello@turtleai.com" className="text-[#2d9e6b] hover:underline">hello@turtleai.com</a></p>
            </div>
          </section>
        </div>

        {/* Footer actions */}
        <div className="flex justify-end p-4 border-t border-emerald-900 bg-[#0a1f14]">
          <button 
            onClick={onClose} 
            className="px-5 py-2 bg-emerald-800 text-white rounded-xl hover:bg-[#2d9e6b] font-medium text-sm transition-all shadow-md"
          >
            {t("terms.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}