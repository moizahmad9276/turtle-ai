import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/logo.png";
import { useBookDemo } from "../../hooks/useBookDemo";
import { LanguageSwitcher } from "../../../context/LanguageSwitcher";
import { useLanguage } from "../../../context/LanguageContext";

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
            <img 
              src={logo} 
              alt="TurtleAI" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.solutions")}
            </a>
            <a href="#industries" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.industries")}
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.howItWorks")}
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.pricing")}
            </a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.demo")}
            </a>
          </nav>

          {/* CTA Button & Language Switcher Side-by-Side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              onClick={openBookDemo} 
              className="bg-[#2d9e6b] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1a7a50] transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 whitespace-nowrap"
            >
              {t("nav.bookDemo")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
                {t("nav.solutions")}
              </a>
              <a href="#industries" className="text-gray-300 hover:text-white transition-colors">
                {t("nav.industries")}
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                {t("nav.howItWorks")}
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                {t("nav.pricing")}
              </a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
                {t("nav.demo")}
              </a>
              <div className="flex flex-col gap-4 pt-2 border-t border-gray-800">
                <LanguageSwitcher />
                <button onClick={openBookDemo} className="bg-[#2d9e6b] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1a7a50] transition-all">
                  {t("nav.bookDemo")}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}