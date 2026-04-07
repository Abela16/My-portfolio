import budget_planner_image from "@/public/budget_planner.png";
export interface Project {
  id: number;
  title: string;
  description: string;
  /** Path inside /public or a fully-qualified URL (configure next.config.ts for external hosts). */
  image: string;
  techStack: string[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Expense Tracker - Budget Planner",
    description:
      "A smart expense tracking system built with React that helps users record, categorize, analyze, and control their spending.",
    image: "budget_planner_image",
    techStack: ["react.js", "Tailwind CSS"],
    demoUrl: "https://budget-planner-nine-zeta.vercel.app/",
    githubUrl: "https://github.com/Abela16/Budget_Planner",
  },
];
