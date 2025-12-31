<script setup lang="ts">
import { motion } from "motion-v";
import type { SelectItem } from "@nuxt/ui";

// Define theme options with labels, values, and icons
const themeItems = [
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
] satisfies SelectItem[];

// Type for theme values
type Theme = "system" | "light" | "dark";

// Access Nuxt color mode composable
const colorMode = useColorMode();

// Reactive value bound to USelect
const selectedTheme = ref<Theme>("system");

// Safely retrieve the icon for the currently selected theme
function getSelectedIcon(): string {
  return (
    themeItems.find((item) => item.value === selectedTheme.value)?.icon ??
    "solar:devices-line-duotone"
  );
}

// Initialize and set up watchers
onMounted(() => {
  // Set initial value from stored preference (fallback to 'system')
  selectedTheme.value = (colorMode.preference ?? "system") as Theme;

  // Update colorMode when user selects a new theme
  watch(selectedTheme, (newValue) => {
    colorMode.preference = newValue;
  });

  // Update local value if preference changes externally
  watch(
    () => colorMode.preference,
    (newPreference) => {
      selectedTheme.value = (newPreference ?? "system") as Theme;
    }
  );
});
</script>

<template>
  <!-- Motion wrapper for hover and tap animations -->
  <motion.div
    :whileHover="{ scale: 1.1 }"
    :whileTap="{ scale: 1.9 }"
    class="block"
  >
    <!-- Icon-only select for theme switching -->
    <USelect
      v-model="selectedTheme"
      :items="themeItems"
      value-attribute="value"
      :ui="{
        content: 'w-10 text-center',
        trailing: 'hidden',
        trailingIcon: 'hidden',
        item: 'cursor-pointer text-center hover:bg-elevated rounded-md py-1',
        base: 'flex! flex-col items-center  justify-center ',
      }"
      class="w-fit h-full block p-0 text-center border-0 ring-0 text-muted cursor-pointer focus:ring-0 hover:bg-elevated bg-elevated focus:bg-elevated transition-colors data-[state=open]:text-highlighted data-[state=open]:bg-elevated"
    >
      <!-- Display only the selected theme's icon in the trigger -->
      <template #default>
        <UIcon
          :name="getSelectedIcon()"
          class="text-md text-center px-3 h-5 w-10 mx-auto"
        />
      </template>

      <!-- Empty trailing slot to fully hide trailing elements -->
      <template #trailing />

      <!-- Render each dropdown item as a centered icon -->
      <template #item="{ item }">
        <div class="flex items-center justify-center w-full py-1">
          <UIcon :name="item.icon" class="w-5 h-5" />
        </div>
      </template>
    </USelect>
  </motion.div>
</template>
