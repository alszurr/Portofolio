# Alif Pratama Sukarno Putra — Portfolio

A dark, single-page personal portfolio for Alif Pratama Sukarno Putra, a TJKT
(Computer & Network Engineering) student at SMK PGRI 1 Tangerang. Built as a
school assignment with a production-grade stack so it can double as a real
professional portfolio.

## Tech Stack

- **Runtime:** [Bun](https://bun.sh) — installs, runs, and builds everything
- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **UI:** shadcn/ui + Tailwind CSS v4
- **Animation:** [Motion](https://motion.dev) (`motion/react`)
- **Icons:** lucide-react + inline SVG brand marks
- **Fonts:** Geist Sans + Geist Mono via `next/font`
- **Theme:** next-themes, forced dark

## Getting Started

```bash
bun install
bun run dev
```

Open http://localhost:3000. If the port is taken: `bun run dev -- -p 3001`.

## Scripts

| Command       | What it does                       |
| ------------- | ---------------------------------- |
| `bun run dev` | Start the dev server (Turbopack)   |
| `bun run build` | Production build                 |
| `bun run start` | Serve the production build       |
| `bun run lint`  | ESLint                            |

## Editing Content

All site copy — name, bio, skills, projects, social links — lives in a single
file: `src/lib/data.ts`. Edit that file to update the whole site; no component
changes needed.

## Placeholder Checklist

Replace these obviously-fake values with real info:

- [ ] Email — `profile.email` in `src/lib/data.ts` (`your.email@example.com`)
- [ ] Social URLs — `profile.socials` (github / linkedin / instagram)
- [ ] Profile photo — drop a photo at `public/images/profile-photo.jpg` and add
      `AvatarImage` in `src/components/sections/about.tsx`
- [ ] Projects — replace the three `[EXAMPLE]` entries in `src/lib/data.ts`
- [ ] Education years — `education.years` in `src/lib/data.ts`
- [ ] Certifications — add a section only if real certifications exist

## Deploy (optional)

Push to GitHub, then import the repo at vercel.com. Vercel auto-detects Next.js
and Bun from the lockfile.
