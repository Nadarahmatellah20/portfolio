const skills = [
  { name: "HTML5", level: 98 },
  { name: "CSS3", level: 95 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 90 },
  { name: "PHP", level: 88 },
  { name: "Laravel", level: 86 },
  { name: "MySQL", level: 85 },
  { name: "Python", level: 80 },
  { name: "Bootstrap", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Tech I work with <span className="gradient-text">daily</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <div key={s.name} className="reveal glass rounded-2xl p-5 hover-lift" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                <div
                  className="h-full gradient-primary rounded-full"
                  style={{ width: `${s.level}%`, transition: "width 1.2s cubic-bezier(.2,.7,.2,1)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
