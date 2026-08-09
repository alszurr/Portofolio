import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  description,
  className,
}: {
  index: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="font-mono text-sm text-emerald-400">
        <span className="text-muted-foreground">{"// "}</span>
        {index}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
