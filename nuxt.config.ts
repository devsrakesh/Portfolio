export default defineNuxtConfig({
  css: ["@/assets/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ["gsap"],
  },
});
