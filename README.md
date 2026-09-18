# Rikshith Ravi Teja — Portfolio

A dark-themed, motion-driven personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion — featuring a magnetic-hover hero portrait, a scroll-driven tech-stack marquee, a character-reveal about section, and sticky stacking project cards.

**Live site:** https://rikshith-portfolio.vercel.app

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling
- **Framer Motion** — scroll-driven animations, fade-ins, sticky card stacking
- **Lucide React** — icons
- Deployed on **Vercel**

## Features

- **Hero** — two-line animated headline, magnetic-hover avatar, resume download button
- **Marquee** — two rows of tech-stack logos scrolling in opposite directions, driven by scroll position
- **About** — character-by-character scroll-reveal bio, decorative 3D corner accents, education details
- **Skills** — Frontend Development, Full Stack Development, REST API Design, Backend Architecture, Database Design, Auth & Deployment
- **Projects** — sticky, scale-stacking project cards with real screenshots, GitHub links, and live demo links
- **Contact** — email, phone, GitHub, LinkedIn, and LeetCode
- Fully responsive across mobile, tablet, and desktop

## Projects Featured

| # | Project | Stack | Links |
|---|---------|-------|-------|
| 01 | AI Mock Interview Platform | Next.js, Gemini API, MongoDB | [GitHub](https://github.com/Rikshith-07/ai-mock-interview) · [Live](https://ai-mock-interview-one-tau.vercel.app) |
| 02 | BitLinks | Next.js, MongoDB | [GitHub](https://github.com/Rikshith-07/bitlinks-next) · [Live](https://bitlinks-next.vercel.app) |
| 03 | PassOp | React, Node.js, Express, MongoDB | [GitHub](https://github.com/Rikshith-07/passOp-Mongo) · [Live](https://pass-op-mongo-five.vercel.app/) |
| 04 | BudgetWise | React, Spring Boot, MySQL | [GitHub](https://github.com/Rikshith-07/budgetwise) |

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Rikshith-07/rikshith-portfolio.git
cd rikshith-portfolio
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The production build outputs to `dist/`.

## Project Structure

```
rikshith-portfolio/
├── public/
│   ├── avatar.png          # hero portrait
│   └── projects/           # project screenshots
├── src/
│   ├── components/         # FadeIn, Magnet, AnimatedText, buttons
│   ├── sections/           # Hero, Marquee, About, Skills, Projects, Contact
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Deployment

This project auto-deploys to Vercel on every push to `main`:

```bash
git add .
git commit -m "your message"
git push
```

## Contact

- **Email:** rikshithraviteja2@gmail.com
- **GitHub:** [Rikshith-07](https://github.com/Rikshith-07)
- **LinkedIn:** [kuruva-rikshith-raviteja](https://www.linkedin.com/in/kuruva-rikshith-raviteja/)
- **LeetCode:** [Rikshith7](https://leetcode.com/u/Rikshith7/)
