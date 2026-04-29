"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const colors = [
  {
    name: "Preto",
    subtitle: "Matte Black",
    image: "/images/mouse-black.jpg",
    bg: "#0E0E11",
    dot: "#3a3a3f",
    accentRgb: "255,255,255",
    textDark: false,
  },
  {
    name: "Azul",
    subtitle: "Cobalt Blue",
    image: "/images/mouse-blue.jpg",
    bg: "#091526",
    dot: "#2D6BFF",
    accentRgb: "45,107,255",
    textDark: false,
  },
  {
    name: "Branco",
    subtitle: "Arctic White",
    image: "/images/mouse-white.jpg",
    bg: "#D8D8D8",
    dot: "#b0b0b0",
    accentRgb: "0,0,0",
    textDark: true,
  },
  {
    name: "Vermelho",
    subtitle: "Crimson Red",
    image: "/images/mouse-red.jpg",
    bg: "#160808",
    dot: "#dc2626",
    accentRgb: "220,38,38",
    textDark: false,
  },
]

export function ColorVariants() {
  const [selected, setSelected] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="cores" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-3">
          <div>
            <p className="text-[10px] text-primary/65 font-medium tracking-[0.5em] uppercase mb-4">
              Configurar
            </p>
            <h2
              className="font-extralight text-foreground tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Escolha sua cor
            </h2>
          </div>
          <p className="text-sm text-muted-foreground/30 font-light">
            4 acabamentos disponíveis
          </p>
        </div>

        {/* Color cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {colors.map((color, i) => {
            const isActive = selected === i
            const isHov = hovered === i

            return (
              <button
                key={color.name}
                onClick={() => setSelected(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  backgroundColor: color.bg,
                  transform: isActive
                    ? "scale(1.025)"
                    : isHov
                    ? "scale(1.01)"
                    : "scale(1)",
                  zIndex: isActive || isHov ? 10 : 1,
                  position: "relative",
                  boxShadow: isActive
                    ? `0 0 0 1.5px ${color.dot}, 0 24px 64px rgba(0,0,0,0.5), 0 0 48px rgba(${color.accentRgb},0.14)`
                    : isHov
                    ? `0 0 0 1px rgba(${color.accentRgb},0.25), 0 16px 40px rgba(0,0,0,0.35)`
                    : `0 0 0 1px rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.25)`,
                }}
                aria-pressed={isActive}
              >
                {/* Top gradient shine */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(160deg, rgba(${color.accentRgb},${isActive ? "0.14" : "0.06"}) 0%, transparent 50%)`,
                  }}
                />

                {/* Bottom vignette */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none z-10"
                  style={{
                    background: color.textDark
                      ? "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                  }}
                />

                {/* Product image */}
                <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-7 pt-8">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={color.image}
                      alt={`AXION V3 PRO — ${color.name}`}
                      fill
                      className="object-contain"
                      style={{
                        transform: isActive
                          ? "scale(1.1)"
                          : isHov
                          ? "scale(1.04)"
                          : "scale(0.93)",
                        transition: "transform 0.5s cubic-bezier(0.33,1,0.68,1)",
                        filter: `drop-shadow(0 12px 28px rgba(${color.accentRgb},${isActive ? "0.28" : "0.14"}))`,
                      }}
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
                  <p
                    className="text-[9px] tracking-[0.28em] uppercase mb-0.5 transition-opacity duration-300"
                    style={{
                      color: color.textDark
                        ? "rgba(0,0,0,0.4)"
                        : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {color.subtitle}
                  </p>
                  <p
                    className="text-sm font-light tracking-wide"
                    style={{
                      color: color.textDark
                        ? isActive ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.65)"
                        : isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.72)",
                    }}
                  >
                    {color.name}
                  </p>
                </div>

                {/* Active dot indicator */}
                {isActive && (
                  <div
                    className="absolute top-3.5 right-3.5 z-20 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: color.dot }}
                  >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5L3.2 5.8L8 1"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Selection summary bar */}
        <div
          className="flex items-center justify-between mt-6 sm:mt-8 pt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0 transition-all duration-500"
              style={{ backgroundColor: colors[selected].dot }}
            />
            <div>
              <p className="text-sm font-light text-foreground/75">
                {colors[selected].name}
              </p>
              <p className="text-[10px] text-muted-foreground/30 tracking-wide">
                {colors[selected].subtitle}
              </p>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground/30 tracking-wide">
            AXION V3 PRO
          </p>
        </div>
      </div>
    </section>
  )
}
