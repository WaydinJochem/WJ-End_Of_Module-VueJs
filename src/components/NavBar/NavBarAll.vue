<template >
    <div>
        <div class="text-center row container-fluid" id="dislplay">
            <router-link to="/" class="col-sm">Home</router-link>
            <router-link to="/about" class="col-sm">About</router-link>
            <router-link to="/resume" class="col-sm">Resume</router-link>
            <router-link to="/projects" class="col-sm">Projects</router-link>
            <router-link to="/testimonials" class="col-sm">Testimonials</router-link>
            <router-link to="/contact" class="col-sm">Contact</router-link>
        </div>
    </div>
</template>

<style scoped>
@media only screen and (max-width: 601px) {

   #display {
    background-color: black;
   }
}

div {
    background-image: radial-gradient(#7303c0, black);
    display: flex;
    flex-direction: row;
    justify-content: center;
}

a {
    text-decoration: none;
    text-align: center;
    color: aliceblue;
    padding: 20px;
}

a:hover {
    color: silver;
    font-size: xx-large;
    font-weight: bold;
}
.router-link-active {
    text-decoration: 2px black underline;
    animation: colorswitch 2s  ease infinite;
}

@keyframes colorswitch {
   0% {
    color:  white;
   }
   50% {
   color: #7303c0;
    font-size: large;
   }
   100% {
    color: transparent;
    font-size: large;
   }
}
</style>