import { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGES } from "./LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage, loading } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-emerald-900/40 hover:bg-emerald-800/50 border border-emerald-800 hover:border-[#2d9e6b] px-3 py-2 rounded-lg transition-all text-sm font-medium text-white"
        aria-label="Select language"
      >
        {/* CHANGED HERE: Replaced span with img tag */}
        <img
          src={current.flag}
          alt={`${current.name} flag`}
          className="w-5 h-3.5 object-cover rounded-sm"
        />
        <span className="hidden sm:inline">
          {current.code === "uk"
            ? "UA"
            : current.code === "ur"
              ? "PK"
              : current.code === "ar"
                ? "SA"
                : current.code.toUpperCase()}
        </span>
        {loading ? (
          <svg
            className="w-3 h-3 animate-spin text-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className={`w-3 h-3 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M5 7.5l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-[#0d2318] border border-emerald-900 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all ${
                language === lang.code
                  ? "bg-[#2d9e6b] text-white font-semibold"
                  : "text-gray-300 hover:bg-emerald-900/40 hover:text-white"
              }`}
            >
              {/* CHANGED HERE: Replaced span with img tag inside the loop */}
              <img
                src={lang.flag}
                alt={`${lang.name} flag`}
                className="w-5 h-3.5 object-cover rounded-sm shrink-0"
              />
              <span>{lang.name}</span>
              {language === lang.code && (
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-4 h-4 ml-auto"
                >
                  <path
                    d="M4 10.5l4 4 8-8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
