import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2 || name.length > 100) return;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 255) return;
    if (message.length < 5 || message.length > 1000) return;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let's build something <span className="gradient-text">great</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="reveal space-y-4">
            {[
              { icon: Mail, label: "Email", value: "nadarahmatellah5@gmail.com" },
              { icon: Phone, label: "Phone", value: "+216 639987960" },
            ].map((i) => (
              <div key={i.label} className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift">
                <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center">
                  <i.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  <p className="font-medium">{i.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="reveal glass rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
            </div>
            <Field name="subject" label="Subject" placeholder="Project, role, idea…" />
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={5}
                placeholder="Tell me about your project…"
                className="w-full rounded-xl bg-background/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 px-4 py-3 transition"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground hover-lift"
            >
              <Send size={16} /> Send message
            </button>
            {sent && (
              <p className="text-sm text-accent animate-fade-in">Thanks! Your message has been sent.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={255}
        placeholder={placeholder}
        className="w-full rounded-xl bg-background/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 px-4 py-3 transition"
      />
    </div>
  );
}
