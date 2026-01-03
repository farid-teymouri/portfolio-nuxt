<template #item="{ item }">
  <div
    v-if="item && !item.children"
    class="w-full flex md:flex-row flex-wrap gap-2 justify-start items-center text-start"
  >
    <div class="w-fit flex flex-row justify-start items-center gap-2">
      <ClientOnly>
        <UIcon
          v-if="item.icon && isReady"
          :name="
            item.iconDark && iconColorMode == 'dark' ? item.iconDark : item.icon
          "
          class="size-7"
          :key="iconColorMode"
        />
        <span v-else class="size-7 opacity-0"></span>
      </ClientOnly>
      <div
        class="w-fit rounded-md px-1 py-0.5 bg-accented/35 font-normal lg:text-md text-sm font-sans text-nowrap"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="text-sm text-muted">{{ item.suffix }}</div>
  </div>
</template>

<script setup lang="ts">
interface CommandPaletteItem {
  label?: string;
  suffix?: string;
  icon?: string;
  iconDark?: string;
  children?: CommandPaletteItem[];
}

withDefaults(
  defineProps<{
    item?: CommandPaletteItem | null;
    isReady?: boolean;
    iconColorMode?: string;
  }>(),
  {
    item: null,
    isReady: true,
    iconColorMode: "light",
  }
);
</script>
