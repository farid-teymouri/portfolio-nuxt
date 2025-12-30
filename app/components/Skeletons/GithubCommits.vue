<!-- 1. Cleaner version with pre-computed widths (better performance) -->
<script setup>
const MIN_WIDTH = 12;
const MAX_WIDTH = 72;

const lineWidths = Array(7)
  .fill(0)
  .map(() => {
    const w = Math.random() * (MAX_WIDTH - MIN_WIDTH) + MIN_WIDTH;
    return `${Math.round(w * 10) / 10}%`;
  });
</script>

<template>
  <div class="flex flex-col gap-3.5 min-h-50">
    <USkeleton class="h-3.5 w-full" />
    <USkeleton
      v-for="(width, i) in lineWidths"
      :key="i"
      class="h-3 rounded"
      :style="{ width }"
    />
  </div>
</template>
