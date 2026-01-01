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
      <!-- Draggable logo -->
      <motion.div
        drag
        :style="{ x, y }"
        :dragConstraints="constraintsRef"
        :dragElastic="0.2"
        :whileDrag="{ scale: 1.2 }"
        :animate="logoAnimation"
        :transition="logoTransition"
        class="mx-auto flex min-h-59 items-center cursor-grab active:cursor-grabbing"
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
