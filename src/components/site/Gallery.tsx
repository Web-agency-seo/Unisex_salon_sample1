import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const shots = [
  { src: g1, caption: "Bridal updo · Ananya", span: "md:col-span-4 md:row-span-2" },
  { src: g2, caption: "Sculpted fade · Men's", span: "md:col-span-4" },
  { src: g6, caption: "The atelier", span: "md:col-span-4" },
  { src: g3, caption: "Floral bridal", span: "md:col-span-5" },
  { src: g4, caption: "Soft gel mani", span: "md:col-span-3" },
  { src: g5, caption: "Spa ritual", span: "md:col-span-4" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-surface py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="flex items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              03 — Looks
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-5xl md:text-6xl">
              An editorial of <em className="not-italic gradient-gold-text">real results</em>.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            A living lookbook from our chairs — updated weekly with fresh work from the floor.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              data-reveal
              data-delay={Math.min(i + 1, 4)}
              className={`group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-muted md:row-span-1 ${s.span} ${
                i === 0 || i === 3 ? "row-span-2" : ""
              }`}
            >
              <img
                src={s.src}
                alt={s.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-foreground/70 to-transparent p-4 text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.25em]">{s.caption}</span>
                <span className="text-xs">0{i + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
