'use client';

import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particles: { x: number; y: number; radius: number; color: string; }[] = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 5 + 1,
                color: 'rgba(255, 192, 203, 0.7)' // Light pink color
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                particle.x += (Math.random() - 0.5) * 2; // Random movement
                particle.y += (Math.random() - 0.5) * 2; // Random movement

                // Keep particles within canvas bounds
                if (particle.x < 0) particle.x = 0;
                if (particle.x > canvas.width) particle.x = canvas.width;
                if (particle.y < 0) particle.y = 0;
                if (particle.y > canvas.height) particle.y = canvas.height;
            });
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleBackground;