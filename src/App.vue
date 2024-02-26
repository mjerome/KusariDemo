<script setup>
import { RouterView } from 'vue-router'
import NavMenu from '@/components/navigation/NavMenu.vue'

// TODO:
// ADD Dark Mode/Light Mode
// Accessibility - Replace Input with Button, check Accessibility of vue charts. 
// Clean up CSS
</script>

<template>
  <header>
    <NavMenu/>
  </header>
  <div class="main">
    <div class="content">
      <RouterView />
    </div>
  </div>
 
</template>

<style scoped>
.main {
  margin-top: 4rem;
  padding-top: 2rem;
  padding-inline: 1rem;
  @media (min-width: 768px) {
    margin-left: var(--nav-width);
    margin-top: 0;
    height: 100vh;
  }
}

.content {
  margin: auto;
  display: flex;
  text-align: center;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (min-width: 768px) {
    gap: 6rem;
  }
} 
</style>
