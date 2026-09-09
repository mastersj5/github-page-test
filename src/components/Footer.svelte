<script lang="ts">
  import { Heart, Sparkles, Terminal } from '@lucide/svelte';
  import GithubIcon from './GithubIcon.svelte';
</script>

<footer class="footer-wrapper">
  <div class="container footer-inner">
    <div class="footer-left">
      <div class="footer-brand">
        <span class="gradient-text-blue">Joshua Masters</span>
        <span class="footer-dot">•</span>
        <span class="footer-tag">Reactive Dev Hub</span>
      </div>
      <p class="footer-caption">
        Engineered with Svelte 5, Runes, and TypeScript. Styled in Mustang Grabber Blue &amp; Deep Maroon.
      </p>
    </div>

    <div class="footer-right">
      <div class="footer-meta">
        <span class="meta-item">
          <Terminal size={13} />
          <span>Vite 8 SPA</span>
        </span>
        <span class="meta-item">
          <span>Target: mastersj5.github.io</span>
        </span>
      </div>

      <div class="footer-links">
        <a 
          href="https://github.com/mastersj5/github-page-test" 
          target="_blank" 
          rel="noopener noreferrer"
          class="footer-icon-link"
        >
          <GithubIcon size={18} />
          <span>Playground Repo</span>
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer-wrapper {
    background: #05070a;
    border-top: 1px solid var(--border-subtle);
    padding: 3rem 0;
    margin-top: 4rem;
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }

  .footer-dot {
    color: var(--text-faint);
  }

  .footer-tag {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--grabber-blue-light);
  }

  .footer-caption {
    font-size: 0.85rem;
    color: var(--text-faint);
    max-width: 480px;
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.8rem;
  }

  .footer-meta {
    display: flex;
    gap: 1rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-faint);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .footer-links {
    display: flex;
    gap: 1rem;
  }

  .footer-icon-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--text-muted);
    text-decoration: none;
    transition: var(--transition);
  }

  .footer-icon-link:hover {
    color: var(--grabber-blue-light);
  }

  @media (max-width: 640px) {
    .footer-right {
      align-items: flex-start;
    }
  }
</style>
