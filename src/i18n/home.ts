export const supportedLocales = ["en", "pl"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

type HeroCopy = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
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

type ContactItem = {
  label: string;
  value: string;
  href: string;
};

type ProfileCopy = {
  title: string;
  summary: string;
  skillsTitle: string;
  skills: string[];
  languagesTitle: string;
  languages: string[];
  contactTitle: string;
  contactItems: ContactItem[];
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
  profile: ProfileCopy;
  experience: ExperienceCopy;
  projects: ProjectsCopy;
  themeToggle: ThemeToggleCopy;
  languageSwitcher: LanguageSwitcherCopy;
};

const homeCopy: Record<SupportedLocale, HomeCopy> = {
  en: {
    pageTitle: "Kamil Wiatrowski | Frontend Developer",
    hero: {
      eyebrow: "Frontend Developer",
      heading: "Kamil Wiatrowski",
      description:
        "Frontend Developer with commercial experience across transportation, automotive, and e-commerce projects. I build web applications, CMS platforms, and business tools with international teams.",
      primaryActionLabel: "Get in touch",
      primaryActionHref: "#contact",
      secondaryActionLabel: "View experience",
      secondaryActionHref: "#experience",
      stack: ["JavaScript", "TypeScript", "Vue.js", "React", "Nuxt", "Next.js"],
    },
    profile: {
      title: "Professional profile",
      summary:
        "I create and develop modern web applications with a strong focus on maintainable frontend architecture and clear collaboration with clients. My work includes custom CMS systems, business platforms, and production interfaces delivered in multinational environments.",
      skillsTitle: "Core skills",
      skills: [
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "React",
        "Angular",
        "Nuxt",
        "Next.js",
        "HTML5",
        "CSS3",
        "Sass",
        "Tailwind CSS",
        "Playwright",
        "Cypress",
        "Jest",
        "REST API",
        "GraphQL",
        "Node.js",
        "Express",
        "NestJS",
        "Docker",
        "CI/CD",
        "Git",
        "Jira",
        "Windows",
        "MacOS",
        "Linux",
      ],
      languagesTitle: "Languages",
      languages: ["Polish (Native)", "English (C1)"],
      contactTitle: "Contact",
      contactItems: [
        { label: "Phone", value: "+48 663 059 136", href: "tel:+48663059136" },
        {
          label: "Email",
          value: "ka.wiatrowski@gmail.com",
          href: "mailto:ka.wiatrowski@gmail.com",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/kamil-wiatrowski",
          href: "https://www.linkedin.com/in/kamil-wiatrowski",
        },
        { label: "GitHub", value: "github.com/scrabwind", href: "https://github.com/scrabwind" },
      ],
    },
    experience: {
      title: "Work experience",
      timelineLabel: "Timeline",
      roles: [
        {
          years: "02/2025 - Present",
          title: "Frontend Developer",
          company: "Appwise",
          description:
            "Delivering frontend features for client products and collaborating in multinational teams.",
          tags: ["Frontend", "Client Projects", "Team Collaboration"],
        },
        {
          years: "04/2024 - 02/2025",
          title: "Frontend Developer",
          company: "Nexio Management",
          description:
            "Implemented frontend views based on client requirements and prepared graphic designs, including contractor work on the University of Hull landing page.",
          tags: ["Design to Code", "Responsive UI", "Stakeholder Alignment"],
        },
        {
          years: "11/2022 - 04/2024",
          title: "Frontend Developer",
          company: "Reffine",
          description:
            "Developed and maintained a transportation TMS system, implementing modules for fleet, drivers, contractors, and contract management while working directly with the client.",
          tags: ["TypeScript", "TMS", "REST API"],
        },
        {
          years: "08/2021 - 11/2022",
          title: "Frontend Developer",
          company: "Digital Colliers",
          description:
            "Developed a custom CMS for Jaguar and Land Rover and helped deliver platform features used in Tier 2 market websites across multiple countries.",
          tags: ["CMS", "Automotive", "Enterprise Delivery"],
        },
        {
          years: "07/2020 - 07/2021",
          title: "QA Engineer",
          company: "Biuromax-Balcer",
          description:
            "Tested an application for construction-company management and implemented automated tests to streamline quality verification.",
          tags: ["QA", "Test Automation", "Business Platform"],
        },
      ],
    },
    projects: {
      title: "Selected commercial projects",
      description:
        "Highlights based on real client delivery from transportation, automotive, and education domains.",
      caseStudyLabel: "Delivered in commercial environment",
      cards: [
        {
          name: "Transportation TMS platform",
          summary:
            "Development and maintenance of a transportation management system with features for fleet, driver, contractor, and contract workflows.",
          stack: "TypeScript - Vue.js - REST API",
        },
        {
          name: "Jaguar and Land Rover CMS",
          summary:
            "Custom CMS development for brand websites and contribution to Tier 2 market platform rollout in multiple countries.",
          stack: "CMS - Frontend - Automotive",
        },
        {
          name: "University of Hull landing page",
          summary:
            "Contractor delivery of a marketing landing page, translating graphic design and business requirements into responsive views.",
          stack: "Responsive UI - Delivery - Collaboration",
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
    pageTitle: "Kamil Wiatrowski | Frontend Developer",
    hero: {
      eyebrow: "Frontend Developer",
      heading: "Kamil Wiatrowski",
      description:
        "Frontend Developer z doswiadczeniem komercyjnym w projektach z obszaru transportu, motoryzacji i e-commerce. Tworze aplikacje webowe, systemy CMS i platformy biznesowe w miedzynarodowych zespolach.",
      primaryActionLabel: "Skontaktuj sie",
      primaryActionHref: "#contact",
      secondaryActionLabel: "Zobacz doswiadczenie",
      secondaryActionHref: "#experience",
      stack: ["JavaScript", "TypeScript", "Vue.js", "React", "Nuxt", "Next.js"],
    },
    profile: {
      title: "Profil zawodowy",
      summary:
        "Tworze i rozwijam nowoczesne aplikacje webowe z naciskiem na utrzymywalna architekture frontendu i dobra komunikacje z klientem. Realizuje customowe systemy CMS, platformy biznesowe oraz interfejsy produkcyjne dostarczane w zespolach miedzynarodowych.",
      skillsTitle: "Glowne umiejetnosci",
      skills: [
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "React",
        "Angular",
        "Nuxt",
        "Next.js",
        "HTML5",
        "CSS3",
        "Sass",
        "Tailwind CSS",
        "Playwright",
        "Cypress",
        "Jest",
        "REST API",
        "GraphQL",
        "Node.js",
        "Express",
        "NestJS",
        "Docker",
        "CI/CD",
        "Git",
        "Jira",
        "Windows",
        "MacOS",
        "Linux",
      ],
      languagesTitle: "Jezyki",
      languages: ["Polski (ojczysty)", "Angielski (C1)"],
      contactTitle: "Kontakt",
      contactItems: [
        { label: "Telefon", value: "+48 663 059 136", href: "tel:+48663059136" },
        {
          label: "Email",
          value: "ka.wiatrowski@gmail.com",
          href: "mailto:ka.wiatrowski@gmail.com",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/kamil-wiatrowski",
          href: "https://www.linkedin.com/in/kamil-wiatrowski",
        },
        { label: "GitHub", value: "github.com/scrabwind", href: "https://github.com/scrabwind" },
      ],
    },
    experience: {
      title: "Doswiadczenie zawodowe",
      timelineLabel: "Timeline",
      roles: [
        {
          years: "02/2025 - Obecnie",
          title: "Frontend Developer",
          company: "Appwise",
          description:
            "Dostarczanie funkcjonalnosci frontendowych dla produktow klienckich oraz praca w zespolach miedzynarodowych.",
          tags: ["Frontend", "Projekty klienckie", "Wspolpraca zespolowa"],
        },
        {
          years: "04/2024 - 02/2025",
          title: "Frontend Developer",
          company: "Nexio Management",
          description:
            "Implementacja widokow na podstawie wymagan klienta i projektow graficznych, w tym realizacja landing page dla University of Hull jako kontraktor.",
          tags: ["Design to Code", "Responsive UI", "Wspolpraca z klientem"],
        },
        {
          years: "11/2022 - 04/2024",
          title: "Frontend Developer",
          company: "Reffine",
          description:
            "Rozwoj i utrzymanie systemu TMS dla branzy transportowej, obejmujacego moduly floty, kierowcow, kontrahentow i umow, z bezposrednia wspolpraca z klientem.",
          tags: ["TypeScript", "TMS", "REST API"],
        },
        {
          years: "08/2021 - 11/2022",
          title: "Frontend Developer",
          company: "Digital Colliers",
          description:
            "Tworzenie customowego CMS dla marek Jaguar i Land Rover oraz udzial w dostarczaniu funkcjonalnosci dla platformy rynkow Tier 2 w wielu krajach.",
          tags: ["CMS", "Motoryzacja", "Enterprise Delivery"],
        },
        {
          years: "07/2020 - 07/2021",
          title: "QA Engineer",
          company: "Biuromax-Balcer",
          description:
            "Testowanie aplikacji do zarzadzania firmami budowlanymi oraz implementacja testow automatycznych usprawniajacych weryfikacje jakosci.",
          tags: ["QA", "Automatyzacja testow", "Platforma biznesowa"],
        },
      ],
    },
    projects: {
      title: "Wybrane projekty komercyjne",
      description:
        "Najwazniejsze realizacje oparte na rzeczywistej pracy dla klientow z obszaru transportu, motoryzacji i edukacji.",
      caseStudyLabel: "Zrealizowane komercyjnie",
      cards: [
        {
          name: "Platforma TMS dla transportu",
          summary:
            "Rozwoj i utrzymanie systemu transportowego z funkcjami zarzadzania flota, kierowcami, kontrahentami i umowami.",
          stack: "TypeScript - Vue.js - REST API",
        },
        {
          name: "CMS Jaguar i Land Rover",
          summary:
            "Budowa customowego CMS dla stron marek oraz wsparcie wdrozen platformy na rynkach Tier 2 w wielu krajach.",
          stack: "CMS - Frontend - Motoryzacja",
        },
        {
          name: "Landing page University of Hull",
          summary:
            "Realizacja strony landingowej jako kontraktor, od projektu graficznego i wymagan biznesowych do responsywnej implementacji.",
          stack: "Responsive UI - Delivery - Collaboration",
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
