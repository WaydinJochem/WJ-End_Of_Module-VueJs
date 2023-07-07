<template>
    <div class="text-secondary p-2 container rounded-5">
        <h3 class="text-center">Get In Contact with me directly through:</h3>
        <div class="row p-3">
            <div class="col">
                <ul> Contact me through:
                    <li>069 748 9384</li>
                    <li> jochemw@gmail.com</li>
                    <li>Or use the links provived below</li>
                </ul>
            </div>
            <div class="col text-end">
                <ul class="list-unstyled"> Visit Our Offices At:
                    <li> 53 Beveley Ave,</li>
                    <li> Matroosfontein</li>
                    <li> Cape Town</li>
                    <li> Western Cape</li>
                    <li> South Africa</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
    background-image: radial-gradient(purple, black);
    animation: appear 3s ease-in 1,1;
}
.row{
    color: white;
}
@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@media only screen and (max-width:375px) {
    .col {
        font-size: x-small;
    }
}
</style>