export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  /** Shipped vs actively building — drives section grouping on the site. */
  status: ProjectStatus;
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
    image: "/budget_planner_image.png",
    status: "completed",
    techStack: ["react.js", "Tailwind CSS"],
    demoUrl: "https://budget-planner-nine-zeta.vercel.app/",
    githubUrl: "https://github.com/Abela16/Budget_Planner",
  },
  {
    id: 2,
    title: "Campus_Gate_Security_System",
    description:
      "campus gate security management system with QR scanning, face verification, and vehicle tracking.",
    image: "/Campus_get_Security_System_Image.png",
    status: "completed",
    techStack: ["react.js", "Tailwind CSS", "FastAPI", "SQLite"],
    demoUrl: "https://securityy-8lpu.vercel.app/",
    githubUrl: "https://github.com/Abela16/Campus_Gate_Security_System",
  },
  {
    id: 3,
    title: "Anonymous Campus Feedback Portal(A_C_F_P)",
    description:
      "The Anonymous Campus Feedback Portal is a simple web application that allows students to submit feedback about their campus anonymously. It helps campuses collect honest opinions, complaints, suggestions, and ideas without revealing the identity of the student.",
    image: "anonymous_Campus_Feedback_Portal.png",
    status: "completed",
    techStack: ["react.js", "Tailwind CSS", "typescript"],
    demoUrl: "https://acfp-gamma.vercel.app/",
    githubUrl: "https://github.com/Abela16/ACFP",
  },
  {
    id: 4,
    title: "Mercato",
    description:
      "Full-stack MERN e-commerce application with authentication, product management, and order system.Completed (Backend)REST API built with Node.js & Express. MongoDB database integration.",
    image: "/Merkato_Image.jpeg",
    status: "in-progress",
    techStack: ["react.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Abela16/Mercato",
  },
];
