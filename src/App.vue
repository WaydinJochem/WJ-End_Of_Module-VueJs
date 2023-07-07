<template>
    <!-- Footer refusing to stay at the bottom come back and look into it -->
    <RouterView />
        <FooterComp />
</template>
<script>
import FooterComp from './components/Footer.vue';
export default {
    components: {
        FooterComp
    }
}
</script>
<style>

body {
    background: linear-gradient( white, purple, black);
    animation: spinning 12s ease infinite;
    background-size: 200% 200%;
    background-attachment: fixed;
    font-family: "Bruno Ace", cursive;
}

@keyframes spinning {
    0% {
        background-position: 0% 0%;
    }

    50% {
        background-position: 100% 100%;
    }

    100% {
        background-position: 0% 0%;
    }
}


</style>
