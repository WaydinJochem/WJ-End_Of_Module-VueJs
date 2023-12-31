import { createStore } from "vuex";
export default createStore({
  state: {
    testimonials: null,
    projects: null,
  },
  mutations: {
    setTestimonials: (state, value) => {
      state.testimonials = value;
    },
    setProjects: (state, value) => {
      state.projects = value;
    },
    setResume: (state, value) => {
      state.resume = value;
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
    async fetchProjects(context) {
      try {
        let { projects } = await (
          await fetch("https://waydinjochem.github.io/data.json")
        ).json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          alert("Error");
        }
      } catch (e) {
        console.error(error);
      }
    },
    async fetchResume(context) {
      try {
        let { resume } = await (
          await fetch("https://waydinjochem.github.io/data.json")
        ).json();
        if (resume) {
          context.commit("setResume", resume);
        } else {
          alert("Error");
        }
      } catch (e) {
        console.error(error);
      }
    },
  },
});
