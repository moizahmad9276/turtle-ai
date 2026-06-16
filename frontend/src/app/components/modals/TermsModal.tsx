import { useEffect } from "react";
import { X } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
            <p className="text-xs text-gray-400 mt-0.5">Terms of Service</p>
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
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using TurtleAI's website or services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services. These terms apply to all visitors, clients, and others who access or use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Description of Services</h2>
            <p>TurtleAI provides AI agent design, development, and deployment services including but not limited to: website chatbots, WhatsApp agents, lead qualification systems, appointment booking agents, customer support automation, and internal knowledge assistants. Specific deliverables and timelines are defined in individual service agreements or proposals.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Use of Services</h2>
            <p className="mb-4">You agree to use TurtleAI services only for lawful purposes. You must not:</p>
            <ul className="space-y-3 list-none">
              {[
                "Use our services to transmit unlawful, harmful, threatening, or fraudulent content.",
                "Attempt to reverse-engineer, copy, or reproduce our AI systems or proprietary technology.",
                "Use our services to violate the privacy or rights of third parties.",
                "Misrepresent your identity or affiliation when engaging with our services.",
                "Interfere with or disrupt the integrity or performance of our systems."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Payment Terms</h2>
            <p className="mb-4">All services are subject to the pricing agreed upon in writing prior to project commencement. Unless otherwise agreed:</p>
            <ul className="space-y-3 list-none">
              {[
                "A setup fee is due upon project initiation or as specified in the proposal.",
                "Monthly retainer fees are billed in advance on a recurring basis.",
                "Invoices are due within 14 days of issuance.",
                "Late payments may incur a 2% monthly interest charge.",
                "TurtleAI reserves the right to suspend services for overdue accounts."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2d9e6b] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>All AI agent frameworks, templates, methodologies, and proprietary systems developed by TurtleAI remain the intellectual property of TurtleAI. Upon full payment, clients receive a license to use the delivered agent for their business purposes. Custom conversation flows and knowledge bases built specifically for a client are owned by that client upon final payment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary information shared during the course of the engagement. TurtleAI will not disclose your business information, conversation data, or technical requirements to third parties without your written consent, except as required by law or as necessary to deliver the services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Data and AI Usage</h2>
            <p>Conversation data processed through AI agents deployed by TurtleAI is used solely to operate and improve the specific agent for your business. We do not use your customer conversation data to train general AI models or share it with other clients. Data handling is subject to our Privacy Policy and any applicable data processing agreements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>TurtleAI's liability for any claim arising from these terms or the services provided shall not exceed the total fees paid by the client in the three months preceding the claim. TurtleAI is not liable for indirect, incidental, consequential, or punitive damages, including lost profits or data loss, even if advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Disclaimer of Warranties</h2>
            <p>Our services are provided "as is" without warranties of any kind, either express or implied. TurtleAI does not warrant that AI agents will be error-free, uninterrupted, or meet all your specific requirements. We make no guarantees regarding specific business outcomes such as lead conversion rates or revenue increases.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Termination</h2>
            <p>Either party may terminate services with 30 days written notice. TurtleAI reserves the right to terminate services immediately for breach of these terms, non-payment, or illegal use. Upon termination, all outstanding fees become immediately due and payable. Client data will be returned or deleted within 30 days of termination.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Governing Law</h2>
            <p>These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through good-faith negotiation first, and if unresolved, through binding arbitration or the courts of the jurisdiction in which TurtleAI operates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">12. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. We will notify active clients of material changes via email. Continued use of our services after changes are posted constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">13. Contact Us</h2>
            <p>For questions about these Terms of Service, contact us:</p>
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
            Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
}