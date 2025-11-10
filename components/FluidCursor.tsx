"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./FluidCursor.module.scss";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export const FluidCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
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

    useEffect(() => {
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Initialize points
        const numPoints = 12;
        for (let i = 0; i < numPoints; i++) {
            pointsRef.current.push({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                vx: 0,
                vy: 0,
            });
        }

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const points = pointsRef.current;
            const mouse = mouseRef.current;

            // Update first point to follow mouse
            const spring = 0.15;
            const friction = 0.7;

            points[0].vx += (mouse.x - points[0].x) * spring;
            points[0].vy += (mouse.y - points[0].y) * spring;
            points[0].vx *= friction;
            points[0].vy *= friction;
            points[0].x += points[0].vx;
            points[0].y += points[0].vy;

            // Update trailing points
            for (let i = 1; i < points.length; i++) {
                const target = points[i - 1];
                points[i].vx += (target.x - points[i].x) * spring;
                points[i].vy += (target.y - points[i].y) * spring;
                points[i].vx *= friction;
                points[i].vy *= friction;
                points[i].x += points[i].vx;
                points[i].y += points[i].vy;
            }

            // Draw fluid shape
            if (points.length > 0) {
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);

                // Create smooth curve through points
                for (let i = 0; i < points.length - 1; i++) {
                    const current = points[i];
                    const next = points[i + 1];
                    const xc = (current.x + next.x) / 2;
                    const yc = (current.y + next.y) / 2;
                    ctx.quadraticCurveTo(current.x, current.y, xc, yc);
                }

                // Draw the trail with gradient
                const gradient = ctx.createLinearGradient(
                    points[0].x,
                    points[0].y,
                    points[points.length - 1].x,
                    points[points.length - 1].y,
                );
                gradient.addColorStop(0, "rgba(99, 102, 241, 0.4)");
                gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.3)");
                gradient.addColorStop(1, "rgba(236, 72, 153, 0.1)");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 20;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.stroke();

                // Draw cursor dot
                ctx.beginPath();
                ctx.arc(points[0].x, points[0].y, 6, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(99, 102, 241, 0.8)";
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, [prefersReducedMotion]);

    if (prefersReducedMotion) return null;

    return (
        <canvas
            ref={canvasRef}
            className={`${styles.cursor} ${isVisible ? styles.visible : ""}`}
        />
    );
};
