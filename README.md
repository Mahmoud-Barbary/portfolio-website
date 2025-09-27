## Mahmoud Barbary — Portfolio Website

Clean, responsive portfolio showcasing work across software, video, and games. Built with React + Vite and deployed to GitHub Pages.

- Live site: [mahmoud-barbary.github.io/portfolio-website](https://mahmoud-barbary.github.io/portfolio-website)
- Tech: React 18, Vite 5, GitHub Pages, plain CSS modules

![Portfolio Screenshot](public/portfolio.png)

### Why this project
This site is both a keepsake for past projects and a home for future ones. It was also an experiment in AI‑assisted development: the project was built end‑to‑end inside the AI-powered IDE Cursor, focusing my effort on design, structure, and UX while using the assistant to implement and refine components. The process reinforced that great results still require a human vision, attention to detail, and iterative guidance.

- Context post: [LinkedIn announcement](https://lnkd.in/dyW2SJAm)

## Features
- Interactive experience timeline with expandable markers (hover to reveal rich cards with image + text)
- Project highlights grid with auto-playing thumbnails (IntersectionObserver) and consistent “View more” CTA alignment
- Dedicated sections for Software, Video, and Games projects populated from structured data
- In-browser resume preview (no forced download)
- Mobile-first, responsive layout and subtle animations; respects reduced-motion preferences
- Basic offline caching via a simple service worker for same-origin GET requests
- SEO and PWA niceties: `manifest.json`, `robots.txt`, `sitemap.xml`

## Tech Stack
- React 18 + Vite 5
- Plain CSS with component-scoped styles
- GitHub Pages via `gh-pages`

## Getting Started
Prerequisites: Node.js >= 18

```bash
npm install
npm run dev
# Open http://localhost:5173
```

Build and preview locally:
```bash
npm run build
npm run preview
```

Deploy to GitHub Pages:
```bash
npm run deploy
```

Notes:
- `vite.config.js` sets `base` to `/portfolio-website/` in production so assets resolve correctly on GitHub Pages.
- The service worker (`public/sw.js`) is a lightweight cache-first helper for same-origin GET requests.

## Project Structure
```text
src/
  components/
    Education/ …
    Experience/ …        # timeline + expandable markers
    Highlights/ …        # grid with autoplaying media thumbnails
    Software/ …
    Video/ …
    Games/ …
    Hero/, Header/, IntroVideo/, ErrorBoundary/
  data/
    projects.js          # all project data and helpers
  assets/                # images (experience, education, profile, etc.)
public/
  media/                 # mp4s and images used by projects
  resume.pdf             # opens in-browser
  manifest.json, robots.txt, sitemap.xml, sw.js
```
## Acknowledgments
- Built and iterated in Cursor with AI assistance, guided by a human-centered design process.
