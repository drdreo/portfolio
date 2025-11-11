"use client";
import { FC, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Work.module.scss";
import { ProjectCard } from "./ProjectCard.tsx";
import { projects } from "../data/projects";

export const Work: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const MotionComponent = prefersReducedMotion ? "div" : motion.div;

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.container}>
                <MotionComponent
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : "initial"}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Projects</h2>
                    <p className={styles.subtitle}>
                        A selection of hobby and professional projects showcasing full-stack
                        development, real-time applications, and creative
                        problem-solving
                    </p>
                </MotionComponent>

                <MotionComponent
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={
                        isInView
                            ? {
                                  delayChildren: 0.2,
                                  staggerChildren: 0.1,
                              }
                            : { staggerChildren: 0 }
                    }
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </MotionComponent>
            </div>
        </section>
    );
};
