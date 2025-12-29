<template>
  <div
    class="w-full flex flex-col justify-center items-center text-center px-4 min-h-29.25"
    :style="widthClass"
  >
    <USkeleton class="h-35 w-full" />
  </div>

  <div
    class="flex flex-row justify-between px-4 w-full min-h-50"
    :style="widthClass"
  >
    <USkeleton class="h-3.5 max-w-16 w-full" />
    <USkeleton class="h-3.5 max-w-16 w-full" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  widthClass?: string;
}>();
</script>
