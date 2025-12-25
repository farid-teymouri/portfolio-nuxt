<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useI18n, useLocalePath } from "#imports";
import { useRoute } from "#app";
import { useRuntimeConfig } from "#imports";

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const navigationItems = computed<NavigationMenuItem[]>(() => {
  const currentPath = route.fullPath;

  return [
    [
      {
        label: t("nav.home"),
        icon: "lets-icons:home-duotone",
        to: localePath("/"),
        active:
          currentPath === localePath("/") ||
          currentPath === "/" ||
          currentPath.startsWith(localePath("/") + "?"),
        onSelect: (e: Event) => {
          emit("click");
        },
      },
      {
        label: t("nav.about"),
        icon: "lets-icons:user-scan-duotone",
        to: "#about",
        active: false,
        onSelect: (e: Event) => {
          emit("click");
        },
      },
      {
        label: t("nav.projects"),
        icon: "lets-icons:3d-box-duotone",
        to: localePath("/projects"),
        active: currentPath.startsWith(localePath("/projects")),
        onSelect: (e: Event) => {
          emit("click");
        },
      },
      {
        label: t("nav.services"),
        icon: "lets-icons:layers-duotone",
        to: localePath("/services"),
        active: currentPath.startsWith(localePath("/services")),
        onSelect: (e: Event) => {
          emit("click");
        },
      },
      // {
      //   label: t("nav.contact"),
      //   icon: "lets-icons:phone-duotone",
      //   to: localePath("/contact"),
      //   active: currentPath.startsWith(localePath("/contact")),
      //   onSelect: (e: Event) => {
      //     emit("click");
      //   },
      // },
      {
        label: t("nav.github"),
        icon: "i-simple-icons-github",
        badge: "4",
        href: "https://github.com/farid-teymouri",
        target: "_blank",
        onSelect: (e: Event) => {
          emit("click");
        },
      },
      {
        label: t("nav.resume"),
        icon: "solar:file-download-broken",
        target: "_blank",
        class:
          "ring-primary/50 ring-1 rounded-lg cursor-pointer text-muted lg:text-center text-center lg:mt-0 mt-4 lg:w-fit w-[240] mx-auto",
        variant: "outline",
        onSelect: (e: Event) => {
          const link = document.createElement("a");
          link.href = "/faridteymouri-cv.pdf";
          link.download = "faridteymouri-cv.pdf";
          link.target = "_blank";
          link.click();
          emit("click");
        },
      },
    ],
  ];
});

defineProps<{
  isOpen?: boolean;
}>();
const emit = defineEmits(["click"]);
</script>

<template>
  <UNavigationMenu
    :external-icon="false"
    :items="navigationItems"
    arrow
    class="w-full p-0 h-10 gap-12"
    trailing-icon="i-lucide-arrow-down"
    :ui="{
      item: 'lg:mx-1  py-1 lg:w-fit w-full',
      link: 'lg:px-2 lg:py-1.5 py-3 hover:bg-elevated rounded-md',
      list: 'lg:flex-row flex-col lg:items-center items-start divide-y lg:divide-transparent divide-muted',
    }"
  />
</template>
