import { FC } from "react";
import { Project } from "../data/projects";
import styles from "./Card.module.scss";

interface CardProps extends Project {
    orientation?: "top" | "bot";
}

export const ProjectCard: FC<CardProps> = ({
    title,
    description,
    url,
    image,
    orientation = "top",
    github,
}) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{
                justifyContent: orientation === "top" ? "space-between" : "",
            }}
        >
            {image && orientation === "bot" && (
                <img
                    className={styles.card__image}
                    src={image}
                    alt="project snapshot"
                />
            )}
            <div className={styles.card__details}>
                <h3>{title} &rarr;</h3>
                <p>{description}</p>
                {github && (
                    <>
                        <br />
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </>
                )}
            </div>
            {image && orientation === "top" && (
                <img
                    className={styles.card__image}
                    src={image}
                    alt="project snapshot"
                />
            )}
        </a>
    );
};
