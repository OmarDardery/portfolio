# Omar El-Dardery · Portfolio

### Useful software. Simpler systems. A little personality.

My portfolio presents the problems I work on, the value behind each project, and
how I carry ideas from development to deployment—including how I steer coding
agents without handing over responsibility for the result.

[Visit the portfolio](https://portfolio.dardery.work/)

## What is inside

- Selected web, infrastructure, and hardware projects, with photos and expandable details.
- A practical delivery workflow: Git, repeatable environments, checks, deployment, and handover.
- A photo, scroll-driven gears, Matrix-style technical section, and a small interactive terminal.
- Light/dark themes, a decorative-motion switch, and reduced-motion support.
- Experience, education, certificates, and résumé access.

## Develop and build

```sh
bun install --frozen-lockfile
bun dev
bun run build
```

The production output is `dist/`; the existing Vercel project deploys the default branch.

## Edit content

| Path | Purpose |
|---|---|
| `src/App.tsx` | Main page, capability copy, delivery story, and featured order |
| `src/data/projects.ts` | Project summaries, links, status, and gallery captions |
| `src/data/resume.ts` | Experience and education |
| `src/data/courses.ts` | Certificates |
| `src/components/personality/` | Decorative motion, terminal, and photo lightbox |
| `src/public/` | Optimized photographs, screenshots, and résumé |
| `src/index.css` | Responsive design and motion preferences |

## Image provenance

Lukat's headphone product image is a generated concept render and is labeled as
such. Its app screenshots and prototype photo are real supplied images. The IEEE
images are captures of the live website. Nixlab's gallery uses its GitHub overview
because the public project website was unavailable at capture time. The portrait
is a supplied photograph; it is resized for delivery, not regenerated.

## Motion and accessibility

The gear rotation follows scrolling. The Matrix animation runs only when its
section is visible and decorative motion is enabled. Reduced-motion preferences
suppress decorative animation. The native dialog gallery supports keyboard
navigation, Escape, focus trapping, and returning focus to the opener.
