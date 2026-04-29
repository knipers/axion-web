import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { ProductStory } from "@/components/product-story"
import { ProductSection } from "@/components/product-section"
import { Specifications } from "@/components/specifications"
import { ColorVariants } from "@/components/color-variants"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Benefits />
      <ProductStory />
      <ProductSection />
      <ColorVariants />
      <Specifications />
      <CTASection />
      <Footer />
    </main>
  )
}
