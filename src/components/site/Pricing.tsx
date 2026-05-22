const plans = [
  {
    name: "Essential",
    price: "₹1,499",
    period: "/ visit",
    features: ["Signature haircut", "Wash & blow-dry", "Scalp massage", "Style consult"],
  },
  {
    name: "Ziva Glow",
    price: "₹3,899",
    period: "/ ritual",
    features: ["Cut + color refresh", "Hydrafacial express", "Brow shape", "Hand & foot care"],
    popular: true,
  },
  {
    name: "Bridal Atelier",
    price: "₹14,999",
    period: "/ day",
    features: [
      "Trial + day-of glam",
      "Hair + drape",
      "Dedicated stylist",
      "Glow facial week prior",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-foreground py-28 text-background md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="flex items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-background/60">
              07 — Packages
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-5xl md:text-6xl">
              Curated rituals, transparent pricing.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-end gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              data-delay={i + 1}
              className={`relative rounded-[var(--radius-2xl)] p-8 transition-transform md:p-10 ${
                p.popular
                  ? "scale-[1.02] bg-background text-foreground ring-gold"
                  : "border border-background/15 bg-background/5"
              }`}
            >
              {p.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Most Loved
                </span>
              )}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl">{p.price}</span>
                <span
                  className={`text-sm ${p.popular ? "text-muted-foreground" : "text-background/60"}`}
                >
                  {p.period}
                </span>
              </div>
              <ul
                className={`mt-8 space-y-3 text-sm ${p.popular ? "text-foreground/80" : "text-background/75"}`}
              >
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-4" style={{ background: "var(--gold)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-10 flex w-full items-center justify-center rounded-full px-6 py-3.5 text-xs uppercase tracking-[0.2em] transition-transform hover:scale-[1.02] ${
                  p.popular
                    ? "bg-foreground text-background"
                    : "border border-background/30 text-background"
                }`}
              >
                Book this ritual
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
