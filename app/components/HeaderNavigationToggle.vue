<template>
  <UButton
    :icon="
      isOpen
        ? 'solar:close-circle-line-duotone'
        : 'solar:menu-dots-line-duotone'
    "
    class="h-full group w-10 flex p-0 text-muted cursor-pointer hover:text-highlighted hover:bg-elevated/70 bg-elevated focus:bg-elevated focus:ring-transparent focus:right-0 active:bg-elevated transition-colors before:transition-colors data-[state=open]:text-highlighted data-[state=open]:before:bg-elevated/5"
    :class="
      isOpen
        ? 'text-red-500 focus:text-red-500'
        : 'text-muted focus:text-muted '
    "
    size="xl"
    :ui="{
      leadingIcon: 'h-full  group-hover:text-primary',
    }"
    @click="$emit('click')"
  />
</template>
<script setup lang="ts">
defineProps<{
  isOpen?: boolean;
}>();
defineEmits(["click"]);
</script>
