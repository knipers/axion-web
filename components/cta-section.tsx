import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 50% 65%, rgba(45,107,255,0.11) 0%, transparent 68%)",
        }}
      />

      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">

        {/* Floating product image */}
        <div className="group relative mx-auto mb-12 sm:mb-16" style={{ width: "clamp(200px, 38vw, 340px)", aspectRatio: "1" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(45,107,255,0.16) 0%, transparent 68%)",
            }}
          />
          <Image
            src="/images/mouse-hero.png"
            alt="AXION V3 PRO"
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-[1.05]"
            style={{
              filter: "drop-shadow(0 24px 56px rgba(45,107,255,0.24))",
            }}
          />
        </div>

        {/* Copy */}
        <div className="space-y-6">
          <h2
            className="font-extralight text-foreground leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Pronto para elevar
            <br />
            sua{" "}
            <span className="text-primary font-light">precisão</span>?
          </h2>

          <p className="text-base text-muted-foreground/40 font-light max-w-sm mx-auto leading-relaxed">
            Design premium. Performance competitiva. Controle absoluto.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-14 h-14 text-sm rounded-full transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_64px_rgba(45,107,255,0.38)]"
            >
              Comprar V3 PRO
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/22 tracking-wide pt-2">
            Frete grátis · Garantia de 1 ano · Devolução em 30 dias
          </p>
        </div>
      </div>
    </section>
  )
}
