import { useEffect } from "react";
import { X } from "lucide-react"; // Optional: if lucide-react is installed, otherwise use an inline SVG

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0a1f14] border border-emerald-900 rounded-2xl flex flex-col shadow-2xl text-white overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900 bg-[#0a1f14]">
          <div>
            <h3 className="text-[#2d9e6b] font-bold text-xl">TurtleAI</h3>
            <p className="text-xs text-gray-400 mt-0.5">Privacy Policy</p>
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
            <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>TurtleAI ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI agent services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="space-y-3 list-none">
              {[
                "Personal identification information (name, email address, phone number, company name) when you fill out a contact or quote form.",
                "Usage data including IP address, browser type, pages visited, and time spent on our website.",
                "Communication data including messages you send us via email, chat, or contact forms.",
                "Calendar and scheduling data when you book a demo through our Calendly integration.",
                "Conversation data from AI agent interactions deployed on your behalf, as governed by your service agreement."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="space-y-3 list-none">
              {[
                "Provide, operate, and maintain our services.",
                "Respond to your inquiries and fulfill your requests.",
                "Send you service-related communications including confirmations and updates.",
                "Improve and personalize your experience on our website.",
                "Analyze usage patterns to enhance our AI agent offerings.",
                "Comply with legal obligations and enforce our terms.",
                "Contact you about products, services, or events that may interest you (with your consent)."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal data. We may share your information with:</p>
            <ul className="space-y-3 list-none">
              {[
                "Service providers who assist in operating our website and services (e.g. Calendly, email providers, cloud hosting), bound by confidentiality agreements.",
                "Business partners only with your explicit consent.",
                "Legal authorities if required by law or to protect our rights.",
                "Successor entities in the event of a merger, acquisition, or sale of assets."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to monitor activity on our website and improve user experience. You can instruct your browser to refuse cookies, but some parts of our service may not function correctly as a result. We do not use cookies for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact and form submission data is retained for up to 2 years. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="space-y-3 list-none">
              {[
                "Right to access — request a copy of the data we hold about you.",
                "Right to rectification — request correction of inaccurate data.",
                "Right to erasure — request deletion of your personal data.",
                "Right to restriction — request that we limit processing of your data.",
                "Right to data portability — request transfer of your data to another service.",
                "Right to object — object to our processing of your personal data.",
                "Right to withdraw consent — where processing is based on consent, you may withdraw it at any time."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:hello@turtleai.com" className="text-[#2d9e6b] hover:underline">hello@turtleai.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including SSL encryption, secure data storage, and access controls. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes by updating the date at the top of this page. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="mt-4 bg-emerald-955/50 border border-emerald-800 rounded-xl p-5">
              <p className="font-semibold text-white">TurtleAI</p>
              <p className="mt-1 text-sm">Email: <a href="mailto:hello@turtleai.com" className="text-[#2d9e6b] hover:underline">hello@turtleai.com</a></p>
            </div>
          </section>
        </div>

        {/* Footer actions */}
        <div className="flex justify-end p-4 border-t border-emerald-900 bg-[#0a1f14]">
          <button 
            onClick={onClose} 
            className="px-5 py-2 bg-emerald-800 text-white rounded-xl hover:bg-[#2d9e6b] font-medium text-sm transition-all shadow-md"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}