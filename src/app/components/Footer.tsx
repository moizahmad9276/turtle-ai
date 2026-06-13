import { Twitter, Linkedin, Github, Instagram, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Himana AI" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI agents that automate customer conversations, qualify leads, and integrate with your business tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#solutions" className="block text-gray-400 hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#industries" className="block text-gray-400 hover:text-white transition-colors">
                Industries
              </a>
              <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#demo" className="block text-gray-400 hover:text-white transition-colors">
                Demo
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@himana.ai" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@himana.ai
              </a>
              
              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Himana AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
