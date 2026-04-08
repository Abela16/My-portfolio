"use client";

import { motion, type Variants } from "framer-motion";
import ProjectCard, { cardVariants } from "@/componenets/ProjectCard";
import { projects } from "@/app/data/projects";

/* ── Animation variants ──────────────────────────────────────────────── */
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.11,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

/* ── Section ─────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="w-full px-5 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          className="mb-14 space-y-3"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            What I&apos;ve Built
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-6xl">
            Development{" "}
            <span className="text-accent">Projects</span>
          </h2>
        </motion.div>

        {/* Single grid — status is shown on each card */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-14 flex justify-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <a
            href="https://github.com/Abela16"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-accent/25 bg-card px-7 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
            View all on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}
