import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, School } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { profile } from "@/lib/data";

const facts = [
  { icon: School, label: "School", value: profile.school },
  { icon: GraduationCap, label: "Program", value: profile.program },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function About() {
  return (
    <AnimatedSection id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="01" title="About Me" />

      <div className="grid items-start gap-10 md:grid-cols-[auto_1fr]">
        <Avatar className="size-28 rounded-3xl border border-border bg-secondary md:size-36">
          <AvatarImage
            src="/Tama.jpg"
            alt={profile.name}
            className="rounded-3xl object-cover"
          />
          <AvatarFallback className="rounded-3xl font-mono text-2xl font-medium text-emerald-300">
            AP
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {facts.map(({ icon: Icon, label, value }) => (
              <Badge
                key={label}
                variant="secondary"
                className="h-auto gap-2 rounded-full px-3.5 py-1.5 font-normal"
              >
                <Icon className="size-3.5 text-emerald-400" aria-hidden="true" />
                <span className="text-muted-foreground">{label}:</span>
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
