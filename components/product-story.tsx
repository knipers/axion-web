export function ProductStory() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-44 lg:py-56">

      {/* Faint glow — bleeds in from the left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "-8%",
          transform: "translateY(-50%)",
          width: "min(860px, 80vw)",
          height: "min(860px, 80vw)",
          background:
            "radial-gradient(circle, rgba(45,107,255,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Barely-visible watermark */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-10 pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-extralight leading-none"
          style={{
            fontSize: "clamp(12rem, 28vw, 26rem)",
            color: "rgba(255,255,255,0.013)",
            letterSpacing: "0.08em",
          }}
        >
          AXION
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-14 sm:mb-20 lg:mb-24">
          <div className="w-8 h-px bg-primary/35" />
          <span className="text-[9px] text-primary/50 tracking-[0.55em] uppercase font-medium">
            AXION V3 PRO
          </span>
        </div>

        {/* Headline — 3 lines, each progressively impactful */}
        <h2
          className="font-extralight text-foreground leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(3.8rem, 13.5vw, 13rem)" }}
        >
          Cada
          <br />
          movimento
          <br />
          <span
            className="font-light"
            style={{ color: "#2D6BFF" }}
          >
            importa.
          </span>
        </h2>

        {/* Bottom rule + tagline */}
        <div className="mt-16 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16">
          <div className="w-12 h-px bg-primary/30 flex-shrink-0 mt-1" />
          <p className="text-base text-muted-foreground/38 font-light leading-relaxed max-w-[22rem]">
            Projetado para resposta rápida, controle absoluto e consistência em cada partida.
          </p>
        </div>

      </div>
    </section>
  )
}
