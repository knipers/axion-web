import Image from "next/image"

export function ProductStory() {
  return (
    <section className="py-28 sm:py-36 lg:py-44 relative overflow-hidden">
      {/* Ambient glow — right side */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
        style={{
          width: "min(700px, 80vw)",
          height: "min(700px, 80vw)",
          background:
            "radial-gradient(circle at right center, rgba(45,107,255,0.09) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          {/* Left: Brand statement */}
          <div className="space-y-10 lg:pr-20">
            <h2
              className="font-extralight text-foreground leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(3.25rem, 7.5vw, 6.5rem)" }}
            >
              Cada<br />
              movimento<br />
              <span className="text-primary font-light">importa.</span>
            </h2>

            <div className="space-y-5 max-w-xs">
              <p className="text-base text-muted-foreground/50 font-light leading-relaxed">
                Projetado para quem não aceita menos que perfeito. Cada
                componente escolhido para elevar sua performance.
              </p>
              <div className="flex items-center gap-4 pt-1">
                <div className="w-10 h-px bg-primary/40" />
                <span className="text-[10px] text-primary/55 tracking-[0.35em] uppercase">
                  AXION V3 PRO
                </span>
              </div>
            </div>
          </div>

          {/* Right: Side-view product */}
          <div className="relative lg:pl-8">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(45,107,255,0.07) 0%, transparent 62%)",
              }}
            />
            <div className="group relative aspect-[4/3]">
              <Image
                src="/images/mouse-side.jpg"
                alt="AXION V3 PRO — Vista lateral"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                style={{
                  filter: "drop-shadow(0 24px 60px rgba(45,107,255,0.15))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
