<template>
    <RouterView />
    <footer>
        <FooterComp />
    </footer>
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
    background: linear-gradient(to right,white, purple, #333);
    animation: spinning 15s ease infinite;
    background-size: 200% 200%;
    background-attachment: fixed;
    font-family: "Bruno Ace", cursive;
}

@keyframes spinning {
    0% {
        background-position: 0% 0%;
    }

    50% {
        background-position: 100% 150%;
    }

    100% {
        background-position: 0% 0%;
    }
}
</style>
