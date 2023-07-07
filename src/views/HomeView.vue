<template>
  <body>
    <NavHome />
    <img src="https://i.postimg.cc/xTjh0n2R/Free-Sample-By-Wix.png" alt="Logo">
   
    <h1>Aspiring <span> </span></h1>
    <div id="myself">
      <img src="https://i.postimg.cc/bJWJC8mN/Waydin-Jochem-C12-C1-25-Apr23-3.jpg" id="profile">
    </div>
  </body>
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
body {
  min-height: 100vh;
  background-size: 100%;
  background-attachment: fixed;
  color: white;
  animation: glowing 5s ease infinite;
}

img {
  float: right;
  width: 100px;
}

#myself {
  position: absolute;
  bottom: 20px;
  right: 20px;
}


h1 {
  position: absolute;
  top: 50%;
  left: 40%;
  color: white;
}

span::before {
  content: "Software Dev";
  color: transparent;
  animation: animate  ease-in infinite 15s;
  padding-left: 10px;
}

@keyframes animate {

  0% {
    color: transparent;
    content: "Software Dev";
  }
  12% {
    color: blue;
    content: "Software Dev";
  }

  25% {
    color: transparent;
    content: "Tech-Guru";
  }
  40% {
    color: aquamarine;
    content: "Tech-Guru";
  }

  50% {
    color: transparent;
    content: "Millionaire";
  }
  66% {
    color: dodgerblue;
    content: "Millionaire";
  }
  75% { color: transparent;
    content: "To Be More";
  }
  85% {
    color: aqua;
    content: "To Be More";
  }
  100%{
    color: transparent;
    content: "Software Dev";
  }
}



#profile {
  width: 200px;
  border-radius: 25px;
}

@keyframes glowing {

  0% {
    background-image:
      radial-gradient(at top left, transparent 71%, rgb(89, 2, 89) 10%),
      radial-gradient(at top left, transparent 70%, rgba(211, 72, 235, 0.749) 10%, rgb(85, 6, 85)),
      radial-gradient(at top left, transparent 65%, rgba(131, 12, 177, 0.749) 10%, rgb(85, 6, 85)),
      radial-gradient(at top left, transparent 67%, rgba(126, 12, 171, 0.749) 10%, rgb(85, 6, 85)),
      linear-gradient(125deg, rgb(96, 21, 96), black);
    background-size: 100%;
  }

  50% {
    background-image:
      radial-gradient(at top left, transparent 71%, rgb(89, 2, 89) 10%),
      radial-gradient(at top left, transparent 70%, rgba(181, 28, 208, 0.749) 10%, rgb(85, 6, 85)),
      radial-gradient(at top left, transparent 65%, rgba(211, 72, 235, 0.749) 10%, rgb(85, 6, 85)),
      radial-gradient(at top left, transparent 67%, rgba(126, 12, 171, 0.749) 10%, rgb(85, 6, 85)),
      linear-gradient(125deg, rgb(96, 21, 96), black);
    background-size: 100%;
  }

  100% {
    background-image:
      radial-gradient(at top left, transparent 71%, rgb(89, 2, 89) 10%),
      radial-gradient(at top left, transparent 70%, rgba(181, 28, 208, 0.749) 10%, rgb(85, 6, 85)),
      radial-gradient(at top left, transparent 65%, rgba(131, 12, 177, 0.749) 10%, rgb(85, 6, 85)),
      radial-gradient(at top left, transparent 67%, rgba(211, 72, 235, 0.749) 10%, rgb(85, 6, 85)),
      linear-gradient(125deg, rgb(96, 21, 96), black);
    background-size: 100%;
  }
}
</style>
