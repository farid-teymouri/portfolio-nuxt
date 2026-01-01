<template>
  <!--
    Main skeleton container
    Used as a placeholder for content with dynamic width
  -->
  <div
    class="flex min-h-29.25 w-full flex-col items-center justify-center px-4 text-center"
    :style="containerStyle"
  >
    <!-- Primary content skeleton (e.g. card / preview area) -->
    <USkeleton class="h-35 w-full" />
  </div>

  <!--
    Footer skeleton
    Represents meta information (e.g. title / date / actions)
  -->
  <div
    class="flex w-full max-h-4 flex-row justify-between px-4"
    :style="containerStyle"
  >
    <USkeleton class="h-3.5 w-full max-w-16" />
    <USkeleton class="h-3.5 w-full max-w-16" />
  </div>
</template>

<script setup lang="ts">
/**
 * Props
 * ----------------------------------
 * `containerStyle` allows parent components to control
 * the width of the skeleton (e.g. percentage-based layouts).
 */

defineProps<{
  /**
   * Inline style applied to both skeleton containers.
   * Example: { width: '60%' }
   */
  containerStyle?: string;
}>();
</script>
