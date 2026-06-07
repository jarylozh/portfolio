---
"portfolio": minor
---

Added Projects and Education sections, plus a sticky shadcn navigation bar:

- **Projects section** with a click-to-expand `<ProjectCard>` client component — GSAP-animated height/opacity reveals contribution bullets under the project description.
- **Education section** mirroring the project layout (NUS MTech with module/status pairs, DigiPen bachelor's degree).
- **Sticky nav** built on shadcn's `NavigationMenu` (`SiteNav`), mounted from the root layout, with GSAP `ScrollToPlugin` driving a gradual scroll animation between sections.
- Unified type hierarchy across sections (lede vs body weight/color), bumped contributions weight to `font-light` for readability against pure-white background.
