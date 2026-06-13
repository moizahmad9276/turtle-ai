import { MessageSquare, MessageCircle, Headphones, Target, Calendar, BrainCircuit } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Website AI Chatbot",
      description: "Engage visitors instantly with intelligent conversations that guide them to the right solution."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp / Messenger Agent",
      description: "Meet customers where they are with AI agents on WhatsApp, Facebook Messenger, and more."
    },
    {
      icon: Headphones,
      title: "Customer Support Agent",
      description: "Handle FAQs, troubleshooting, and support tickets 24/7 with intelligent escalation."
    },
    {
      icon: Target,
      title: "Sales / Lead Qualification Agent",
      description: "Qualify leads by asking the right questions and routing hot prospects to your team."
    },
    {
      icon: Calendar,
      title: "Appointment Booking Agent",
      description: "Let customers schedule meetings, demos, and appointments through natural conversation."
    },
    {
      icon: BrainCircuit,
      title: "Internal Company Assistant",
      description: "Give employees instant access to policies, procedures, and internal knowledge."
    }
  ];

  return (
    <section id="solutions" className="bg-[#0F172A] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Ready-to-Deploy Agent Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#2563EB] transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#2563EB] bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all">
                  <Icon className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
