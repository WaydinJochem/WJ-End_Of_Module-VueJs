<template >
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/testimonials">Testimonials</router-link>
    </div>
</template>

<style scoped>
div {
    background-color: rgb(154, 22, 154);
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