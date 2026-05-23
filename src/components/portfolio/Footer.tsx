import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <a href="#home" className="inline-flex items-center gap-2 font-display text-xl font-bold">
            <span className="inline-block h-8 w-8 rounded-lg gradient-primary shadow-glow" />
            <span className="gradient-text">nadavibes.dev</span>
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Nada — Full-Stack Web Developer. All rights reserved.
          </p>
        </div>
        <div className="flex sm:justify-end gap-3">
          <a aria-label="GitHub" href="https://github.com/Nadarahmatellah20" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-xl hover-lift"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/rahmat-ellah-nada-68b491385" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-xl hover-lift"><Linkedin size={18} /></a>
          <a aria-label="Email" href="mailto:nadarahmatellah5@gmail.com" className="glass p-3 rounded-xl hover-lift"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
