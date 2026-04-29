const specs = [
  { label: "Conexão", value: "USB-C / 2.4 GHz Wireless / Bluetooth 5.0" },
  { label: "Sensor", value: "Óptico de alta precisão" },
  { label: "DPI", value: "Até 26.000 DPI" },
  { label: "Taxa de resposta", value: "1000 Hz (1 ms)" },
  { label: "Bateria", value: "500 mAh recarregável" },
  { label: "Peso", value: "Aprox. 58 g" },
  { label: "Switches", value: "Huano 80M cliques" },
  { label: "Compatibilidade", value: "Windows · macOS · Linux" },
]

export function Specifications() {
  return (
    <section id="especificacoes" className="py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="mb-14 sm:mb-18">
          <p className="text-[10px] text-primary/65 font-medium tracking-[0.5em] uppercase mb-4">
            Especificações
          </p>
          <h2 className="text-3xl sm:text-4xl font-extralight text-foreground tracking-tight">
            Detalhes técnicos
          </h2>
        </div>

        <div>
          {specs.map((spec, i) => (
            <div
              key={i}
              className="group flex items-center justify-between py-5 transition-all duration-300"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.055)",
                ...(i === 0 ? { borderTop: "1px solid rgba(255,255,255,0.055)" } : {}),
              }}
            >
              <span className="text-[11px] text-muted-foreground/32 tracking-[0.25em] uppercase flex-shrink-0">
                {spec.label}
              </span>
              <span className="text-sm text-muted-foreground/55 font-light group-hover:text-foreground/80 transition-colors duration-300 text-right ml-6">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
