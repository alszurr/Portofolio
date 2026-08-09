import {
  Code2,
  Cpu,
  Router,
  ServerCog,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Router,
  Code2,
  Cpu,
  ServerCog,
  SquareTerminal,
};

export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Cpu;
  return <Icon className={className} aria-hidden="true" />;
}
