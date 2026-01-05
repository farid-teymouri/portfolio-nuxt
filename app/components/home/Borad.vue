<template>
  <!-- Board container -->
  <section
    class="relative flex flex-col lg:flex-row items-center justify-between border-x border-dashed border-muted/80"
  >
    <!-- Draggable playground -->
    <motion.div
      ref="constraintsRef"
      class="relative flex w-full h-full overflow-hidden bg-prodots"
    >
      <svg
        class="absolute sm:-top-10 lg:block hidden left-1/2 transform -translate-x-1/2 w-512 h-78 z-0"
        viewBox="0 0 1252 430 "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_199_94966)">
          <path
            class="text-primary"
            d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_199_94966"
            x="0.873535"
            y="-659"
            width="1255.25"
            height="1251.52"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40.5"
              result="effect1_foregroundBlur_199_94966"
            />
          </filter>
        </defs>
      </svg>
      <svg
        class="absolute lg:hidden -top-16 block left-1/2 transform -translate-x-1/2 w-512 h-80 z-0"
        viewBox="0 0 1252 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_199_94966)">
          <path
            class="text-primary"
            d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_199_94966"
            x="0.873535"
            y="-659"
            width="1255.25"
            height="1251.52"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40.5"
              result="effect1_foregroundBlur_199_94966"
            />
          </filter>
        </defs>
      </svg>
      <!-- Draggable logo -->
      <motion.div
        drag
        :style="{ x, y }"
        :dragConstraints="constraintsRef"
        :dragElastic="0.2"
        :whileDrag="{ scale: 1.2 }"
        :animate="logoAnimation"
        :transition="logoTransition"
        class="mx-auto flex min-h-59 items-center cursor-grab active:cursor-grabbing z-10"
      >
        <HeaderLogo
          :width="70"
          :height="76"
          class="border-0 shadow-none focus:outline-none focus:ring-0"
        />
      </motion.div>
    </motion.div>

    <!-- Reset position button -->
    <motion.div
      class="absolute top-4 rtl:right-4 ltr:left-4"
      :whileHover="{ scale: 1.1 }"
      :whilePress="{ scale: 0.7 }"
    >
      <UButton
        icon="solar:refresh-circle-line-duotone"
        color="neutral"
        variant="outline"
        size="md"
        class="bg-elevated shadow-none cursor-pointer"
        @click="resetPosition"
      />
    </motion.div>
  </section>
</template>

<script setup lang="ts">
/**
 * Borad.vue
 * ----------------------------------
 * Interactive draggable board used on the Home page.
 * Allows the user to drag the logo within the container
 * and reset it back to the center.
 */

import { motion, useMotionValue, useDomRef, easeInOut } from "motion-v";

/**
 * DOM reference used by motion-v
 * to limit draggable area (drag constraints)
 */
const constraintsRef = useDomRef();

/**
 * Motion values for drag position.
 * Using MotionValue keeps animations smooth
 * and avoids unnecessary Vue re-renders.
 */
const x = useMotionValue(0);
const y = useMotionValue(0);

/**
 * Initial logo animation
 * Runs once when component is mounted.
 */
const logoAnimation = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 180, 180, 0],
  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
};

/**
 * Animation timing configuration
 */
const logoTransition = {
  duration: 1,
  ease: easeInOut,
  times: [0, 0.2, 0.5, 0.8, 1],
};

/**
 * Reset draggable position to center
 */
const resetPosition = () => {
  x.set(0);
  y.set(0);
};
</script>
