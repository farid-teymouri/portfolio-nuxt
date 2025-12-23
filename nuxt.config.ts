// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  css: [
    "~/assets/css/main.css",
    "~/assets/css/fonts.css", // Path to your CSS file
  ],
  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "fa", language: "fa-IR", file: "fa.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://faridteymouri.vercel.app" // ← دامنه واقعی سایتت رو اینجا بنویس
        : "http://localhost:3000",
  },
});
