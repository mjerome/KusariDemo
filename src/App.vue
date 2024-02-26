<script setup>
import { RouterView } from 'vue-router'
import NavMenu from '@/components/navigation/NavMenu.vue'
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

  @media (min-width: 768px) {
    margin-left: var(--nav-width);
    margin-top: 0;
  }
}

.content {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
} 
</style>
