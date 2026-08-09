"use client";

import { motion, useReducedMotion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SkillIcon } from "@/components/shared/skill-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="02"
        title="Skills"
        description="The areas I study and work with most as a TJKT student."
      />

      <motion.div
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={reduceMotion ? undefined : item}
            className={cn(i === 0 && "sm:col-span-2")}
          >
            <Card className="group h-full rounded-3xl border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_32px_rgba(52,211,153,0.12)]">
              <CardHeader className="flex-row items-center gap-3 pb-2">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-emerald-300 transition-colors group-hover:bg-primary/15">
                  <SkillIcon name={skill.icon} className="size-5" />
                </span>
                <h3 className="text-base font-semibold">{skill.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
