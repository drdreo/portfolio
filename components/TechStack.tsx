"use client";
import { FC, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    techStack,
    categoryColors,
    categoryLabels,
    proficiencyColors,
    proficiencyLabels,
} from "../data/tech-stack";
import styles from "./TechStack.module.scss";

export const TechStack: FC = () => {
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

    const categories = ["frontend", "backend", "database", "tools"] as const;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
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
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Tech Stack</h2>
                    <p className={styles.subtitle}>
                        Technologies i have used and worked with. Not just read about.
                    </p>
                </MotionComponent>

                {categories.map((category, categoryIndex) => (
                    <div key={category} className={styles.categorySection}>
                        <MotionComponent
                            className={styles.categoryHeader}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -20 }
                            }
                            transition={{
                                duration: 0.6,
                                delay: categoryIndex * 0.1,
                            }}
                        >
                            <span
                                className={styles.categoryIndicator}
                                style={{
                                    backgroundColor: categoryColors[category],
                                }}
                            />
                            <h3 className={styles.categoryTitle}>
                                {categoryLabels[category]}
                            </h3>
                        </MotionComponent>

                        <MotionComponent
                            className={styles.grid}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {techStack
                                .filter((tech) => tech.category === category)
                                .map((tech) => {
                                    const IconComponent = tech.icon;
                                    return (
                                        <MotionComponent
                                            key={tech.name}
                                            className={styles.techItem}
                                            variants={itemVariants}
                                            whileHover={
                                                prefersReducedMotion
                                                    ? {}
                                                    : {
                                                          scale: 1.03,
                                                          y: -3,
                                                          transition: {
                                                              duration: 0.2,
                                                          },
                                                      }
                                            }
                                            style={{
                                                borderColor:
                                                    categoryColors[category],
                                            }}
                                        >
                                            <div className={styles.techHeader}>
                                                {IconComponent && (
                                                    <IconComponent
                                                        className={
                                                            styles.techIcon
                                                        }
                                                        style={{
                                                            color: categoryColors[
                                                                category
                                                            ],
                                                        }}
                                                    />
                                                )}
                                                <div
                                                    className={styles.techName}
                                                >
                                                    {tech.name}
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.proficiencyBadge
                                                }
                                                style={{
                                                    backgroundColor: `${proficiencyColors[tech.proficiency]}20`,
                                                    color: proficiencyColors[
                                                        tech.proficiency
                                                    ],
                                                    borderColor:
                                                        proficiencyColors[
                                                            tech.proficiency
                                                        ],
                                                }}
                                            >
                                                {
                                                    proficiencyLabels[
                                                        tech.proficiency
                                                    ]
                                                }
                                            </div>
                                        </MotionComponent>
                                    );
                                })}
                        </MotionComponent>
                    </div>
                ))}
            </div>
        </section>
    );
};
