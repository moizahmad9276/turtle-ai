export function Industries() {
  const industries = [
    "Real Estate",
    "Healthcare",
    "E-commerce",
    "Professional Services",
    "Education",
    "SaaS"
  ];

  return (
    <section id="industries" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-12">
          Built for Multiple Industries
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 hover:border-[#2563EB] hover:bg-blue-50 rounded-xl px-8 py-4 font-semibold text-[#111827] transition-all cursor-pointer"
            >
              {industry}
            </div>
          ))}
        </div>

        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
          We tailor each agent to your business and tools.
        </p>
      </div>
    </section>
  );
}
