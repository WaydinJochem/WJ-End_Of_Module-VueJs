<template>
    <div v-if="project">
        <div v-for="projects in projects" :key="projects.id" :projects="projects">
            <!-- Card Start -->
            <div class="container-fluid p-3">
                <h2 class="playball text-center">Projects</h2>
                <!-- Project Card 1 -->
                <div class="flip-card col-md-4 glow">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="./Assets/icons/icons8-1-64.png" alt="" class="cardpic">
                        </div>
                        <div class="flip-card-back align-middle">
                            <a class="btn btn-info" href="http://waydinbootstrap.netlify.app">Launch Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card End -->
        </div>
    </div>
    <div v-else class="text-center">Waiting To show</div>
</template>
<script>
export default {

}
</script>
<style></style>