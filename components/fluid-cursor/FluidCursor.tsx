"use client";

import { useEffect, useRef } from "react";
import { initFluid } from "@/components/fluid-cursor/fluid-cursor.ts";

export const FluidCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
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
            transparent: true, // Transparent background
        });
    });

    return (
        <canvas
            ref={canvasRef}
            // style={{
            //     display: "blocked",
            //     position: "fixed",
            //     top: 0,
            //     width: "100vw",
            //     height: "100vh",
            //     // zIndex: "9999"
            // }}
        />
    );
};
