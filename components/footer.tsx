export function Footer() {
  return (
    <footer className="py-12 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xs font-medium tracking-[0.3em] text-muted-foreground/40">
            AXION
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {["Produto", "Specs", "Cores", "Sobre"].map((label) => (
              <a 
                key={label}
                href={`#${label.toLowerCase()}`} 
                className="text-[10px] text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-500 tracking-[0.15em] uppercase"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[10px] text-muted-foreground/30 tracking-wider">
            © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
