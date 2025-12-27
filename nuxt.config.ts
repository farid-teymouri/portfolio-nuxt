// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/image", "motion-v/nuxt"],
  css: [
    "~/assets/css/main.css",
    "~/assets/css/fonts.css", // Path to your CSS file
  ],
  image: {
    // Restrict external domains for security (keep empty to use only local images)
    domains: [],
    // Additional useful options
    format: ["webp"], // Support modern image formats for better compression
    quality: 80, // Default image quality (adjust as needed for balance between size and clarity)
  },
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
  runtimeConfig: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || "NOT TOKEN",
  },
});
