// app.config.ts
export default defineAppConfig({
  title: "My Nuxt App",
  description: "A Nuxt 3 project",
  ui: {
    colors: {
      primary: "violet",
    },
    container: {
      base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8",
    },
  },
});
