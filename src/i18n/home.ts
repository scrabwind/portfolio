export const supportedLocales = ["en", "pl"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

type HeroCopy = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  stack: string[];
};

type ExperienceRole = {
  years: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
};

type ExperienceCopy = {
  title: string;
  timelineLabel: string;
  roles: ExperienceRole[];
};

type ProjectCard = {
  name: string;
  summary: string;
  stack: string;
};

type ProjectsCopy = {
  title: string;
  description: string;
  caseStudyLabel: string;
  cards: ProjectCard[];
};

type ThemeToggleCopy = {
  lightModeLabel: string;
  darkModeLabel: string;
  switchToLightAriaLabel: string;
  switchToDarkAriaLabel: string;
};

type LanguageSwitcherCopy = {
  label: string;
  englishLabel: string;
  polishLabel: string;
};

export type HomeCopy = {
  pageTitle: string;
  hero: HeroCopy;
  experience: ExperienceCopy;
  projects: ProjectsCopy;
  themeToggle: ThemeToggleCopy;
  languageSwitcher: LanguageSwitcherCopy;
};

const homeCopy: Record<SupportedLocale, HomeCopy> = {
  en: {
    pageTitle: "Dark Portfolio Mockup",
    hero: {
      eyebrow: "Dark Theme Mockup",
      heading: "Hi, I build polished interfaces for the web.",
      description:
        "This hero block demonstrates how the new color tokens look with layered surfaces, high contrast typography, and subtle neon accents inspired by your reference screenshots.",
      primaryActionLabel: "View projects",
      secondaryActionLabel: "Read experience",
      stack: ["JavaScript", "TypeScript", "React", "Astro", "Accessibility"],
    },
    experience: {
      title: "Experience",
      timelineLabel: "Timeline",
      roles: [
        {
          years: "2024 - Present",
          title: "Senior Frontend Engineer",
          company: "Klaviyo",
          description:
            "Driving accessibility and consistency across a shared component library while partnering with design and product teams.",
          tags: ["React", "Design Systems", "a11y"],
        },
        {
          years: "2021 - 2024",
          title: "Frontend Engineer",
          company: "Product Studio",
          description:
            "Shipped responsive interfaces, component abstractions, and documentation workflows for multiple client products.",
          tags: ["TypeScript", "Storybook", "Testing"],
        },
        {
          years: "2019 - 2021",
          title: "UI Developer",
          company: "Startup Team",
          description:
            "Built high-conversion landing pages and migration-ready frontends with a focus on maintainable CSS architecture.",
          tags: ["CSS", "Performance", "SEO"],
        },
      ],
    },
    projects: {
      title: "Projects",
      description:
        "Mock cards using the dark palette for card surfaces, accent borders, and muted typography hierarchy.",
      caseStudyLabel: "Open case study ->",
      cards: [
        {
          name: "Neon Portfolio",
          summary:
            "A one-page portfolio concept with animated gradients and section-based navigation.",
          stack: "Astro - Tailwind",
        },
        {
          name: "Component Vault",
          summary:
            "A design-system playground for documenting reusable patterns and accessibility states.",
          stack: "React - Storybook",
        },
        {
          name: "Shipboard",
          summary:
            "A clean dashboard UI for tracking feature rollout status across multiple product squads.",
          stack: "TypeScript - Charts",
        },
      ],
    },
    themeToggle: {
      lightModeLabel: "Light mode",
      darkModeLabel: "Dark mode",
      switchToLightAriaLabel: "Switch to light theme",
      switchToDarkAriaLabel: "Switch to dark theme",
    },
    languageSwitcher: {
      label: "Switch language",
      englishLabel: "EN",
      polishLabel: "PL",
    },
  },
  pl: {
    pageTitle: "Makieta portfolio",
    hero: {
      eyebrow: "Makieta ciemnego motywu",
      heading: "Czesc, tworzę dopracowane interfejsy webowe.",
      description:
        "Ten blok hero pokazuje, jak wygladaja nowe tokeny kolorow z warstwowymi powierzchniami, mocnym kontrastem typografii i subtelnymi neonowymi akcentami.",
      primaryActionLabel: "Zobacz projekty",
      secondaryActionLabel: "Przeczytaj doswiadczenie",
      stack: ["JavaScript", "TypeScript", "React", "Astro", "Dostepnosc"],
    },
    experience: {
      title: "Doswiadczenie",
      timelineLabel: "Os czasu",
      roles: [
        {
          years: "2024 - Obecnie",
          title: "Senior Frontend Engineer",
          company: "Klaviyo",
          description:
            "Prowadzenie prac nad dostepnoscia i spojnoscia we wspolnej bibliotece komponentow we wspolpracy z zespolami designu i produktu.",
          tags: ["React", "Design Systems", "a11y"],
        },
        {
          years: "2021 - 2024",
          title: "Frontend Engineer",
          company: "Product Studio",
          description:
            "Dostarczanie responsywnych interfejsow, abstrakcji komponentow i procesow dokumentacji dla wielu produktow klienckich.",
          tags: ["TypeScript", "Storybook", "Testy"],
        },
        {
          years: "2019 - 2021",
          title: "UI Developer",
          company: "Startup Team",
          description:
            "Budowanie landing page'y o wysokiej konwersji oraz frontendow gotowych na migracje z naciskiem na utrzymywalna architekture CSS.",
          tags: ["CSS", "Wydajnosc", "SEO"],
        },
      ],
    },
    projects: {
      title: "Projekty",
      description:
        "Przykladowe karty wykorzystujace ciemna palete dla powierzchni kart, akcentowych ramek i hierarchii stonowanej typografii.",
      caseStudyLabel: "Otworz case study ->",
      cards: [
        {
          name: "Neon Portfolio",
          summary:
            "Jednostronicowa koncepcja portfolio z animowanymi gradientami i nawigacja oparta o sekcje.",
          stack: "Astro - Tailwind",
        },
        {
          name: "Component Vault",
          summary:
            "Playground design systemu do dokumentowania wielokrotnego uzycia wzorcow i stanow dostepnosci.",
          stack: "React - Storybook",
        },
        {
          name: "Shipboard",
          summary:
            "Przejrzysty interfejs dashboardu do sledzenia statusu wdrozenia funkcji w wielu zespolach produktowych.",
          stack: "TypeScript - Wykresy",
        },
      ],
    },
    themeToggle: {
      lightModeLabel: "Tryb jasny",
      darkModeLabel: "Tryb ciemny",
      switchToLightAriaLabel: "Przelacz na jasny motyw",
      switchToDarkAriaLabel: "Przelacz na ciemny motyw",
    },
    languageSwitcher: {
      label: "Przelacz jezyk",
      englishLabel: "EN",
      polishLabel: "PL",
    },
  },
};

export function getHomeCopy(locale: string | undefined): HomeCopy {
  return locale === "pl" ? homeCopy.pl : homeCopy.en;
}
