interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean; // true = dark bg (white text), false = light bg (dark text)
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = true,
}: Props) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <div className="inline-block bg-emerald-700/20 px-6 py-2 rounded-full mb-6">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-4xl lg:text-5xl font-bold mb-6 ${light ? "text-white" : "text-[#111827]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-xl max-w-3xl mx-auto leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
