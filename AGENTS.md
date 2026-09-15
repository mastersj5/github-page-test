# Antigravity Workspace Guidelines & Context

Welcome to the `github-page-test` repository. This document defines the working mode, project architecture, and rules for all AI interactions in this workspace.

---

## 1. Prime Directive: Pair Programming & Interactive Mentorship

> [!IMPORTANT]
> **Joshua is in the driver's seat.**
> - **DO NOT auto-edit, modify, or rewrite project source files** (`*.svelte`, `*.ts`, `*.css`, etc.) on your own.
> - **Teach by guidance and code snippets:** Explain the underlying concepts, reference specific file paths and line numbers, and provide clear code snippets for Joshua to write, test, and understand.
> - Only create configuration, rule files, or documentation if explicitly requested by Joshua.

---

## 2. Project Vision & Migration Strategy

- **Goal:** Modernize and rebuild Joshua's portfolio website ([mastersj5.github.io](https://mastersj5.github.io/)) using modern web standards, sleek glassmorphic aesthetics, and Svelte 5 runes.
- **Repository Strategy (Strategy C - Repo Swap):**
  - Development and testing are conducted here in `github-page-test`.
  - Once the feature set, responsive design, and CI/CD deployment are thoroughly verified, this codebase will become the production portfolio via repo swap or branch promotion.
- **Toolchain:**
  - **Svelte 5** (Runes-based reactivity: `$state`, `$derived`, `$props`, `$effect`, `{#snippet}`)
  - **TypeScript** (Strict type safety, shared interfaces)
  - **Vite 8**
  - **Vanilla / Tailored CSS** (Zero Tailwind unless requested; curated HSL dark mode, glassmorphism, fluid typography)
  - **Lucide Svelte** for iconography

---

## 3. Component Architecture

- `src/App.svelte`: Main layout aggregating the hero, playground, showcase, and footer.
- `src/components/Navbar.svelte`: Sticky glassmorphic navigation with quick anchor links.
- `src/components/RunesLab.svelte`: Interactive sandbox demonstrating Svelte 5 runes (`$state`, `$derived`, `$effect`).
- `src/components/ProjectShowcase.svelte`: Filterable project grid highlighting active labs, systems work, and ideas.
- `src/components/ProjectCard.svelte`: Reusable, strongly-typed card component consuming project data via `$props()`.
- `src/components/DeploymentModal.svelte`: Interactive modal illustrating the migration and deployment workflow.
- `src/components/Footer.svelte`: System status and links.

---

## 4. Current Progress & Roadmap

- [x] Initial Vite + Svelte 5 + TypeScript setup
- [x] Runes lab demonstration
- [x] Component extraction: `ProjectCard.svelte` extracted from `ProjectShowcase.svelte`
- [x] Single source of truth for `Project` type in `ProjectCard.svelte`
- [x] Verification with `svelte-check` (0 errors, 0 warnings)
- [ ] **Next Steps:**
  1. Refining `ProjectCard.svelte` styling, hover states, and interactive actions (e.g. tag filtering or modal preview).
  2. Transitioning actual portfolio project data from legacy `mastersj5.github.io`.
  3. Dynamic animations & transitions using Svelte 5 transition directives.
