# Miaomiao Cai — Personal Homepage

🔗 **Live site:** [miaomiao-cai2.github.io](https://miaomiao-cai2.github.io/)

Personal academic homepage for Miaomiao Cai (蔡苗苗), Postdoctoral Research Fellow at the
Institute of Data Science, National University of Singapore.

Built with **Vite + React + TypeScript + NextUI v2 + Tailwind CSS**, and based on the
[Homepage-Template](https://github.com/Xiaohao-Liu/Homepage-Template) by Xiaohao Liu (MIT-licensed).

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

By default, the dev server runs at `http://localhost:5173`.

## 🔧 Scripts

| Command        | Description                   |
| -------------- | ------------------------------ |
| `pnpm dev`     | Start the development server   |
| `pnpm build`   | Build for production           |
| `pnpm preview` | Preview the production build   |

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

## 🧩 Content Sections

- [x] Bio & profile (`src/data/profile.tsx`)
- [x] Education timeline (`src/data/education.tsx`)
- [x] News timeline (`src/data/news.tsx`)
- [x] Publications, 10 papers with real links (`src/data/all_paper.tsx`, `src/data/paper_selected.tsx`)
- [x] Honors & awards (`src/data/honor.tsx`)
- [x] Services & reviewing (`src/pages/services.tsx`)
- [ ] Replace shared placeholder with individual figure thumbnails per paper (`src/assets/img/paper/`)

## 📦 Deployment

Deployed automatically to **GitHub Pages** via GitHub Actions on every push to `main`
(see `.github/workflows/deploy.yml`).

## 📄 License

Based on the MIT-licensed [Homepage-Template](https://github.com/Xiaohao-Liu/Homepage-Template)
by Xiaohao Liu. See [LICENSE](./LICENSE).
