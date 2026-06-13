import { Target, Headphones, Calendar, BookOpen } from "lucide-react";

export function ValueProps() {
  const valueProps = [
    {
      icon: Target,
      title: "Lead Generation & Qualification",
      description: "Capture and qualify leads automatically by asking the right questions at the right time."
    },
    {
      icon: Headphones,
      title: "Customer Support Automation",
      description: "Handle common inquiries 24/7, escalate complex issues to your team when needed."
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Let customers book meetings, demos, or consultations directly through intelligent conversation."
    },
    {
      icon: BookOpen,
      title: "Internal Knowledge Assistants",
      description: "Give your team instant access to company knowledge, policies, and documentation."
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-16">
          What Himana AI Agents Can Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#2563EB] bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
