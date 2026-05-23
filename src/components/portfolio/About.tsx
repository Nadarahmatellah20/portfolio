import { Code2, Rocket, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">About me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Turning ideas into <span className="gradient-text">digital products</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="reveal space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm Nada, a Full-Stack Developer passionate about building modern web
              applications. I love creating digital experiences that are fast, elegant,
              and solve real-world problems. I enjoy working on both frontend and backend development — from designing clean user interfaces
              to developing powerful and scalable backend systems.
            </p>
            <p>
              My toolbox spans <span className="text-foreground">React, Laravel, Python and MySQL</span>. I care
              deeply about clean code, performance, and tiny details that elevate the experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Code2, title: "Clean Code", desc: "Readable, tested, scalable." },
              { icon: Sparkles, title: "Modern UI", desc: "Polished interfaces with care." },
              { icon: Rocket, title: "Performance", desc: "Fast loads, smooth animations." },
              { icon: Sparkles, title: "End-to-end", desc: "Frontend, backend, deploy." },
            ].map((f, i) => (
              <div key={i} className="reveal glass rounded-2xl p-5 hover-lift" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center mb-3">
                  <f.icon size={18} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
