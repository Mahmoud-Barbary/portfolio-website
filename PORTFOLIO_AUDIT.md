# Portfolio Website Audit & Project Architecture Report

**Owner:** Mahmoud Barbary  
**Repository:** [Mahmoud-Barbary/portfolio-website](https://github.com/Mahmoud-Barbary/portfolio-website)  
**Deployment:** [https://mahmoud-barbary.github.io/portfolio-website](https://mahmoud-barbary.github.io/portfolio-website)  
**Date:** November 2026  
**Audited Version:** React 18 + Vite 5 + Custom CSS  

---

## 1. Executive Summary & Profile Overview

Mahmoud Barbary's portfolio showcases a hybrid profile bridging **Software Engineering**, **AI/Robotics**, **Professional Video Editing**, and **Game Development**.

Key differentiators identified in the codebase:
- **Dual CS Degree with Top Academic Distinction:** Egypt University of Informatics (EUI, GPA 3.98/4.0, Faculty Rank #1, Commencement Speaker) and University of Minnesota (UMN, GPA 4.0/4.0, Merit Scholarship Abroad).
- **Public Recognition & Leadership:** Keynote/Speaker at the Digital Egypt Initiative before the President of Egypt; National rank #132 in Egyptian High School.
- **Cross-Disciplinary Skills:** Production-grade video editing (25+ medical commercials, real estate campaigns, 45+ creative YouTube videos), Arabic LLM dataset curation (900M rows on Hugging Face at Premio.AI), Kinova Gen3 robotic arm control via ROS/MediaPipe, and Godot game engine mechanics.

---

## 2. Technical Stack & Build Setup

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | React 18.3.1 | Functional components, Hooks (`useState`, `useEffect`, `useRef`) |
| **Bundler & Tooling** | Vite 5.4.10 / 5.4.19 | `@vitejs/plugin-react`, ESM build, fast HMR |
| **Styling** | Vanilla CSS + CSS Modules / Global Custom Properties | Dark theme (#0e0a1a / #1a1a1a) with purple accents (`#8b5cf6`, `#a855f7`) |
| **Routing** | Custom Hash-based router (`#home`, `#software`, `#video`, `#games`) | Managed in `App.jsx` using `window.location.hash` and `hashchange` listeners |
| **Deployment** | GitHub Pages | Deployed via `gh-pages -d dist`, base path configured in `vite.config.js` |
| **PWA / Assets** | Basic Service Worker (`sw.js`), Web App Manifest (`manifest.json`), robots.txt, sitemap.xml | Basic offline caching support |

---

## 3. Directory & File Structure Audit

```
portfolio-website/
├── public/
│   ├── media/                     # 13 high-res MP4/JPG project media files (~145 MB total)
│   ├── 404.html                   # GitHub Pages SPA redirect fallback
│   ├── _headers & .htaccess       # Static caching headers
│   ├── manifest.json & sw.js      # PWA metadata & service worker
│   ├── resume.pdf                 # Mahmoud's downloadable resume
│   └── robots.txt & sitemap.xml   # Basic SEO indexing
├── src/
│   ├── assets/
│   │   ├── education/             # EUI logo, UMN logo, graduation photo
│   │   ├── experience/            # 8 timeline photos + National Military Service.webp
│   │   ├── profile/               # Mahmoud-Photo.png (Hero portrait)
│   │   ├── projects/              # Project diagrams & screenshots
│   │   └── social/                # GitHub, LinkedIn PNG icons
│   ├── components/
│   │   ├── Contact/               # Quick-copy email, social links, resume footer CTA
│   │   ├── Education/             # GPA cards and graduation photo
│   │   ├── ErrorBoundary/         # React runtime error fallback
│   │   ├── Experience/            # Interactive alternating timeline with expanding pop-ups
│   │   ├── Games/                 # Dedicated Game Dev project view (Project Clash)
│   │   ├── Header/                # Navigation bar with brand, category links, resume button
│   │   ├── Hero/                  # Intro statement, bio, circular avatar
│   │   ├── Highlights/            # 3-card overview grid linking to sub-pages
│   │   ├── IntroVideo/            # Embedded YouTube video introduction
│   │   ├── Skills/                # Categorized Skills & Proficiencies matrix with domain tabs
│   │   ├── Software/              # Detailed Software & Robotics project portfolio
│   │   └── Video/                 # Video editing client work and creative showcase
│   ├── data/
│   │   └── projects.js            # Central project database
│   ├── App.jsx & App.css          # Root view switching and layout
│   ├── index.css                  # Global variables, typography, reset
│   └── main.jsx                   # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 4. Component Inventory & Responsibilities

1. **`App.jsx`**:
   - Manages top-level navigation via browser URL hash (`#home`, `#software`, `#video`, `#games`).
   - Handles scroll restoration and view transitions.
   - Renders `ErrorBoundary` at the root.

2. **`Header` (`src/components/Header/`)**:
   - Sticky navigation bar with animated name button (scrolls to top).
   - Category navigation buttons with inline SVGs for Software, Video, and Games.
   - Social links (LinkedIn, GitHub) and Resume PDF opener.

3. **`Hero` (`src/components/Hero/`)**:
   - Displays circular profile portrait and punchy hook: *"Software Developer, Video Editor & Aspiring Game Developer"*.
   - Highlights multidisciplinary identity and fast learning capabilities.

4. **`Education` (`src/components/Education/`)**:
   - Placed side-by-side with Hero on desktop screens.
   - Highlights Dual CS degrees from Egypt University of Informatics (3.98 GPA) and University of Minnesota (4.0 GPA) with university logos and graduation portrait.

5. **`IntroVideo` (`src/components/IntroVideo/`)**:
   - Embeds a 16:9 YouTube video (`3nKEdhypIQw`) introducing Mahmoud personally.

6. **`Highlights` (`src/components/Highlights/`)**:
   - 3-column teaser cards (Software, Video, Games) with status badges and "View more →" calls to action directing to the respective category views.

7. **`Experience` (`src/components/Experience/`)**:
   - Interactive vertical timeline from 2021 to 2027.
   - Custom circle-to-card animation expanding on hover/tap.
   - Chronological milestones:
     1. High School Graduation (National rank 132, Full Scholarship) - Oct 2021
     2. Conference Speaker (Digital Egypt Initiative before President) - Jul 2022
     3. Video Editor (Medical Startup & Real Estate) - Oct 2022
     4. AI Engineering Intern (Premio.AI, 900M Hugging Face dataset) - May 2023
     5. Abroad Year at UMN (Merit Scholarship) - Aug 2024
     6. Communication Liaison (UMN Off-Campus Living) - Oct 2024
     7. UMN Graduation (B.S. in Computer Science) - May 2025
     8. EUI Graduation (B.Sc. in Computer Science, Rank #1, Commencement Speaker) - Sep 2025
     9. **National Military Service** (Egyptian Armed Forces) - Oct 2025 to Feb 2027

8. **`Software`, `Video`, `Games`**:
   - Deep-dive portfolio pages featuring in-depth project descriptions, architecture details, tech pills, media previews, and external GitHub / Figma links.

---

## 5. Projects Showcase Inventory

| Project Title | Category | Tech / Tools | Links / Media |
| :--- | :--- | :--- | :--- |
| **Medhat - Medical Chatbot** | Software / AI | Python, Flask, PostgreSQL, Rule-Based NLP | GitHub repo, MP4 demo |
| **Chess Game (PvP & PvE)** | Software / Systems | C++, SFML, Minimax AI | GitHub repo, MP4 demo |
| **Solitaire (Klondike)** | Software / Systems | C++, SFML, Event System | GitHub repo, MP4 demo |
| **Human Pose Controlled Robot Arm** | Robotics / CV | Python, ROS, MediaPipe, MoveIt, Kinova Gen3 | GitHub repo, MP4 demo |
| **Delivery Coordination System (Hermes)** | Software Design | Java, OOP Design Patterns, UML, Figma | GitHub repo, MP4 demo |
| **Foo-D-Mah Recommendation App** | UI/UX & Mobile | Figma, Miro, Prototyping | Figma Prototype, GitHub |
| **Steam Game Tag Classifier** | Machine Learning | Python, Sentence Transformers, GMM, Neural Networks | GitHub repo, Graphic |
| **Real Estate Marketing Campaign** | Video Editing | Premiere Pro, After Effects, B-roll, Color Grading | MP4 reel |
| **Medical Clinic Advertisements** | Video Editing | 25+ patient testimonials, branding, vertical social cuts | MP4 reel |
| **IEEE Event Promotion** | Video Editing | High-energy short-form promo for IEEE Congress | MP4 reel |
| **YouTube Channel & Video Essays** | Video Production | 45+ videos, 33-minute longform critique, storytelling | MP4 reel |
| **Project Clash** | Game Development | Godot, GDScript, Finite State Machines, Pixel Art | MP4 dev reel |

---

## 6. Audit Findings & Resolution Status

### ✅ Completed Refactors & Resolutions
1. **Single Source of Truth Implemented:**
   - Refactored `Software.jsx`, `Video.jsx`, and `Games.jsx` to dynamically load from `src/data/projects.js` via `getProjectsByCategory()`. Removed hundreds of lines of duplicate code.
2. **Video Streaming & Lazy Loading:**
   - Switched `<video>` elements to `preload="none"` and eliminated eager blocking load loops. Non-blocking `IntersectionObserver` now initiates playback smoothly only when scrolled into viewport.
3. **Stray File Cleaned:**
   - Deleted the accidental terminal artifact `tall gh-pages --save-dev` from the root directory.
4. **Interactive Skills Matrix Added:**
   - Added `Skills.jsx` and `Skills.css` with domain filtering tabs and applied project callouts.
5. **Contact & Footer Section Added:**
   - Added `Contact.jsx` and `Contact.css` with 1-click email copy, LinkedIn, GitHub, and résumé links.
6. **National Military Service Milestone Integrated:**
   - Added to `Experience.jsx` with your provided photo asset (`National Military Service.webp`).

### 🟡 Future Recommendations
- Compress raw media in `/public/media/` or add lightweight WebP poster images for videos.
- Add OpenGraph social preview images for LinkedIn / Twitter link previews.
- Periodically update `resume.pdf` as your portfolio evolves.

---

## 7. Recommended Action Plan & Next Steps

See the implementation suggestions detailed in the accompanying conversation for:
1. Structural and UI polish.
2. Content and personal branding additions (Skills Matrix, Interactive Godot Player, Contact/Email copy).
3. The strategic framing of the **National Military Service** milestone.
