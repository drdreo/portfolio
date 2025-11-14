"use client";

import { useEffect, useRef, useState } from "react";
import { initFluid } from "@/components/fluid-cursor/fluid-cursor.ts";

export const FluidCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isMobile, setIsMobile] = useState(() => {
        // Check immediately on mount to prevent flash/initialization
        if (typeof window === "undefined") return false;
        const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const isMobileWidth = window.innerWidth <= 768;
        return hasTouchScreen || isMobileWidth;
    });

    useEffect(() => {
        // Detect mobile devices
        const checkMobile = () => {
            const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
            const isMobileWidth = window.innerWidth <= 768;
            setIsMobile(hasTouchScreen || isMobileWidth);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    useEffect(() => {
        if (prefersReducedMotion || isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        initFluid({
            canvas,
            simResolution: 128, // Simulation resolution (higher = more detailed)
            dyeResolution: 512, // Dye/color resolution
            densityDissipation: 0.98, // How quickly colors fade (0-1)
            velocityDissipation: 0.98, // How quickly movement slows down
            pressureIteration: 10, // Pressure solver iterations
            curl: 30, // Vorticity/swirl intensity
            splatRadius: 0.25, // Size of cursor splats
            splatForce: 6000, // Force of cursor movements
            shading: true, // Enable 3D lighting effects
            transparent: true // Transparent background
        });
    }, [prefersReducedMotion, isMobile]);

    // Don't render the canvas if user prefers reduced motion or is on mobile
    if (prefersReducedMotion || isMobile) {
        return null;
    }

    return <canvas ref={canvasRef} />;
};
