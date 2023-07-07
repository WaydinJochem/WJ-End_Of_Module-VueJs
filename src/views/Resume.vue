<template>
    <NavAll />
    <div>
        <div v-if="resume">
            <div v-for="resume in resume" :key="resume.id" :resume="resume">
            </div>
            <div>
                <iframe :src="resume.link"></iframe>
            </div>
        </div>
        <div v-else class="text-center">Waiting To show</div>
    </div>
</template>
    Download CV
<script>
import NavAll from '@/components/NavBar/NavBarAll.vue';
export default {
    computed: {
        resume() {
            return this.$store.state.resume
        }
    },
    mounted() {
        this.$store.dispatch("fetchResume");
    },
    components: {
        NavAll
    }
}
</script>
<style ></style>