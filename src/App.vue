<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuImg from '@/assets/svgs/MenuImg.vue'
</script>

<template>
  <header>

      <nav>
        <MenuImg/>
        <div class="main-nav-list">
          <RouterLink :to="{name: 'bar'}">Bars</RouterLink>
          <RouterLink :to="{name: 'line'}">Lines</RouterLink>
          <RouterLink :to="{name: 'chart'}">Pie</RouterLink>
        </div>
        
      </nav>
  </header>
  <div class="main">
    <RouterView />
  </div>
 
</template>

<style scoped>

nav {
  display: flex;
  position:fixed;
  top: 0;
  background-color: var(--color-background-soft);
  box-shadow: 0px 0px 15px var(--color-shadow);

  /** Mobile Only styling */
  @media (max-width: 767px) {
    padding: 1rem;
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
  color: var(--ks-white);
  text-decoration: none;
  position: relative;

  &::hover {

  }
}

nav a.router-link-active {
  font-weight: bold;
  background: var(--color-background)
}


/** Mobile Only styling for menu */

@media (max-width: 767px) {
  .main-nav-list{
    height:0;
    margin-bottom: 2rem;
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
      margin-bottom: 8px;
      transition-property: opacity;
      opacity: 0;
      transition-duration: .15s;
  }
}

/** Hover State */

/* Brackets go out */
/* nav a:before, nav a:after
{
    position: absolute;
    opacity: 0;
    font-size: 35px;
    top: 0px;
    transition: all 0.3s;
}

nav a:before
{
    content: '(';
    left: 0px;
    transform: translateX(10px);
}
nav a:after
{
    content: ')';
    right: 0px;
    transform: translateX(-10px);
}

nav a:hover:before, nav a:hover:after
{
    opacity: 1;
    transform: translateX(0px);
}
 */



.main {
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-left: var(--nav-width);
    margin-top: 0;
  }
}
</style>
