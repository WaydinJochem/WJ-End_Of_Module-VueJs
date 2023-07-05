import { createStore } from "vuex";
export default createStore({
  state: {
    testimonials: null,
    Data: null,
  },
  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setData: (state, Data) => {
      state.Data = setData;
    },
  },
  actions: {
    getTestimonials: async (context) => {
      fetch("https://waydinjochem.github.io/api/testimonials.json")
        .then((res) => res.json())
        .then((testimonials) => context.commit("setTestimonials", testimonials.testimonials));
    }},
  })
