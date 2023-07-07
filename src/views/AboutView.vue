<template>
  <NavAll />
  <!-- Who Am I Section Start -->

  <div class="px-4">
    <div class="my-5 container-fluid">
      <h1 class="p-3">
        Who Am I
      </h1>
      <p class="p-3">
        My Name is Waydin Jochem, I am a 20 year-old man currently residing in Cape Town, South Africa. I done my
        primary-schooling at Saint John's Roman Catholic Primary School, and for my high-schooling I attended Kensington
        Secondary School.My past-times involve alternative sports such as chess , table tennis and video-gaming. I have a
        love for learning new things and pride myself on being an eternal student, meaning I go throughout my life
        learning
        gathering greater and greater amounts of knowledge, hence why I decided to pursue a career in IT
      </p>
    </div>
    <!-- Who Am I Section End -->

    <!-- Experience Section Start -->
    <div class="my-5 p-4 bg-white container-fluid">
      <h1 class="p-3">
        Work-Experience
      </h1>
      <div>
        <div id="grid-view" class="row container-fluid mx-auto px-auto">
          <!-- First Card Start -->
          <div class="flip-card col-sm p-2">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h3 class="card-title">
                  Factreton Community Centre
                </h3>
                <div class="card-text">
                  <h4 class="text-center">
                    17 July 2017 - 26 July 2017
                  </h4>
                </div>
              </div>
              <div class="flip-card-back bg-primary p-2">
                <p>Proving help for 2 hours everyday. Helping in various ways which
                  include:
                <ul>
                  <li>Cleaning</li>
                  <li>Serving out of Goods provided at Centre
                  </li>
                </ul>
                </p>
              </div>
            </div>
          </div>
          <!-- First Card End -->

          <!-- Second Card Start -->
          <div class="flip-card col-sm p-2">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h3 class="card-title">
                  Kensington Home For The Aged
                </h3>
                <div class="card-text">
                  <h4 class="text-center">
                    75 hours
                  </h4>
                </div>
              </div>
              <div class="flip-card-back bg-primary p-2">
                <p>Proving help for 2 hours everyday. Helping in various ways which
                  include:
                <ul>
                  <li>Cleaning</li>
                  <li>Serving out of Goods provided at Centre
                  </li>
                </ul>
                </p>
              </div>
            </div>
          </div>

          <!-- Second Card End -->

          <!-- Third Card Start -->
          <div class="flip-card col-sm p-2">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h3 class="card-title">
                  MSC Business College
                </h3>
                <div class="card-text">
                  <h4 class="text-center">
                    18 May 2022 - 5 July 2022
                  </h4>
                </div>
              </div>
              <div class="flip-card-back bg-primary p-2">
                <p>
                  General Sales Assistant, Learnership Programme Skills
                  Programme,
                  proving
                  practical and theorectical knowledge on working in retail related
                  compaines
                </p>
              </div>
            </div>
          </div>

          <!-- Third Card End -->
        </div>
      </div>
    </div>
    <!-- Experience Section End -->
    <!-- Skills Section -->
    <div class="my-5 container-fluid bg-white">
      <h1 class="p-3">
        Skills
      </h1>
      <p id="Ss" class=" container-fluid px-auto mx-auto">
        <img src="https://i.postimg.cc/Jn3PV97N/html-5-logotype.png" alt="img" class="bg-body-secondary border">
        <img src="https://i.postimg.cc/gk3k9s3Y/files.png" alt="img" class="bg-body-secondary border" >
        <img src="https://i.postimg.cc/66k51g2j/bootstrap.png" alt="img" class="bg-white border">
        <img src="https://i.postimg.cc/nhkFrLdg/Screenshot-2023-07-03-100843.png" alt="img">
        <img src="https://i.postimg.cc/Zq5Tdh2R/14951662-0.jpg" alt="img">
        <img src="https://i.postimg.cc/W4YsmHc7/eng.png" alt="img" class="bg-body-secondary border">
        <img src="https://i.postimg.cc/B6Z1bycc/south-africa.png" alt="img" class="bg-body-secondary border">
      </p>
    </div>
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


h1 {
  border-radius: 20px;
}

.container-fluid:not(#Ss, #grid-view) {
  background-image: radial-gradient(purple, black);
  border-radius: 20px;
  padding: 1%;
  text-align: center;
  color: white;
}


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  border-radius: 25px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 25px;
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
  border-radius: 25px;
}

.flip-card-front {
  padding: 25px;
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  padding: 20px;
  color: white;
  transform: rotateY(180deg);
}

div img {
  width: 100px;
  margin: 20px;
  border-radius: 50%;
}</style>
