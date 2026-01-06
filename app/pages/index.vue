<script setup lang="ts">
// pages/index.vue
import About from "~/components/home/About.vue";
import Borad from "~/components/home/Borad.vue";
import Community from "~/components/home/Community.vue";
import HeadLine from "~/components/home/HeadLine.vue";
import MyContributions from "~/components/home/MyContributions.vue";
import Overview from "~/components/home/Overview.vue";
import Profile from "~/components/home/Profile.vue";
import Spacer from "~/components/home/Spacer.vue";
import Skills from "~/components/home/Skills.vue";

const { t, locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();

interface SEOData {
  title: string;
  ogTitle: string;
  description: string;
  ogDescription: string;
  keywords: string;
  siteName: string;
}

const getSEOData = (): SEOData => ({
  title: t("seo.home.title"),
  ogTitle: t("seo.og.title"),
  description: t("seo.home.description"),
  ogDescription: t("seo.og.description"),
  keywords: t("seo.home.keywords"),
  siteName: t("seo.siteName"),
});

const url = useRequestURL();
const baseUrl = config.public?.baseUrl || url.origin;

const developerName = computed(() => t("seo.developer"));

// Access Nuxt color mode composable
const colorMode = useColorMode();
//BrandedLogo , Pergel , Frame , Nuxt , NuxtSeo , SimpleBlog , UnJs , Wave , WithEmoji
defineOgImage({
  component: "Home",
  renderer: "chromium",

  props: {
    title: () => getSEOData().ogTitle,
    headline: getSEOData().siteName,
    description: getSEOData().ogDescription,
    siteName: () => getSEOData().siteName,
    ogLocale: locale.value === "fa" ? "fa_IR" : "en_US",
    siteUrl: () => baseUrl,
    locale: locale.value,
    dir: "rtl",
    email: t("pages.home.board.email-address"),
    phone: t("pages.home.board.phone-number"),
  },
});

useSeoMeta({
  title: () => getSEOData().title,
  titleTemplate: () => getSEOData().siteName,
  description: getSEOData().description,

  ogTitle: getSEOData().ogTitle,
  ogDescription: getSEOData().ogDescription,
  ogType: "website",
  ogLocale: locale.value === "fa" ? "fa_IR" : "en_US",
  ogUrl: `${baseUrl}/${locale.value}`,
  ogSiteName: () => getSEOData().siteName,

  // Twitter/X Card

  twitterCard: "summary_large_image",
  twitterTitle: () => getSEOData().ogTitle,
  twitterDescription: () => getSEOData().ogDescription,
  twitterSite: "@faridteimori",
  twitterCreator: "@faridteimori",
  twitterImage: () =>
    `${baseUrl}/__og-image__/image${locale.value === "fa" ? "/fa" : ""}/og.png`,

  // App & Mobile
  applicationName: () => getSEOData().siteName,
  themeColor: () => (colorMode.value === "dark" ? "#4cc9f0" : "#254074"),
  colorScheme: "dark light",
  viewport: "width=device-width, initial-scale=1",

  robots:
    "index, follow, max-snippet:55, max-image-preview:standard, max-video-preview:-1",
});

// useHead({
//   // title: () => getSEOData().title,
//   // titleTemplate: () => getSEOData().siteName,
//   link: [
//     {
//       rel: "canonical",
//       href: () => `${baseUrl}/${locale.value}`,
//     },
//     {
//       rel: "alternate",
//       hreflang: "fa",
//       href: () => `${baseUrl}/fa`,
//     },
//     {
//       rel: "alternate",
//       hreflang: "en",
//       href: () => `${baseUrl}/en`,
//     },
//   ],
// });
useSchemaOrg([
  definePerson({
    name: developerName.value, // "Farid Teymouri"
    url: baseUrl,
    sameAs: [
      "https://github.com/farid-teymouri",
      "https://linkedin.com/in/farid-teymouri",
      "https://x.com/faridteimouri",
      "https://t.me/faridteymouri",
    ],
    jobTitle: getSEOData().ogTitle,
    description: getSEOData().ogDescription,
  }),
  defineWebSite({
    name: getSEOData().siteName,
    url: baseUrl,
    description: getSEOData().description,
    inLanguage: locale.value === "fa" ? "fa-IR" : "en-US",
    publisher: definePerson({
      name: developerName.value,
      url: baseUrl,
    }),
    // datePublished: "2026-01-10",
    // potentialAction: defineSearchAction({
    //   target: `${baseUrl}/search?q={search_term_string}`,
    //   "query-input": "required name=search_term_string",
    // }),
  }),
  defineWebPage({
    name: getSEOData().title,
    description: getSEOData().description,
    url: localePath("/"),
    inLanguage: locale.value === "fa" ? "fa-IR" : "en-US",
    isPartOf: defineWebSite({ url: baseUrl }),
    primaryEntity: definePerson({ name: developerName.value, url: baseUrl }),
    // datePublished: "2020-01-10",
    // dateModified: new Date().toISOString().split("T")[0],
  }),
]);
</script>
<template>
  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Borad />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Profile />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Overview />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Community />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 h-8">
    <UContainer class="mx-auto relative px-0!">
      <HeadLine
        :header-text="$t('pages.home.about.header')"
        id="about"
        tag="h2"
      />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <About />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <MyContributions />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 h-8">
    <UContainer class="mx-auto relative px-0!">
      <HeadLine
        :header-text="$t('pages.home.skills.header')"
        id="skills"
        tag="h2"
      />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Skills />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>
</template>
