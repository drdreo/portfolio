import styles from "./Work.module.scss";
import {Card} from "./Card";
import {projects} from "../data/projects";

export function Work() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        url={project.url}
                        github={project.github}
                        orientation={idx % 2 === 0 ? "bot" : "top"}
                    />
                ))}
            </div>
        </div>
    );
}
