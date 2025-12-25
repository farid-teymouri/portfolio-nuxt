<template>
  <div :dir="dir" class="py-2 ltr:font-sans">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));
</script>
