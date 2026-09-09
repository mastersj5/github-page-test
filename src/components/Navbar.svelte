<script lang="ts">
  import { Terminal, ExternalLink, Zap, BookOpen } from '@lucide/svelte';
  import GithubIcon from './GithubIcon.svelte';

  interface Props {
    onOpenGuide: () => void;
  }

  let { onOpenGuide }: Props = $props();
</script>

<header class="navbar-wrapper">
  <div class="container navbar-inner">
    <a href="#" class="brand-link">
      <div class="brand-icon">
        <Zap size={18} class="icon-zap" />
      </div>
      <div class="brand-text">
        <span class="brand-name">mastersj5</span>
        <span class="brand-tag">playground</span>
      </div>
    </a>

    <nav class="nav-links">
      <a href="#reactivity" class="nav-item">Runes Lab</a>
      <a href="#projects" class="nav-item">Playground Projects</a>
      <a href="#toolchain" class="nav-item">Toolchain</a>
      <button onclick={onOpenGuide} class="nav-item nav-button">
        <BookOpen size={15} />
        <span>Migration Plan</span>
      </button>
    </nav>

    <div class="nav-actions">
      <div class="repo-badge">
        <span class="status-dot"></span>
        <span class="branch-text">github-page-test:main</span>
      </div>
      <a 
        href="https://github.com/mastersj5/github-page-test" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn-ghost github-btn"
        aria-label="GitHub Repository"
      >
        <GithubIcon size={18} />
      </a>
    </div>
  </div>
</header>

<style>
  .navbar-wrapper {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(7, 9, 14, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border-subtle);
    padding: 0.85rem 0;
    transition: var(--transition);
  }

  .navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .brand-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
  }

  .brand-icon {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    background: linear-gradient(135deg, var(--grabber-blue) 0%, var(--maroon) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 0 16px var(--grabber-glow);
    transition: var(--transition);
  }

  .brand-link:hover .brand-icon {
    transform: rotate(6deg) scale(1.05);
    box-shadow: 0 0 22px var(--grabber-blue);
  }

  .brand-text {
    display: flex;
    flex-direction: column;
  }

  .brand-name {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.15rem;
    color: var(--text-main);
    letter-spacing: -0.02em;
  }

  .brand-tag {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--grabber-blue-light);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: -3px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-item {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    transition: var(--transition);
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.6rem;
    border-radius: var(--radius-sm);
  }

  .nav-item:hover {
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.05);
  }

  .nav-button {
    color: var(--grabber-blue-light);
    border: 1px solid rgba(56, 189, 248, 0.25);
    background: rgba(0, 140, 219, 0.08);
  }

  .nav-button:hover {
    background: rgba(0, 140, 219, 0.18);
    border-color: var(--grabber-blue);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .repo-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid var(--border-subtle);
    padding: 0.35rem 0.75rem;
    border-radius: var(--radius-full);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: pulse 2s infinite;
  }

  .github-btn {
    padding: 0.5rem;
    border-radius: var(--radius-md);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.9); }
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .repo-badge {
      display: none;
    }
  }
</style>
