interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
}

export function GreenButton({
  onClick,
  children,
  variant = "solid",
  size = "md",
}: Props) {
  const base = "font-semibold rounded-lg transition-all";
  const sizes = {
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };
  const variants = {
    solid:
      "bg-[#2d9e6b] text-white hover:bg-[#1a7a50] shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-[#0a1f14]",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
