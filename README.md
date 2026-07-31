<div align="center">

# Saheb Khadem — Portfolio

### A single-page, bento-grid developer portfolio built with Next.js

<img src="public/screenshot.png" alt="Portfolio screenshot" width="800" />

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[Live Version](<>)**

</div>

---

## About

This is my personal portfolio site — a single-page, no-scroll (on desktop) bento-style layout that packs my identity, availability status, tech stack, projects, and contact info into one clean grid. Built from scratch with Next.js, TypeScript, and Tailwind, styled with a gruvbox-inspired theme.

## Features

- 🧩 **Bento grid layout** — modular tiles for identity, status, tech stack, projects, and contact
- 📱 **Responsive** — no-scroll fixed layout on desktop, natural vertical scroll on mobile
- 🎨 **Gruvbox theme** with dark mode
- ⚡ **Fully typed** with strict TypeScript across components and utilities
- 🧱 **shadcn/ui** components built on top of Radix/Base UI primitives
- 🧹 **Biome** for linting and formatting

## Tech Stack

| Category       | Stack                   |
| -------------- | ----------------------- |
| **Framework**  | Next.js, React          |
| **Language**   | TypeScript              |
| **Styling**    | Tailwind CSS, shadcn/ui |
| **Icons**      | Lucide                  |
| **Tooling**    | Biome                   |
| **Deployment** | Vercel                  |

## Project Structure

```
src/
  app/
    layout.tsx          # root layout, fonts, metadata
    page.tsx             # assembles the bento grid
    globals.css
  components/
    tiles/
      IdentityTile.tsx        # 01 // IDENTITY
      StatusTile.tsx          # 02 // STATUS
      tech-stack/              # 03 // TECH STACK
      projects/                 # 04 // PERSONAL PROJECTS
      HowIBuildTile.tsx        # 05 // HOW I BUILD
      ConnectTile.tsx           # 06 // CONNECT
    ui/                    # shadcn/ui primitives (card, badge)
  lib/
    projects.ts            # project data
    utils.ts
```

## Contact

- **Email** — saheb1379@gmail.com
- **GitHub** — [@sahebkhadem](https://github.com/sahebkhadem)

---

<div align="center">
<sub>Built with ☕ and way too many hours in the terminal.</sub>
</div>
