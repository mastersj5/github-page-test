<script lang="ts">
  import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight } from '@lucide/svelte';
  import GithubIcon from './GithubIcon.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { projects, type Project, type Category } from '../data/projects';
  import { slide } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';

  let selectedCategory = $state<Category>('all');
  let selectedTag = $state<string | null>(null);

  let filteredProjects = $derived(
    projects.filter(p => {
      const matchesCategory =
    selectedCategory === 'all' ||
    p.category.includes(selectedCategory as any)
      const matchesTag = !selectedTag ||
    p.tech.includes(selectedTag);
      return matchesCategory && matchesTag;
    })
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
    <!-- Categories: 'all' | 'active' | 'academic' | 'systems' | 'web' | 'ai' | 'games' | 'ideas'; -->
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
        Web &amp; Apps
      </button>
      <button 
        class="filter-btn {selectedCategory === 'systems' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'systems'}
      >
        Systems &amp; Rust
      </button>
      <button 
        class="filter-btn {selectedCategory === 'ai' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'ai'}
      >
        AI &amp; ML
      </button>
      <button 
        class="filter-btn {selectedCategory === 'games' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'games'}
      >
        Games &amp; Canvas
      </button>
      <button 
        class="filter-btn {selectedCategory === 'ideas' ? 'active-filter' : ''}" 
        onclick={() => selectedCategory = 'ideas'}
      >
        Ideas
      </button>
    </div>

    {#if selectedTag}
      <div class="tag-filter-indicator" transition:slide={{ duration: 200 }}>
        <span>Filtered by tech: <strong>{selectedTag}</strong></span>
        <button type="button" class="clear-tag-btn" onclick={() => selectedTag = null}>
          Clear &times;
        </button>
      </div>
    {/if}

    <!-- Projects Grid -->
    <div class="projects-grid">
      {#each filteredProjects as project (project.id)}
        <div class="card-flip-wrapper" animate:flip={{ duration: 300, easing: cubicOut }}>
          <ProjectCard 
            {project}
            ontagclick={(tag) => {
              // Toggle: clicking the same tag clears it; clicking a new tag selects it
              selectedTag = selectedTag == tag ? null : tag;
            }}
            />
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

  .tag-filter-indicator {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 8px;
    color: #38bdf8;
    font-size: 0.875rem;
  }

  .clear-tag-btn {
    background: transparent;
    border: none;
    color: #f8fafc;
    cursor: pointer;
    font-size: 1rem;
    padding: 0 0.25rem;
    transition: opacity 0.2s;
  }

  .clear-tag-btn:hover {
    opacity: 0.7;
  }

  .card-flip-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

</style>
