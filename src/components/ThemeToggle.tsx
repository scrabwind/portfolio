import { type MouseEvent, useEffect, useState } from "react";

const storageKey = "theme";
let transitionSequence = 0;

type ThemeMode = "light" | "dark";

type ThemeToggleProps = {
  lightModeLabel: string;
  darkModeLabel: string;
  switchToLightAriaLabel: string;
  switchToDarkAriaLabel: string;
};

function getCurrentTheme() {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function ThemeToggle({
  lightModeLabel,
  darkModeLabel,
  switchToLightAriaLabel,
  switchToDarkAriaLabel,
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>(() => getCurrentTheme());

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

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
      onClick={toggleTheme}
      className="fixed right-5 top-5 z-50 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-text shadow-lg shadow-black/30 backdrop-blur transition hover:border-brand-accent-cyan hover:text-brand-accent-cyan"
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? switchToLightAriaLabel : switchToDarkAriaLabel}
    >
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${theme === "dark" ? "bg-brand-accent-cyan" : "bg-brand-accent-violet"}`}
      />
      {theme === "dark" ? lightModeLabel : darkModeLabel}
    </button>
  );
}
