# Shweta Kale — Cinematic Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.
Dark theme, Kanit font, gradient headline text, magnetic-hover portrait,
scroll-driven marquee, character-reveal about text, and sticky-stacking
project cards.

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Adding your content

**Portrait (Hero section)**
1. Add your photo to `public/portrait/`
2. Update `PORTRAIT_SRC` near the top of `src/sections/HeroSection.tsx`

**Marquee thumbnails**
1. Add images to `public/work/`
2. In `src/sections/MarqueeSection.tsx`, replace the `null` entries in
   `row1Images` / `row2Images` with your file paths, e.g. `"/work/poster-1.jpg"`

**Project cards (sticky-stacking section)**
1. Add images to `public/work/`
2. In `src/sections/ProjectsSection.tsx`, edit the `projects` array —
   set `name`, `category`, and the `col1` / `col2` image paths for each one.
   Add or remove objects from the array to change the number of project cards.

**Services list**
Edit the `services` array in `src/sections/ServicesSection.tsx` directly.

**About bio**
Edit the `bio` string in `src/sections/AboutSection.tsx`.

## A note on the original spec

This was built from a very detailed design brief modeled on an existing
"Jack — 3D Creator" template. The layout system, animations, and component
architecture (FadeIn, Magnet, AnimatedText, sticky-stacking cards, scroll
marquee) are reproduced faithfully. The original template's specific image
assets (portrait, decorative 3D icons, project screenshots hosted on someone
else's CDN) were not copied in — those belong to that other project. This
version ships with clearly marked placeholder slots for your own photos and
work instead, plus content rewritten around graphic design and video editing
rather than 3D modeling.
