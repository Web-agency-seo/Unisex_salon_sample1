const items = [
  {
    t: "Hair Couture",
    d: "Cuts, color, keratin and bespoke styling — engineered around your face shape and lifestyle.",
    tag: "Signature",
  },
  {
    t: "Bridal Suite",
    d: "End-to-end bridal looks: trial, day-of glam, hair & drape.",
    tag: "By appointment",
  },
  { t: "Skin & Facials", d: "Hydrafacials, peels and glow rituals.", tag: "Hero treatment" },
  { t: "Makeup", d: "Editorial, soft glam, party finish.", tag: "" },
  { t: "Men's Grooming", d: "Precision fades, beard sculpt, hot-towel shaves.", tag: "" },
  { t: "Nails & Spa", d: "Gel, art, manicure, pedicure rituals.", tag: "" },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div data-reveal className="flex items-end justify-between gap-8">
        <div>
          <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            02 — Services
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[1.05] md:text-6xl">
            A complete house of <em className="not-italic gradient-gold-text">beauty rituals</em>.
          </h2>
        </div>
        <a
          href="#booking"
          className="hidden text-sm uppercase tracking-[0.3em] underline-offset-8 hover:underline md:inline"
        >
          Book a service →
        </a>
      </div>

      <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
        {/* Featured */}
        <article
          data-reveal
          data-delay="1"
          className="group relative col-span-1 row-span-2 overflow-hidden rounded-[var(--radius-2xl)] bg-primary p-8 text-primary-foreground md:col-span-3 md:row-span-2 md:p-10"
        >
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div className="relative flex h-full flex-col justify-between">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/70">
              Signature
            </span>
            <div>
              <h3 className="font-display text-4xl md:text-5xl">{items[0].t}</h3>
              <p className="mt-4 max-w-md text-primary-foreground/75">{items[0].d}</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="rounded-full border border-primary-foreground/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                  From ₹1,200
                </span>
                <span className="rounded-full bg-[var(--gold)] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground">
                  90 min
                </span>
              </div>
            </div>
          </div>
        </article>

        <article
          data-reveal
          data-delay="2"
          className="group relative col-span-1 row-span-2 overflow-hidden rounded-[var(--radius-2xl)] md:col-span-3"
          style={{ background: "var(--gradient-blush)" }}
        >
          <div className="flex h-full flex-col justify-between p-8 md:p-10">
            <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">
              {items[1].tag}
            </span>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">{items[1].t}</h3>
              <p className="mt-3 max-w-md text-foreground/75">{items[1].d}</p>
            </div>
          </div>
        </article>

        {items.slice(2).map((it, i) => (
          <article
            key={it.t}
            data-reveal
            data-delay={i + 1}
            className={`group relative overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${
              i === 0 ? "md:col-span-3" : "md:col-span-3"
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                0{i + 3}
              </span>
              {it.tag && (
                <span className="rounded-full bg-[color-mix(in_oklab,var(--lavender)_55%,white)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">
                  {it.tag}
                </span>
              )}
            </div>
            <h3 className="mt-8 font-display text-2xl md:text-3xl">{it.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                Explore
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
                →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
