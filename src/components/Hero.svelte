<script lang="ts">
  import { Zap, ArrowRight, BookOpen, Sparkles, Flame, Terminal } from '@lucide/svelte';
  import confetti from 'canvas-confetti';

  interface Props {
    onOpenGuide: () => void;
  }

  let { onOpenGuide }: Props = $props();

  function triggerCelebration() {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#008cdb', '#38bdf8', '#be123c', '#9f1239', '#ffffff']
    });
  }
</script>

<section class="hero-section">
  <div class="container hero-container">
    <div class="hero-content">
      <div class="hero-pill-badge">
        <span class="pill-glow-maroon"></span>
        <Flame size={14} class="pill-icon" />
        <span class="pill-text">Svelte 5 Runes &amp; Modern Frontend Lab</span>
      </div>

      <h1 class="hero-title">
        Full-Throttle <span class="gradient-text-blue">Reactivity</span> &amp; 
        <span class="gradient-text-maroon">Modern Playground</span>
      </h1>

      <p class="hero-description">
        The experimental playground for <strong>Joshua Masters</strong>. Stepping out of the comfort zone with 
        <strong>Svelte 5 Runes</strong>, <strong>TypeScript</strong>, and zero-virtual-DOM performance—styled in 
        an aggressive <em>Mustang Grabber Blue</em> and <em>Deep Maroon</em> aesthetic. Built to test, polish, 
        and seamlessly promote to the primary portfolio.
      </p>

      <div class="hero-cta-group">
        <a href="#reactivity" class="btn btn-primary">
          <span>Explore Runes Lab</span>
          <ArrowRight size={18} />
        </a>

        <button onclick={onOpenGuide} class="btn btn-ghost">
          <BookOpen size={18} />
          <span>Migration Strategy</span>
        </button>

        <button onclick={triggerCelebration} class="btn btn-maroon" title="Celebrate new repository launch">
          <Sparkles size={16} />
          <span>Launch Sparks</span>
        </button>
      </div>

      <div class="toolchain-strip" id="toolchain">
        <div class="strip-label">
          <Terminal size={14} />
          <span>Active Dev Environment</span>
        </div>
        <div class="badge-row">
          <span class="badge badge-blue">Svelte 5.56 (Runes)</span>
          <span class="badge badge-blue">Vite 8</span>
          <span class="badge badge-blue">TypeScript 6</span>
          <span class="badge badge-maroon">Rust (Cargo 1.95)</span>
          <span class="badge badge-maroon">Go 1.26</span>
          <span class="badge badge-maroon">Python 3.12</span>
          <span class="badge">Node.js 22</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    padding: 5rem 0 3.5rem;
    overflow: hidden;
  }

  .hero-container {
    position: relative;
    z-index: 2;
  }

  .hero-content {
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-pill-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(159, 18, 57, 0.15);
    border: 1px solid rgba(225, 29, 72, 0.35);
    padding: 0.35rem 0.9rem;
    border-radius: var(--radius-full);
    margin-bottom: 1.5rem;
    box-shadow: 0 0 20px rgba(159, 18, 57, 0.2);
    position: relative;
  }

  .pill-glow-maroon {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #e11d48;
    box-shadow: 0 0 8px #e11d48;
  }

  .pill-text {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 600;
    color: #fda4af;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .hero-title {
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.03em;
    margin-bottom: 1.4rem;
    color: var(--text-main);
  }

  .hero-description {
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--text-muted);
    max-width: 720px;
    margin-bottom: 2.2rem;
  }

  .hero-description strong {
    color: var(--text-main);
  }

  .hero-description em {
    color: var(--grabber-blue-light);
    font-style: normal;
    font-weight: 600;
  }

  .hero-cta-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3.5rem;
  }

  .toolchain-strip {
    background: rgba(14, 19, 29, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: 1.1rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    max-width: 780px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  }

  .strip-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-faint);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .badge-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 640px) {
    .hero-cta-group {
      flex-direction: column;
      width: 100%;
    }
    .hero-cta-group .btn {
      width: 100%;
    }
  }
</style>
