<template>
  <UFooter
    as="footer"
    class=""
    :ui="{
      root: 'border-b border-dashed border-muted/80 md:px-10! px-2!',
      container: 'border-x border-dashed border-muted/80 flex flex-col p-0!',
      left: 'w-full flex order-first! flex-col gap-2 text-center justify-center py-4 px-2 border-b border-dashed border-muted/80',
      right: 'w-full flex order-last! flex-col text-center justify-center ',
      center: 'm-0! hidden',
    }"
  >
    <template #left>
      <p class="text-muted text-sm w-fit">
        {{ $t("footer.copyright", { year: new Date().getFullYear() }) }}

        <ULink
          to="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-px hover:text-primary dark:text-primary/70 text-primary/85"
        >
          Tailwind CSS
        </ULink>
        {{ $t("footer.&") }}
        <ULink
          to="https://ui.nuxt.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-px hover:text-primary dark:text-primary/70 text-primary/85"
        >
          Nuxt UI
        </ULink>
      </p>
      <p class="text-muted text-sm w-fit">
        {{ $t("footer.builtBy") }}
        <ULink
          to="https://github.com/farid-teymouri"
          target="_blank"
          rel="noopener"
          class="mx-px dark:hover:text-pink-400 dark:text-pink-400/70 hover:text-rose-600 text-rose-500"
        >
          {{ $t("seo.developer") }}
        </ULink>
      </p>
    </template>
    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        :ui="{
          list: 'flex border-l border-muted/80 border-dashed',
          item: 'p-2! border-r border-muted/80 border-dashed',
          link: 'p-1!',
          linkLeadingIcon: 'size-4',
        }"
      />
    </template>
  </UFooter>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useLocalePath, useI18n } from "#imports";
const localePath = useLocalePath();
const { t } = useI18n();

const config = useRuntimeConfig();
const url = useRequestURL();
const baseUrl = config.public?.baseUrl || url.origin;

const items: NavigationMenuItem[] = [
  {
    label: "llms.txt",
    to: baseUrl + "/llms.txt",
    target: "_blank",
  },
  {
    label: "",
    icon: "i-simple-icons-rss",
    to: baseUrl + "/rss",
    target: "_blank",
  },
  {
    label: "",
    icon: "i-simple-icons-x",
    to: "https://x.com/faridteimori",
    target: "_blank",
  },
  {
    label: "",
    icon: "i-simple-icons-github",
    to: "https://github.com/farid-teymouri",
    target: "_blank",
  },
  // {
  //   label: "",
  //   icon: "i-simple-icons-linkedin",
  //   to: "https://github.com/farid-teymouri",
  //   target: "_blank",
  // },
];
</script>
