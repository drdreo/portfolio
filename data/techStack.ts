import { IconType } from "react-icons";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiAngular,
    SiVuedotjs,
    SiNuxtdotjs,
    SiHtml5,
    SiSass,
    SiTailwindcss,
    SiWebcomponentsdotorg,
    SiLit,
    SiNodedotjs,
    SiNestjs,
    SiExpress,
    SiGo,
    SiSocketdotio,
    SiPostman,
    SiGraphql,
    SiPostgresql,
    SiMongodb,
    SiSqlite,
    SiRedis,
    SiGit,
    SiDocker,
    SiWebpack,
    SiVite,
    SiJest,
    SiCypress,
    SiAuth0,
    SiOpenid,
    SiKubernetes,
} from "react-icons/si";

export type ProficiencyLevel = "expert" | "advanced" | "intermediate" | "beginner";

export interface TechStack {
    name: string;
    category: "frontend" | "backend" | "database" | "tools";
    proficiency: ProficiencyLevel;
    icon?: IconType;
}

export const techStack: TechStack[] = [
    // Frontend
    { name: "React", category: "frontend", proficiency: "intermediate", icon: SiReact },
    { name: "Next.js", category: "frontend", proficiency: "expert", icon: SiNextdotjs },
    { name: "TypeScript", category: "frontend", proficiency: "expert", icon: SiTypescript },
    { name: "Angular", category: "frontend", proficiency: "expert", icon: SiAngular },
    { name: "Vue.js", category: "frontend", proficiency: "advanced", icon: SiVuedotjs },
    { name: "Nuxt.js", category: "frontend", proficiency: "advanced", icon: SiNuxtdotjs },
    { name: "HTML/CSS", category: "frontend", proficiency: "expert", icon: SiHtml5 },
    { name: "SCSS/Sass", category: "frontend", proficiency: "expert", icon: SiSass },
    { name: "TailwindCSS", category: "frontend", proficiency: "advanced", icon: SiTailwindcss },
    { name: "WebComponents", category: "frontend", proficiency: "expert", icon: SiWebcomponentsdotorg },
    { name: "LitElement", category: "frontend", proficiency: "advanced", icon: SiLit },

    // Backend
    { name: "Node.js", category: "backend", proficiency: "expert", icon: SiNodedotjs },
    { name: "NestJS", category: "backend", proficiency: "expert", icon: SiNestjs },
    { name: "Express", category: "backend", proficiency: "expert", icon: SiExpress },
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
    { name: "Docker", category: "tools", proficiency: "advanced", icon: SiDocker },
    { name: "Webpack", category: "tools", proficiency: "advanced", icon: SiWebpack },
    { name: "Vite", category: "tools", proficiency: "advanced", icon: SiVite },
    { name: "Jest", category: "tools", proficiency: "advanced", icon: SiJest },
    { name: "Playwright", category: "tools", proficiency: "intermediate"},
    { name: "Cypress", category: "tools", proficiency: "advanced", icon: SiCypress },
    { name: "Auth0", category: "tools", proficiency: "advanced", icon: SiAuth0 },
    { name: "OAuth", category: "tools", proficiency: "advanced", icon: SiOpenid },
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

