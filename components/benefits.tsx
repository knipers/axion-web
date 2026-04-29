export function Benefits() {
  return (
    <section className="py-14 sm:py-20 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20">
          <Stat value="~58g" label="Ultra Leve" />
          <Divider />
          <Stat value="26K" label="DPI Máximo" />
          <Divider className="hidden sm:block" />
          <Stat value="Tri-Mode" label="Conexão" />
          <Divider className="hidden lg:block" />
          <Stat value="500mAh" label="Bateria" />
          <Divider className="hidden lg:block" />
          <Stat value="1K Hz" label="Taxa de resposta" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="group flex flex-col items-center text-center min-w-[72px]">
      <p className="text-3xl sm:text-4xl font-extralight text-foreground/90 tracking-tight transition-colors duration-500 group-hover:text-primary">
        {value}
      </p>
      <p className="mt-1.5 text-[9px] text-muted-foreground/35 tracking-[0.28em] uppercase">
        {label}
      </p>
    </div>
  )
}

function Divider({ className }: { className?: string }) {
  return (
    <span
      className={`w-px h-10 bg-gradient-to-b from-transparent via-white/[0.12] to-transparent ${className ?? ""}`}
    />
  )
}
