"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, techStack, featured, demoUrl, githubUrl } =
    project;

  const primaryLink = demoUrl ?? githubUrl;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.025, y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-border-subtle bg-card text-card-foreground shadow-sm overflow-hidden
                 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(1,181,209,0.1)]
                 transition-[border-color,box-shadow] duration-300 focus-within:ring-2 focus-within:ring-accent/40"
    >
      {/* ── Thumbnail ─────────────────────────────────────────────── */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />

        {/* Gradient overlay for text legibility on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {featured && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-foreground shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground/80" />
            Featured
          </span>
        )}

        {/* Quick-action icon links that appear on hover */}
        <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-foreground hover:text-accent transition-colors"
            >
              <Github size={15} />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-foreground hover:text-accent transition-colors"
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2" aria-label="Tech stack">
          {techStack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/20 bg-muted px-3 py-0.5 text-[11px] font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex gap-3 text-muted-foreground">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} GitHub repository`}
                className="hover:text-accent transition-colors"
              >
                <Github size={17} />
              </a>
            )}
          </div>

          {primaryLink && (
            <a
              href={primaryLink}
              target={primaryLink === "#" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={`View ${title} project`}
              className="group/btn inline-flex items-center gap-1.5 rounded-xl border border-accent/25 bg-accent/8 px-4 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
              View Project
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
