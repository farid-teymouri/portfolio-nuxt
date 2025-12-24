<template>
  <div
    class="sm:bg-linear border-x border-dashed border-muted flex sm:flex-row flex-col gap-4 justify-between"
  >
    <ul
      class="flex lg:flex-row flex-col w-full items-center justify-center gap-4 lg:border-e-0 sm:border-e border-dashed border-muted"
    >
      <motion.li
        class="w-full lg:border-b-0 border-b lg:border-e sm:border-e-0 border-dashed border-muted bg-default group"
        @mouseenter="controls4.start('hover')"
        @mouseleave="controls4.start('rest')"
      >
        <ULink
          class="flex flex-row gap-4 p-4 pr-2"
          to="https://github.com/farid-teymouri"
          target="_blank"
        >
          <div class="max-w-12 max-h-12">
            <motion.div
              :animate="controls4"
              :variants="iconVariants"
              initial="rest"
            >
              <NuxtImg
                src="/images/github.webp"
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
              GitHub
            </span>
            <span class="text-sm text-muted">farid-teymouri</span>
          </div>
        </ULink>
      </motion.li>
      <motion.li
        class="w-full lg:border-x sm:border-b-0 border-t border-b lg:border-t-0 sm:border-x-0 border-dashed border-muted bg-default group"
        @mouseenter="controls3.start('hover')"
        @mouseleave="controls3.start('rest')"
      >
        <ULink
          class="flex flex-row gap-4 p-4 pr-2"
          to="https://dev.to/faridteymouri"
          target="_blank"
        >
          <div class="max-w-12 max-h-12">
            <motion.div
              :animate="controls3"
              :variants="iconVariants"
              initial="rest"
            >
              <NuxtImg
                src="/images/devto.png"
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
              dev.to
            </span>
            <span class="text-sm text-muted">@faridteymouri</span>
          </div>
        </ULink>
      </motion.li>
    </ul>
    <ul
      class="flex lg:flex-row flex-col w-full items-center gap-4 justify-center lg:border-s-0 sm:border-s border-dashed border-muted"
    >
      <motion.li
        class="w-full lg:border-x sm:border-x-0 border-b lg:border-b-0 sm:border-t-0 border-t border-dashed border-muted bg-default group"
        @mouseenter="controls1.start('hover')"
        @mouseleave="controls1.start('rest')"
      >
        <ULink
          class="flex flex-row gap-4 p-4 pr-2"
          to="https://x.com/faridteimori"
          target="_blank"
        >
          <div class="max-w-12 max-h-12">
            <motion.div
              :animate="controls1"
              :variants="iconVariants"
              initial="rest"
            >
              <NuxtImg
                src="/images/x.webp"
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
              Social X
            </span>
            <span class="text-sm text-muted">@faridteimori</span>
          </div>
        </ULink>
      </motion.li>
      <motion.li
        class="w-full lg:border-s sm:border-s-0 lg:border-t-0 border-t border-dashed border-muted bg-default group"
        @mouseenter="controls2.start('hover')"
        @mouseleave="controls2.start('rest')"
      >
        <ULink
          class="flex flex-row gap-4 p-4 pr-2"
          to="https://app.daily.dev/faridteymouri"
          target="_blank"
        >
          <div class="max-w-12 max-h-12">
            <motion.div
              :animate="controls2"
              :variants="iconVariants"
              initial="rest"
            >
              <NuxtImg
                src="/images/dailydotdev.webp"
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
              daily.dev
            </span>
            <span class="text-sm text-muted">@faridteymouri</span>
          </div>
        </ULink>
      </motion.li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { t, setLocale } = useI18n();
import { motion } from "motion-v";
import { useAnimationControls } from "motion-v";

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const controls1 = useAnimationControls();
const controls2 = useAnimationControls();
const controls3 = useAnimationControls();
const controls4 = useAnimationControls();
</script>
