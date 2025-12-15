"use client";

import React, { useEffect, useRef } from "react";

interface ConstellationProps {
  className?: string;
  density?: number; // points per 10,000 px^2
  speed?: number; // 0.2 - 2
  connectDistance?: number; // px
  dotSize?: number; // px
  lineWidth?: number; // px
  colorA?: string; // start color for gradient
  colorB?: string; // end color for gradient
  mouseInfluence?: number; // 0 - 1
  blur?: number; // css blur px for glow
}

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const Constellation: React.FC<ConstellationProps> = ({
  className = "",
  density = 0.14,
  speed = 0.7,
  connectDistance = 140,
  dotSize = 1.6,
  lineWidth = 0.8,
  colorA = "#22d3ee", // cyan-400
  colorB = "#f472b6", // pink-400
  mouseInfluence = 0.2,
  blur = 6,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<{ x: number; y: number; inside: boolean }>({ x: 0, y: 0, inside: false });

  useEffect(() => {
    const container = containerRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let dpr = Math.min(2, window.devicePixelRatio || 1);

    function resize() {
      const { clientWidth: w, clientHeight: h } = container;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      // Recreate points based on new area
      const area = (w * h) / 10000; // in 10k px^2 units
      const count = Math.max(20, Math.floor(area * density));
      const pts: Point[] = [];
      for (let i = 0; i < count; i++) {
        pts.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() * 2 - 1) * speed,
          vy: (Math.random() * 2 - 1) * speed,
        });
      }
      pointsRef.current = pts;
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * dpr;
      mouseRef.current.y = (e.clientY - rect.top) * dpr;
      mouseRef.current.inside =
        e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    };
    const onLeave = () => {
      mouseRef.current.inside = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    function draw(t: number) {
      const pts = pointsRef.current;
      const w = canvas.width;
      const h = canvas.height;

      // clear with subtle fade for trails
      ctx.clearRect(0, 0, w, h);

      // gradient for lines
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, colorA);
      grad.addColorStop(1, colorB);
      ctx.lineWidth = Math.max(0.2, lineWidth * dpr);
      ctx.strokeStyle = grad;

      // glow
      (ctx as any).filter = `blur(${blur}px)`;

      // update + draw connections
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // mouse influence
        if (mouseRef.current.inside && mouseInfluence > 0) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist2 = dx * dx + dy * dy;
          const dist = Math.sqrt(dist2) + 0.0001;
          const force = clamp((connectDistance * dpr - dist) / (connectDistance * dpr), 0, 1) * mouseInfluence;
          p.vx += (dx / dist) * force * 0.4;
          p.vy += (dy / dist) * force * 0.4;
        }

        // move
        p.x += p.vx;
        p.y += p.vy;

        // slight friction
        p.vx *= 0.995;
        p.vy *= 0.995;

        // bounce
        if (p.x <= 0 || p.x >= w) p.vx *= -1, (p.x = clamp(p.x, 0, w));
        if (p.y <= 0 || p.y >= h) p.vy *= -1, (p.y = clamp(p.y, 0, h));
      }

      // draw connections
      const maxDist2 = (connectDistance * dpr) * (connectDistance * dpr);
      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 <= maxDist2) {
            const a = 1 - d2 / maxDist2;
            ctx.globalAlpha = a * 0.8;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
          }
        }
      }
      ctx.stroke();
      ctx.globalAlpha = 1;

      // draw dots on top (no blur)
      (ctx as any).filter = "none";
      ctx.fillStyle = colorA;
      for (let i = 0; i < pts.length; i++) {
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, Math.max(0.5, dotSize * dpr), 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [density, speed, connectDistance, dotSize, lineWidth, colorA, colorB, mouseInfluence, blur]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* extra decorative layers */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(800px_400px_at_20%_10%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(900px_600px_at_80%_20%,rgba(255,255,255,0.04),transparent_60%)]" />
    </div>
  );
};

export default Constellation;
