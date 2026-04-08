"use client";

import { motion, type Variants } from "framer-motion";
import { skillGroups } from "@/app/data/skills";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

function ProficiencyDots({ level }: { level?: number }) {
  if (!level) return null;
  return (
    <div className="mt-2 flex items-center justify-center gap-1" aria-label={`Proficiency ${level} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={[
            "h-1.5 w-1.5 rounded-full transition-colors",
            i < level ? "bg-accent/90" : "bg-border-subtle",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden px-5 py-20 md:py-28">
      {/* Futuristic, controlled background glow blobs (accent only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/18 blur-3xl" />
        <div className="absolute -left-12 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="relative inline-block">
            {/* subtle glow behind text */}
            <span aria-hidden className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-2xl" />
            <h2 className="px-4 text-3xl font-bold tracking-[0.08em] text-foreground md:text-6xl">
              My <span className="text-accent">Skills</span>
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
            A focused toolkit for building modern, responsive web experiences — from clean UI systems to reliable APIs.
          </p>
        </motion.div>

        {/* 3 vertical groups */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeUpVariants}
              className="relative rounded-2xl border border-border-subtle bg-card/90 p-6 backdrop-blur-sm shadow-sm"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {group.title}
                </h3>
                <span className="h-px flex-1 bg-border-subtle/60 ml-4" />
              </div>

              <motion.div
                className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3"
                variants={containerVariants}
              >
                {group.skills.map((skill) => {
                  const Icon = skill.Icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.18, ease: "easeOut" as const }}
                      className="group/skill flex flex-col items-center justify-center rounded-2xl border border-transparent bg-muted/60 px-3 py-4 text-center
                                 transition-[border-color,box-shadow,background-color] duration-300
                                 hover:border-accent/35 hover:bg-muted/80 hover:shadow-[0_0_28px_rgba(1,181,209,0.12)]
                                 focus-within:ring-2 focus-within:ring-accent/35"
                    >
                      <Icon className="text-2xl text-foreground/90 transition-colors duration-300 group-hover/skill:text-accent" />
                      <p className="mt-2 text-[12px] font-medium text-muted-foreground transition-colors duration-300 group-hover/skill:text-foreground">
                        {skill.name}
                      </p>
                      <ProficiencyDots level={skill.level} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

