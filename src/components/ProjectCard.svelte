<script lang="ts">
    import { ExternalLink, Layers, ArrowUpRight } from '@lucide/svelte';
    import GithubIcon from './GithubIcon.svelte';

    export interface Project {
        id: string;
        title: string;
        category: ('active' | 'web' | 'systems' | 'fun')[];
        description: string;
        status: string;
        tech: string[];
        repoUrl?: string;
        liveUrl?: string;
        accent?: 'blue' | 'maroon';
    }

    let { project }: { project: Project } = $props();
</script>

<article class="project-card border-{project.accent ?? 'blue'}">
    <div class="card-header">
        <div class="badge-group">
            <span class="status-pill status-{project.status.toLowerCase().replace(/\s+/g, '-')}">
                {project.status}
            </span>
        </div>
        <div class="card-links">
            {#if project.repoUrl}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
                    <GithubIcon size={18} />
                </a>
            {/if}
            {#if project.liveUrl}
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                    <ArrowUpRight size={18} />
                </a>
            {/if}
        </div>
    </div>

    <h3 class="card-title">{project.title}</h3>
    <p class="card-description">{project.description}</p>

    <div class="tech-tags">
        {#each project.tech as techTag}
            <span class="tech-pill">{techTag}</span>
        {/each}
    </div>
</article>

<style>
    .project-card {
        background: rgba(15, 23, 42, 0.65);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        transition: transform 0.2s ease, border-color 0.2s ease;
    }
    
    .project-card:hover {
        transform: translateY(-4px);
    }

    .border-blue:hover {
        border-color: #008cdb;
        box-shadow: 0 8px 24px -6px rgba(0, 140, 219, 0.25);
    }

    .border-maroon:hover {
        border-color: #be123c;
        box-shadow: 0 8px 24px -6px rgba(190, 18, 60, 0.25);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-links {
        display: flex;
        gap: 0.75rem;
    }

    .card-links a {
        color: #94a3b8;
        transition: color 0.2s;
    }

    .card-links a:hover {
        color: #ffffff;
    }

    .status-pill {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.25rem 0.6rem;
        border-radius: 9999px;
        background: rgba(255, 255, 255, 0.06);
        color: #e2e8f0;
    }

    .card-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #f8fafc;
        margin: 0;
    }

    .card-description {
        font-size: 0.925rem;
        line-height: 1.6;
        color: #94a3b8;
        flex-grow: 1;
        margin: 0;
    }

    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto;
    }

    .tech-pill {
        font-size: 0.75rem;
        font-family: monospace;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: #cbd5e1;
        padding: 0.2rem 0.5rem;
        border-radius: 6px;
    }
</style>