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
    background: linear-gradient(to bottom right, white, #7303c0, #333);
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
        background-position: 100% 100%;
    }

    100% {
        background-position: 0% 0%;
    }
}
.container-fluid:not(#Ss) {
  background-image: radial-gradient(purple, black);
    border-radius: 20px;
    /* margin: 5%; */
    padding: 1%;
    text-align: center;
    color: white;
}

</style>
