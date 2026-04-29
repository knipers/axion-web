import Image from "next/image"
import { cn } from "@/lib/utils"

const features = [
  {
    eyebrow: "Sensor",
    title: "26.000 DPI de precisão absoluta",
    description:
      "Sensor óptico de última geração com rastreamento perfeito em qualquer superfície. Zero aceleração, zero filtros — apenas movimento puro.",
    stat: { value: "26K DPI", label: "Resolução máxima" },
    image: "/images/mouse-hero-crop.png",
    imageAlt: "AXION V3 PRO — detalhe do sensor",
    reverse: true,
  },
  {
    eyebrow: "Conectividade",
    title: "Tri-Mode: três modos, zero compromisso",
    description:
      "USB-C com fio, 2.4 GHz sem fio de baixa latência ou Bluetooth 5.0. Conecte-se do jeito que preferir, quando quiser.",
    stat: { value: "1ms", label: "Latência mínima" },
    image: "/images/mouse-hero.png",
    imageAlt: "AXION V3 PRO — conectividade",
    reverse: false,
  },
]

export function ProductSection() {
  return (
    <section id="produto" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28 sm:space-y-36">
        {features.map((feature, i) => (
          <div
            key={i}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Text block — always first in DOM (top on mobile) */}
            <div
              className={cn(
                "space-y-7",
                feature.reverse && "lg:order-last"
              )}
            >
              <p className="text-[10px] text-primary/65 tracking-[0.5em] uppercase">
                {feature.eyebrow}
              </p>
              <h3
                className="font-extralight text-foreground leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground/50 font-light leading-relaxed max-w-md">
                {feature.description}
              </p>

              {/* Stat pill */}
              <div className="inline-flex items-center gap-5 border border-white/[0.08] rounded-full px-6 py-3 bg-white/[0.02]">
                <span className="text-2xl font-extralight text-primary leading-none">
                  {feature.stat.value}
                </span>
                <span className="text-[10px] text-muted-foreground/35 tracking-[0.22em] uppercase">
                  {feature.stat.label}
                </span>
              </div>
            </div>

            {/* Image block */}
            <div
              className={cn(
                "relative group",
                feature.reverse && "lg:order-first"
              )}
            >
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(45,107,255,0.08) 0%, transparent 62%)",
                }}
              />

              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#0E0E11" }}
              >
                {/* Subtle top-left light */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(45,107,255,0.05) 0%, transparent 45%)",
                  }}
                />
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-contain p-8 sm:p-12 transition-transform duration-700 group-hover:scale-[1.05]"
                  style={{
                    filter:
                      "drop-shadow(0 16px 40px rgba(45,107,255,0.14))",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
