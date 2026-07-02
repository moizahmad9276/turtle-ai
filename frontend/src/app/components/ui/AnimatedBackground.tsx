import { useEffect, useRef } from "react";

interface Turtle {
    x: number; y: number;
    vx: number; vy: number;
    size: number; opacity: number;
    rotation: number; rotSpeed: number;
    glowPhase: number; glowSpeed: number;
    trail: { x: number; y: number }[];
}

interface Agent {
    x: number; y: number;
    vx: number; vy: number;
    size: number; opacity: number;
    type: number;
    pulsePhase: number;
    orbitAngle: number;
}

interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    size: number; opacity: number;
    pulse: number;
}

function drawTurtle(ctx: CanvasRenderingContext2D, t: Turtle) {
    const { x, y, size, rotation, glowPhase } = t;
    const glow = 0.5 + 0.5 * Math.sin(glowPhase);
    const s = size / 100;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.scale(s, s);

    // Outer glow
    const outerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 80);
    outerGlow.addColorStop(0, `rgba(52,184,124,${0.08 * glow})`);
    outerGlow.addColorStop(1, "rgba(52,184,124,0)");
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.fillStyle = outerGlow;
    ctx.fill();

    // Shell — main hexagon
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = 36 * Math.cos(a), py = 36 * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    const shellGrad = ctx.createRadialGradient(-8, -8, 0, 0, 0, 40);
    shellGrad.addColorStop(0, `rgba(52,184,124,${0.35 + 0.15 * glow})`);
    shellGrad.addColorStop(0.6, `rgba(45,158,107,${0.25 + 0.1 * glow})`);
    shellGrad.addColorStop(1, `rgba(26,122,80,${0.2})`);
    ctx.fillStyle = shellGrad;
    ctx.fill();
    ctx.strokeStyle = `rgba(168,255,212,${0.6 + 0.4 * glow})`;
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Shell inner hex
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = 22 * Math.cos(a), py = 22 * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = `rgba(168,255,212,${0.3 + 0.2 * glow})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();

    // Shell pattern lines
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(22 * Math.cos(a), 22 * Math.sin(a));
        ctx.strokeStyle = `rgba(168,255,212,${0.2 + 0.1 * glow})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
    }

    // Center circuit node
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(168,255,212,${0.8 + 0.2 * glow})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.ellipse(0, -48, 11, 10, 0, 0, Math.PI * 2);
    const headGrad = ctx.createRadialGradient(-2, -50, 0, 0, -48, 12);
    headGrad.addColorStop(0, `rgba(52,184,124,${0.7 + 0.3 * glow})`);
    headGrad.addColorStop(1, `rgba(26,122,80,0.5)`);
    ctx.fillStyle = headGrad;
    ctx.fill();
    ctx.strokeStyle = `rgba(168,255,212,${0.6 + 0.3 * glow})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();

    // Eyes with glow
    [-4, 4].forEach(ex => {
        ctx.beginPath();
        ctx.arc(ex, -51, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(10,31,20,0.9)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ex, -51, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,255,212,${0.9 + 0.1 * glow})`;
        ctx.fill();
        // eye glow
        const eyeGlow = ctx.createRadialGradient(ex, -51, 0, ex, -51, 6);
        eyeGlow.addColorStop(0, `rgba(168,255,212,${0.3 * glow})`);
        eyeGlow.addColorStop(1, "rgba(168,255,212,0)");
        ctx.beginPath();
        ctx.arc(ex, -51, 6, 0, Math.PI * 2);
        ctx.fillStyle = eyeGlow;
        ctx.fill();
    });

    // Legs
    const legs = [[-38, -20, -30], [38, -20, 30], [-38, 20, 30], [38, 20, -30]];
    legs.forEach(([lx, ly, rot]) => {
        ctx.save();
        ctx.translate(lx, ly);
        ctx.rotate(rot * Math.PI / 180);
        ctx.beginPath();
        ctx.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
        const legGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
        legGrad.addColorStop(0, `rgba(52,184,124,${0.5 + 0.2 * glow})`);
        legGrad.addColorStop(1, `rgba(26,122,80,0.3)`);
        ctx.fillStyle = legGrad;
        ctx.fill();
        ctx.strokeStyle = `rgba(168,255,212,${0.4 + 0.2 * glow})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
        ctx.restore();
    });

    // Tail
    ctx.beginPath();
    ctx.moveTo(0, 36);
    ctx.quadraticCurveTo(4, 48, 0, 56);
    ctx.quadraticCurveTo(-4, 48, 0, 36);
    ctx.fillStyle = `rgba(45,158,107,${0.4 + 0.2 * glow})`;
    ctx.fill();

    // Circuit lines from shell
    const circuitPts = [[50, 0], [-50, 0], [25, -43], [-25, -43], [25, 43], [-25, 43]];
    circuitPts.forEach(([cx, cy]) => {
        const angle = Math.atan2(cy, cx);
        const startX = 36 * Math.cos(angle), startY = 36 * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = `rgba(52,184,124,${0.3 + 0.2 * glow})`;
        ctx.lineWidth = 0.6;
        ctx.setLineDash([2, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(cx, cy, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52,184,124,${0.6 + 0.3 * glow})`;
        ctx.fill();
    });

    ctx.restore();
}

function drawAgent(ctx: CanvasRenderingContext2D, a: Agent) {
    const { x, y, size, type, pulsePhase, opacity } = a;
    const pulse = 0.5 + 0.5 * Math.sin(pulsePhase);
    const s = size / 40;

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    ctx.globalAlpha = opacity;

    if (type === 0) {
        // Hexagon AI chip
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const ang = (Math.PI / 3) * i;
            const px = 28 * Math.cos(ang), py = 28 * Math.sin(ang);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = `rgba(45,158,107,${0.15 + 0.1 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(168,255,212,${0.7 + 0.3 * pulse})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner hex
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const ang = (Math.PI / 3) * i;
            const px = 17 * Math.cos(ang), py = 17 * Math.sin(ang);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(52,184,124,${0.4 + 0.2 * pulse})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,255,212,${0.8 + 0.2 * pulse})`;
        ctx.fill();

        // Orbiting dot
        const oa = a.orbitAngle;
        ctx.beginPath();
        ctx.arc(22 * Math.cos(oa), 22 * Math.sin(oa), 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,255,212,${0.9})`;
        ctx.fill();
    }

    if (type === 1) {
        // Neural node
        ctx.beginPath();
        ctx.arc(0, 0, 22, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45,158,107,${0.1 + 0.05 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(52,184,124,${0.5 + 0.3 * pulse})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Inner rings
        [14, 8].forEach((r, i) => {
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(168,255,212,${(0.3 + 0.2 * pulse) / (i + 1)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
        });

        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,255,212,${0.9 + 0.1 * pulse})`;
        ctx.fill();

        // Pulse ring
        ctx.beginPath();
        ctx.arc(0, 0, 22 + 10 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(52,184,124,${0.3 * (1 - pulse)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    if (type === 2) {
        // Data cube
        const hw = 18;
        ctx.beginPath();
        ctx.rect(-hw, -hw, hw * 2, hw * 2);
        ctx.fillStyle = `rgba(45,158,107,${0.12 + 0.08 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(52,184,124,${0.6 + 0.3 * pulse})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Data bars
        [-8, -2, 4, 10].forEach((by, i) => {
            const bw = [14, 10, 12, 8][i];
            ctx.beginPath();
            ctx.rect(-hw + 4, by, bw, 3);
            ctx.fillStyle = `rgba(168,255,212,${0.4 + 0.2 * pulse})`;
            ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(6, 12, 5, 0, Math.PI * 2 * pulse);
        ctx.strokeStyle = `rgba(168,255,212,0.7)`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    if (type === 3) {
        // Chat bubble
        const r = 20;
        ctx.beginPath();
        ctx.roundRect(-r, -r, r * 2, r * 1.5, 6);
        ctx.fillStyle = `rgba(45,158,107,${0.15 + 0.1 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(52,184,124,${0.6 + 0.3 * pulse})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-6, 10);
        ctx.lineTo(0, 20);
        ctx.lineTo(6, 10);
        ctx.fillStyle = `rgba(45,158,107,${0.15 + 0.1 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(52,184,124,${0.6 + 0.3 * pulse})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        [-8, 0, 8].forEach(dx => {
            ctx.beginPath();
            ctx.arc(dx, -4, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168,255,212,${0.6 + 0.4 * pulse})`;
            ctx.fill();
        });
    }

    ctx.globalAlpha = 1;
    ctx.restore();
}

export function PremiumBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let w = 0, h = 0;
        let turtles: Turtle[] = [];
        let agents: Agent[] = [];
        let particles: Particle[] = [];

        const resize = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
        };

        const init = () => {
            // Turtles
            turtles = Array.from({ length: 40 }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 50 + 20,
                opacity: Math.random() * 0.25 + 0.08,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 0.3,
                glowPhase: Math.random() * Math.PI * 2,
                glowSpeed: Math.random() * 0.02 + 0.01,
                trail: [],
            }));

            // Agents
            agents = Array.from({ length: 40 }, (_, i) => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 25 + 15,
                opacity: Math.random() * 0.22 + 0.08,
                type: i % 4,
                pulsePhase: Math.random() * Math.PI * 2,
                orbitAngle: Math.random() * Math.PI * 2,
            }));

            // Particles
            particles = Array.from({ length: Math.floor((w * h) / 8000) }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                pulse: Math.random() * Math.PI * 2,
            }));
        };

        let frame = 0;

        const animate = () => {
            animId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, w, h);
            frame++;

            // Grid
            ctx.strokeStyle = "rgba(45,158,107,0.04)";
            ctx.lineWidth = 0.5;
            for (let gx = 0; gx < w; gx += 60) {
                ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
            }
            for (let gy = 0; gy < h; gy += 60) {
                ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
            }

            // Orbs
            const orbGrad = ctx.createRadialGradient(w / 2, -100, 0, w / 2, -100, 600);
            orbGrad.addColorStop(0, "rgba(45,158,107,0.08)");
            orbGrad.addColorStop(1, "rgba(45,158,107,0)");
            ctx.fillStyle = orbGrad;
            ctx.fillRect(0, 0, w, h);

            // Connection lines between nearby entities
            const allEntities = [...turtles.map(t => ({ x: t.x, y: t.y })), ...agents.map(a => ({ x: a.x, y: a.y }))];
            for (let i = 0; i < allEntities.length; i++) {
                for (let j = i + 1; j < allEntities.length; j++) {
                    const dx = allEntities[i].x - allEntities[j].x;
                    const dy = allEntities[i].y - allEntities[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 200) {
                        ctx.beginPath();
                        ctx.moveTo(allEntities[i].x, allEntities[i].y);
                        ctx.lineTo(allEntities[j].x, allEntities[j].y);
                        ctx.strokeStyle = `rgba(45,158,107,${(1 - dist / 200) * 0.08})`;
                        ctx.lineWidth = 0.6;
                        ctx.setLineDash([4, 6]);
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                }
            }

            // Particles
            particles.forEach((p, i) => {
                p.x += p.vx; p.y += p.vy; p.pulse += 0.015;
                if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
                const po = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(52,184,124,${po})`;
                ctx.fill();
                particles.slice(i + 1, i + 5).forEach(p2 => {
                    const dx = p.x - p2.x, dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 80) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(45,158,107,${(1 - dist / 80) * 0.08})`;
                        ctx.lineWidth = 0.4;
                        ctx.stroke();
                    }
                });
            });

            // Agents
            agents.forEach(a => {
                a.x += a.vx; a.y += a.vy;
                a.pulsePhase += 0.03;
                a.orbitAngle += 0.025;
                if (a.x < -60) a.x = w + 60; if (a.x > w + 60) a.x = -60;
                if (a.y < -60) a.y = h + 60; if (a.y > h + 60) a.y = -60;
                drawAgent(ctx, a);
            });

            // Turtles
            turtles.forEach(t => {
                t.x += t.vx; t.y += t.vy;
                t.rotation += t.rotSpeed;
                t.glowPhase += t.glowSpeed;
                if (t.x < -80) t.x = w + 80; if (t.x > w + 80) t.x = -80;
                if (t.y < -80) t.y = h + 80; if (t.y > h + 80) t.y = -80;

                // Trail
                t.trail.push({ x: t.x, y: t.y });
                if (t.trail.length > 20) t.trail.shift();
                if (t.trail.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(t.trail[0].x, t.trail[0].y);
                    t.trail.forEach(pt => ctx.lineTo(pt.x, pt.y));
                    ctx.strokeStyle = `rgba(52,184,124,${t.opacity * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                ctx.save();
                ctx.globalAlpha = t.opacity;
                drawTurtle(ctx, t);
                ctx.globalAlpha = 1;
                ctx.restore();
            });

            // Scanning line
            if (frame % 300 < 100) {
                const progress = (frame % 300) / 100;
                const scanY = progress * h;
                const scanGrad = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 80);
                scanGrad.addColorStop(0, "rgba(45,158,107,0)");
                scanGrad.addColorStop(0.5, "rgba(45,158,107,0.02)");
                scanGrad.addColorStop(1, "rgba(45,158,107,0)");
                ctx.fillStyle = scanGrad;
                ctx.fillRect(0, scanY - 80, w, 160);
                ctx.beginPath();
                ctx.moveTo(0, scanY);
                ctx.lineTo(w, scanY);
                ctx.strokeStyle = `rgba(52,184,124,0.05)`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        };

        resize();
        init();
        animate();

        const ro = new ResizeObserver(() => { resize(); init(); });
        ro.observe(canvas);

        return () => { cancelAnimationFrame(animId); ro.disconnect(); };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
}