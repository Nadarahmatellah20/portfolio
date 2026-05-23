import wow from "@/assets/project-wow.jpg";
import axa from "@/assets/project-axa.jpg";
import ecom from "@/assets/project-ecom.jpg";
import safar from "@/assets/project-safar.jpg";

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Axa assurance",
    desc: "AXA Assurance est un site web d'assurance qui permet de gérer facilement les contrats et les sinistres en ligne.",
    tags: ["HTML", "CSS", "JS"],
    img: axa,
    live: "#",
    code: "https://github.com/Nadarahmatellah20",
  },
  {
    title: "WowFood",
    desc: "WowFood est un site web de restauration en ligne qui permet de consulter le menu et commander des plats facilement avec un design moderne et responsive.",
    tags: ["React", "JS", "Tailwind"],
    img: wow,
    live: "#",
    code: "https://github.com/Nadarahmatellah20",
  },
  {
    title: "Ecommerce Informatique",
    desc: "Online store for computers and components with cart and payments.",
    tags: ["Laravel", "MySQL", "Tailwind"],
    img: ecom,
    live: "#",
    code: "https://github.com/Nadarahmatellah20",
  },
  {
    title: "Safar Go",
    desc: "Plateforme web de voyage pour rechercher et réserver vols, hôtels et transports facilement.",
    tags: ["React", "Laravel", "JS"],
    img: safar,
    live: "#",
    code: "https://github.com/Nadarahmatellah20",
  },

];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Selected work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Recent <span className="gradient-text">projects</span>.
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md">
            A handful of things I've built — from full-stack platforms to modern UI projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative glass rounded-3xl overflow-hidden hover-lift"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-wider glass px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>

                <div className="mt-5 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm rounded-full bg-white text-black px-4 py-2 hover:opacity-80 transition"
                  >
                    <ExternalLink size={14} /> Live
                  </a>

                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm rounded-full glass px-4 py-2 hover-lift"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
