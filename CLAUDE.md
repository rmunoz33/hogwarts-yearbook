# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hogwarts Yearbook is a Harry Potter-themed React SPA (TypeScript) that displays students, staff, all characters, houses, and spells using data from the [HP-API](https://hp-api.onrender.com/). Built with Vite + React 19.

## Commands

- `npm run dev` — Start Vite dev server with HMR (port 3000)
- `npm run build` — Production build to `build/` directory
- `npm run preview` — Preview production build
- `npx tsc --noEmit` — Type-check without emitting

## Architecture

**Data flow:** Pages use the `useApi` custom hook (`src/hooks/useApi.ts`) which wraps typed fetch functions from `src/api.ts`. The hook provides `{ data, loading, error, execute }` for loading/error state management. Pages pass data to presentational grid/card components.

**Types:** Shared types for `Character`, `Spell`, and `Wand` are in `src/types.ts`. Asset module declarations are in `src/declarations.d.ts`.

**Routing** (react-router-dom v7): `/` (Cover), `/students`, `/staff`, `/houses`, `/characters` (all characters), `/character/:id` (detail page), `/spells`, `*` (404). Defined in `src/App.tsx` with `AnimatePresence` for animated page transitions.

**Styling:** Pure CSS with CSS custom properties defined in `src/index.css` as a design system (colors, spacing, surfaces, effects). No UI framework — all components use plain CSS files alongside their `.tsx` files. Two custom fonts (Lumos for body, Harry Potter for display).

**State:** Local React hooks (useState, useMemo for search filtering, useCallback). No global state management.

**Key libraries:** React 19, Vite 6, framer-motion for animations/transitions, use-sound for audio playback, react-router-dom v7.

## External API

All data comes from `https://hp-api.onrender.com/`. Endpoints: `/api/characters`, `/api/character/:id`, `/api/characters/students`, `/api/characters/staff`, `/api/spells`, `/api/characters/house/{house}`. No API key required.
