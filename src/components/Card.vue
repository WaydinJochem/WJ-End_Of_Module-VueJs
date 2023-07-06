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
                            <h4>
                                {{ projects.name }}
                            </h4>
                            <div>
                                <img src={{ projects.front }} alt="" class="cardpic">
                            </div>
                        </div>
                        <div class="flip-card-back align-middle">
                            <p class="text-center">
                                {{ projects.descr }}
                            </p>
                            <a class="btn btn-info" href={{ projects.link }}>Launch Site</a>
                            <a class="btn btn-info" href={{ projects.git }}>Launch Site</a>
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
<style>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
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
    background-image: url('https://i.postimg.cc/P5r8bbw3/Website_gambar.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    transform: rotateY(180deg);
}

.cardpic {
    height: 200px;
    width: 200px;
}
</style>