import { UserX, Clock, TrendingDown, Globe } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: UserX,
      title: "Visitors leave without contacting you",
      description: "70% of website visitors never fill out a contact form"
    },
    {
      icon: Clock,
      title: "Agents waste time on unqualified inquiries",
      description: "Hours spent answering basic questions from non-serious buyers"
    },
    {
      icon: TrendingDown,
      title: "Slow response time reduces conversions",
      description: "Leads go cold when they don't get immediate responses"
    },
    {
      icon: Globe,
      title: "International buyers expect instant answers",
      description: "Global clients need 24/7 support across all time zones"
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] text-center mb-16">
          Most Real Estate Agencies Lose Qualified Buyers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
