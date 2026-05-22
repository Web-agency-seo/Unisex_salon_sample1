const reviews = [
  {
    quote:
      "My bridal trial felt like a private couture session. Every pin, every petal — intentional.",
    name: "Ananya R.",
    role: "Bridal client",
    accent: "var(--blush)",
  },
  {
    quote: "Best fade I've had in years. Arjun understood the shape in two minutes.",
    name: "Vikram S.",
    role: "Men's grooming",
    accent: "var(--lavender)",
  },
  {
    quote: "The hair spa was the calmest hour of my month. I left glowing.",
    name: "Priya M.",
    role: "Hair spa",
    accent: "var(--sage)",
  },
  {
    quote: "Color that lasted twelve weeks without dulling. Zero regret.",
    name: "Sara K.",
    role: "Color & cut",
    accent: "var(--gold)",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-28 md:py-40">
      <div data-reveal className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              05 — Voices
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-5xl md:text-6xl">
              Loved by our regulars.
            </h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="font-display text-5xl">4.9</span>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              avg rating
              <br />
              from 2,400+ reviews
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden">
        <div className="flex w-max gap-6 px-6 [animation:marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((r, i) => (
            <article
              key={i}
              className="w-[360px] shrink-0 rounded-[var(--radius-2xl)] border border-border bg-card p-8 md:w-[420px]"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-1 w-6" style={{ background: r.accent }} />
                {r.role}
              </div>
              <p className="mt-6 font-display text-2xl leading-snug text-balance">“{r.quote}”</p>
              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="font-medium">{r.name}</span>
                <span className="text-xs text-muted-foreground">★ ★ ★ ★ ★</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
