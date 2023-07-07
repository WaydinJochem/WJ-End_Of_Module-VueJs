<template>
    <div v-if="projects" id="display" class="mt-4 container-fluid mx-auto">
        <div v-for="projects in projects" :key="projects.id" :projects="projects">
            <!-- Card Start -->
            <div class="container-fluid">
                <!-- Project Card 1 -->
                <div class="flip-card mb-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h4>
                                {{ projects.name }}
                            </h4>
                            <div>
                                <img :src="projects.front" alt="" class="cardpic">
                            </div>
                        </div>
                        <div class="flip-card-back p-2">
                            <div class="bg-body-secondary rounded-4 w-50 mx-auto">
                                <img :src="projects.img" alt="" class="imgpic">
                            </div>
                            <div>
                                <p class="text-center">
                                    {{ projects.descr }}
                                </p>
                            </div>
                            <div>
                                <a class="btn btn-dark col-4 p-0 me-2" :href="projects.git" target="_blank">Launch Git</a>
                                <a class="btn btn-dark col-4 p-0" :href="projects.link" target="_blank" >Launch Site</a>
                            </div>
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
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch("fetchProjects");
    },
}
</script>
<style>
#display {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}


.flip-card {
    background-color: transparent;
    width: 300px;
    height: 280px;
    perspective: 1000 px;
    border-radius: 20%;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20%;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 20%;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
  
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    transform: rotateY(180deg);
}

.cardpic {
    height: 200px;
    width: 200px;
}
.imgpic {
    height: 100px;
    width: 100px;
}

@media only screen and (max-width:400px) {
    .flip-card {
        width: 250px;
    }
}
</style>