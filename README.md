# Project WIS — Web & Internet Solutions

This is the portfolio and landing page for **Project WIS**, a development studio that designs and builds custom platforms end-to-end, from first sketch to deployed product.

## Features

- **Dark-themed UI**: Modern aesthetic with glassmorphism effects and custom color tokens.
- **Pipeline Animation**: Custom CSS animations illustrating the `schema.build` process (Idea → Design → Build → Ship).
- **Responsive Design**: Built to adapt cleanly across mobile and desktop breakpoints.
- **Next.js 16**: Ported from static HTML to a modern Next.js App Router application.
- **Static Generation**: Optimized for fast delivery as static content.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS with custom properties (`app/globals.css`)
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (via Google Fonts)
- **Language**: TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate static HTML/CSS/JS assets ready for deployment.

## Agentation Integration

This project includes [Agentation](https://www.agentation.com/) as a dev-dependency to provide visual feedback for AI coding agents. The integration component is conditionally rendered in the root layout during development. 

## Ponytail Integration

This project supports the [Ponytail](https://github.com/DietrichGebert/ponytail) AI agent plugin to enforce the YAGNI principle during development. Note that Ponytail is installed into your AI coding tool (e.g., Claude Code), not directly into this repository.

## Contact & Links

- **Email**: hello.projectwis@gmail.com
- **GitHub**: [project-wis](https://github.com/project-wis)
