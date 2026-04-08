import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export type Skill = {
  name: string;
  Icon: IconType;
  /** Optional proficiency indicator (1–5). */
  level?: 1 | 2 | 3 | 4 | 5;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", Icon: SiHtml5, level: 4 },
      { name: "CSS", Icon: SiCss3, level: 4 },
      { name: "React.js", Icon: SiReact, level: 4 },
      { name: "Next.js", Icon: SiNextdotjs, level: 4 },
      { name: "Redux", Icon: SiRedux, level: 3 },
      { name: "Bootstrap", Icon: SiBootstrap, level: 3 },
      { name: "Framer Motion", Icon: SiFramer, level: 3 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, level: 4 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, level: 4 },
      { name: "TypeScript", Icon: SiTypescript, level: 4 },
      { name: "Node.js", Icon: SiNodedotjs, level: 4 },
      { name: "Express.js", Icon: SiExpress, level: 4 },
      { name: "MongoDB", Icon: SiMongodb, level: 3 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", Icon: SiGit, level: 4 },
      { name: "GitHub", Icon: SiGithub, level: 4 },
      { name: "Postman", Icon: SiPostman, level: 3 },
      { name: "Linux", Icon: SiLinux, level: 4 },
      { name: "Vercel", Icon: SiVercel, level: 3 },
    ],
  },
];

