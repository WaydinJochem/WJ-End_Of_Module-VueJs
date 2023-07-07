<template>
    <div v-if="testimonials" class="mt-4">
        <div v-for="testimonials in testimonials" :key="testimonials.id" :testimonials="testimonials">
            <div class="accordion accordion-flush container" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            {{ testimonials.name }}
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body row container-fluid">
                            <div class="col">
                                <div class="mx-auto w-50 p-2">
                                    <img :src="testimonials.img" :alt="testimonials.name" class="rounded-3 mx-4">
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="me-4">
                                    <strong>"</strong>
                                    {{ testimonials.statment }}
                                    <strong>"</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center">Waiting To show</div>
</template>
<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch("fetchTestimonials");
    },
}
</script>
<style scoped>
img {
    width: 150px;
    height: 150px;
}
</style>