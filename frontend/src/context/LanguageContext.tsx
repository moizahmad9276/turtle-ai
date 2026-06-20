import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import enFallback from "../locales/en";

// ─── Types ────────────────────────────────────────────────────────────────────
export type LanguageCode = "en" | "de" | "fr" | "es" | "uk" | "ar" | "ur";

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  languages: Language[];
  loading: boolean;
  isRTL: boolean;
}

// ─── Supported languages (static list for the switcher) ──────────────────────
export const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
      { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
      { code: "fr", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
      { code: "es", name: "Español", flag: "https://flagcdn.com/w40/es.png" },
      { code: "uk", name: "Українська", flag: "https://flagcdn.com/w40/ua.png" }, // Note: ua for Ukraine
      { code: "ar", name: "العربية", flag: "https://flagcdn.com/w40/sa.png" }, 
      { code: "ur", name: "اردو", flag: "https://flagcdn.com/w40/pk.png" },   // Note: pk for Pakistan
];

const RTL_LANGUAGES: LanguageCode[] = ["ar", "ur"];

const CACHE_KEY = (lang: string) => `turtleai_translations_${lang}`;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// ─── Context ─────────────────────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
  languages: LANGUAGES,
  loading: false,
  isRTL: false,
});

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    return (localStorage.getItem("turtleai_lang") as LanguageCode) || "en";
  });

  const [translations, setTranslations] = useState<Record<string, string>>(enFallback);
  const [loading, setLoading] = useState(false);

  const isRTL = RTL_LANGUAGES.includes(language);

  // ── Fetch from backend with cache + fallback logic ──────────────────────
  const loadTranslations = useCallback(async (lang: LanguageCode) => {
    // English — always use the bundled fallback, no network needed
    if (lang === "en") {
      setTranslations(enFallback);
      return;
    }

    setLoading(true);

    try {
      // 1. Check localStorage cache
      const cached = localStorage.getItem(CACHE_KEY(lang));
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          setTranslations(data);
          setLoading(false);

          // Refresh cache in background (stale-while-revalidate)
          fetchAndCache(lang).catch(() => {});
          return;
        }
      }

      // 2. Fetch from backend
      await fetchAndCache(lang);
    } catch {
      // 3. Backend down — try stale cache
      const cached = localStorage.getItem(CACHE_KEY(lang));
      if (cached) {
        const { data } = JSON.parse(cached);
        setTranslations(data);
        console.warn(`[i18n] Backend unreachable — using stale cache for [${lang}]`);
      } else {
        // 4. No cache — fallback to English
        setTranslations(enFallback);
        console.warn(`[i18n] Backend unreachable, no cache — falling back to English`);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  async function fetchAndCache(lang: LanguageCode) {
    const res = await fetch(`${API_URL}/api/translations?lang=${lang}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { translations: data } = await res.json();

    // Merge with English fallback so missing keys always resolve
    const merged = { ...enFallback, ...data };
    setTranslations(merged);

    // Save to cache
    localStorage.setItem(
      CACHE_KEY(lang),
      JSON.stringify({ data: merged, timestamp: Date.now() })
    );
  }

  // ── Set HTML dir for RTL support ─────────────────────────────────────────
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  // ── Load translations when language changes ───────────────────────────────
  useEffect(() => {
    loadTranslations(language);
  }, [language, loadTranslations]);

  const setLanguage = (lang: LanguageCode) => {
    localStorage.setItem("turtleai_lang", lang);
    setLanguageState(lang);
  };

  // ── Translation function ─────────────────────────────────────────────────
  const t = useCallback(
    (key: string): string => {
      return translations[key] ?? enFallback[key] ?? key;
    },
    [translations]
  );

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, languages: LANGUAGES, loading, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useLanguage() {
  return useContext(LanguageContext);
}