<script setup lang="ts">
const { locale, t } = useI18n();

useHead({
  title: () => t("seo.services.title"),
  meta: [
    { name: "description", content: () => t("seo.services.description") },
    { property: "og:title", content: () => t("seo.services.title") },
    {
      property: "og:description",
      content: () => t("seo.services.description"),
    },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

const test = "the services page";
</script>

<template>
  {{ test }}
</template>
