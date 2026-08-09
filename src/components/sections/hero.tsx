"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, roles } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(52,211,153,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/4%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/4%)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent_80%)]" />
      </div>

      <motion.div
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        className="flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={reduceMotion ? undefined : item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-emerald-300"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
          </span>
          {profile.headline}
        </motion.span>

        <motion.h1
          variants={reduceMotion ? undefined : item}
          className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          variants={reduceMotion ? undefined : item}
          className="mt-4 h-8"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-lg text-muted-foreground md:text-xl"
            >
              <span className="text-emerald-400">&gt;</span> {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={reduceMotion ? undefined : item}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          variants={reduceMotion ? undefined : item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            render={<a href="#skills" />}
            size="lg"
            className="h-10 gap-2 rounded-full px-6 font-medium"
          >
            View My Skills
            <ArrowDown className="size-4" />
          </Button>
          <Button
            render={<a href={`mailto:${profile.email}`} />}
            variant="outline"
            size="lg"
            className="h-10 gap-2 rounded-full px-6 font-medium"
          >
            <Mail className="size-4" />
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-muted-foreground transition-colors hover:text-emerald-400"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}
