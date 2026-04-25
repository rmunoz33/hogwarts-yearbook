# Hogwarts Yearbook

A Harry Potter-themed single-page application for exploring the wizarding world. Browse students, staff, all characters, Hogwarts houses, and magical spells — all wrapped in an atmospheric, dark magical interface.

## Features

- **Students & Staff** — Browse all Hogwarts students and faculty with detailed character modals
- **All Characters** — View every character from the wizarding world (400+ entries)
- **Character Detail Pages** — Deep-linkable profile pages for individual characters (`/character/:id`)
- **Houses** — Select a Hogwarts house to explore its members with house-themed visuals
- **Spells** — Discover magical spells with expandable descriptions
- **Search & Filter** — Real-time search across all listing pages
- **Background Music** — Toggle ambient Harry Potter music
- **Responsive Design** — Works across desktop, tablet, and mobile
- **Page Transitions** — Smooth animated navigation with Framer Motion
- **Error Handling** — Themed error states with retry functionality on all pages
- **Image Fallbacks** — Graceful placeholder when character images are broken

## Tech Stack

- **React 19** with TypeScript
- **Vite** for blazing fast dev/build (~1s production builds)
- **React Router v7** for client-side routing
- **Framer Motion** for animations and page transitions
- **CSS Custom Properties** for a cohesive design system (no UI framework)
- **use-sound** for audio playback
- Custom Harry Potter fonts (Lumos, Harry Potter)

## Getting Started

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## API

All data is sourced from the [HP-API](https://hp-api.onrender.com/), a free Harry Potter API. No API key required.

**Endpoints used:**
| Endpoint | Description |
|---|---|
| `/api/characters` | All characters |
| `/api/character/:id` | Character by ID |
| `/api/characters/students` | Hogwarts students |
| `/api/characters/staff` | Hogwarts staff |
| `/api/characters/house/:house` | Members of a house |
| `/api/spells` | All spells |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
