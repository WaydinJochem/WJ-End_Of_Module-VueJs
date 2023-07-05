<template>
  <NavAll />
  <!-- First Start -->
<<<<<<< HEAD
  <div class="bg-white mt-3 container-fluid">
    <h1 class="bg-body-secondary">
      Who Am I
    </h1>
    <p class="p-3">
      My Name is Waydin Jochem, I am a 20 year-old man currently residing in Cape Town, South Africa. I done my
      primary-schooling at Saint John's Roman Catholic Primary School, and for my high-schooling I attended Kensington
      Secondary School.My past-times involve alternative sports such as chess , table tennis and video-gaming. I have a
      love for learning new things and pride myself on being an eternal student, meaning I go throughout my life learning
      gathering greater and greater amounts of knowledge, hence why I decided to pursue a career in IT
    </p>
  </div>
  <!-- First End -->

  <!-- Second Start -->
   <div class="bg-white mt-3 container-fluid">
    <h1 class="bg-body-secondary">
      Work-Experience
    </h1>
    <div>
      <div id="grid-view" class="p-5">
        <!-- First Card Start -->
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              Factreton Community Centre
            </h3>
            <div class="card-text">
              <h4 class="text-center">
                17 July 2017 - 26 July 2017
              </h4>
            </div>
          </div>
        </div>
        <!-- First Card End -->

        <!-- Second Card Start -->
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              Kensington Home For The Aged
            </h3>
            <div class="card-text">
              <h4 class="text-center">
                75 hours
              </h4>
            </div>
          </div>
        </div>
        <!-- Second Card End -->

        <!-- Third Card Start -->
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              MSC Business College
            </h3>
            <div class="card-text">
              <h4 class="text-center">
                18 May 2022 - 5 July 2022
              </h4>
            </div>
          </div>
        </div>
      </div>
      <!-- Third Card End -->
    </div>
  </div>
  <!-- Second End -->
  <!-- Skills Section -->
  <div class="mt-3 container-fluid bg-white mt-3">
    <h1 class="m-0">
      Who Am I
    </h1>
    <p id="Ss" class="-auto container-fluid row">
      <img src="https://i.postimg.cc/Jn3PV97N/html-5-logotype.png" alt="img">
      <img src="https://i.postimg.cc/gk3k9s3Y/files.png" alt="img">
      <img src="https://i.postimg.cc/66k51g2j/bootstrap.png" alt="img">
      <img src="https://i.postimg.cc/nhkFrLdg/Screenshot-2023-07-03-100843.png" alt="img">
      <img src="https://i.postimg.cc/Zq5Tdh2R/14951662-0.jpg" alt="img">
      <img src="https://i.postimg.cc/W4YsmHc7/eng.png" alt="img">
      <img src="https://i.postimg.cc/B6Z1bycc/south-africa.png" alt="img">
    </p>
  </div>

  <!-- End of Skills Section -->
</template>
<script scoped>
import NavAll from '@/components/NavBar/NavBarAll.vue';
export default {
  components: {
    NavAll
  }
}
</script>
<style scoped>
#grid-view {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 40px;
  padding: 1%;
}

h1 {
  background-color: aqua;
}

/* #Ss {
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
} */

div img {
  width: 100px;
  border-radius: 50%;
}
</style>
