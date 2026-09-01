# Miaomiao Cai — Personal Homepage

Personal academic homepage for Miaomiao Cai (蔡苗苗), built with **Vite + React + NextUI v2 + Tailwind CSS**.

This project is based on the [Homepage-Template](https://github.com/Xiaohao-Liu/Homepage-Template) by Xiaohao Liu (MIT-licensed) and customized with my own bio, education, news, and publications.

> This repository is currently **private**. It will be made public once the content (photo, publication links, honors, services) is finalized.

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

By default, the dev server runs at `http://localhost:5173`.

## 🔧 Scripts

| Command         | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start the development server |
| `pnpm build`   | Build for production     |
| `pnpm preview` | Preview the production build |

## 🗂️ Project Structure

```text
src/
├─ assets/      # Images, icons and other static assets
├─ components/  # Reusable UI components
├─ config/      # Site-level config (name, nav, social links) — src/config/site.ts
├─ data/        # Content: profile, education, news, honors, publications — src/data/*
├─ pages/       # Page entries
└─ styles/      # Global styles
```

## 🧩 Customization / TODO

- [x] Bio & profile (`src/data/profile.tsx`)
- [x] Education & work timeline (`src/data/education.tsx`)
- [x] News timeline (`src/data/news.tsx`)
- [x] Publications, from BibTeX (`src/data/all_paper.tsx`, `src/data/paper_selected.tsx`)
- [ ] Replace placeholder paper figures in `src/assets/img/paper/` with real thumbnails
- [ ] Fill in missing `paper_link` / `code_link` URLs once available
- [ ] Honors & awards (`src/data/honor.tsx`) — currently empty
- [ ] Services & volunteering (`src/pages/services.tsx`) — currently "Coming soon"
- [ ] Swap `src/assets/img/hfut.png` and `src/assets/img/thu.png` (generated placeholder badges) for official institution logos if desired

## 📦 Deployment

This is a static site and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.):

```bash
pnpm build
```

The production assets are generated in the `dist/` directory. To publish for free on **GitHub Pages** once this repo is public, `vite.config.ts`'s `base` path and a `gh-pages` deploy script (or a GitHub Actions workflow) would need to be added.

## 📄 License

Based on the MIT-licensed [Homepage-Template](https://github.com/Xiaohao-Liu/Homepage-Template). Add your own `LICENSE` before making this repository public if you'd like to keep it MIT (or choose another license).
