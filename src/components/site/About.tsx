import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <div data-reveal className="relative overflow-visible">
          <div className="overflow-hidden rounded-[var(--radius-3xl)]">
            <img
              src={about}
              alt="Ziva brand texture"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-8 right-3 max-w-[200px] rounded-[var(--radius-xl)] p-5 text-sm md:-right-10 md:max-w-[220px]">
            <div className="font-display text-3xl">2012</div>
            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Crafting confidence since
            </div>
          </div>
        </div>

        <div data-reveal data-delay="2">
          <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            08 — Our story
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">
            Ziva is a quiet kind of <em className="not-italic gradient-gold-text">luxury</em>.
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75">
            <p>
              We opened our first chair in 2012 with one promise: a salon where men and women feel
              equally seen, equally cared for, and equally transformed.
            </p>
            <p>
              Every Ziva stylist trains for two years before they touch the floor. Every product is
              chosen for what it doesn't contain. Every appointment ends with a mirror moment that
              feels earned.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Certified", "Master stylists"],
              ["Clean", "Salon hygiene"],
              ["Cruelty-free", "Product line"],
            ].map(([t, s]) => (
              <div key={t}>
                <div className="font-display text-xl">{t}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
