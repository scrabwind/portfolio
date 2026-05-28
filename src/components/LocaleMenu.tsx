import { useEffect, useRef, useState } from "react";

type LocaleMenuItem = {
  code: string;
  label: string;
  href: string;
};

type LocaleMenuProps = {
  label: string;
  currentLocale: string;
  items: LocaleMenuItem[];
  className?: string;
};

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function LocaleMenu({
  label,
  currentLocale,
  items,
  className = "",
}: LocaleMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = items.find((item) => item.code === currentLocale) ?? items[0];

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-bg-alt px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-brand-text shadow-sm transition hover:border-brand-accent-cyan hover:text-brand-accent-cyan"
      >
        <GlobeIcon />
        <span>{currentItem?.label}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-full z-20 mt-2 min-w-[9rem] overflow-hidden rounded-2xl border border-brand-border bg-brand-surface py-1 shadow-xl shadow-black/20 backdrop-blur"
        >
          {items.map((item) => {
            const isActive = item.code === currentLocale;
            return (
              <li key={item.code} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center justify-between gap-3 px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-brand-accent-cyan/10 text-brand-text"
                      : "text-brand-muted hover:bg-brand-bg-alt hover:text-brand-text"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 text-brand-accent-cyan"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
