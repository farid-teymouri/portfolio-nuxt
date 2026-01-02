<script setup lang="ts">
const { locale, t } = useI18n();

useHead({
  title: () => t("seo.projects.title"),
  meta: [
    { name: "description", content: () => t("seo.projects.description") },
    { property: "og:title", content: () => t("seo.servprojectsices.title") },
    {
      property: "og:description",
      content: () => t("seo.projects.description"),
    },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

const test = "the projects page";
</script>

<template>
  {{ test }}
</template>
