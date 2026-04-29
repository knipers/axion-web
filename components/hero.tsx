"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const trustItems = ["Garantia de 12 meses", "Pagamento seguro", "Envio rápido"]

export function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden">

      {/* ── BACKGROUNDS (shared) ───────────────────────────────── */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.30) 62%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 72% 60% at 50% 46%, rgba(45,107,255,0.34) 0%, rgba(45,107,255,0.10) 42%, transparent 65%)",
        }}
      />

      {/* ══════════════════════════════════════════════════════════
          MOBILE  (< lg)
      ══════════════════════════════════════════════════════════ */}

      {/* Mouse — absolute, pushed up vs anterior */}
      <div
        className="lg:hidden absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -47%)",
          width: "min(92vw, 84vh)",
          aspectRatio: "1",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "18% 12% 4% 12%",
            background:
              "radial-gradient(ellipse at 50% 62%, rgba(45,107,255,0.30) 0%, transparent 60%)",
            filter: "blur(52px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "3%", left: "22%", right: "22%", height: "9%",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.90) 0%, transparent 68%)",
            filter: "blur(20px)",
          }}
        />
        <Image
          src="/images/mouse-hero-dramatic.webp"
          alt="AXION V3 PRO Gaming Mouse"
          fill
          className="object-contain"
          style={{
            filter:
              "drop-shadow(0 40px 100px rgba(0,0,0,0.75)) drop-shadow(0 0 60px rgba(45,107,255,0.22))",
            WebkitMaskImage:
              "radial-gradient(ellipse 72% 68% at 50% 50%, black 32%, transparent 68%)",
            maskImage:
              "radial-gradient(ellipse 72% 68% at 50% 50%, black 32%, transparent 68%)",
          }}
          priority
        />
      </div>

      {/* Mobile edge fades */}
      <div className="lg:hidden absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-background via-background/85 to-transparent pointer-events-none z-10" />
      <div className="lg:hidden absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-background via-background/85 to-transparent pointer-events-none z-10" />

      {/* Mobile flex container — title top, CTAs bottom */}
      <div className="lg:hidden flex flex-col items-center justify-between h-full w-full">

        {/* Title */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 pt-28" style={{ maxWidth: 260 }}>
          <p className="text-[9px] text-primary/55 font-medium tracking-[0.6em] uppercase mb-5">
            Wireless Gaming Mouse
          </p>
          <h1
            className="font-extralight text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(2.8rem, 8vw, 4rem)", letterSpacing: "-0.01em" }}
          >
            AXION
            <br />
            <span className="text-primary font-light">V3 PRO</span>
          </h1>
        </div>

        {/* Price + urgency + CTAs + trust */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 pb-10 space-y-4" style={{ maxWidth: 360 }}>
          <div className="space-y-2">
            <p className="text-[9px] text-muted-foreground/30 tracking-[0.32em] uppercase">A partir de</p>
            <p className="font-extralight text-foreground/90 leading-none" style={{ fontSize: "clamp(1.7rem, 6vw, 2.2rem)" }}>
              R$&nbsp;299
            </p>
            <div className="flex items-center justify-center gap-2 pt-0.5">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(34,197,94,0.85)" }} />
              <span className="text-[10px] font-light tracking-wide" style={{ color: "rgba(34,197,94,0.65)" }}>
                Envio imediato · Estoque limitado
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 w-full">
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-8 h-12 text-sm rounded-full transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(45,107,255,0.45)]">
              Comprar AXION V3 PRO
            </Button>
            <Button size="lg" variant="ghost" className="w-full text-muted-foreground/38 hover:text-foreground/70 font-light px-8 h-12 text-sm rounded-full transition-all duration-500" asChild>
              <a href="#especificacoes">Especificações →</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[10px] text-muted-foreground/30 font-light">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden>
                  <path d="M1 3.5L3.2 5.8L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          DESKTOP  (lg+) — 2 colunas: texto esquerda, mouse direita
      ══════════════════════════════════════════════════════════ */}

      {/* Desktop top fade */}
      <div className="hidden lg:block absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <div className="hidden lg:flex h-full w-full max-w-7xl mx-auto px-16 items-center gap-8">

        {/* Left column — texto */}
        <div className="relative z-20 flex flex-col items-start w-[44%] space-y-7">
          <div>
            <p className="text-[9px] text-primary/55 font-medium tracking-[0.6em] uppercase mb-5">
              Wireless Gaming Mouse
            </p>
            <h1
              className="font-extralight text-foreground leading-none whitespace-nowrap"
              style={{ fontSize: "clamp(3.5rem, 4.8vw, 5.5rem)", letterSpacing: "-0.01em" }}
            >
              AXION{" "}
              <span className="text-primary font-light">V3 PRO</span>
            </h1>
          </div>

          {/* Price + urgency */}
          <div className="space-y-2">
            <p className="text-[9px] text-muted-foreground/30 tracking-[0.32em] uppercase">A partir de</p>
            <p className="font-extralight text-foreground/90 leading-none" style={{ fontSize: "2rem" }}>
              R$&nbsp;299
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(34,197,94,0.85)" }} />
              <span className="text-[10px] font-light tracking-wide" style={{ color: "rgba(34,197,94,0.65)" }}>
                Envio imediato · Estoque limitado
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 h-12 text-sm rounded-full transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(45,107,255,0.45)]">
              Comprar AXION V3 PRO
            </Button>
            <Button size="lg" variant="ghost" className="text-muted-foreground/38 hover:text-foreground/70 font-light px-8 h-12 text-sm rounded-full transition-all duration-500" asChild>
              <a href="#especificacoes">Especificações →</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[10px] text-muted-foreground/30 font-light">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden>
                  <path d="M1 3.5L3.2 5.8L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — mouse */}
        <div className="flex-1 relative h-full flex items-center justify-center">
          <div
            className="relative pointer-events-none"
            style={{ width: "min(100%, 86vh)", aspectRatio: "1" }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "18% 12% 4% 12%",
                background:
                  "radial-gradient(ellipse at 50% 62%, rgba(45,107,255,0.30) 0%, transparent 60%)",
                filter: "blur(52px)",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: "3%", left: "22%", right: "22%", height: "9%",
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.90) 0%, transparent 68%)",
                filter: "blur(20px)",
              }}
            />
            <Image
              src="/images/mouse-hero-dramatic.webp"
              alt="AXION V3 PRO Gaming Mouse"
              fill
              className="object-contain"
              style={{
                filter:
                  "drop-shadow(0 40px 100px rgba(0,0,0,0.75)) drop-shadow(0 0 60px rgba(45,107,255,0.22))",
                WebkitMaskImage:
                  "radial-gradient(ellipse 72% 68% at 50% 50%, black 32%, transparent 68%)",
                maskImage:
                  "radial-gradient(ellipse 72% 68% at 50% 50%, black 32%, transparent 68%)",
              }}
              priority
            />
          </div>
        </div>

      </div>

    </section>
  )
}
