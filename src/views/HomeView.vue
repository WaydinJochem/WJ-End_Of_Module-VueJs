<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHome from '@/components/NavBarHome.vue';

export default {
  name: 'HomeView',
  components: {
    NavHome
  }
}
</script>
