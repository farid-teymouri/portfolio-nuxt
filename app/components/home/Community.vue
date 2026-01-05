<template>
  <section
    class="sm:bg-linear border-x border-dashed border-muted flex sm:flex-row flex-col gap-4 justify-between"
  >
    <ul
      class="flex lg:flex-row flex-col w-full items-center justify-center gap-4 lg:border-e-0 sm:border-e border-dashed border-muted"
    >
      <motion.li
        v-for="(item, index) in firstColumnLinks"
        :key="item.name"
        class="w-full border-dashed border-muted bg-default group hover:bg-muted"
        :class="item.classes"
        @mouseenter="handleHover(index)"
        @mouseleave="handleRest(index)"
      >
        <ULink
          class="flex flex-row gap-4 p-4 pr-2"
          :to="item.url"
          target="_blank"
        >
          <div class="max-w-12 max-h-12">
            <motion.div
              :animate="controls[index]"
              :variants="iconVariants"
              initial="rest"
            >
              <NuxtImg
                :src="item.imgSrc"
                :alt="t('pages.home.profile.avatar-alt')"
                width="48"
                height="48"
                format="webp"
                quality="100"
                loading="lazy"
                class="block rounded-xl lg:size-12 md:size-12 size-12"
              />
            </motion.div>
          </div>
          <div class="flex flex-col justify-center">
            <span
              class="text-md dark:text-neutral-200 text-neutral-700 ltr:font-medium"
            >
              {{ item.displayName }}
            </span>
            <span class="text-sm text-muted">{{ item.handle }}</span>
          </div>
        </ULink>
      </motion.li>
    </ul>

    <ul
      class="flex lg:flex-row flex-col w-full items-center gap-4 justify-center lg:border-s-0 sm:border-s border-dashed border-muted"
    >
      <motion.li
        v-for="(item, index) in secondColumnLinks"
        :key="item.name"
        class="w-full border-dashed border-muted bg-default group hover:bg-muted"
        :class="item.classes"
        @mouseenter="handleHover(firstColumnLinks.length + index)"
        @mouseleave="handleRest(firstColumnLinks.length + index)"
      >
        <ULink
          class="flex flex-row gap-4 p-4 pr-2"
          :to="item.url"
          target="_blank"
        >
          <div class="max-w-12 max-h-12">
            <motion.div
              :animate="controls[firstColumnLinks.length + index]"
              :variants="iconVariants"
              initial="rest"
            >
              <NuxtImg
                :src="item.imgSrc"
                :alt="t('pages.home.profile.avatar-alt')"
                width="48"
                height="48"
                format="webp"
                quality="100"
                loading="lazy"
                class="block rounded-xl lg:size-12 md:size-12 size-12"
              />
            </motion.div>
          </div>
          <div class="flex flex-col justify-center">
            <span
              class="text-md dark:text-neutral-200 text-neutral-700 ltr:font-medium"
            >
              {{ item.displayName }}
            </span>
            <span class="text-sm text-muted">{{ item.handle }}</span>
          </div>
        </ULink>
      </motion.li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import { useAnimationControls } from "motion-v";
const { t } = useI18n();

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};
const handleHover = (idx: number) => controls[idx]?.start("hover");
const handleRest = (idx: number) => controls[idx]?.start("rest");
const firstColumnLinks = [
  {
    name: "github",
    displayName: "GitHub",
    handle: "farid-teymouri",
    url: "https://github.com/farid-teymouri",
    imgSrc: "/images/github.webp",
    classes: "lg:border-b-0 border-b lg:border-e sm:border-e-0",
  },
  {
    name: "devto",
    displayName: "dev.to",
    handle: "@faridteymouri",
    url: "https://dev.to/faridteymouri",
    imgSrc: "/images/devto.png",
    classes:
      "w-full lg:border-x sm:border-b-0 border-t border-b lg:border-t-0 sm:border-x-0",
  },
];

const secondColumnLinks = [
  {
    name: "x",
    displayName: "Social X",
    handle: "@faridteimori",
    url: "https://x.com/faridteimori",
    imgSrc: "/images/x.webp",
    classes:
      "w-full lg:border-x sm:border-x-0 border-b lg:border-b-0 sm:border-t-0",
  },
  {
    name: "dailydev",
    displayName: "daily.dev",
    handle: "@faridteymouri",
    url: "https://app.daily.dev/faridteymouri",
    imgSrc: "/images/dailydotdev.webp",
    classes: "w-full lg:border-s sm:border-s-0 lg:border-t-0 border-t",
  },
];

const controls = [
  ...firstColumnLinks.map(() => useAnimationControls()),
  ...secondColumnLinks.map(() => useAnimationControls()),
];
</script>
