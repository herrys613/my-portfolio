# My Portfolio — Project Reference

## Live URL
https://herrys613.github.io/my-portfolio/

## Tech Stack
- **Vite + React + TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin — no `tailwind.config.ts`)
- **Shadcn UI** (manually installed, components in `src/components/ui/`)
- **Framer Motion** (animations)
- **Geist Variable** font (`@fontsource-variable/geist`)
- **Lucide React** (icons)

---

## Project Structure

```
my-portfolio/
├── public/
│   └── images/
│       ├── graphics/     ← drop graphic design images here
│       ├── videos/       ← drop video poster/thumbnail images here
│       └── projects/     ← drop project screenshots here
├── src/
│   ├── App.tsx           ← wires all sections together
│   ├── main.tsx
│   ├── styles/
│   │   ├── index.css     ← imports tailwind + geist font
│   │   └── theme.css     ← CSS variables (colors, radius, fonts)
│   ├── lib/
│   │   └── utils.ts      ← cn() helper
│   ├── data/
│   │   ├── graphics.ts   ← GraphicItem[] — swap imageUrl to your files
│   │   ├── videos.ts     ← VideoItem[] — swap embedUrl to your YouTube embeds
│   │   └── projects.ts   ← ProjectItem[] — swap screenshotUrl to your files
│   └── components/
│       ├── ui/           ← Shadcn components (card, badge, carousel, separator, skeleton)
│       ├── FadeIn.tsx    ← scroll-triggered fade-in wrapper (used on sections)
│       ├── SplitText.tsx ← word-by-word rise animation (used on hero h1)
│       ├── BlurText.tsx  ← word-by-word blur-in (used on hero tagline)
│       ├── BrowserMockup.tsx ← macOS-style browser chrome (used in software section)
│       ├── HeroSection.tsx
│       ├── GraphicsSection.tsx
│       ├── VideosSection.tsx
│       └── SoftwareSection.tsx
```

---

## Design System

### Background color
`#F9FAFB` — set in `src/styles/theme.css` as `--background`

### Cards
Pure white (`oklch(1 0 0)`) so they lift off the background

### Font
Geist Variable — same as shadcn.com and Vercel

### Animations
- **Hero h1** — `SplitText`: word-by-word rise from below (expo-out curve)
- **Hero tagline** — `BlurText`: word-by-word blur-in, delayed 0.5s after heading
- **Sections** — `FadeIn`: fade + slide-up on scroll, fires once

---

## Sections

### Hero
- Dot-grid background with white radial vignette
- `SplitText` on heading, `BlurText` on tagline, `motion.p` fade on bio
- Edit copy directly in `src/components/HeroSection.tsx`

### Graphics (`src/data/graphics.ts`)
- **Masonry layout** — 2 columns mobile, 3 columns desktop
- Items distributed left-to-right (image 1 → col 1 top, image 2 → col 2 top)
- Last image in shorter column stretches to even out both sides
- **Scale on hover** via Framer Motion `whileHover={{ scale: 1.1 }}`
- Images stored in `public/images/graphics/`
- Paths use `import.meta.env.BASE_URL` prefix for GitHub Pages compatibility

### Videos (`src/data/videos.ts`)
- Custom play button + thumbnail facade; on click → native `<video>` plays in a modal
- `short: true` flag → uses `aspect-9/16` (portrait) instead of `aspect-video`
- Videos and poster images are hosted on Firebase Storage (`firebasestorage.googleapis.com`)

### Software (`src/data/projects.ts`)
- `BrowserMockup` component wraps each screenshot
- Chrome bar: 3 colored dots (`#FF5F57`, `#FFBD2E`, `#28C840`) + fake URL bar
- Screenshots stored in `public/images/projects/`
- Paths use `import.meta.env.BASE_URL` prefix

---

## Image Aspect Ratios

| Section | Ratio | Example size |
|---|---|---|
| Graphics | Natural (no crop) | Any — masonry adapts |
| Video posters | 16:9 | 1920×1080 |
| Project screenshots | 16:10 | 1280×800 |

---

## Deployment (GitHub Pages)

**Repo:** https://github.com/herrys613/my-portfolio

### Deploy command
```powershell
npm run deploy
```
Runs `npm run build` then pushes `dist/` to the `gh-pages` branch.

### Vite base path
`base: '/my-portfolio/'` in `vite.config.ts` — required for GitHub Pages.
All local image paths use `import.meta.env.BASE_URL` (resolves to `/my-portfolio/` in prod, `/` in dev).

### First-time setup
```powershell
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/herrys613/my-portfolio.git
npm run deploy
```
Then: GitHub → repo → Settings → Pages → Source → `gh-pages` branch

---

## Common Tasks

### Add a new graphic image
1. Drop the image in `public/images/graphics/`
2. Add an entry to `src/data/graphics.ts`

### Add a new video
1. Upload the `.mp4` and a poster image to Firebase Storage
2. Copy the public download URLs and add an entry to `src/data/videos.ts`
3. Set `short: true` if it's a vertical (portrait) video

### Add a new project
1. Drop screenshot in `public/images/projects/`
2. Add entry to `src/data/projects.ts`

### Change hero text
Edit `src/components/HeroSection.tsx` — heading, tagline, and bio are plain text strings.

### Run locally
```powershell
cd C:\Users\hersh\Downloads\my-portfolio
npm run dev
```
Opens at `http://localhost:5173`

### Kill the dev server (Windows)
```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess -Force
```
