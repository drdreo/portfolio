import { FC } from "react";
import styles from "./Work.module.scss";
import { ProjectCard } from "./ProjectCard.tsx";
import { projects } from "../data/projects";

export const Work: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        orientation={idx % 2 === 0 ? "bot" : "top"}
                    />
                ))}
            </div>
        </div>
    );
};
