"use client"

import { useState } from "react"
import Image from "next/image"

const colors = [
  {
    id: "black",
    name: "Preto",
    subtitle: "Matte Black",
    image: "/images/mouse-black.jpg",
    cardBg: "linear-gradient(155deg, #1c1c21 0%, #0e0e11 55%, #111115 100%)",
    glowRgb: "180,180,200",
    rimColor: "rgba(255,255,255,0.18)",
    activeRim: "rgba(255,255,255,0.5)",
    swatch: "#28282e",
    swatchRing: "rgba(255,255,255,0.4)",
    textMuted: "rgba(255,255,255,0.35)",
    textFull: "rgba(255,255,255,0.92)",
    dark: false,
  },
  {
    id: "blue",
    name: "Azul",
    subtitle: "Cobalt Blue",
    image: "/images/mouse-blue.jpg",
    cardBg: "linear-gradient(155deg, #0f2244 0%, #091526 55%, #060f1c 100%)",
    glowRgb: "45,107,255",
    rimColor: "rgba(45,107,255,0.22)",
    activeRim: "#2D6BFF",
    swatch: "#2D6BFF",
    swatchRing: "rgba(45,107,255,0.55)",
    textMuted: "rgba(255,255,255,0.35)",
    textFull: "rgba(255,255,255,0.95)",
    dark: false,
  },
  {
    id: "white",
    name: "Branco",
    subtitle: "Arctic White",
    image: "/images/mouse-white.jpg",
    cardBg: "linear-gradient(155deg, #ebebeb 0%, #d8d8d8 55%, #cacaca 100%)",
    glowRgb: "140,140,150",
    rimColor: "rgba(0,0,0,0.10)",
    activeRim: "rgba(0,0,0,0.45)",
    swatch: "#d0d0d0",
    swatchRing: "rgba(0,0,0,0.3)",
    textMuted: "rgba(0,0,0,0.38)",
    textFull: "rgba(0,0,0,0.85)",
    dark: true,
  },
  {
    id: "red",
    name: "Vermelho",
    subtitle: "Crimson Red",
    image: "/images/mouse-red.jpg",
    cardBg: "linear-gradient(155deg, #300c0c 0%, #160808 55%, #100505 100%)",
    glowRgb: "220,38,38",
    rimColor: "rgba(220,38,38,0.22)",
    activeRim: "#dc2626",
    swatch: "#dc2626",
    swatchRing: "rgba(220,38,38,0.55)",
    textMuted: "rgba(255,255,255,0.35)",
    textFull: "rgba(255,255,255,0.92)",
    dark: false,
  },
]

export function ColorVariants() {
  const [selected, setSelected] = useState(1) // Azul as default
  const [hovered, setHovered] = useState<number | null>(null)

  const active = colors[selected]

  return (
    <section id="cores" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-3">
          <div>
            <p className="text-[10px] text-primary/65 font-medium tracking-[0.5em] uppercase mb-4">
              Configurar
            </p>
            <h2
              className="font-extralight text-foreground tracking-tight leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Escolha sua cor
            </h2>
          </div>
          <p className="text-sm text-muted-foreground/30 font-light pb-1">
            4 acabamentos disponíveis
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {colors.map((color, i) => {
            const isActive = selected === i
            const isHov = hovered === i

            return (
              <button
                key={color.id}
                onClick={() => setSelected(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                aria-pressed={isActive}
                className="group relative rounded-2xl overflow-hidden text-left focus-visible:outline-none"
                style={{
                  aspectRatio: "3/5",
                  background: color.cardBg,
                  transition:
                    "transform 0.4s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.4s ease",
                  transform: isActive
                    ? "scale(1.03) translateY(-4px)"
                    : isHov
                    ? "scale(1.015)"
                    : "scale(1)",
                  zIndex: isActive ? 20 : isHov ? 10 : 1,
                  boxShadow: isActive
                    ? `0 0 0 2px ${color.activeRim},
                       0 28px 72px rgba(0,0,0,0.55),
                       0 0 60px rgba(${color.glowRgb},0.18)`
                    : isHov
                    ? `0 0 0 1px ${color.rimColor},
                       0 16px 40px rgba(0,0,0,0.40),
                       0 0 32px rgba(${color.glowRgb},0.10)`
                    : `0 0 0 1px rgba(255,255,255,0.05),
                       0 4px 16px rgba(0,0,0,0.30)`,
                }}
              >
                {/* Top-left ambient light */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 30% 10%, rgba(${color.glowRgb},0.10) 0%, transparent 65%)`,
                    opacity: isActive || isHov ? 1 : 0.5,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Bottom vignette */}
                <div
                  className="absolute bottom-0 inset-x-0 h-2/5 pointer-events-none"
                  style={{
                    background: color.dark
                      ? "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%)",
                  }}
                />

                {/* Product image */}
                <div className="absolute inset-x-0 top-[8%] bottom-[28%] flex items-center justify-center px-5 sm:px-7">
                  <div className="relative w-full h-full">
                    {/* Glow beneath image */}
                    <div
                      className="absolute inset-x-[10%] bottom-0 h-[40%] blur-2xl pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at center, rgba(${color.glowRgb},${isActive ? "0.28" : "0.12"}) 0%, transparent 70%)`,
                        transition: "opacity 0.4s ease",
                      }}
                    />
                    <Image
                      src={color.image}
                      alt={`AXION V3 PRO — ${color.name}`}
                      fill
                      className="object-contain"
                      style={{
                        filter: `drop-shadow(0 16px 36px rgba(${color.glowRgb},${isActive ? "0.35" : isHov ? "0.22" : "0.14"}))`,
                        transform: isActive
                          ? "scale(1.12) translateY(-6px)"
                          : isHov
                          ? "scale(1.05) translateY(-3px)"
                          : "scale(0.95)",
                        transition:
                          "transform 0.5s cubic-bezier(0.34,1.3,0.64,1), filter 0.4s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                  <p
                    className="text-[9px] tracking-[0.28em] uppercase mb-1"
                    style={{
                      color: color.textMuted,
                      transition: "color 0.3s",
                    }}
                  >
                    {color.subtitle}
                  </p>
                  <p
                    className="text-sm font-light tracking-wide"
                    style={{
                      color: isActive || isHov ? color.textFull : color.textMuted,
                      transition: "color 0.3s",
                    }}
                  >
                    {color.name}
                  </p>
                </div>

                {/* Selected badge — top right */}
                <div
                  className="absolute top-3.5 right-3.5 flex items-center justify-center rounded-full"
                  style={{
                    width: 22,
                    height: 22,
                    background: isActive ? color.activeRim : "transparent",
                    border: isActive
                      ? "none"
                      : `1.5px solid rgba(${color.glowRgb},0.22)`,
                    opacity: isActive || isHov ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(0.7)",
                    transition: "opacity 0.3s ease, transform 0.3s ease, background 0.3s",
                  }}
                >
                  {isActive && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke={color.dark ? "#000" : "#fff"}
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Configurator summary bar */}
        <div
          className="mt-5 sm:mt-6 rounded-2xl px-5 sm:px-6 py-4 flex items-center justify-between gap-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Color swatches — quick select */}
          <div className="flex items-center gap-2 sm:gap-3">
            {colors.map((color, i) => (
              <button
                key={color.id}
                onClick={() => setSelected(i)}
                className="rounded-full flex-shrink-0 transition-all duration-300 focus-visible:outline-none"
                aria-label={color.name}
                style={{
                  width: selected === i ? 20 : 14,
                  height: selected === i ? 20 : 14,
                  background: color.swatch,
                  boxShadow:
                    selected === i
                      ? `0 0 0 2px #0B0B0D, 0 0 0 3.5px ${color.swatchRing}`
                      : "0 0 0 1px rgba(255,255,255,0.08)",
                }}
              />
            ))}
          </div>

          {/* Selected info */}
          <div className="flex-1 min-w-0 px-4 hidden sm:block">
            <p className="text-sm font-light text-foreground/75 truncate">
              {active.name}
              <span className="text-muted-foreground/35 ml-2 text-xs">
                {active.subtitle}
              </span>
            </p>
          </div>

          {/* CTA */}
          <button
            className="flex-shrink-0 text-[11px] font-medium tracking-[0.18em] uppercase text-white rounded-full px-5 h-9 transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: `rgba(${active.glowRgb},${active.dark ? "0.35" : "0.22"})`,
              boxShadow: `0 0 24px rgba(${active.glowRgb},0.18)`,
              border: `1px solid rgba(${active.glowRgb},0.3)`,
              color: active.dark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)",
              transition:
                "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
            }}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  )
}
