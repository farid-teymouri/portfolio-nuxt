<template>
  <div :dir="dir" class="pb-2 ltr:font-sans">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>

    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));
</script>
