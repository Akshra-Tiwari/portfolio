# Akshra Tiwari — Portfolio

A premium, production-grade personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Design Aesthetic

- **Theme**: Deep charcoal black `#0a0a0b` with subtle purple `#8b5cf6` accents
- **Typography**: Syne (display) + Geist Sans (body) + Geist Mono (code)
- **Style**: Linear × Vercel × Stripe-inspired — premium startup quality
- **Motion**: Framer Motion throughout with scroll-reveal, micro-interactions, and hover effects
- **Effects**: Glassmorphism, gradient orbs, dot grids, animated borders

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (via Google Fonts) + Geist (via `geist` package)

## Project Structure

```
akshra-portfolio/
├── app/
│   ├── globals.css          # Design tokens, utilities, typography
│   ├── layout.tsx           # Root layout with fonts + metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx   # Scroll-aware nav with active section
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx     # Animated hero with floating badges
│   │   ├── AboutSection.tsx    # Story timeline + trait cards
│   │   ├── SkillsSection.tsx   # Interactive filterable skill cards
│   │   ├── ProjectsSection.tsx # Featured projects with hover effects
│   │   ├── JourneySection.tsx  # Timeline with categorized entries
│   │   ├── DSASection.tsx      # Coding stats from LeetCode/GFG/CF
│   │   └── ContactSection.tsx  # Contact form + social links
│   └── ui/
│       ├── Reveal.tsx          # Scroll-reveal animation wrapper
│       └── CustomCursor.tsx    # Subtle cursor glow effect
├── lib/
│   ├── data.ts              # All portfolio content (edit this!)
│   └── utils.ts             # cn() + helpers
└── tailwind.config.ts       # Extended tokens + animations
```

## Getting Started

```bash
# Install dependencies
npm install

# Install Geist font
npm install geist

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

### 1. Update your content
Edit `lib/data.ts` — all your personal info, projects, skills, DSA stats, and timeline entries live here.

### 2. Add your profile photo
In `components/sections/HeroSection.tsx`, replace the initials placeholder with:

```tsx
import Image from 'next/image'

// Replace the initials div with:
<Image
  src="/profile.jpg"
  alt="Akshra Tiwari"
  fill
  className="object-cover"
  priority
/>
```

Add `profile.jpg` to `/public`.

### 3. Customize colors
In `app/globals.css`, the main purple accent is `rgba(139, 92, 246, ...)`. Update `--primary` HSL in `:root` and the hex values throughout.

### 4. Update links
Replace all placeholder URLs in `lib/data.ts` with your real GitHub, LinkedIn, project demo, and email.

### 5. Add real projects
Update the `projects` array in `lib/data.ts` with real descriptions, tech stacks, feature lists, and URLs.

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel --prod
```

## Performance Notes

- All animations use `will-change: transform` via Framer Motion
- Images should use Next.js `<Image>` with `priority` on hero
- Fonts are preloaded via `<link rel="preconnect">`
- Glassmorphism uses `backdrop-filter: blur()` — test on lower-end devices

## License

MIT — use freely for your own portfolio.
