"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#produto", label: "Produto" },
  { href: "#cores", label: "Cores" },
  { href: "#especificacoes", label: "Specs" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/75 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#"
            className="text-sm font-medium tracking-[0.32em] text-foreground hover:text-primary transition-colors duration-500"
          >
            AXION
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-transparent hover:bg-primary text-foreground/70 hover:text-white border border-white/[0.12] hover:border-primary font-medium px-5 h-8 text-[10px] tracking-[0.18em] uppercase rounded-full transition-all duration-500"
            >
              Comprar
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-foreground/50 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-7 border-t border-white/[0.06] bg-background/95 backdrop-blur-2xl -mx-6 px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-300 py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium w-full mt-5 h-11 rounded-full text-xs tracking-wider">
                Comprar V3 PRO
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
