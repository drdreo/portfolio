"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export const Hero: FC = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
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
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
            },
        },
    };

    const MotionComponent = prefersReducedMotion ? "div" : motion.div;

    return (
        <section className={styles.hero}>
            <MotionComponent className={styles.content} variants={containerVariants} initial="hidden" animate="visible">
                <MotionComponent variants={itemVariants} className={styles.greeting}>
                    Hello, I'm
                </MotionComponent>

                <MotionComponent variants={itemVariants} className={styles.name}>
                    <span className={styles.nameGradient}>Andreas Hahn</span>
                </MotionComponent>

                <MotionComponent variants={itemVariants} className={styles.title}>
                    Full-Stack Engineer
                </MotionComponent>

                <MotionComponent variants={itemVariants} className={styles.tagline}>
                    Crafting high-performance web experiences with modern technologies and meticulous attention to
                    detail.
                </MotionComponent>

                <MotionComponent variants={itemVariants} className={styles.scrollIndicator}>
                    <motion.div
                        className={styles.scrollArrow}
                        animate={
                            prefersReducedMotion
                                ? {}
                                : {
                                      y: [0, 10, 0],
                                  }
                        }
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ↓
                    </motion.div>
                </MotionComponent>
            </MotionComponent>

            <div className={styles.backgroundGradient} />
        </section>
    );
};
