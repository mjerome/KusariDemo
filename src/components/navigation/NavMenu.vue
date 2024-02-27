<script setup>
import { RouterLink} from 'vue-router'
import MenuImg from './MenuImg.vue'
</script>
<template>
    <nav>
        <MenuImg/>
        <div class="main-nav-list">
            <RouterLink :to="{name: 'home'}">Home</RouterLink>
            <RouterLink :to="{name: 'bar'}">Bars</RouterLink>
            <RouterLink :to="{name: 'line'}">Lines</RouterLink>
            <RouterLink :to="{name: 'chart'}">Pie</RouterLink>
        </div>
        
      </nav>
</template>
<style>
nav {
  position:fixed;
  top: 0;
  background-color: var(--color-background-soft);
  box-shadow: 0px 0px 15px var(--color-shadow);
  z-index: 3;
  font-size: 1.25rem;

  /** Mobile Only styling */
  @media (max-width: 767px) {
    width: 100%;
  }
  /** desktop only styling */
  @media (min-width: 768px) {
    flex-direction: column;
    width: var(--nav-width);
    height: 100vh;
    
  }
}

nav a {
  display: block;
  padding: 1rem;
  text-align: center;
  color: var(--color-text);
  text-decoration: none;
  position: relative;
}

nav a:hover {
  background: var(--color-background)
}

nav a.router-link-active {
  font-weight: bold;
  background: var(--color-background)
}


/** Mobile Only styling for menu */

@media (max-width: 767px) {
  .main-nav-list{
    max-height:0;
    width: 100%;
    transition-property: transform;
    transform: scale(1,0);
    transform-origin: top;
    transition-duration: .25s;
    transition-timing-function: cubic-bezier(.6,.13,.32,1.46);  
  }

  .main-nav-list a{
      display: block;
      font-size: 1.5em;
      transition-property: opacity;
      opacity: 0;
      transition-duration: .15s;
  }
}



</style>