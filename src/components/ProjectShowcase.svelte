<script lang="ts">
  import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight } from '@lucide/svelte';
  import GithubIcon from './GithubIcon.svelte';

  type Category = 'all' | 'active' | 'web' | 'systems' | 'ideas';

  interface Project {
    id: string;
    title: string;
    category: ('active' | 'web' | 'systems' | 'ideas')[];
    description: string;
    status: 'Active Lab' | 'Target Swap' | 'Prototype' | 'Idea';
    tech: string[];
    repoUrl?: string;
    liveUrl?: string;
    accent: 'blue' | 'maroon';
  }

  let selectedCategory = $state<Category>('all');

  const projects: Project[] = [
    {
      id: 'github-page-test',
      title: 'Reactive Playground & Lab',
      category: ['active', 'web'],
      description: 'The current active testbed. Built with Svelte 5 runes, TypeScript, and Vite. Designed to explore non-virtual-DOM architectures and automated CI/CD deployment.',
      status: 'Active Lab',
      tech: ['Svelte 5', 'TypeScript', 'Vite 8', 'GitHub Pages'],
      repoUrl: 'https://github.com/mastersj5/github-page-test',
      accent: 'blue'
    },
    {
      id: 'mastersj5-portfolio',
      title: 'mastersj5.github.io Overhaul',
      category: ['active', 'web'],
      description: 'The primary portfolio repository. Slated to receive the tested and polished playground codebase via Strategy C (Repo Swap) or direct main push once full feature set is finalized.',
      status: 'Target Swap',
      tech: ['Svelte 5', 'Tailored CSS', 'SEO', 'GitHub Pages'],
      repoUrl: 'https://github.com/mastersj5/mastersj5.github.io',
      accent: 'maroon'
    },
    {
      id: 'rust-wasm-engine',
      title: 'Rust WebAssembly Particle SIM',
      category: ['systems', 'ideas'],
      description: 'High-octane browser particle physics simulation compiled from Rust using wasm-bindgen and rendered to an HTML5 canvas at 120 FPS.',
      status: 'Prototype',
      tech: ['Rust (Cargo)', 'WebAssembly', 'Canvas API', 'wasm-bindgen'],
      accent: 'maroon'
    },
    {
      id: 'go-micro-engine',
      title: 'Go High-Concurrency Telemetry',
      category: ['systems', 'ideas'],
      description: 'Lightweight backend metrics aggregator and WebSocket streamer leveraging Go goroutines and channels for ultra-low latency data transfer.',
      status: 'Idea',
      tech: ['Go 1.26', 'WebSockets', 'Concurrency', 'HTTP/3'],
      accent: 'blue'
    }
  ];

  let filteredProjects = $derived(
    selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category.includes(selectedCategory as any))
  );
</script>

<section class="projects-section" id="projects">
  <div class="container">
    <div class="section-header">
      <div class="badge badge-maroon">
        <FolderGit2 size={14} />
        <span>Repository R&amp;D</span>
      </div>
      <h2 class="section-title">
        Playground <span class="gradient-text-maroon">Showcase</span> &amp; Experiments
      </h2>
      <p class="section-subtitle">
        A curated inventory of active codebases, upcoming language experiments, and the planned portfolio evolution.
      </p>
    </div>

    <!-- Category Filter Bar -->
    <div class="filter-bar">
      <button 
        class="filter-btn {selectedCategory === 'all' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'all'}
      >
        All Projects ({projects.length})
      </button>
      <button 
        class="filter-btn {selectedCategory === 'active' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'active'}
      >
        Active Repos
      </button>
      <button 
        class="filter-btn {selectedCategory === 'web' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'web'}
      >
        Web &amp; Svelte
      </button>
      <button 
        class="filter-btn {selectedCategory === 'systems' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'systems'}
      >
        Systems (Rust / Go)
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      {#each filteredProjects as project (project.id)}
        <div class="glass-panel project-card {project.accent === 'blue' ? 'accent-blue-card' : 'accent-maroon-card'}">
          <div class="card-top">
            <div class="status-chip {project.accent === 'blue' ? 'chip-blue' : 'chip-maroon'}">
              <span class="chip-dot"></span>
              <span>{project.status}</span>
            </div>

            <div class="card-links">
              {#if project.repoUrl}
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="icon-link" 
                  title="View GitHub Repository"
                >
                  <GithubIcon size={17} />
                </a>
              {/if}
              {#if project.liveUrl}
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="icon-link" 
                  title="Live Demo"
                >
                  <ArrowUpRight size={18} />
                </a>
              {/if}
            </div>
          </div>

          <h3 class="project-title">{project.title}</h3>
          <p class="project-desc">{project.description}</p>

          <div class="card-bottom">
            <div class="tech-tags">
              {#each project.tech as t}
                <span class="tech-tag">{t}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-section {
    padding: 4rem 0 5rem;
  }

  .section-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 2.5rem;
  }

  .section-title {
    font-size: 2.2rem;
    margin: 0.8rem 0;
  }

  .section-subtitle {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .filter-bar {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-subtle);
    color: var(--text-muted);
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.45rem 1rem;
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: var(--transition);
  }

  .filter-btn:hover {
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.08);
  }

  .filter-btn.active-filter {
    background: linear-gradient(135deg, rgba(0, 140, 219, 0.25) 0%, rgba(159, 18, 57, 0.25) 100%);
    border-color: rgba(56, 189, 248, 0.4);
    color: #f8fafc;
    box-shadow: 0 0 15px rgba(0, 140, 219, 0.2);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .accent-blue-card:hover {
    border-color: rgba(56, 189, 248, 0.45);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 140, 219, 0.2);
  }

  .accent-maroon-card:hover {
    border-color: rgba(225, 29, 72, 0.45);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(159, 18, 57, 0.25);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  .status-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.25rem 0.65rem;
    border-radius: var(--radius-full);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
  }

  .chip-blue {
    background: rgba(0, 140, 219, 0.15);
    border: 1px solid rgba(56, 189, 248, 0.3);
    color: #38bdf8;
  }

  .chip-blue .chip-dot {
    background: #38bdf8;
    box-shadow: 0 0 6px #38bdf8;
  }

  .chip-maroon {
    background: rgba(159, 18, 57, 0.18);
    border: 1px solid rgba(225, 29, 72, 0.35);
    color: #fda4af;
  }

  .chip-maroon .chip-dot {
    background: #e11d48;
    box-shadow: 0 0 6px #e11d48;
  }

  .chip-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .card-links {
    display: flex;
    gap: 0.5rem;
  }

  .icon-link {
    color: var(--text-muted);
    padding: 0.35rem;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    text-decoration: none;
  }

  .icon-link:hover {
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.08);
  }

  .project-title {
    font-size: 1.35rem;
    margin-bottom: 0.6rem;
    color: var(--text-main);
  }

  .project-desc {
    color: var(--text-muted);
    font-size: 0.92rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tech-tag {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-subtle);
    padding: 0.2rem 0.55rem;
    border-radius: var(--radius-sm);
    color: var(--text-muted);
  }
</style>
