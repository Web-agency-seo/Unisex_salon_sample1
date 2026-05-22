import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Ziva Salon interior"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-foreground/25" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-40 text-background">
        <div className="max-w-3xl animate-[fade-up_1.1s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            Est. Ziva · Unisex Atelier
          </span>
          <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight text-balance">
            Where every look
            <br />
            becomes a <em className="gradient-gold-text not-italic">signature</em>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-background/80">
            A modern unisex atelier in the heart of the city. Hair, skin, bridal and grooming —
            crafted by stylists who treat detail as devotion.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition-transform hover:scale-[1.03]"
            >
              Book your visit
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="text-sm uppercase tracking-[0.3em] text-background/80 underline-offset-8 hover:underline"
            >
              View services
            </a>
          </div>
        </div>

        <div
          data-reveal
          data-delay="2"
          className="mt-16 grid grid-cols-2 gap-8 border-t border-background/20 pt-8 text-background/85 sm:grid-cols-4"
        >
          {[
            ["12+", "Years of craft"],
            ["40k", "Looks created"],
            ["4.9", "Avg. rating"],
            ["18", "Master stylists"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl">{n}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-background/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
