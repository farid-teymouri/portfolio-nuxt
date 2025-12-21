<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import type { SelectMenuItem } from "@nuxt/ui";
import {
  useLocaleHead,
  useI18n,
  useLocalePath,
  useSwitchLocalePath,
} from "#imports";

const route = useRoute();
const router = useRouter();
const { t, setLocale, locale } = useI18n();

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
import { useHead, useRoute } from "#app";

const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));

// Using useLocaleHead for SEO (hreflang etc.)
useLocaleHead({
  addDirAttribute: true, // also adds dir attribute, but may be delayed
  addSeoAttributes: true,
});

// Manually and immediately set lang and dir with useHead (main solution for the issue)
useHead({
  htmlAttrs: {
    lang: () => (locale.value === "fa" ? "fa-IR" : "en-US"),
    dir: () => (locale.value === "fa" ? "rtl" : "ltr"),
  },
});
const navigationItems = computed<NavigationMenuItem[][]>(() => {
  const currentPath = route.fullPath;

  return [
    [
      // Only one menu group (inner array)
      {
        label: t("nav.home"),
        icon: "lets-icons:home-duotone",
        to: localePath("/"),
        active:
          currentPath === localePath("/") ||
          currentPath === "/" ||
          currentPath.startsWith(localePath("/") + "?"),
        disabled: false,
      },
      {
        label: t("nav.about"),
        icon: "lets-icons:user-scan-duotone",
        to: localePath("/about"),
        active: currentPath.startsWith(localePath("/about")),
        disabled: false,
      },
      {
        label: t("nav.projects"),
        icon: "lets-icons:3d-box-duotone",
        to: localePath("/projects"),
        active: currentPath.startsWith(localePath("/projects")),
        disabled: false,
      },
      {
        label: t("nav.services"),
        icon: "lets-icons:layers-duotone",
        to: localePath("/services"),
        active: currentPath.startsWith(localePath("/services")),
        disabled: false,
      },
      {
        label: t("nav.contact"),
        icon: "lets-icons:phone-duotone",
        to: localePath("/contact"),
        active: currentPath.startsWith(localePath("/contact")),
        disabled: false,
      },
      {
        label: t("nav.github"),
        icon: "i-simple-icons-github",
        badge: "4",
        to: "https://github.com/farid-teymouri",
        target: "_blank",
        external: false,
        active: false,
        disabled: false,
      },
      {
        label: t("nav.resume"),
        icon: "solar:file-download-broken",
        to: "/faridteymouri-cv.pdf",
        target: "_blank",
        class: "ring-primary/50 ring-1 rounded-lg ",
        variant: "outline",
        color: "warning",
        disabled: false,
      },
    ],
  ];
});

const {
  data: countries,
  status,
  // execute is not needed because immediate: true
} = await useLazyFetch<
  {
    name: string;
    code: string;
    flag: string;
  }[]
>("/api/countries.json", {
  immediate: true, // main change
});

// ref for selected country
const selectedCountry = ref<{
  name: string;
  code: string;
  flag: string;
} | null>(null);

// Set default country based on current locale immediately after fetching data
watchEffect(() => {
  if (countries.value?.length && !selectedCountry.value) {
    selectedCountry.value =
      countries.value.find((c) => c.code === locale.value) ??
      countries.value[0];
  }
});
// React to country change in the select menu
watch(selectedCountry, async (newCountry) => {
  if (newCountry && newCountry.code !== locale.value) {
    const targetPath = switchLocalePath(newCountry.code);

    if (route.fullPath !== targetPath) {
      await setLocale(newCountry.code); // first, set the locale correctly
      router.push(targetPath);
    }
  }
});
// onOpen function no longer needs execute (just kept for better UX)
function onOpen(isOpen: boolean) {
  if (isOpen && !countries.value?.length) {
    // This condition almost never happens because immediate: true
    // but kept for safety
  }
}
</script>

<template>
  <div class="w-full flex flex-row justify-between py-4" :dir>
    <UNavigationMenu
      :external-icon="false"
      :items="navigationItems"
      arrow
      class="w-full p-0 h-10"
      :ui="{
        item: 'mx-1',
      }"
      :dir
    />

    <USelectMenu
      :dir
      :arrow="false"
      v-model="selectedCountry"
      :items="countries"
      :loading="status === 'pending'"
      label-key="name"
      :search-input="{
        icon: 'i-lucide-search',
        placeholder: locale === 'fa' ? 'جستجو…' : 'Search...',
      }"
      class="w-fit block p-0 text-center justify-center content-center border-0 ring-0 text-muted cursor-pointer hover:text-highlighted hover:bg-elevated/70 bg-elevated/40 transition-colors before:transition-colors data-[state=open]:text-highlighted data-[state=open]:before:bg-elevated/5"
      :ui="{
        content: 'w-64',
        trailing: 'hidden',
        trailingIcon: 'hidden',
        item: 'cursor-pointer',
      }"
      @update:open="onOpen"
    >
      <template #default="{ modelValue }">
        <span class="text-md text-center mx-auto w-full px-3">
          {{ modelValue?.flag ?? "🌍" }}
        </span>
      </template>

      <template #trailing />
      <!-- Flag next to the country name inside the options list -->
      <template #item-leading="{ item }">
        <span class="size-5 text-center">
          {{ item.flag }}
        </span>
      </template>

      <!-- Optional: main text of the option in the list (country name) -->
      <template #item="{ item }">
        <span class="size-5 text-center">
          {{ item.flag }}
        </span>
        <span
          class="truncate"
          :style="locale === 'en' ? 'font-family:Shabnam;' : ''"
        >
          {{ item.name }}
        </span>
      </template>
    </USelectMenu>
  </div>
</template>
