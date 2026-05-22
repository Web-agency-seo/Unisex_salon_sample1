export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-28 md:py-40">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--gradient-blush)", opacity: 0.6 }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div data-reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            09 — Visit Ziva
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">Walk in. Glow out.</h2>
          <p className="mt-5 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            <span
              className="inline-block h-1 w-6 align-middle"
              style={{ background: "var(--gold)" }}
            />
            <span className="mx-3">Walk in or book instantly</span>
            <span
              className="inline-block h-1 w-6 align-middle"
              style={{ background: "var(--gold)" }}
            />
          </p>
        </div>

        <div data-reveal data-delay="1" className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { t: "Call", v: "+91 98 1234 5678", a: "tel:+919812345678" },
            { t: "WhatsApp", v: "Message us", a: "https://wa.me/919812345678" },
            {
              t: "Address",
              v: "12 Linking Rd, Bandra W, Mumbai",
              a: "https://maps.google.com/?q=12+Linking+Road+Bandra+West+Mumbai",
            },
            { t: "Hours", v: "Mon\u2013Sun \u00b7 10am \u2013 9pm", a: null },
          ].map((c) =>
            c.a ? (
              <a
                key={c.t}
                href={c.a}
                target={c.a.startsWith("http") ? "_blank" : undefined}
                rel={c.a.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass rounded-[var(--radius-xl)] p-6 transition-transform hover:-translate-y-1"
              >
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {c.t}
                </div>
                <div className="mt-3 font-display text-xl leading-tight">{c.v}</div>
              </a>
            ) : (
              <div key={c.t} className="glass rounded-[var(--radius-xl)] p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {c.t}
                </div>
                <div className="mt-3 font-display text-xl leading-tight">{c.v}</div>
              </div>
            ),
          )}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-border pt-10 text-sm text-muted-foreground md:flex-row md:justify-between">
          <div className="font-display text-2xl text-foreground">Ziva Unisex Salon</div>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.instagram.com/zivaunisexsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/zivaunisexsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Facebook
            </a>
            <a
              href="https://g.page/r/zivaunisexsalon/review"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Google Reviews
            </a>
          </div>
          <div className="text-xs uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} Ziva
          </div>
        </div>
      </div>
    </section>
  );
}
