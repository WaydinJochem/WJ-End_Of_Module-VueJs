<template>
    <NavAll />
    <div>
        <div v-if="projects">
            <div v-for="projects in projects" :key="projects.id" :projects="projects">
            </div>
        </div>
        <div v-else class="text-center">Waiting To show</div>
    </div>
</template>
<script>
import NavAll from '@/components/NavBar/NavBarAll.vue';
export default {
    components: {
        NavAll
    }
}
</script>
<style ></style>