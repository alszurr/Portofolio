import { FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        index="04"
        title="Projects & Practical Work"
        description="Hands-on work from my studies. These entries are examples for now — I'll replace them with real projects as I complete them."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex h-full flex-col rounded-3xl border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_32px_rgba(52,211,153,0.12)]"
          >
            <CardHeader className="flex-row items-start justify-between gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-emerald-300">
                <FolderGit2 className="size-5" aria-hidden="true" />
              </span>
              <Badge className="rounded-full bg-amber-400/15 font-mono text-[10px] font-medium text-amber-300">
                EXAMPLE
              </Badge>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <h3 className="text-base font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
