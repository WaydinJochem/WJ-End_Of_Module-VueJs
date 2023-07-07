<template>
    <NavAll />
    <div>
        <div v-if="projects">
            <div v-for="projects in projects" :key="projects.id" :projects="projects">
            </div>
        </div>
        <div v-else class="text-center">Waiting To show</div>
    </div>
    <button>
        <a class="display-6" href="https://drive.google.com/uc?export=download&id=your_CV_ID_FROM_Google_Drive"
            target="_blank">
        </a>
    </button>
</template>
    Download CV
<script>
import NavAll from '@/components/NavBar/NavBarAll.vue';
export default {
    components: {
        NavAll
    }
}
</script>
<style ></style>