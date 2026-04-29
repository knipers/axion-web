"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-between overflow-hidden">
      {/* Atmospheric glow — behind the mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 52%, rgba(45,107,255,0.20) 0%, rgba(45,107,255,0.06) 48%, transparent 72%)",
        }}
      />

      {/* Top + bottom edge fades */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      {/* Mouse — absolute centrepiece, never overlaps text */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -44%)",
          width: "min(920px, 90vw, 82vh)",
          aspectRatio: "1",
        }}
      >
        {/* Under-glow */}
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 65%, rgba(45,107,255,0.18) 0%, transparent 62%)",
          }}
        />
        <Image
          src="/images/mouse-hero-dramatic.jpg"
          alt="AXION V3 PRO Gaming Mouse"
          fill
          className="object-contain"
          style={{
            filter: "drop-shadow(0 28px 80px rgba(45,107,255,0.22))",
          }}
          priority
        />
      </div>

      {/* Title — top, above the mouse */}
      <div className="relative z-20 text-center px-6 pt-28 lg:pt-24">
        <p className="text-[10px] text-primary/65 font-medium tracking-[0.55em] uppercase mb-5">
          Wireless Gaming Mouse
        </p>
        <h1
          className="font-extralight tracking-tight text-foreground leading-none"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
        >
          <span className="tracking-[0.12em]">AXION</span>{" "}
          <span className="text-primary font-light">V3 PRO</span>
        </h1>
      </div>

      {/* CTAs — bottom, above the mouse */}
      <div className="relative z-20 text-center px-6 pb-10 sm:pb-14 space-y-4">
        <p className="text-xs sm:text-sm text-muted-foreground/40 font-light tracking-wide">
          Precisão absoluta. Sem fio. Sem limites.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-10 h-12 text-sm rounded-full transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(45,107,255,0.45)]"
          >
            Comprar agora
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto text-muted-foreground/45 hover:text-foreground/80 font-light px-8 h-12 text-sm rounded-full transition-all duration-500 hover:bg-white/[0.03]"
            asChild
          >
            <a href="#especificacoes">Especificações →</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
