---
"portfolio": minor
---

Initial portfolio scaffold:

- Typography system using Inter (body) + Bebas Neue (headings) with editorial uppercase tracking; long-form copy renders in Inter Thin (weight 100).
- Installed shadcn/ui with Base UI primitives; customized `Button` to a flat, uppercase, editorial variant matching the type system.
- Hero section with name, role + location, description, contact CTAs (mailto + LinkedIn), and a skills/experience strip. Years-of-experience auto-derived from career start year.
- Professional Experience section pulling ST Engineering roles and achievements from the resume.
- GSAP-driven scroll fade-in animations via a reusable `<FadeIn>` client component using `useGSAP` + `ScrollTrigger`.
- Responsive layout: mobile-first sizing, centered hero on small screens, multi-column grid from `md:` upward.
