# Omar El-Dardery · Portfolio

### Useful software. Simpler systems. A little personality.

My portfolio leads with services: website development, custom software, deployment,
domain setup, and automation. Selected projects provide examples of the work.
It also explains how I steer coding agents while owning the review and delivery.

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

| Path                          | Purpose                                                        |
| ----------------------------- | -------------------------------------------------------------- |
| `src/App.tsx`                 | Main page, capability copy, delivery story, and featured order |
| `src/data/projects.ts`        | Project summaries, links, status, and gallery captions         |
| `src/data/resume.ts`          | Experience and education                                       |
| `src/data/courses.ts`         | Certificates                                                   |
| `src/components/personality/` | Decorative motion, terminal, and photo lightbox                |
| `src/public/`                 | Optimized photographs, screenshots, and résumé                 |
| `src/index.css`               | Responsive design and motion preferences                       |

## Image provenance

Lukat uses a background-removed photographic cutout of the actual display beside
the original, unmodified app screenshot with the dog-at-the-terminal GIF. The
headphone concept render is no longer shown. EngDen is hidden from the site by its
project visibility flag. The IEEE
images are captures of the live website. Nixlab's gallery uses its GitHub overview
because the public project website was unavailable at capture time. The portrait
is a supplied photograph; it is resized for delivery, not regenerated.

## Motion and accessibility

The gear rotation follows scrolling. The Matrix animation runs only when its
section is visible and decorative motion is enabled. Reduced-motion preferences
suppress decorative animation. The native dialog gallery supports keyboard
navigation, Escape, focus trapping, and returning focus to the opener.
