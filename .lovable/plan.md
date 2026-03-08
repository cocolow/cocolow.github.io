# Portfolio Website — Landing Page (Iteration 1)

## Design Direction

- **Color palette**: Vibrant watercolor-inspired gradients drawn from the uploaded image — warm oranges, blues, rich purples, burgundy red, golden yellows, and leafy greens, turqouise on a clean white/dark background
- **Typography**: Modern, elegant sans-serif (Inter/system fonts) — no playful or childish fonts
- **Dark/light mode toggle** built in from the start
- **Clean, airy layout** with generous whitespace, letting the artwork breathe

## Navigation Bar

- Fixed top nav with logo/name on the left
- Menu tabs: **Projects** | **About** | **Commissions** | **Art Shop** (links/placeholders for now)
- Social icons in nav or footer: LinkedIn, GitHub, Instagram
- Dark/light mode toggle button
- Mobile-responsive hamburger menu

## Landing Page Sections

### 1. Hero Section

- Large headline with your name/artist statement
- Subtle gradient accent (orange → pink → purple) behind or around the text
- A featured artwork placeholder image with a soft watercolor-style border/shadow
- CTA button (e.g. "View My Work")

### 2. Featured Work Grid

- 4–6 image placeholder cards in a responsive grid
- Each card has a hover effect revealing project title + category tag
- Categories: Work Projects, Personal Projects, Artwork

### 3. About Teaser

- Short intro paragraph with a placeholder avatar/photo
- "Learn more" link (future About page)

### 4. Footer

- Social media links (LinkedIn, GitHub, Instagram) as icons
- Copyright text
- Quick nav links

## Technical Details

- Dark/light mode via `next-themes` (already installed)
- CSS gradient utilities in Tailwind config matching the watercolor palette
- Fully responsive (mobile-first)
- Placeholder images using colored gradient blocks styled to look like artwork frames