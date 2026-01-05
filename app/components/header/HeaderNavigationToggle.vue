<template>
  <motion.button
    :while-press="{ scale: 0.9 }"
    @press="handleClick"
    class="group w-10 rounded-md block h-full p-0 text-muted cursor-pointer hover:text-highlighted hover:bg-elevated/70 bg-elevated focus:bg-elevated focus:ring-transparent focus:right-0 active:bg-elevated transition-colors before:transition-colors data-[state=open]:text-highlighted data-[state=open]:before:bg-elevated/5"
    size="xl"
  >
    <UIcon
      class="h-full group-hover:text-primary size-6"
      :name="
        isOpen
          ? 'solar:close-circle-line-duotone'
          : 'solar:menu-dots-line-duotone'
      "
    />
  </motion.button>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

defineProps<{
  isOpen?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const handleClick = (e: MouseEvent) => {
  emit("click", e); // forwarding event
};
</script>
