<script lang="ts">
  import { X, Copy, Check, GitBranch, ShieldCheck, ArrowRight, Sparkles, Terminal } from '@lucide/svelte';

  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }

  let { isOpen, onClose }: Props = $props();

  let copiedIndex = $state<number | null>(null);

  function copyCode(text: string, index: number) {
    navigator.clipboard.writeText(text);
    copiedIndex = index;
    setTimeout(() => {
      if (copiedIndex === index) copiedIndex = null;
    }, 2000);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  const swapCommand1 = '# 1. In GitHub Settings of mastersj5.github.io -> Rename to mastersj5.github.io-backup';
  const swapCommand2 = '# 2. In GitHub Settings of github-page-test -> Rename to mastersj5.github.io';
  const pushCommand = 'git remote add production https://github.com/mastersj5/mastersj5.github.io.git\ngit push production main --force';
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
  <!-- Backdrop -->
  <div 
    class="modal-backdrop" 
    onclick={onClose} 
    onkeydown={(e) => e.key === 'Escape' && onClose()}
    role="button"
    tabindex="0"
    aria-label="Close dialog overlay"
  >
    <div 
      class="modal-dialog glass-panel" 
      onclick={(e) => e.stopPropagation()} 
      onkeydown={(e) => e.stopPropagation()}
      role="dialog" 
      tabindex="-1"
      aria-modal="true"
    >
      <div class="modal-header">
        <div class="header-left">
          <div class="badge badge-maroon">
            <GitBranch size={13} />
            <span>MIGRATION ARCHITECTURE</span>
          </div>
          <h2 class="modal-title">Repo Transfer &amp; Portfolio Roadmap</h2>
        </div>
        <button class="close-btn" onclick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
      </div>

      <div class="modal-body">
        <!-- Safety Alert Banner -->
        <div class="safety-banner">
          <div class="banner-icon-box">
            <ShieldCheck size={20} class="banner-shield" />
          </div>
          <div class="banner-text">
            <strong>Stay in Playground Mode as Long as You Need:</strong>
            <p>
              Your changes in <code>github-page-test</code> are 100% isolated. Nothing in your current 
              <code>mastersj5.github.io</code> site will be touched until you deliberately initiate the swap.
            </p>
          </div>
        </div>

        <!-- 3 Step Roadmap -->
        <div class="roadmap-grid">
          <div class="roadmap-card card-active">
            <span class="step-num">01</span>
            <h4>Phase 1: Playground</h4>
            <p>Iterate, add components, test new frameworks, and experiment with Runes in this repo.</p>
            <span class="step-tag status-now">Current Stage</span>
          </div>

          <div class="roadmap-card">
            <span class="step-num">02</span>
            <h4>Phase 2: Live Preview</h4>
            <p>GitHub Actions automatically builds and deploys to <code>/github-page-test/</code>.</p>
            <span class="step-tag">Automated via CI</span>
          </div>

          <div class="roadmap-card card-target">
            <span class="step-num">03</span>
            <h4>Phase 3: The Swap</h4>
            <p>When you're ready, execute Strategy C (Repo Rename) to promote it to root domain.</p>
            <span class="step-tag status-target">Future Milestone</span>
          </div>
        </div>

        <!-- Strategy C Details -->
        <div class="strategy-box">
          <div class="strategy-title-row">
            <h3 class="strategy-title">Strategy C: The Clean Swap (Recommended)</h3>
            <span class="strategy-badge">Zero Git Conflict</span>
          </div>
          <p class="strategy-desc">
            Because Vite is configured with relative assets (<code>base: './'</code>), the site works natively at both <code>mastersj5.github.io/github-page-test/</code> AND <code>mastersj5.github.io/</code> without changing a single line of code!
          </p>

          <div class="code-card">
            <div class="code-card-header">
              <span class="code-label">Step 1: Backup legacy site</span>
            </div>
            <pre><code>{swapCommand1}</code></pre>
          </div>

          <div class="code-card">
            <div class="code-card-header">
              <span class="code-label">Step 2: Rename playground to primary</span>
            </div>
            <pre><code>{swapCommand2}</code></pre>
          </div>
        </div>

        <!-- Alternative Strategy A -->
        <div class="strategy-box-alt">
          <div class="strategy-title-row">
            <h3 class="strategy-title">Alternative: Strategy A (Direct Git Push)</h3>
            <button class="copy-btn" onclick={() => copyCode(pushCommand, 1)}>
              {#if copiedIndex === 1}
                <Check size={14} class="text-green" />
                <span>Copied</span>
              {:else}
                <Copy size={14} />
                <span>Copy Commands</span>
              {/if}
            </button>
          </div>
          <p class="strategy-desc">
            Push this repo's branch directly to the <code>mastersj5.github.io</code> remote repository:
          </p>
          <pre class="code-terminal"><code>{pushCommand}</code></pre>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-ghost" onclick={onClose}>Close Roadmap</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(3, 5, 9, 0.85);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn 0.2s ease-out;
  }

  .modal-dialog {
    width: 100%;
    max-width: 780px;
    max-height: 90vh;
    overflow-y: auto;
    background: #0b0f17;
    border: 1px solid rgba(56, 189, 248, 0.25);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 140, 219, 0.15);
    padding: 2rem;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .modal-title {
    font-size: 1.6rem;
    margin-top: 0.4rem;
  }

  .close-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-subtle);
    color: var(--text-muted);
    border-radius: var(--radius-sm);
    padding: 0.4rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .close-btn:hover {
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.1);
  }

  .safety-banner {
    display: flex;
    gap: 0.9rem;
    background: rgba(0, 140, 219, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: var(--radius-md);
    padding: 1rem 1.2rem;
    margin-bottom: 1.8rem;
  }

  .banner-icon-box {
    color: #38bdf8;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .banner-text {
    font-size: 0.9rem;
    color: #e2e8f0;
    line-height: 1.5;
  }

  .banner-text code {
    background: rgba(0, 0, 0, 0.3);
    color: #38bdf8;
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    font-family: var(--font-mono);
  }

  .roadmap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .roadmap-card {
    background: rgba(14, 20, 31, 0.6);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.6rem;
  }

  .card-active {
    border-color: rgba(56, 189, 248, 0.4);
    background: rgba(0, 140, 219, 0.08);
  }

  .card-target {
    border-color: rgba(225, 29, 72, 0.4);
    background: rgba(159, 18, 57, 0.08);
  }

  .step-num {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-faint);
    font-weight: 700;
  }

  .roadmap-card h4 {
    font-size: 1.05rem;
  }

  .roadmap-card p {
    font-size: 0.82rem;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .step-tag {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-faint);
  }

  .status-now {
    color: #38bdf8;
    font-weight: 600;
  }

  .status-target {
    color: #fb7185;
    font-weight: 600;
  }

  .strategy-box {
    background: rgba(14, 20, 31, 0.7);
    border: 1px solid rgba(56, 189, 248, 0.25);
    border-radius: var(--radius-md);
    padding: 1.4rem;
    margin-bottom: 1.5rem;
  }

  .strategy-box-alt {
    background: rgba(14, 20, 31, 0.4);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 1.4rem;
  }

  .strategy-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
  }

  .strategy-title {
    font-size: 1.15rem;
  }

  .strategy-badge {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 0.2rem 0.55rem;
    border-radius: var(--radius-full);
  }

  .strategy-desc {
    font-size: 0.88rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .strategy-desc code {
    color: #38bdf8;
  }

  .code-card {
    background: #06090e;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-sm);
    padding: 0.8rem 1rem;
    margin-bottom: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #94a3b8;
  }

  .code-card-header {
    margin-bottom: 0.3rem;
  }

  .code-label {
    font-size: 0.75rem;
    color: var(--text-faint);
    text-transform: uppercase;
  }

  .copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-subtle);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    padding: 0.3rem 0.65rem;
    border-radius: var(--radius-sm);
    cursor: pointer;
  }

  .copy-btn:hover {
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.1);
  }

  .code-terminal {
    background: #06090e;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-sm);
    padding: 0.9rem 1.1rem;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #38bdf8;
    overflow-x: auto;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.8rem;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 720px) {
    .roadmap-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
