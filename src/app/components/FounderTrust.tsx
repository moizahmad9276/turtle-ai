import { User } from "lucide-react";

export function FounderTrust() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-8">
            Founder-Led, Business-First AI
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            TurtleAI focuses on practical, ROI-driven agents — not hype. We build reliable systems that your team can use immediately. Every agent is designed with real business outcomes in mind: more leads, better customer service, and automated workflows that actually work.
          </p>
        </div>

        {/* Founder Card */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-8">
          {/* Founder Photo Placeholder */}
          <div className="w-32 h-32 bg-gradient-to-br from-[#2d9e6b] to-[#1a7a50] rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-16 h-16 text-white" />
          </div>

          {/* Founder Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Noman Ahmed Lodhi
            </h3>
            <p className="text-[#2d9e6b] font-semibold mb-4">
              Founder & CEO, TurtleAI
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience in AI and business automation, I built TurtleAI to help companies implement intelligent agents that drive real results. We're here to make AI accessible and practical for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
