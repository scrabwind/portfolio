# Agents

## Stack

- **Astro v6** with `@astrojs/react` — use `.astro` for layouts/pages, React (`.tsx`/`.jsx`) for interactive islands.
- **Tailwind CSS** — configured via `@import "tailwindcss"` in `src/styles/global.css`.
- **pnpm** (not npm). `package.json` requires Node `>=22.12.0`.

## Commands

| Command | Action |
|---|---|
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro add <integration>` | Add Astro integration |
| `pnpm astro check` | Run Astro type-checking |

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
