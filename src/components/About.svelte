<script lang="ts">
  import { GraduationCap, Code2, Cpu, Sparkles, Terminal, FileText } from '@lucide/svelte';
  import { fade } from 'svelte/transition';
  type SkillCategory = 'languages' | 'frameworks' | 'systems';
  let activeTab = $state<SkillCategory>('languages');
  interface Skill {
    name: string;
    tag: string;
    highlight?: boolean;
  }

  // skills

</script>