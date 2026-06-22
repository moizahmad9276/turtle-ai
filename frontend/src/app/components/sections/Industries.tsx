import { useState, useEffect, useRef } from "react";
import { useBookDemo } from "../../hooks/useBookDemo";
import { useLanguage } from "../../../context/LanguageContext";
import { SectionHeader } from "../ui/SectionHeader";
import { GreenButton } from "../ui/GreenButton";

const industryDetails: Record<string, { useCases: string[]; example: string }> =
{
  "industries.realEstate": {
    useCases: [
      "industries.re.uc1",
      "industries.re.uc2",
      "industries.re.uc3",
      "industries.re.uc4",
    ],
    example: "industries.re.example",
  },
  "industries.healthcare": {
    useCases: [
      "industries.hc.uc1",
      "industries.hc.uc2",
      "industries.hc.uc3",
      "industries.hc.uc4",
    ],
    example: "industries.hc.example",
  },
  "industries.ecommerce": {
    useCases: [
      "industries.ec.uc1",
      "industries.ec.uc2",
      "industries.ec.uc3",
      "industries.ec.uc4",
    ],
    example: "industries.ec.example",
  },
  "industries.professional": {
    useCases: [
      "industries.ps.uc1",
      "industries.ps.uc2",
      "industries.ps.uc3",
      "industries.ps.uc4",
    ],
    example: "industries.ps.example",
  },
  "industries.education": {
    useCases: [
      "industries.ed.uc1",
      "industries.ed.uc2",
      "industries.ed.uc3",
      "industries.ed.uc4",
    ],
    example: "industries.ed.example",
  },
  "industries.saas": {
    useCases: [
      "industries.saas.uc1",
      "industries.saas.uc2",
      "industries.saas.uc3",
      "industries.saas.uc4",
    ],
    example: "industries.saas.example",
  },
};

const industries = Object.keys(industryDetails);

export function Industries() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const { openBookDemo } = useBookDemo();
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setSelected((prev) => (prev + 1) % industries.length),
      3000,
    );
    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPaused(false);
          setSelected(0);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const detail = industryDetails[industries[selected]];

  return (
    <section ref={sectionRef} id="industries" className="bg-transparent py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t("industries.title")} />

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industries.map((industry, index) => (
            <button
              key={industry}
              onClick={() => {
                setSelected(index);
                setPaused(true);
              }}
              className={`border-2 rounded-xl px-8 py-4 font-semibold transition-all ${selected === index
                ? "bg-[#2d9e6b] border-[#2d9e6b] text-white"
                : "bg-gray-50 border-gray-200 hover:border-[#2d9e6b] text-[#111827]"
                }`}
            >
              {t(industry)}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="bg-gray-50 border-2 border-[#2d9e6b] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#111827] mb-6">
            {t("industries.turtleAIFor")}{" "}
            <span className="text-[#2d9e6b]">{t(industries[selected])}</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#2d9e6b] font-semibold uppercase tracking-wider text-xs mb-4">
                {t("industries.automate")}
              </p>
              <ul className="space-y-3">
                {detail.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{t(uc)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0a1f14] border border-gray-200 rounded-xl p-6">
              <p className="text-[#2d9e6b] font-semibold uppercase tracking-wider text-xs mb-3">
                {t("industries.example")}
              </p>
              <p className="text-white leading-relaxed">
                {t(detail.example)}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <GreenButton onClick={openBookDemo}>
              {t("industries.cta")}
            </GreenButton>
          </div>
        </div>
      </div>
    </section>
  );
}
