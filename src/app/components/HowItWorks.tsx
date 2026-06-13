import { Search, PenTool, Code, Rocket, BarChart } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Requirements",
      description: "We understand your use case, workflows, and integration needs."
    },
    {
      icon: PenTool,
      title: "Agent Design (flows + knowledge)",
      description: "Design conversation flows and train the AI on your specific business knowledge."
    },
    {
      icon: Code,
      title: "Build & Integrations",
      description: "Connect to your CRM, calendar, website, WhatsApp, and other tools."
    },
    {
      icon: Rocket,
      title: "Testing & Deployment",
      description: "Rigorous testing ensures the agent works perfectly before going live."
    },
    {
      icon: BarChart,
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and improvements based on real conversations."
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-16">
          From Idea to Live Agent in Days
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6 items-start">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-[#2563EB] text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 bg-gray-200"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563EB] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#111827] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
