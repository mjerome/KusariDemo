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
    
    <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M5,21.875c0-4.661,3.777-8.438,8.438-8.438h73.125c4.661,0,8.438,3.777,8.438,8.438  s-3.777,8.438-8.438,8.438H13.438C8.777,30.312,5,26.536,5,21.875z M86.562,41.562H13.438C8.777,41.562,5,45.339,5,50  s3.777,8.438,8.438,8.438h73.125C91.223,58.438,95,54.661,95,50S91.223,41.562,86.562,41.562z M86.562,69.688H13.438  C8.777,69.688,5,73.464,5,78.125s3.777,8.438,8.438,8.438h73.125c4.661,0,8.438-3.777,8.438-8.438S91.223,69.688,86.562,69.688z"/></svg> -->
</template>
<style>

@media (min-width: 768px) {
    .masthead, input {
        display: none;
    }
}

@media (max-width: 767px) {
    .masthead {
        display: block
    }

    .burger{
        cursor: pointer;
        display: block;
        width: 55px;
    }
    .burger div{
        background-color: #ccc;
        border-radius: 25px;
        box-shadow: 1px .4px 10px rgba(0,0,0,.4);
        height: 8px;
        transition-duration: .25s;
        transition-timing-function: cubic-bezier(.6,.13,.32,1.46);
    }

    .burger .one,
    .burger .two{
        margin-bottom: 8px;
    }
    svg {
        width:2.5rem;
    }
    svg path{
        fill: var(--ks-white)
    }
    .menu-toggle{
        display: none;
    }


    #input__menu-toggle:checked ~ .masthead .burger .one{
        box-shadow: 1px .4px 10px rgba(0,0,0,.25);
        transform-origin: left;
        transform: translate(15%, -5px) rotate(45deg);
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
    /*      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.14); */
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
