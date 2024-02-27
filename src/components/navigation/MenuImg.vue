<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
    <button aria-label="Menu" class="masthead" @click="toggleMenu" :data-open="isMenuOpen">
        <div class="burger">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
        </div>
    </button>
</template>
<style>

.masthead {
    border: none;
    background: transparent;
}
@media (min-width: 768px) {
    .masthead, input {
        display: none;
    }
}

@media (max-width: 767px) {
    .masthead {
        display: block;
        margin: 1rem;
    }

    .burger{
        cursor: pointer;
        display: block;
        width: 42px;
    }
    .burger div{
        background-color: var(--color-menu);
        border-radius: 25px;
        box-shadow: 1px .4px 4px rgba(0,0,0,.4);
        height: 5px;
        transition-duration: .25s;
        transition-timing-function: cubic-bezier(.6,.13,.32,1.46);
    }

    .burger .one,
    .burger .two{
        margin-bottom: 5px;
    }

    .masthead[data-open='true'] .burger .one{
        box-shadow: 1px .4px 4px rgba(0,0,0,.25);
        transform-origin: left;
        transform: translate(15%, -7px) rotate(45deg);
    }

    .masthead[data-open='true'] .burger .two{
        background-color: transparent;
        box-shadow: none;
    }

    .masthead[data-open='true'] .burger .three{
        box-shadow: 1px .4px 4px rgba(0,0,0,.25);
        transform-origin: left;
        transform: translate(14%, 2px) rotate(-45deg); 
    }

    .masthead[data-open='true'] ~.main-nav-list{
        max-height: 100vh;
        transform:scale(1,1);
    }


    .masthead[data-open='true'] ~ .main-nav-list a{
        transition-property: opacity;
        opacity: 1;
        transition-delay: .2s;
        transition-duration: .1s;
    }
}

</style>
