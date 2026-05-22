import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Stylists", "#stylists"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-tight">Ziva</span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              Unisex Salon
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Book
            </a>
            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            >
              {open ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path
                    d="M0 1h16M0 6h16M0 11h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="glass mt-2 rounded-[var(--radius-xl)] px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-2">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-primary px-4 py-2.5 text-center text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground"
                >
                  Book appointment
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
