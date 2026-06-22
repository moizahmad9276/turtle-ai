import { useEffect, useRef } from "react";

// ─── Particle Canvas Background ───────────────────────────────────────────
export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let w = 0, h = 0;

        const particles: {
            x: number; y: number; vx: number; vy: number;
            size: number; opacity: number; pulse: number;
        }[] = [];

        const hexagons: {
            x: number; y: number; size: number;
            opacity: number; rotation: number; speed: number;
        }[] = [];

        const resize = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
        };

        const initParticles = () => {
            particles.length = 0;
            const count = Math.floor((w * h) / 12000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.1,
                    pulse: Math.random() * Math.PI * 2,
                });
            }

            hexagons.length = 0;
            for (let i = 0; i < 8; i++) {
                hexagons.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: Math.random() * 60 + 30,
                    opacity: Math.random() * 0.06 + 0.02,
                    rotation: Math.random() * Math.PI,
                    speed: (Math.random() - 0.5) * 0.003,
                });
            }
        };

        const drawHex = (x: number, y: number, size: number, rotation: number) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + rotation;
                const px = x + size * Math.cos(angle);
                const py = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
        };

        let frame = 0;
        const animate = () => {
            animId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, w, h);
            frame++;

            // Draw floating hexagons
            hexagons.forEach(hex => {
                hex.rotation += hex.speed;
                hex.y -= 0.1;
                if (hex.y < -hex.size) hex.y = h + hex.size;

                drawHex(hex.x, hex.y, hex.size, hex.rotation);
                ctx.strokeStyle = `rgba(45, 158, 107, ${hex.opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();

                // Inner hex
                drawHex(hex.x, hex.y, hex.size * 0.6, hex.rotation + Math.PI / 6);
                ctx.strokeStyle = `rgba(52, 184, 124, ${hex.opacity * 0.5})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            });

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.02;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                const pulseOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(52, 184, 124, ${pulseOpacity})`;
                ctx.fill();

                // Draw connections
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const alpha = (1 - dist / 120) * 0.12;
                        ctx.strokeStyle = `rgba(45, 158, 107, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            // Scanning line effect every 200 frames
            if (frame % 200 < 60) {
                const progress = (frame % 200) / 60;
                const y = progress * h;
                const grad = ctx.createLinearGradient(0, y - 40, 0, y + 40);
                grad.addColorStop(0, "rgba(45, 158, 107, 0)");
                grad.addColorStop(0.5, "rgba(45, 158, 107, 0.03)");
                grad.addColorStop(1, "rgba(45, 158, 107, 0)");
                ctx.fillStyle = grad;
                ctx.fillRect(0, y - 40, w, 80);
            }
        };

        resize();
        initParticles();
        animate();

        const ro = new ResizeObserver(() => {
            resize();
            initParticles();
        });
        ro.observe(canvas);

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 1 }}
        />
    );
}

// ─── Orb / Glow Background ────────────────────────────────────────────────
export function OrbBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main deep orb */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "600px", height: "600px",
                    top: "-100px", left: "50%",
                    transform: "translateX(-50%)",
                    background: "radial-gradient(circle, rgba(45,158,107,0.12) 0%, rgba(26,122,80,0.06) 50%, transparent 70%)",
                    filter: "blur(40px)",
                    animation: "orbFloat 8s ease-in-out infinite",
                }}
            />
            {/* Left orb */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "400px", height: "400px",
                    top: "20%", left: "-100px",
                    background: "radial-gradient(circle, rgba(52,184,124,0.08) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    animation: "orbFloat 12s ease-in-out infinite reverse",
                }}
            />
            {/* Right orb */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "350px", height: "350px",
                    top: "40%", right: "-80px",
                    background: "radial-gradient(circle, rgba(45,158,107,0.07) 0%, transparent 70%)",
                    filter: "blur(50px)",
                    animation: "orbFloat 10s ease-in-out infinite 2s",
                }}
            />
            {/* Bottom orb */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "500px", height: "300px",
                    bottom: "-50px", left: "30%",
                    background: "radial-gradient(circle, rgba(26,122,80,0.06) 0%, transparent 70%)",
                    filter: "blur(50px)",
                    animation: "orbFloat 14s ease-in-out infinite 4s",
                }}
            />
        </div>
    );
}

// ─── Grid Background ──────────────────────────────────────────────────────
export function GridBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(45,158,107,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,158,107,0.04) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                }}
            />
        </div>
    );
}

// ─── Full Premium Background (combines all layers) ────────────────────────
export function PremiumBackground({ children }: { children?: React.ReactNode }) {
    return (
        <>
            <GridBackground />
            <OrbBackground />
            <ParticleBackground />
            {children}
        </>
    );
}