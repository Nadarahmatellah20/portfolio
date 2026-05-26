import avatar from "@/assets/nada.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-primary)" }} />
        <div className="absolute bottom-10 right-0 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Nada</span><br />
            Full-Stack Web Developer
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            I craft fast, modern, and accessible web experiences with React, Laravel, and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="gradient-primary px-6 py-3 rounded-full text-primary-foreground font-medium hover-lift inline-block"
            >
              View Projects
            </a>
            <a
              href="/cv de nada.pdf"
              download="cv de nada.pdf"
              className="glass px-6 py-3 rounded-full font-medium hover-lift inline-block"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-[2rem] p-3">
            <img src={avatar} alt="Nada" className="rounded-[1.5rem] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
