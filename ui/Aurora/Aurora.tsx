"use client";

import React, { useEffect, useRef, useMemo } from "react";

interface AuroraProps {
  className?: string;
  intensity?: number; // 0.0 - 1.0 opacity multiplier
  followMouse?: boolean;
  palette?: "ocean" | "sunset" | "forest" | "cosmic" | "festival" | "mono";
}

export default function Aurora({
  className = "",
  intensity = 1,
  followMouse = true,
  palette = "ocean",
}: AuroraProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!followMouse) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = (e.clientX - rect.left - rect.width / 2) / rect.width; // -0.5..0.5
      const my = (e.clientY - rect.top - rect.height / 2) / rect.height; // -0.5..0.5
      el.style.setProperty("--mx", `${mx}`);
      el.style.setProperty("--my", `${my}`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [followMouse]);

  const vars = useMemo(() => {
    const palettes = {
      ocean: {
        c1: "rgba(0,255,255,0.55)",
        c2: "rgba(255,0,153,0.50)",
        c3: "rgba(0,128,255,0.45)",
        c4: "rgba(180,255,120,0.40)",
        veil1: "rgba(0,255,255,0.12)",
        veil2: "rgba(255,0,153,0.10)",
        veil3: "rgba(0,128,255,0.10)",
      },
      sunset: {
        c1: "rgba(255,140,0,0.55)", // orange
        c2: "rgba(255,0,102,0.50)", // hot pink
        c3: "rgba(186,85,211,0.45)", // orchid
        c4: "rgba(255,215,0,0.35)", // gold
        veil1: "rgba(255,140,0,0.12)",
        veil2: "rgba(255,0,102,0.10)",
        veil3: "rgba(186,85,211,0.10)",
      },
      forest: {
        c1: "rgba(34,197,94,0.55)", // emerald
        c2: "rgba(16,185,129,0.45)", // teal
        c3: "rgba(59,130,246,0.30)", // blue accent
        c4: "rgba(190,242,100,0.35)", // lime
        veil1: "rgba(16,185,129,0.12)",
        veil2: "rgba(34,197,94,0.10)",
        veil3: "rgba(59,130,246,0.08)",
      },
      cosmic: {
        c1: "rgba(168,85,247,0.55)", // violet
        c2: "rgba(99,102,241,0.50)", // indigo
        c3: "rgba(56,189,248,0.45)", // sky
        c4: "rgba(244,114,182,0.45)", // pink
        veil1: "rgba(168,85,247,0.12)",
        veil2: "rgba(99,102,241,0.10)",
        veil3: "rgba(244,114,182,0.08)",
      },
      festival: {
        c1: "rgba(0,255,180,0.60)", // neon teal
        c2: "rgba(255,25,140,0.55)", // neon magenta
        c3: "rgba(135,92,255,0.55)", // electric purple
        c4: "rgba(255,230,0,0.45)", // bright yellow
        veil1: "rgba(0,255,180,0.14)",
        veil2: "rgba(255,25,140,0.12)",
        veil3: "rgba(135,92,255,0.12)",
      },
      mono: {
        c1: "rgba(255,255,255,0.35)",
        c2: "rgba(220,220,220,0.30)",
        c3: "rgba(200,200,200,0.28)",
        c4: "rgba(255,255,255,0.25)",
        veil1: "rgba(255,255,255,0.10)",
        veil2: "rgba(255,255,255,0.08)",
        veil3: "rgba(255,255,255,0.06)",
      },
    } as const;

    const p = palettes[palette] ?? palettes.ocean;
    return {
      "--c1": p.c1,
      "--c2": p.c2,
      "--c3": p.c3,
      "--c4": p.c4,
      "--veil1": p.veil1,
      "--veil2": p.veil2,
      "--veil3": p.veil3,
    } as React.CSSProperties & Record<string, string>;
  }, [palette]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity: Math.max(0, Math.min(1, intensity)), ...vars } as any}
      aria-hidden
    >
      {/* Gradient veil for depth (uses palette vars) */}
      <div className="aurora-veil" />

      {/* Blobs */}
      <div className="aurora-blob b1" />
      <div className="aurora-blob b2" />
      <div className="aurora-blob b3" />
      <div className="aurora-blob b4" />

      <style jsx global>{`
        .aurora-veil {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1200px 600px at 50% -10%, var(--veil1, rgba(0,255,255,0.12)), transparent 60%),
            radial-gradient(900px 500px at 80% 20%, var(--veil2, rgba(255,0,153,0.10)), transparent 60%),
            radial-gradient(1000px 600px at 20% 30%, var(--veil3, rgba(0,128,255,0.10)), transparent 60%);
        }

        .aurora-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          will-change: transform, filter, opacity;
          opacity: 0.28;
          transform: translate3d(
            calc(var(--mx, 0) * var(--fx, 40px) + var(--dx, 0px)),
            calc(var(--my, 0) * var(--fy, 40px) + var(--dy, 0px)),
            0
          ) scale(var(--s, 1));
          animation: aurora-pulse var(--dur, 12s) ease-in-out infinite,
                     aurora-drift var(--drift, 24s) ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes aurora-pulse {
          0%, 100% { --s: 1; }
          50% { --s: 1.08; }
        }
        @keyframes aurora-drift {
          0%, 100% { --dx: 0px; --dy: 0px; }
          50% { --dx: 24px; --dy: -18px; }
        }

        /* Blob theming via palette variables */
        .aurora-blob.b1 {
          --fx: 60px; --fy: 40px; --dur: 14s; --drift: 28s;
          width: 48rem; height: 48rem;
          left: -12rem; top: -10rem;
          background: radial-gradient(35% 35% at 50% 50%, var(--c1, rgba(0,255,255,0.55)), rgba(0,0,0,0) 70%);
        }
        .aurora-blob.b2 {
          --fx: -40px; --fy: 60px; --dur: 16s; --drift: 26s;
          width: 40rem; height: 40rem;
          right: -10rem; top: -6rem;
          background: radial-gradient(35% 35% at 50% 50%, var(--c2, rgba(255,0,153,0.50)), rgba(0,0,0,0) 70%);
        }
        .aurora-blob.b3 {
          --fx: 30px; --fy: -50px; --dur: 18s; --drift: 30s;
          width: 44rem; height: 44rem;
          left: -8rem; bottom: -10rem;
          background: radial-gradient(35% 35% at 50% 50%, var(--c3, rgba(0,128,255,0.45)), rgba(0,0,0,0) 70%);
        }
        .aurora-blob.b4 {
          --fx: -50px; --fy: -30px; --dur: 20s; --drift: 32s;
          width: 36rem; height: 36rem;
          right: -8rem; bottom: -8rem;
          background: radial-gradient(35% 35% at 50% 50%, var(--c4, rgba(180,255,120,0.40)), rgba(0,0,0,0) 70%);
        }

        @media (max-width: 640px) {
          .aurora-blob { filter: blur(70px); }
          .aurora-blob.b1 { width: 40rem; height: 40rem; left: -16rem; top: -16rem; }
          .aurora-blob.b2 { width: 32rem; height: 32rem; right: -12rem; top: -12rem; }
          .aurora-blob.b3 { width: 36rem; height: 36rem; left: -14rem; bottom: -14rem; }
          .aurora-blob.b4 { width: 28rem; height: 28rem; right: -12rem; bottom: -12rem; }
        }
      `}</style>
    </div>
  );
}
