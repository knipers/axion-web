"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-between overflow-hidden">

      {/* ── BACKGROUND LAYERS ─────────────────────────────────── */}

      {/* Outer vignette — darkens corners, pushes product forward */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.30) 62%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Studio spotlight — blue radial light source behind mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 68% 58% at 50% 46%, rgba(45,107,255,0.30) 0%, rgba(45,107,255,0.10) 42%, transparent 65%)",
        }}
      />

      {/* ── PRODUCT ────────────────────────────────────────────── */}

      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -42%)",
          width: "min(1150px, 92vw, 86vh)",
          aspectRatio: "1",
        }}
      >
        {/* Blue under-glow — light bleeding from beneath the product */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "18% 12% 4% 12%",
            background:
              "radial-gradient(ellipse at 50% 62%, rgba(45,107,255,0.26) 0%, transparent 60%)",
            filter: "blur(48px)",
          }}
        />

        {/* Floor shadow — soft dark ellipse, simulates surface shadow */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "3%",
            left: "22%",
            right: "22%",
            height: "9%",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.90) 0%, transparent 68%)",
            filter: "blur(20px)",
          }}
        />

        <Image
          src="/images/mouse-hero-dramatic.jpg"
          alt="AXION V3 PRO Gaming Mouse"
          fill
          className="object-contain"
          style={{
            filter:
              "drop-shadow(0 40px 100px rgba(0,0,0,0.75)) drop-shadow(0 0 50px rgba(45,107,255,0.18))",
          }}
          priority
        />
      </div>

      {/* ── EDGE FADES ─────────────────────────────────────────── */}

      {/* Top fade — header area stays readable */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-background via-background/85 to-transparent pointer-events-none z-10" />

      {/* Bottom fade — CTA area stays readable */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />

      {/* ── TITLE — top ────────────────────────────────────────── */}

      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-28 lg:pt-24" style={{ maxWidth: 260 }}>
        <p className="text-[9px] text-primary/55 font-medium tracking-[0.6em] uppercase mb-5">
          Wireless Gaming Mouse
        </p>
        <h1
          className="font-extralight text-foreground leading-[1.02]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.01em" }}
        >
          AXION
          <br />
          <span className="text-primary font-light">V3 PRO</span>
        </h1>
      </div>

      {/* ── CTAs — bottom ──────────────────────────────────────── */}

      <div
        className="relative z-20 flex flex-col items-center text-center px-6 pb-10 sm:pb-14 space-y-5"
        style={{ maxWidth: 300 }}
      >
        <p className="text-[11px] text-muted-foreground/35 font-light tracking-wide leading-relaxed">
          Precisão sem fio para cada movimento.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-10 h-12 text-sm rounded-full transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(45,107,255,0.45)]"
          >
            Comprar agora
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto text-muted-foreground/38 hover:text-foreground/70 font-light px-8 h-12 text-sm rounded-full transition-all duration-500 hover:bg-white/[0.03]"
            asChild
          >
            <a href="#especificacoes">Especificações →</a>
          </Button>
        </div>
      </div>

    </section>
  )
}
