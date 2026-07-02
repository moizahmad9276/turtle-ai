import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/logo.png";
import { useBookDemo } from "../../hooks/useBookDemo";
import { LanguageSwitcher } from "../../../context/LanguageSwitcher";
import { useLanguage } from "../../../context/LanguageContext";
import { GreenButton } from "../ui/GreenButton";

const navLinks = [
  { href: "#solutions", key: "nav.solutions" },
  { href: "#industries", key: "nav.industries" },
  { href: "#how-it-works", key: "nav.howItWorks" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#demo", key: "nav.demo" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { openBookDemo } = useBookDemo();

  return (
    <header className="sticky top-0 z-50 bg-[#0a1f14] border-b border-gray-800 backdrop-blur-sm bg-opacity-95">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="TurtleLabs AI" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          {navLinks.map(({ href, key }) => (
            <a key={key} href={href} className="text-gray-300 hover:text-white transition-colors">
              {t(key)}
            </a>
          ))}

          {/* CTA Button & Language Switcher Side-by-Side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <GreenButton onClick={openBookDemo}>{t("nav.bookDemo")}</GreenButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-800">
            {navLinks.map(({ href, key }) => (
              <a key={key} href={href} className="text-gray-300 hover:text-white transition-colors">
                {t(key)}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
