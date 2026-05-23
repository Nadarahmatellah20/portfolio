import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <nav className={`mx-auto max-w-6xl px-4 sm:px-6 ${scrolled ? "glass rounded-2xl mx-4 sm:mx-auto shadow-elegant" : ""} transition-all duration-500`}>
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="inline-block h-8 w-8 rounded-lg gradient-primary shadow-glow" />
            <span className="gradient-text">Nadavibes.dev</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 hover-lift"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden glass rounded-lg p-2"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-4 py-3 rounded-lg hover:bg-muted/40"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
