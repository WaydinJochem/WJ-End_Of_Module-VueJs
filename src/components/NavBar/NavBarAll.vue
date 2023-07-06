<template >
    <div class="container-fluid row" >
        <div class="text-center">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/resume">Resume</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/testimonials">Testimonials</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<style scoped>
div {
    background-color: #7303c0;
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
    border: 2px black solid;
    border-radius: 50%;
    font-size: x-large;
}
</style>