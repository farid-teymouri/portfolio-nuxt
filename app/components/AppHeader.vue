<script setup lang="ts">
import { useHeaderSeo } from "@/components/useHeaderSeo";
import { ref } from "vue";

const { dir } = useHeaderSeo();
const isNavigationOpen = ref(false);

const toggleNavigation = () => {
  isNavigationOpen.value = !isNavigationOpen.value;
};
</script>

<template>
  <div class="w-full flex flex-row justify-between py-4" :dir="dir">
    <div
      class="w-full flex flex-row justify-start xl:gap-8 lg:gap-6 sm:gap-4 gap-2"
    >
      <HeaderLogo />
      <HeaderNavigation
        :dir="dir"
        :class="[
          'lg:block relative',
          isNavigationOpen
            ? 'transition-all duration-150 block lg:relative absolute lg:top-0 top-18  bg-muted h-fit lg:py-0 pb-4 z-50'
            : 'transition-all duration-150 block lg:relative absolute lg:top-0 top-18 bg-transparent lg:z-0 -z-10',
          isNavigationOpen
            ? dir === 'ltr'
              ? 'left-0'
              : 'right-0'
            : dir === 'ltr'
            ? 'lg:left-0 -left-275'
            : 'lg:right-0 -right-275',
        ]"
      />
      <HeaderNavigationToggle
        :dir="dir"
        :is-open="isNavigationOpen"
        class="lg:hidden block"
        @click="toggleNavigation"
      />
    </div>

    <div class="w-full flex flex-row justify-end gap-2">
      <HeaderLocaleSwitcher :dir="dir" />
      <HeaderThemeSwitcher :dir="dir" />
    </div>
  </div>
</template>
