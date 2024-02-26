<script setup>
</script>
<template>
    <input type="checkbox" name="" id="input__menu-toggle" class="menu-toggle"/>
    <div class="masthead">
        <label aria-label='click to open menu' for="input__menu-toggle" class="label-for-menu">
            <div class="burger">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>
        </label>
    </div>
</template>
<style>

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
    .menu-toggle{
        display: none;
    }


    #input__menu-toggle:checked ~ .masthead .burger .one{
        box-shadow: 1px .4px 10px rgba(0,0,0,.25);
        transform-origin: left;
        transform: translate(15%, -7px) rotate(45deg);
    }

    #input__menu-toggle:checked ~ .masthead .burger .two{
        background-color: transparent;
        box-shadow: none;
    }

    #input__menu-toggle:checked ~ .masthead .burger .three{
        box-shadow: 1px .4px 10px rgba(0,0,0,.25);
        transform-origin: left;
        transform: translate(14%, 2px) rotate(-45deg); 
    }

    #input__menu-toggle:checked ~.main-nav-list{
        height: auto;
        transform:scale(1,1);
    }


    #input__menu-toggle:checked ~ .main-nav-list a{
        transition-property: opacity;
        opacity: 1;
        transition-delay: .2s;
        transition-duration: .1s;
    }
}

</style>
