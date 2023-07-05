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
    radial-gradient(at top left, transparent 71%, purple 10%),
    linear-gradient(125deg, purple, black);
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
