// nuxt.config.ts
const fontPath = "/fonts/Shabnam-Light.ttf";

export default defineNuxtConfig({
  site: {
    url: (
      process.env.NUXT_PUBLIC_SITE_URL || "https://faridteymouri.vercel.app"
    ).trim(),
  },
  ogImage: {
    defaults: {
      renderer: "chromium",
    },
    fonts: [
      {
        name: "Shabnam",
        path: fontPath,
        weight: 300,
        style: "normal",
      },
    ],
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "motion-v/nuxt",
    "@nuxtjs/seo",
    "nuxt-og-image",
    "nuxt-icon",
    "nuxt-anchorscroll",
  ],
  icon: {
    provider: "server", // 👈 critical: disables external API
    mode: "css",
    cssLayer: "base",
    serverBundle: "auto",
  },
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
