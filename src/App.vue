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
  padding-top: 2rem;
  @media (min-width: 768px) {
    margin-left: var(--nav-width);
    margin-top: 0;
    height: 100vh;
  }
}

.content {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
} 
</style>
