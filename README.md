# Joshua Masters — Reactive Playground & Portfolio Hub

A modern developer playground and portfolio testbed built with **Svelte 5 (Runes)**, **TypeScript**, and **Vite**, styled in **Ford Mustang Grabber Blue** and **Deep Maroon** with glassmorphism and subtle border glows.

## 🚀 Features

- **Svelte 5 Runes**: Fine-grained reactive state management with zero virtual-DOM overhead (`$state`, `$derived`, `$effect`).
- **Interactive Reactivity Lab**:
  - Live math, parity, and prime calculations via `$derived`.
  - Signal Matrix demonstrating multi-node real-time state evaluation.
  - Side-by-side technical code comparison between Svelte 5 and React hooks.
- **Showcase & Roadmap**: Dynamic project showcase with category filters (Active, Web/Svelte, Systems/Wasm).
- **In-App Migration Guide**: Integrated modal detailing Strategy C (Repository Swap) and Strategy A (Direct Push) to seamlessly promote this playground to `mastersj5.github.io` when complete.
- **CI/CD Pipeline**: GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on every push to `main`.
- **Universal Base Path**: Assets built with relative paths (`base: './'`), guaranteeing identical behavior whether served from `https://mastersj5.github.io/github-page-test/` or root `https://mastersj5.github.io/`.

## 🛠️ Development & Toolchain

### Prerequisites
- Node.js 20+ or 22+
- npm

### Running Locally
```powershell
# Install dependencies
npm install

# Start local dev server
npm run dev

# Type check with svelte-check
npm run check

# Build production static bundle (outputs to dist/)
npm run build
```

## 🌐 Deploying to GitHub Pages

1. In your GitHub repository settings under **Settings > Pages**:
   - Set **Source** to **GitHub Actions**.
2. Push your changes to the `main` branch. The automated workflow in `.github/workflows/deploy.yml` will build and publish your site automatically.
