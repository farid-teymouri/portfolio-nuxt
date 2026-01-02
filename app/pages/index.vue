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
  renderer: "satori",
  props: {
    title: () => getSEOData().ogTitle,
    headline: getSEOData().siteName,
    description: getSEOData().ogDescription,
    siteName: () => getSEOData().siteName,
    ogLocale: locale.value === "fa" ? "fa_IR" : "en_US",
    siteUrl: () => baseUrl,
    locale: locale.value,
    dir: "rtl",
    theme: "#ff0000", // generate screenshot of the MyCustomComponent component
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
  // ogImage: `${baseUrl}/images/og/og_home.png`,
  // Twitter/X (required - no OG fallback for card type)
  twitterCard: "summary_large_image",

  robots:
    "index, follow, max-snippet:55, max-image-preview:standard, max-video-preview:-1",
});

useHead({
  title: () => getSEOData().title,
  titleTemplate: () => getSEOData().siteName,
  meta: [
    { name: "description", content: () => getSEOData().description },
    { property: "og:title", content: () => getSEOData().ogTitle },
    { property: "og:description", content: () => getSEOData().ogDescription },
    { property: "og:type", content: "website" },
    {
      property: "og:locale",
      content: () => (locale.value === "fa" ? "fa_IR" : "en_US"),
    },
    {
      property: "og:url",
      content: () => `${baseUrl}/${locale.value}`,
    },
    {
      property: "og:site_name",
      content: () => getSEOData().siteName,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => getSEOData().ogTitle },
    { name: "twitter:description", content: () => getSEOData().ogDescription },
    { name: "robots", content: "index, follow" },
    { name: "author", content: () => developerName.value },
    { name: "keywords", content: () => getSEOData().keywords },
  ],
  link: [
    {
      rel: "canonical",
      href: () => `${baseUrl}/${locale.value}`,
    },
    {
      rel: "alternate",
      hreflang: "fa",
      href: () => `${baseUrl}/fa`,
    },
    {
      rel: "alternate",
      hreflang: "en",
      href: () => `${baseUrl}/en`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: getSEOData().title,
          description: getSEOData().description,
          author: {
            "@type": "Person",
            name: developerName.value,
          },
          url: `${baseUrl}/${locale.value}`,
          potentialAction: {
            "@type": "ReadAction",
            target: `${baseUrl}/${locale.value}`,
          },
        }),
    },
  ],
});
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
