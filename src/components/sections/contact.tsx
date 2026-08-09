import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/shared/social-icons";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { profile } from "@/lib/data";

const contactLinks = [
  {
    label: "GitHub",
    Icon: GithubIcon,
    href: profile.socials.github,
    handle: "alszurr",
  },
  {
    label: "LinkedIn",
    Icon: LinkedinIcon,
    href: profile.socials.linkedin,
    handle: "-",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: profile.socials.instagram,
    handle: "@alfprtma_sk",
  },
  {
    label: "Email",
    Icon: Mail,
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
];

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        index="05"
        title="Get In Touch"
        description="Want to talk about networks, Linux, or a school project? My inbox is open."
      />

      <div className="flex flex-wrap items-center gap-3">
        {contactLinks.map(({ label, Icon, href, handle }) => (
          <Button
            key={label}
            render={<a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" />}
            variant="outline"
            className="h-10 gap-2.5 rounded-full px-4 font-medium"
          >
            <Icon className="size-4 text-emerald-400" aria-hidden="true" />
            <span>{label}</span>
            <span className="font-mono text-xs text-muted-foreground">
              {handle}
            </span>
          </Button>
        ))}
      </div>
    </AnimatedSection>
  );
}
