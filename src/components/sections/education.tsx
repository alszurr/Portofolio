import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <AnimatedSection
      id="education"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading index="03" title="Education" />

      <ol className="relative border-l border-border pl-6">
        <li className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[29px] top-1.5 flex size-3 items-center justify-center"
          >
            <span className="size-3 rounded-full border-2 border-emerald-400 bg-background" />
          </span>
          <Card className="rounded-3xl border-border/60 bg-card">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <GraduationCap className="size-5 text-emerald-400" aria-hidden="true" />
                  {education.school}
                </h3>
                <Badge variant="outline" className="rounded-full font-mono text-xs text-emerald-300">
                  {education.years}
                </Badge>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {education.program}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {education.description}
              </p>
            </CardContent>
          </Card>
        </li>
      </ol>
    </AnimatedSection>
  );
}
