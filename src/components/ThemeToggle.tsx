import { type MouseEvent, useEffect, useState } from "react";

const storageKey = "theme";
let transitionSequence = 0;

type ThemeMode = "light" | "dark";

type ThemeToggleProps = {
  lightModeLabel: string;
  darkModeLabel: string;
  switchToLightAriaLabel: string;
  switchToDarkAriaLabel: string;
  className?: string;
};

function getCurrentTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default function ThemeToggle({
  switchToLightAriaLabel,
  switchToDarkAriaLabel,
  className = "",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    const isSwitchingToLight = nextTheme === "light";
    const transitionClass = isSwitchingToLight
      ? "theme-transition-to-light"
      : "theme-transition-to-dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsViewTransitions =
      typeof CSS !== "undefined" &&
      CSS.supports?.("selector(::view-transition-new(root))") &&
      "startViewTransition" in document;

    const applyTheme = () => {
      root.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem(storageKey, nextTheme);
      setTheme(nextTheme);
    };

    if (!supportsViewTransitions || reduceMotion) {
      applyTheme();
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const originX = buttonRect.left + buttonRect.width / 2;
    const originY = buttonRect.top + buttonRect.height / 2;
    const endRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY),
    );

    const transitionId = ++transitionSequence;
    root.classList.remove("theme-transition-to-light", "theme-transition-to-dark");
    root.classList.add(transitionClass);

    const clearTransitionClasses = () => {
      if (transitionId !== transitionSequence) {
        return;
      }

      root.classList.remove("theme-transition-to-light", "theme-transition-to-dark");
    };

    const transition = document.startViewTransition?.(() => {
      applyTheme();
    });

    if (!transition) {
      applyTheme();
      clearTransitionClasses();
      return;
    }

    void transition.finished.finally(() => {
      clearTransitionClasses();
    });

    transition.ready
      .then(() => {
        const animationOptions: KeyframeAnimationOptions & { pseudoElement: string } = {
          duration: 650,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards",
          pseudoElement: isSwitchingToLight
            ? "::view-transition-new(root)"
            : "::view-transition-old(root)",
        };

        document.documentElement.animate(
          {
            clipPath: isSwitchingToLight
              ? [
                  `circle(0px at ${originX}px ${originY}px)`,
                  `circle(${endRadius}px at ${originX}px ${originY}px)`,
                ]
              : [
                  `circle(${endRadius}px at ${originX}px ${originY}px)`,
                  `circle(0px at ${originX}px ${originY}px)`,
                ],
          },
          animationOptions,
        );
      })
      .catch(() => {
        // Ignore aborted transitions caused by rapid toggles.
      });
  };

  return (
    <button
      type="button"
      role="switch"
      onClick={toggleTheme}
      aria-checked={isDark}
      aria-label={isDark ? switchToLightAriaLabel : switchToDarkAriaLabel}
      className={`relative inline-flex h-8 w-15 shrink-0 items-center rounded-full border border-brand-border bg-brand-bg-alt px-1 shadow-sm transition hover:border-brand-accent-cyan ${className}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-2 transition-colors ${isDark ? "text-brand-subtle/50" : "text-brand-accent-violet"}`}
      >
        <SunIcon />
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-2 transition-colors ${isDark ? "text-brand-accent-cyan" : "text-brand-subtle/50"}`}
      >
        <MoonIcon />
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-surface text-brand-text shadow-md transition-transform duration-300 ease-out ${isDark ? "translate-x-7" : "translate-x-0"}`}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
