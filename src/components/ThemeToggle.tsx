import { useEffect, useState } from "react";

const storageKey = "theme";

function getCurrentTheme() {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => getCurrentTheme());

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === "dark" ? "light" : "dark";
    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed right-5 top-5 z-50 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-text shadow-lg shadow-black/30 backdrop-blur transition hover:border-brand-accent-cyan hover:text-brand-accent-cyan"
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${theme === "dark" ? "bg-brand-accent-cyan" : "bg-brand-accent-violet"}`}
      />
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
