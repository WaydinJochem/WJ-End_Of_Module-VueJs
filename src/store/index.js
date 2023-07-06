import { createStore } from "vuex";
export default createStore({
  state: {
    testimonials: null,
  },
  mutations: {
    setTestimonials: (state, value) => {
      state.testimonials = value;
    },
  },
  actions: {
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await (
          await fetch("https://waydinjochem.github.io/data.json")
        ).json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          alert("Error");
        }
        
      } catch (e) {
        console.error(error);
      }
    },
  },
});
