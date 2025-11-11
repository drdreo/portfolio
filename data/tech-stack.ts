import { IconType } from "react-icons";
import { ComponentType, SVGProps } from "react";
import {
    SiAngular,
    SiAuth0,
    SiClerk,
    SiCypress,
    SiDeno,
    SiDocker,
    SiExpress,
    SiFigma,
    SiGit,
    SiGo,
    SiGraphql,
    SiHtml5,
    SiHtmx,
    SiJest,
    SiKubernetes,
    SiLit,
    SiMongodb,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiNuxtdotjs,
    SiNx,
    SiPostgresql,
    SiPostman,
    SiReact,
    SiRedis,
    SiSass,
    SiSocketdotio,
    SiSqlite,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiVuedotjs,
    SiWebcomponentsdotorg,
    SiWebpack,
} from "react-icons/si";
import { AnalogIcon, PlaywrightIcon } from "@/data/custom-icons.tsx";

export type ProficiencyLevel = "expert" | "advanced" | "intermediate" | "beginner";

export interface TechStack {
    name: string;
    category: "frontend" | "backend" | "database" | "tools";
    proficiency: ProficiencyLevel;
    icon?: IconType | ComponentType<SVGProps<SVGSVGElement>>;
}

export const techStack: TechStack[] = [
    // Frontend
    { name: "Angular", category: "frontend", proficiency: "expert", icon: SiAngular },
    { name: "React", category: "frontend", proficiency: "intermediate", icon: SiReact },
    { name: "Vue.js", category: "frontend", proficiency: "advanced", icon: SiVuedotjs },
    { name: "Analog.js", category: "frontend", proficiency: "intermediate", icon: AnalogIcon },
    { name: "Next.js", category: "frontend", proficiency: "intermediate", icon: SiNextdotjs },
    { name: "Nuxt.js", category: "frontend", proficiency: "advanced", icon: SiNuxtdotjs },
    { name: "TypeScript", category: "frontend", proficiency: "expert", icon: SiTypescript },
    { name: "HTML/CSS", category: "frontend", proficiency: "expert", icon: SiHtml5 },
    { name: "HTMX", category: "frontend", proficiency: "beginner", icon: SiHtmx },
    { name: "SCSS", category: "frontend", proficiency: "expert", icon: SiSass },
    { name: "TailwindCSS", category: "frontend", proficiency: "advanced", icon: SiTailwindcss },
    { name: "WebComponents", category: "frontend", proficiency: "expert", icon: SiWebcomponentsdotorg },
    { name: "LitElement", category: "frontend", proficiency: "advanced", icon: SiLit },

    // Backend
    { name: "Node.js", category: "backend", proficiency: "expert", icon: SiNodedotjs },
    { name: "NestJS", category: "backend", proficiency: "expert", icon: SiNestjs },
    { name: "Express", category: "backend", proficiency: "expert", icon: SiExpress },
    { name: "Deno", category: "backend", proficiency: "advanced", icon: SiDeno },
    { name: "Golang", category: "backend", proficiency: "intermediate", icon: SiGo },
    { name: "Socket.io", category: "backend", proficiency: "advanced", icon: SiSocketdotio },
    { name: "REST APIs", category: "backend", proficiency: "expert", icon: SiPostman },
    { name: "GraphQL", category: "backend", proficiency: "intermediate", icon: SiGraphql },

    // Database
    { name: "PostgreSQL", category: "database", proficiency: "advanced", icon: SiPostgresql },
    { name: "MongoDB", category: "database", proficiency: "advanced", icon: SiMongodb },
    { name: "SQLite", category: "database", proficiency: "advanced", icon: SiSqlite },
    { name: "Redis", category: "database", proficiency: "beginner", icon: SiRedis },

    // Tools
    { name: "Git", category: "tools", proficiency: "expert", icon: SiGit },
    { name: "Nx", category: "tools", proficiency: "advanced", icon: SiNx },
    { name: "Webpack", category: "tools", proficiency: "advanced", icon: SiWebpack },
    { name: "Vite", category: "tools", proficiency: "advanced", icon: SiVite },
    { name: "Jest", category: "tools", proficiency: "advanced", icon: SiJest },
    { name: "Playwright", category: "tools", proficiency: "intermediate", icon: PlaywrightIcon },
    { name: "Cypress", category: "tools", proficiency: "advanced", icon: SiCypress },
    { name: "Figma", category: "tools", proficiency: "intermediate", icon: SiFigma },
    { name: "Auth0", category: "tools", proficiency: "advanced", icon: SiAuth0 },
    { name: "Clerk", category: "tools", proficiency: "beginner", icon: SiClerk },
    { name: "Docker", category: "tools", proficiency: "advanced", icon: SiDocker },
    { name: "Kubernetes", category: "tools", proficiency: "intermediate", icon: SiKubernetes },
];

export const categoryColors = {
    frontend: "#667eea",
    backend: "#f093fb",
    database: "#4facfe",
    tools: "#43e97b",
};

export const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools & DevOps",
};

export const proficiencyColors = {
    expert: "#daa420",
    advanced: "#667eea",
    intermediate: "#4facfe",
    beginner: "#9ca3af",
};

export const proficiencyLabels = {
    expert: "Expert",
    advanced: "Advanced",
    intermediate: "Intermediate",
    beginner: "Beginner",
};
