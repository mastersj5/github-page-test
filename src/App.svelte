<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import ReactivityLab from './components/ReactivityLab.svelte';
  import ProjectShowcase from './components/ProjectShowcase.svelte';
  import DeploymentModal from './components/DeploymentModal.svelte';
  import Footer from './components/Footer.svelte';

  // Svelte 5 state rune for modal
  let isGuideOpen = $state(false);

  function openGuide() {
    isGuideOpen = true;
  }

  function closeGuide() {
    isGuideOpen = false;
  }
</script>

<div class="app-layout">
  <Navbar onOpenGuide={openGuide} />

  <main>
    <Hero onOpenGuide={openGuide} />
    <ReactivityLab />
    <ProjectShowcase />
  </main>

  <Footer />

  <DeploymentModal isOpen={isGuideOpen} onClose={closeGuide} />
</div>

<style>
  .app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  main {
    flex: 1;
  }
</style>
