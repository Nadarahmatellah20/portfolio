import { Layout, Server, Smartphone, Database, Palette, Wrench } from "lucide-react";

const services = [
  { icon: Layout, title: "Frontend Development", desc: "Modern, responsive interfaces with React, Tailwind & motion." },
  { icon: Server, title: "Backend Development", desc: "Robust APIs and business logic with Laravel, Node & Python." },
  { icon: Database, title: "Database Design", desc: "Schema design, optimization and migrations with MySQL." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect experiences across every device size." },
  { icon: Palette, title: "UI/UX Polish", desc: "Crafting delightful interactions and smooth animations." },
  { icon: Wrench, title: "Maintenance & SEO", desc: "Performance audits, fixes, and search-friendly setup." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            What I can <span className="gradient-text">build for you</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title}
              className="reveal relative glass rounded-2xl p-6 hover-lift overflow-hidden group"
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-primary)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", padding: 1 }} />
              <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center mb-4 shadow-glow">
                <s.icon className="text-primary-foreground" size={20} />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
