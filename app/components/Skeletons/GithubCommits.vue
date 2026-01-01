<script setup lang="ts">
/**
 * SkeletonLines.vue
 * ----------------------------------
 * Multi-line skeleton loader with randomized line widths.
 * Randomization happens only on the client to avoid
 * SSR hydration mismatches in Nuxt.
 */

import { ref, onMounted } from "vue";

/**
 * Width boundaries (percentage-based)
 * Used to simulate realistic text line lengths.
 */
const MIN_LINE_WIDTH = 12;
const MAX_LINE_WIDTH = 72;

/**
 * Precomputed widths for skeleton lines.
 * Stored in a ref to keep rendering cheap and predictable.
 */
const lineWidths = ref<string[]>([]);

/**
 * Generate random widths on client-side only.
 * This ensures deterministic SSR output
 * and prevents hydration warnings.
 */
onMounted(() => {
  lineWidths.value = Array.from({ length: 7 }, () => {
    const width =
      Math.random() * (MAX_LINE_WIDTH - MIN_LINE_WIDTH) + MIN_LINE_WIDTH;

    // Rounded to one decimal place for visual consistency
    return `${Math.round(width * 10) / 10}%`;
  });
});
</script>

<template>
  <!-- Skeleton container -->
  <div class="flex min-h-50 flex-col gap-3.5">
    <!-- Header / title placeholder -->
    <USkeleton class="h-3.5 w-full" />

    <!-- Body text placeholders -->
    <USkeleton
      v-for="(width, index) in lineWidths"
      :key="index"
      class="h-3 rounded"
      :style="{ width }"
    />
  </div>
</template>
