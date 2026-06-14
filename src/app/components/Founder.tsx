import { Sparkles } from "lucide-react";

export function Founder() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#2d9e6b] bg-opacity-10 px-6 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-[#2d9e6b]" />
          <span className="text-[#2d9e6b] font-semibold">Built by Experts</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-8">
          Built by the Founder of TurtleAI
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
          TurtleAI was founded with a simple mission: to help real estate businesses leverage practical AI automation that actually works. Our team has years of experience in both real estate technology and artificial intelligence, allowing us to build solutions that understand the unique challenges agencies face.
        </p>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We believe AI should enhance human connection, not replace it. That's why our intelligent agents handle the repetitive qualification work, freeing your team to focus on what they do best—building relationships and closing deals.
        </p>
      </div>
    </section>
  );
}
