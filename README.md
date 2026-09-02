<div align="center">

# Miaomiao Cai — Academic Homepage

Personal academic homepage of **Miaomiao Cai (蔡苗苗)**, Postdoctoral Research Fellow at the National University of Singapore.

[**🌐 miaomiao-cai2.github.io**](https://miaomiao-cai2.github.io/)

[![Deploy](https://github.com/miaomiao-cai2/miaomiao-cai2.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/miaomiao-cai2/miaomiao-cai2.github.io/actions/workflows/deploy.yml)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![NextUI](https://img.shields.io/badge/NextUI-v2-000000)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## Overview

A static academic site built with **Vite + React + TypeScript + NextUI v2 + Tailwind CSS**. All content lives in plain TypeScript files under `src/data/`, so updating the homepage means editing data — not touching layout code.

- **Bio page** (`/`) — profile, news, selected publications, education, honors, services
- **Dedicated pages** — Publications (`/pub`), News (`/news`), Education (`/education`), Honor (`/honor`), Services (`/services`)
- **Dark / light theme**, Framer Motion animations, animated gradient hero, responsive down to mobile
- **Zero backend** — builds to static assets, auto-deployed to GitHub Pages on every push to `main`

## Tech Stack

| Layer | Choice |
| --- | --- |
| Build tool | Vite 5 |
| Framework | React 18 + TypeScript 5 |
| UI components | NextUI v2 |
| Styling | Tailwind CSS 3 + `tailwind-variants` |
| Animation | Framer Motion |
| Routing | React Router v6 |
| Package manager | pnpm |
| Hosting | GitHub Pages (GitHub Actions) · Vercel-ready |

## Quick Start

Requires **Node.js ≥ 20** and **pnpm**.

```bash
git clone https://github.com/miaomiao-cai2/miaomiao-cai2.github.io.git
cd miaomiao-cai2.github.io
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:5173`.

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server with HMR |
| `pnpm build` | Build to `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | Lint and auto-fix files under `src/` |

## Project Structure

```
.
├─ .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├─ index.html                     # HTML shell, page title & OG meta
├─ vite.config.ts                 # Vite + React + path aliases
├─ vercel.json                    # SPA rewrite rules for Vercel
└─ src/
   ├─ App.tsx                     # Route table
   ├─ assets/                     # Profile photo, institution logos, paper thumbnails
   │  └─ img/paper/               # One figure per publication
   ├─ components/                 # Presentational components (news, papers, education, honor, navbar)
   ├─ config/site.ts              # Site title, nav items, social links
   ├─ data/                       # ← All editable content lives here
   ├─ hooks/                      # use-theme
   ├─ layouts/default.tsx         # Shared page shell (navbar + footer)
   ├─ pages/                      # One file per route
   ├─ styles/globals.css          # Global styles & custom animations
   └─ types/                      # Shared type definitions
```

## Credits

Built on the excellent [Homepage-Template](https://github.com/Xiaohao-Liu/Homepage-Template) by [Xiaohao Liu](https://xiaohao-liu.github.io/), extended here with restructured pages for news, education, honors and services, and a GitHub Actions deployment pipeline. Many thanks for open-sourcing it.

## License

Source code is released under the [MIT License](LICENSE). Site content — including text, the profile photo, publication figures, and institutional logos — belongs to the respective authors and is not covered by the MIT grant.

## Contact

📧 [cmm.hfut@gmail.com](mailto:cmm.hfut@gmail.com) · 🎓 [Google Scholar](https://scholar.google.com/citations?user=iqyPwGAAAAAJ) · 💻 [GitHub](https://github.com/miaomiao-cai2)

I am always open to new collaborations and discussions — feel free to reach out.
