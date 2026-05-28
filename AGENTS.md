# Agents

## Stack

- **Astro v6** with `@astrojs/react` — use `.astro` for layouts/pages, React (`.tsx`/`.jsx`) for interactive islands.
- **Tailwind CSS** — configured via `@import "tailwindcss"` in `src/styles/global.css`.
- **Vite+** (`vp`) — wraps pnpm. Use `vp` everywhere instead of `pnpm`/`npm`. `package.json` requires Node `>=22.12.0`.

## Commands

| Command                      | Action                                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `vp run dev --port 4200`     | Dev server at `localhost:4200`                                                                              |
| `vp run build`               | Production build to `./dist/` (`vp build` uses Vite directly and fails — must use `vp run build` for Astro) |
| `vp run preview`             | Preview production build locally                                                                            |
| `vp astro add <integration>` | Add Astro integration                                                                                       |
| `vp astro check`             | Run Astro type-checking                                                                                     |
| `vp install`                 | Install dependencies                                                                                        |
| `vp run <script>`            | Run a package.json script                                                                                   |

No test, lint, or format commands are configured.

## Layout

```
src/
├── assets/        # Static assets (images, SVGs)
├── components/    # .astro and React components
├── layouts/       # Page layouts (Layout.astro imports global.css)
├── pages/         # File-based routing (index.astro → /)
└── styles/        # global.css with Tailwind import
```

- **Generated files** — `.astro/` (types) and `dist/` (build output) are gitignored. Do not edit manually.
- **Astro MCP** is already configured in `opencode.jsonc` — ask docs queries via the MCP server or the Astro docs search tool.

## Browser verification

- **Always verify visual changes in the browser.** Open dev server to review any UI/visual change.
- **Always stop any server you start.** If you do launch a dev server or other long-running process yourself, shut it down before ending your response — never leave a background server running.

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
