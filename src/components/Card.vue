<template>
    <div v-if="project">
        <div v-for="projects in projects" :key="projects.id" :projects="projects">
        </div>
    </div>
    <div v-else class="text-center">Waiting To show</div>
</template>
<script>
export default {

}
</script>
<style></style>