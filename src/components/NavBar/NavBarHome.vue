<template>
  <button class="btn btn-dark fs-1 fw-bold rounded-circle ms-2 mt-2" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">&#9776;</button>

  <div class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
     
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/testimonials">Testimonials</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
* {
        background-color: #333;
    }
    a{
      text-decoration: none;
      display: flex;
      color: aliceblue;
      padding: 20px;
      font-size: larger;
    }
    a:hover {
      background-image: linear-gradient(silver, black);
      color: silver;
      font-size: xx-large;
      font-weight: bold;
      border: solid 2pxwhitesmoke;
    } 
    .router-link-exact-active {
      background-image: linear-gradient(silver, black);
      color: silver;
      font-size: xx-large;
      font-weight: bold;
    }
</style>