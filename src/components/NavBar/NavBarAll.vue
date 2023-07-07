<template >
    <div>
        <div class="text-center container-fluid" id="dislplay">
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
    animation: colorswitch 5s  ease-in-out infinite;
}

@keyframes colorswitch {
   0% {
    color:  white;
   }
   25% {
    color: gray;
   }
   50% {
   color: #7303c0;
   }
   100% {
    color: transparent;
   }
}
@media only screen and (max-width:750px){
    div {
        font-size: small;
    }
}
@media only screen and (max-width:575px){
    div {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
/* @media only screen and (max-width:575px){
    div {
        font-size: x-small;
    }
} */
</style>