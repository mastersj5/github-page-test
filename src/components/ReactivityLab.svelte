<script lang="ts">
  import { untrack } from 'svelte';
  import { Zap, Activity, Cpu, RotateCcw, Plus, Minus, Sparkles, Code, Check } from '@lucide/svelte';

  // Svelte 5 Runes in action!
  let count = $state(42);
  let step = $state(1);
  let updateCount = $state(0);
  let activeTab = $state<'demo' | 'code' | 'nodes'>('demo');

  // Derived state updates automatically with 0 manual dependency arrays
  let doubled = $derived(count * 2);
  let squared = $derived(count * count);
  let binary = $derived(count.toString(2));
  let isPrime = $derived(checkPrime(count));
  let energyLevel = $derived(Math.min(100, Math.max(5, Math.abs(count % 100))));

  // Track state changes via $effect
  $effect(() => {
    // Read count to subscribe to changes
    const _ = count;
    untrack(() => {
      updateCount++;
    });
  });

  function checkPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  function increment() {
    count += step;
  }

  function decrement() {
    count -= step;
  }

  function reset() {
    count = 42;
    updateCount = 0;
  }

  function randomize() {
    count = Math.floor(Math.random() * 99) + 1;
  }

  // Reactive Grid Nodes
  let nodeCount = $state(48);
  let pulseSpeed = $state(1);
</script>

<section class="reactivity-section" id="reactivity">
  <div class="container">
    <div class="section-header">
      <div class="badge badge-blue">
        <Zap size={14} />
        <span>Fine-Grained Reactivity</span>
      </div>
      <h2 class="section-title">
        The Svelte 5 <span class="gradient-text-blue">Runes</span> Lab
      </h2>
      <p class="section-subtitle">
        Unlike React or legacy virtual-DOM libraries, Svelte 5 uses compiler-driven reactive primitives (signals). 
        No diffing overhead, no dependency arrays, just raw JavaScript speed.
      </p>
    </div>

    <!-- Navigation Tabs -->
    <div class="tab-controls">
      <button 
        class="tab-btn {activeTab === 'demo' ? 'active-blue' : ''}" 
        onclick={() => activeTab = 'demo'}
      >
        <Activity size={16} />
        <span>Interactive Sandbox</span>
      </button>
      <button 
        class="tab-btn {activeTab === 'nodes' ? 'active-maroon' : ''}" 
        onclick={() => activeTab = 'nodes'}
      >
        <Cpu size={16} />
        <span>Reactive Matrix</span>
      </button>
      <button 
        class="tab-btn {activeTab === 'code' ? 'active-blue' : ''}" 
        onclick={() => activeTab = 'code'}
      >
        <Code size={16} />
        <span>Svelte 5 vs React Code</span>
      </button>
    </div>

    {#if activeTab === 'demo'}
      <div class="lab-grid">
        <!-- Interactive Controller -->
        <div class="glass-panel lab-card border-glow-blue">
          <div class="card-head">
            <span class="card-badge">STATE CONTROLLER</span>
            <span class="update-counter">Updates: <strong>{updateCount}</strong></span>
          </div>

          <div class="counter-display">
            <span class="counter-value gradient-text-blue">{count}</span>
            <span class="counter-sub">Current Value ($state)</span>
          </div>

          <!-- Progress Bar -->
          <div class="energy-bar-container">
            <div class="energy-bar-label">
              <span>Dynamic Signal Pulse</span>
              <span>{energyLevel}%</span>
            </div>
            <div class="energy-track">
              <div 
                class="energy-fill" 
                style="width: {energyLevel}%;"
              ></div>
            </div>
          </div>

          <div class="control-actions">
            <button class="btn btn-ghost ctrl-btn" onclick={decrement} aria-label="Decrement">
              <Minus size={18} />
            </button>
            <button class="btn btn-primary ctrl-btn main-ctrl" onclick={increment} aria-label="Increment">
              <Plus size={18} />
              <span>Add {step}</span>
            </button>
            <button class="btn btn-ghost ctrl-btn" onclick={randomize} title="Random number">
              <Sparkles size={16} />
            </button>
            <button class="btn btn-ghost ctrl-btn" onclick={reset} title="Reset to 42">
              <RotateCcw size={16} />
            </button>
          </div>

          <div class="step-slider-box">
            <label for="step-slider">Step Size: <strong>{step}</strong></label>
            <input 
              id="step-slider" 
              type="range" 
              min="1" 
              max="25" 
              bind:value={step} 
              class="range-slider" 
            />
          </div>
        </div>

        <!-- Derived Computations -->
        <div class="glass-panel lab-card border-glow-maroon">
          <div class="card-head">
            <span class="card-badge maroon-badge">DERIVED RUNES</span>
            <span class="compiler-badge">$derived(...)</span>
          </div>

          <div class="derived-stats-grid">
            <div class="stat-box">
              <span class="stat-label">Doubled (x2)</span>
              <span class="stat-val gradient-text-maroon">{doubled}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">Squared (x²)</span>
              <span class="stat-val">{squared}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">Binary Value</span>
              <span class="stat-val mono-val">{binary}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">Prime Number?</span>
              <span class="stat-val {isPrime ? 'text-green' : 'text-gray'}">
                {isPrime ? 'PRIME ✓' : 'COMPOSITE'}
              </span>
            </div>
          </div>

          <div class="maroon-callout">
            <div class="callout-header">
              <Zap size={15} class="callout-icon" />
              <span>Zero Re-render Waste</span>
            </div>
            <p class="callout-text">
              In Svelte 5, updating <code>count</code> only re-evaluates the exact DOM nodes bound to <code>doubled</code>, <code>squared</code>, or <code>binary</code>. The entire component tree is <em>not</em> re-executed.
            </p>
          </div>
        </div>
      </div>
    {:else if activeTab === 'nodes'}
      <div class="glass-panel matrix-card">
        <div class="matrix-header">
          <div>
            <h3 class="matrix-title">Reactive Signal Mesh ({nodeCount} Nodes)</h3>
            <p class="matrix-desc">Each node reactively recalculates its transform, opacity, and color in real time as the primary state changes.</p>
          </div>
          <div class="matrix-controls">
            <button class="btn btn-ghost btn-sm" onclick={() => nodeCount = Math.max(12, nodeCount - 12)}>Less</button>
            <button class="btn btn-primary btn-sm" onclick={() => nodeCount = Math.min(96, nodeCount + 12)}>More</button>
            <button class="btn btn-maroon btn-sm" onclick={() => count += 5}>Pulse All</button>
          </div>
        </div>

        <div class="nodes-grid">
          {#each Array(nodeCount) as _, idx}
            {@const nodeVal = (count + idx * 7) % 100}
            {@const isHighlight = (idx + count) % 6 === 0}
            <div 
              class="reactive-node {isHighlight ? 'node-active' : ''}"
              style="--node-hue: {isHighlight ? '340' : '205'};"
              title="Node #{idx + 1}"
            >
              <span class="node-idx">{idx + 1}</span>
              <span class="node-val">{nodeVal}</span>
            </div>
          {/each}
        </div>
      </div>
    {:else if activeTab === 'code'}
      <div class="glass-panel code-comparison-card">
        <div class="comparison-grid">
          <div class="code-column">
            <div class="column-header">
              <span class="header-badge svelte-badge">SVELTE 5 (RUNES)</span>
              <span class="header-sub">Clean, native JavaScript signals</span>
            </div>
            <pre class="code-block"><code><span class="c-kw">let</span> count = <span class="c-fn">$state</span>(<span class="c-num">0</span>);
<span class="c-kw">let</span> doubled = <span class="c-fn">$derived</span>(count * <span class="c-num">2</span>);

<span class="c-fn">$effect</span>(() =&gt; &#123;
  console.log(<span class="c-str">`Count changed: $&#123;count&#125;`</span>);
&#125;);

<span class="c-comment">// Mutate naturally without setter functions!</span>
<span class="c-kw">function</span> <span class="c-fn">increment</span>() &#123;
  count++;
&#125;</code></pre>
          </div>

          <div class="code-column">
            <div class="column-header">
              <span class="header-badge react-badge">REACT (HOOKS &amp; VDOM)</span>
              <span class="header-sub">Boilerplate &amp; dependency arrays</span>
            </div>
            <pre class="code-block"><code><span class="c-kw">const</span> [count, setCount] = <span class="c-fn">useState</span>(<span class="c-num">0</span>);

<span class="c-kw">const</span> doubled = <span class="c-fn">useMemo</span>(() =&gt; &#123;
  <span class="c-kw">return</span> count * <span class="c-num">2</span>;
&#125;, [count]); <span class="c-comment">// Must specify deps!</span>

<span class="c-fn">useEffect</span>(() =&gt; &#123;
  console.log(<span class="c-str">`Count changed: $&#123;count&#125;`</span>);
&#125;, [count]); <span class="c-comment">// Re-renders entire component</span></code></pre>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .reactivity-section {
    padding: 4rem 0;
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

  .tab-controls {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(14, 19, 29, 0.6);
    border: 1px solid var(--border-subtle);
    color: var(--text-muted);
    font-family: var(--font-heading);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: var(--transition);
  }

  .tab-btn:hover {
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.05);
  }

  .tab-btn.active-blue {
    background: rgba(0, 140, 219, 0.15);
    border-color: var(--grabber-blue-light);
    color: #38bdf8;
    box-shadow: 0 0 15px rgba(0, 140, 219, 0.25);
  }

  .tab-btn.active-maroon {
    background: rgba(159, 18, 57, 0.2);
    border-color: #fb7185;
    color: #fda4af;
    box-shadow: 0 0 15px rgba(159, 18, 57, 0.3);
  }

  .lab-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .lab-card {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .card-badge {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #38bdf8;
  }

  .maroon-badge {
    color: #fb7185;
  }

  .update-counter, .compiler-badge {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-faint);
  }

  .update-counter strong {
    color: #38bdf8;
  }

  .counter-display {
    text-align: center;
    margin-bottom: 1.8rem;
  }

  .counter-value {
    font-family: var(--font-heading);
    font-size: 5rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
    display: block;
  }

  .counter-sub {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--text-faint);
    margin-top: 0.4rem;
    display: block;
  }

  .energy-bar-container {
    margin-bottom: 1.8rem;
  }

  .energy-bar-label {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
  }

  .energy-track {
    height: 8px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-full);
    overflow: hidden;
  }

  .energy-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--grabber-blue) 0%, var(--maroon-vivid) 100%);
    border-radius: var(--radius-full);
    transition: width 0.2s ease-out;
  }

  .control-actions {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
  }

  .ctrl-btn {
    padding: 0.75rem 0.5rem;
  }

  .main-ctrl {
    font-weight: 700;
  }

  .step-slider-box {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .range-slider {
    accent-color: var(--grabber-blue);
    cursor: pointer;
  }

  /* Derived Stats */
  .derived-stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .stat-box {
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .stat-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-faint);
  }

  .stat-val {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-main);
  }

  .mono-val {
    font-family: var(--font-mono);
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    color: #38bdf8;
  }

  .text-green {
    color: #10b981;
    font-size: 1.1rem;
  }

  .text-gray {
    color: var(--text-faint);
    font-size: 1.1rem;
  }

  .maroon-callout {
    background: rgba(159, 18, 57, 0.12);
    border: 1px solid rgba(225, 29, 72, 0.25);
    border-radius: var(--radius-md);
    padding: 1.2rem;
  }

  .callout-header {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #fb7185;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }

  .callout-text {
    font-size: 0.88rem;
    color: #f1f5f9;
    line-height: 1.5;
  }

  .callout-text code {
    background: rgba(0, 0, 0, 0.3);
    color: #38bdf8;
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.85em;
  }

  /* Matrix Layout */
  .matrix-card {
    padding: 2rem;
  }

  .matrix-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .matrix-title {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }

  .matrix-desc {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .matrix-controls {
    display: flex;
    gap: 0.5rem;
  }

  .btn-sm {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  .nodes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));
    gap: 0.6rem;
  }

  .reactive-node {
    background: rgba(14, 21, 33, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: var(--radius-sm);
    padding: 0.6rem 0.4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    transition: all 0.2s ease;
  }

  .node-active {
    background: rgba(225, 29, 72, 0.25);
    border-color: #f43f5e;
    box-shadow: 0 0 12px rgba(225, 29, 72, 0.4);
    transform: scale(1.05);
  }

  .node-idx {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-faint);
  }

  .node-val {
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 0.95rem;
    color: #38bdf8;
  }

  .node-active .node-val {
    color: #fda4af;
  }

  /* Code Comparison */
  .code-comparison-card {
    padding: 1.5rem;
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .code-column {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .column-header {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .header-badge {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    padding: 0.2rem 0.6rem;
    border-radius: var(--radius-sm);
    width: fit-content;
  }

  .svelte-badge {
    background: rgba(0, 140, 219, 0.2);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.4);
  }

  .react-badge {
    background: rgba(159, 18, 57, 0.2);
    color: #fda4af;
    border: 1px solid rgba(225, 29, 72, 0.4);
  }

  .header-sub {
    font-size: 0.8rem;
    color: var(--text-faint);
  }

  .code-block {
    background: #06080d;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 1.2rem;
    font-family: var(--font-mono);
    font-size: 0.88rem;
    line-height: 1.6;
    overflow-x: auto;
  }

  .c-kw { color: #f43f5e; font-weight: 600; }
  .c-fn { color: #38bdf8; }
  .c-num { color: #f59e0b; }
  .c-str { color: #10b981; }
  .c-comment { color: #64748b; font-style: italic; }

  @media (max-width: 860px) {
    .lab-grid {
      grid-template-columns: 1fr;
    }
    .comparison-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
