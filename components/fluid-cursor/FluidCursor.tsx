"use client";

import { useEffect, useRef, useState } from "react";
import { initFluid } from "@/components/fluid-cursor/fluid-cursor.ts";

export const FluidCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [mounted, setMounted] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);

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
            window.removeEventListener("resize", checkMobile);
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        if (!mounted || prefersReducedMotion || isMobile) return;

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
    }, [mounted, prefersReducedMotion, isMobile]);

    if (!mounted || prefersReducedMotion || isMobile) {
        return null;
    }

    return <canvas ref={canvasRef} />;
};
