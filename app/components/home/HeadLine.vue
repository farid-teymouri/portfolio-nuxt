<template>
  <div
    :id="id"
    class="border-x border-dashed border-muted/80 flex flex-row gap-2 items-center h-8 px-2"
  >
    <UIcon
      name="solar:hashtag-square-line-duotone"
      class="block lg:size-6 size-4"
    ></UIcon>
    <component :is="tag" class="lg:text-2xl text-lg">
      {{ headerText }}
    </component>
  </div>
</template>

<script setup lang="ts">
defineProps({
  headerText: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  tag: {
    type: String as () => "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    default: "h2",
  },
});
</script>
