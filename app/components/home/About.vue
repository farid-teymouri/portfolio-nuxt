<template>
  <!-- About section wrapper -->
  <section
    class="relative flex flex-col p-4 border-x border-dashed border-muted/80"
  >
    <!-- Content container with collapse animation -->
    <div :class="contentContainerClasses">
      <!-- First column -->
      <ul class="w-full list-disc list-inside flex flex-col gap-2 text-sm">
        <li v-for="key in firstColumnItems" :key="key">
          {{ t(key) }}
        </li>
      </ul>

      <!-- Second column -->
      <ul class="w-full list-disc list-inside flex flex-col gap-2 text-sm">
        <li v-for="key in secondColumnItems" :key="key">
          {{ t(key) }}
        </li>
      </ul>

      <!-- Gradient overlay when content is collapsed -->
      <div
        v-if="isCollapsed"
        class="pointer-events-none absolute bottom-0 left-0 w-full h-18 bg-linear-to-b from-black/0 dark:to-neutral-900 to-neutral-50"
      />
    </div>

    <!-- Toggle button -->
    <motion.button
      :while-press="{ scale: 0.9 }"
      class="mt-2 mx-auto flex h-8 max-w-30 w-full items-center justify-center gap-1 rounded-md bg-elevated text-sm cursor-pointer shadow-none"
      @click="toggleCollapse"
    >
      <UIcon :name="toggleIcon" class="size-4" />

      <span>
        {{ toggleLabel }}
      </span>
    </motion.button>
  </section>
</template>

<script setup lang="ts">
/**
 * About.vue
 * ----------------------------
 * Home page "About me" section.
 * Displays a two-column list of translated bullet points
 * with a collapsible / expandable behavior.
 */

import { motion } from "motion-v";
import { computed, ref } from "vue";

/**
 * i18n composable (Nuxt auto-import)
 */
const { t } = useI18n();

/**
 * Translation keys for about items.
 * Keeping keys centralized makes it easier
 * to reorder or extend later.
 */
const ABOUT_ITEM_KEYS = [
  "pages.home.about.item-1",
  "pages.home.about.item-2",
  "pages.home.about.item-3",
  "pages.home.about.item-4",
  "pages.home.about.item-5",
  "pages.home.about.item-6",
  "pages.home.about.item-7",
];

/**
 * UI state
 */
const isCollapsed = ref(true);

/**
 * Split items into two columns.
 * First column intentionally larger for visual balance.
 */
const firstColumnItems = computed(() => ABOUT_ITEM_KEYS.slice(0, 5));

const secondColumnItems = computed(() => ABOUT_ITEM_KEYS.slice(5));

/**
 * Dynamic container classes
 * Controls collapse / expand animation via max-height.
 */
const contentContainerClasses = computed(() => [
  "relative flex overflow-hidden gap-4 transition-all duration-300",
  "flex-col md:flex-row",
  isCollapsed.value ? "lg:max-h-18 max-h-35" : "max-h-250",
]);

/**
 * Toggle helpers
 */
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleIcon = computed(() =>
  isCollapsed.value
    ? "solar:double-alt-arrow-down-line-duotone"
    : "solar:double-alt-arrow-up-line-duotone"
);

const toggleLabel = computed(() =>
  isCollapsed.value ? t("pages.home.ele.show-more") : t("pages.home.ele.hide")
);
</script>
