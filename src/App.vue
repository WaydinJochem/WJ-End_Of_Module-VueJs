<template>
    <RouterView/>
    <footer>
        <FooterComp/>
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

</style>
