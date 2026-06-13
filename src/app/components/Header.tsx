import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-gray-800 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Himana AI" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#industries" className="text-gray-300 hover:text-white transition-colors">
              Industries
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
              Demo
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#2563EB] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
              Book a Demo
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
                Solutions
              </a>
              <a href="#industries" className="text-gray-300 hover:text-white transition-colors">
                Industries
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
                Demo
              </a>
              <button className="bg-[#2563EB] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all mt-2">
                Book a Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
