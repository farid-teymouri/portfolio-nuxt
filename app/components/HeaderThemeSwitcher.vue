<script setup lang="ts">
// Import necessary types and composables
import type { SelectItem } from "@nuxt/ui";

type ThemeItem = {
  label: string;
  value: "system" | "light" | "dark";
  icon: string;
};
type Theme = "system" | "light" | "dark";
// Define the theme options: System, Light, Dark
const items = ref<ThemeItem[]>([
  {
    label: "System",
    value: "system",
    icon: "solar:devices-line-duotone",
  },
  {
    label: "Light",
    value: "light",
    icon: "si:sun-set-duotone",
  },
  {
    label: "Dark",
    value: "dark",
    icon: "solar:moon-fog-bold-duotone",
  },
]);

// Get the color mode composable provided by @nuxtjs/color-mode (integrated in Nuxt UI)
const colorMode = useColorMode();

// Reactive value for the select component, initialized with current preference
const value = computed<Theme>({
  get: () => colorMode.preference as Theme,
  set: (val) => {
    colorMode.preference = val;
  },
});

// Watch for changes in the select value and update the color mode preference
watch(value, (newValue) => {
  colorMode.preference = newValue;
});

// Optional: Sync the select value if the preference changes externally (e.g., from another component)
watch(
  () => colorMode.preference,
  (newPref) => {
    value.value = newPref as Theme;
  }
);
function isThemeItem(item: unknown): item is ThemeItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "icon" in item &&
    "value" in item
  );
}
</script>

<template>
  <!-- Select component with icon-only display -->
  <USelect
    v-model="value"
    :items="items"
    :item-label="() => ''"
    :ui="{
      content: 'w-10 text-center content-center',
      trailing: 'hidden',
      trailingIcon: 'hidden',
      item: 'cursor-pointer hover:text-primary text-center content-center',
    }"
    class="w-fit block p-0 text-center justify-center content-center border-0 ring-0 text-muted cursor-pointer focus:ring-transparent focus:right-0 hover:text-primary hover:bg-elevated/70 bg-elevated/40 transition-colors before:transition-colors data-[state=open]:text-highlighted data-[state=open]:before:bg-elevated/5"
  >
    <!-- Leading slot shows only the selected item's icon -->
    <!-- Override the selected item completely -->
    <template #default>
      <UIcon
        :name="
          items.find((item) => item.value === value)?.icon ||
          'solar:devices-line-duotone'
        "
        class="h-5 w-10 content-center flex hover:text-primary"
      />
    </template>

    <template #trailing />
    <!-- Custom slot for dropdown items - show only icons with null checking -->
    <template #item="{ item }: { item: ThemeItem }">
      <div class="flex items-center justify-center w-8 h-8 hover:text-primary">
        <UIcon :name="item.icon" class="w-5 h-5" />
      </div>
    </template>
  </USelect>
</template>
