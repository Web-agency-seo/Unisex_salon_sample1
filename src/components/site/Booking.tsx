import { useState } from "react";
import g5 from "@/assets/g5.jpg";

const services = ["Haircut", "Color", "Bridal", "Facial", "Makeup", "Grooming", "Nails"];
const stylists = ["Any stylist", "Riya M.", "Arjun K.", "Sana V.", "Meera J."];

export function Booking() {
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [stylist, setStylist] = useState(stylists[0]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (!phone.trim()) return setError("Please enter your phone / WhatsApp number.");
    if (!date) return setError("Please select a date.");
    setError("");
    const msg = encodeURIComponent(
      `Hi Ziva! I'd like to book an appointment.\nService: ${services[selected]}\nDate: ${date}\nStylist: ${stylist}\nName: ${name}\nPhone: ${phone}`,
    );
    window.open(`https://wa.me/919812345678?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="booking" className="relative overflow-hidden py-28 md:py-40">
      <img src={g5} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-foreground/55" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-blush)", mixBlendMode: "soft-light", opacity: 0.6 }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div data-reveal className="text-background">
          <span className="text-xs uppercase tracking-[0.35em] text-background/70">
            04 — Booking
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Reserve your chair
            <br /> in under a minute.
          </h2>
          <p className="mt-6 max-w-md text-background/80">
            Pick your service, stylist and time. We confirm by WhatsApp instantly — no waitlist, no
            callbacks.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-background/80">
            {[
              "Free cancellation up to 12 hours",
              "Walk-ins welcome after 5pm",
              "Members get priority slots",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="h-1 w-6 bg-[var(--gold)]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <form
          data-reveal
          data-delay="2"
          onSubmit={handleSubmit}
          className="glass-dark rounded-[var(--radius-2xl)] p-7 text-background md:p-10"
        >
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-background/70">
            <span>Instant booking</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" /> Live
            </span>
          </div>

          <label className="mt-7 block text-[11px] uppercase tracking-[0.25em] text-background/60">
            Service
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((s, i) => (
              <button
                type="button"
                key={s}
                onClick={() => setSelected(i)}
                className={`rounded-full border px-4 py-2 text-xs transition-all ${
                  i === selected
                    ? "border-[var(--gold)] bg-[var(--gold)] text-foreground"
                    : "border-background/25 text-background/85 hover:border-background/60"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.25em] text-background/60">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="mt-3 w-full rounded-xl border border-background/25 bg-background/10 px-4 py-3 text-sm text-background outline-none focus:border-[var(--gold)]"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.25em] text-background/60">
                Stylist
              </label>
              <select
                value={stylist}
                onChange={(e) => setStylist(e.target.value)}
                className="mt-3 w-full rounded-xl border border-background/25 bg-background/10 px-4 py-3 text-sm text-background outline-none focus:border-[var(--gold)]"
              >
                {stylists.map((s) => (
                  <option key={s} className="text-foreground">
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-4 w-full rounded-xl border border-background/25 bg-background/10 px-4 py-3 text-sm placeholder:text-background/50 focus:border-[var(--gold)] focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone / WhatsApp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-3 w-full rounded-xl border border-background/25 bg-background/10 px-4 py-3 text-sm placeholder:text-background/50 focus:border-[var(--gold)] focus:outline-none"
          />

          {error && <p className="mt-3 text-xs text-red-300">{error}</p>}

          {submitted ? (
            <div className="mt-6 rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-6 py-4 text-center text-sm text-background/90">
              ✓ Opening WhatsApp — your booking details are pre-filled.
            </div>
          ) : (
            <button
              type="submit"
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-background px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-transform hover:scale-[1.02]"
            >
              Confirm appointment
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
