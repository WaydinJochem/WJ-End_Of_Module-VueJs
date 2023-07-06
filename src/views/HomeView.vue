<template>
  <main>
    <NavHome />
    <img src="https://i.postimg.cc/xTjh0n2R/Free-Sample-By-Wix.png" alt="Logo">
    <div id="myself">
      <img src="https://i.postimg.cc/bJWJC8mN/Waydin-Jochem-C12-C1-25-Apr23-3.jpg" id="profile">
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import NavHome from '../components/NavBar/NavBarHome.vue';

export default {
  name: 'HomeView',
  components: {
    NavHome
  }
}
</script>
<style scoped>
main {
  min-height: 100vh;
  background-image:
    radial-gradient(at top left, transparent 71%, rgb(89, 2, 89) 10%),
    radial-gradient(at top left, transparent 70%, rgba(126, 12, 171, 0.749) 10%, rgb(85, 6, 85)),
    radial-gradient(at top left, transparent 69%, rgba(126, 12, 171, 0.749) 10%, rgb(85, 6, 85)),
    radial-gradient(at top left, transparent 68%, rgba(126, 12, 171, 0.749) 10%, rgb(85, 6, 85)),
    linear-gradient(125deg, rgb(96, 21, 96), black);
  background-size: 100%;
  background-attachment: fixed;
  color: white;
}

img {
  width: 100px;
  float: right;
}

#myself {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

#profile {
  width: 200px;
  border-radius: 25px;
}
</style>
