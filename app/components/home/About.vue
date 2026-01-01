<template>
  <div
    class="flex flex-col p-4 border-x border-dashed border-muted/80 relative"
  >
    <div
      :class="[
        'flex md:flex-row flex-col gap-4 overflow-hidden transition-all duration-300 relative',
        collapsed ? 'lg:max-h-18 max-h-35' : 'max-h-250',
      ]"
    >
      <ul class="w-full list-disc list-inside flex flex-col gap-2 text-sm">
        <li v-for="item in firstColumnItems" :key="item">
          {{ t(item) }}
        </li>
      </ul>
      <ul class="w-full list-disc list-inside flex flex-col gap-2 text-sm">
        <li v-for="item in secondColumnItems" :key="item">
          {{ t(item) }}
        </li>
      </ul>

      <div
        v-if="collapsed"
        class="absolute bottom-0 left-0 w-full h-18 pointer-events-none bg-linear-to-b from-black/0 dark:to-neutral-900 to-neutral-50"
      ></div>
    </div>
    <motion.button
      :whilePress="{ scale: 0.9 }"
      class="w-full mx-auto shadow-none bg-elevated cursor-pointer mt-2 text-sm h-8 max-w-30 rounded-md flex flex-row gap-1 items-center justify-center"
      @click="collapsed = !collapsed"
    >
      <UIcon
        :name="
          collapsed
            ? 'solar:double-alt-arrow-down-line-duotone'
            : 'solar:double-alt-arrow-up-line-duotone'
        "
        class="size-4"
      ></UIcon>
      <span>
        {{
          collapsed ? $t("pages.home.ele.show-more") : $t("pages.home.ele.hide")
        }}</span
      >
    </motion.button>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import { ref } from "vue";
const { t } = useI18n();

const allItems = [
  "pages.home.about.item-1",
  "pages.home.about.item-2",
  "pages.home.about.item-3",
  "pages.home.about.item-4",
  "pages.home.about.item-5",
  "pages.home.about.item-6",
  "pages.home.about.item-7",
];

const firstColumnItems = allItems.slice(0, 5);
const secondColumnItems = allItems.slice(5);

const collapsed = ref(true);
</script>
