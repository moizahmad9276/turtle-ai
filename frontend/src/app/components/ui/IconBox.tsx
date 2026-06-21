import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { box: "w-10 h-10", icon: "w-5 h-5" },
  md: { box: "w-12 h-12", icon: "w-6 h-6" },
  lg: { box: "w-14 h-14", icon: "w-7 h-7" },
};

export function IconBox({ icon: Icon, size = "md" }: Props) {
  const s = sizes[size];
  return (
    <div
      className={`${s.box} bg-emerald-700/20 rounded-xl flex items-center justify-center flex-shrink-0`}
    >
      <Icon className={`${s.icon} text-[#2d9e6b]`} />
    </div>
  );
}
