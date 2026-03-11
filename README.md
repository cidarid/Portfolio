# Personal Portfolio

Personal portfolio site for Spencer Fletcher — CS student at UBC (3.9 GPA). Built with Astro and Svelte.

**Live:** [spencerfletcher.com](https://spencerfletcher.com)

## Tech Stack

- **[Astro](https://astro.build/)** — static site framework
- **[Svelte](https://svelte.dev/)** — component integration via `@astrojs/svelte`
- **TypeScript**
- Vanilla CSS with CSS custom properties

## Getting Started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to /dist
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── pages/
│   └── index.astro       # Main page (hero, projects, skills)
└── components/
    └── ProjectCard.astro  # Reusable project card component
public/                    # Static assets (resume PDF, icons)
```

## Featured Projects

| Project | Stack | Highlights |
|---|---|---|
| **MemoryGuard** | C++, Clang/LLVM | Static + dynamic memory safety analysis for C programs |
| **Fork** | SvelteKit, PostgreSQL | Git-style version control for recipes |
| **Spotify Magic Search** | Next.js, FastAPI, Python | LLM-powered natural language music discovery |
| **UBC Cadaver Donation Site** | HTML/CSS/JS, WordPress | 100%+ increase in donations, 250% faster staff search |
| **Hollywood Theatre Tooling** | JS, Google Apps Script | Saved 5+ hrs/week of manual work |
