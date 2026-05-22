import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";

const team = [
  {
    img: s1,
    name: "Riya Malhotra",
    role: "Creative Director",
    best: "Best for bridal looks",
    yrs: "12 yrs",
  },
  {
    img: s2,
    name: "Arjun Kapoor",
    role: "Master Barber",
    best: "Best for men's grooming",
    yrs: "9 yrs",
  },
  { img: s3, name: "Sana Verma", role: "Makeup Lead", best: "Best for soft glam", yrs: "8 yrs" },
  {
    img: s4,
    name: "Meera Joshi",
    role: "Skin Specialist",
    best: "Best for facials & glow",
    yrs: "10 yrs",
  },
];

export function Stylists() {
  return (
    <section id="stylists" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div data-reveal className="flex items-end justify-between gap-8">
        <div>
          <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            06 — The Atelier
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-5xl md:text-6xl">
            Stylists, not just <em className="not-italic gradient-gold-text">technicians</em>.
          </h2>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {team.map((m, i) => (
          <article key={m.name} data-reveal data-delay={i + 1} className="group relative">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-muted">
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.25em]">
                {m.best}
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-display text-xl">{m.name}</h3>
              <span className="text-xs text-muted-foreground">{m.yrs}</span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
