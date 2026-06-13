import { ArrowRight, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#0F172A] text-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          Ready to Launch Your AI Agent?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Tell us your use case and we'll build a working demo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-[#2563EB] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-[#1d4ed8] transition-all shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 inline-flex items-center justify-center gap-3 group">
            Book a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0F172A] transition-all inline-flex items-center justify-center gap-3">
            <Mail className="w-5 h-5" />
            Contact
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          No credit card required • Get a working demo in 48 hours
        </p>
      </div>
    </section>
  );
}
