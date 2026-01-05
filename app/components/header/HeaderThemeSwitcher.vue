<script setup lang="ts">
import type { SelectMenuItem } from "@nuxt/ui";

// --- 1. Type Definition ---
// Define a strict interface for theme options to ensure type safety and clarity.
interface ThemeItem {
  label: string;
  value: "system" | "light" | "dark";
  icon: string; // Icon identifier compatible with your icon resolver (e.g., Iconify)
}

// --- 2. Immutable Theme Options ---
// Declare theme options as a readonly tuple using `as const` to preserve literal types,
// then validate structure with `satisfies` to ensure conformance to ThemeItem.
const themeItems = [
  { label: "System", value: "system", icon: "solar:devices-line-duotone" },
  { label: "Light", value: "light", icon: "si:sun-set-duotone" },
  { label: "Dark", value: "dark", icon: "solar:moon-fog-bold-duotone" },
] as const satisfies ThemeItem[];

// --- 3. UI Compatibility Layer ---
// Cast to `SelectMenuItem[]` for compatibility with `<USelectMenu>`,
// which expects a specific shape. This is safe due to structural alignment.
const themeItemsForUI = themeItems as unknown as SelectMenuItem[];

// --- 4. Reactive State & Integration ---
// Use Nuxt's `useColorMode()` composable to manage user theme preference.
const colorMode = useColorMode();

// Track the currently selected theme with precise typing.
// Initialize to the first option ("System") as default.
const selectedTheme = ref<ThemeItem | undefined>(themeItems[0]);

/**
 * Helper to safely retrieve the icon of the currently selected theme.
 * Falls back to the "System" icon if no selection exists.
 */
function getSelectedIcon(): string {
  return selectedTheme.value?.icon ?? "solar:devices-line-duotone";
}

// --- 5. Synchronization Logic ---
onMounted(() => {
  // Restore user's saved preference from `useColorMode()` on mount
  const savedPreference = colorMode.preference ?? "system";
  selectedTheme.value = themeItems.find(
    (item) => item.value === savedPreference
  );

  // Watch for changes in the local selection and sync to `colorMode.preference`
  watch(selectedTheme, (item) => {
    if (item?.value) {
      colorMode.preference = item.value;
    }
  });

  // Watch for external changes to `colorMode.preference` (e.g., system-triggered updates)
  // and reflect them in the local selection state to keep UI in sync.
  watch(
    () => colorMode.preference,
    (pref) => {
      if (pref) {
        selectedTheme.value = themeItems.find((item) => item.value === pref);
      }
    }
  );
});
</script>

<template>
  <USelectMenu
    v-model="selectedTheme"
    :items="themeItemsForUI"
    value-attribute="value"
    :searchInput="false"
    :ui="{
      content: 'w-10 text-center',
      trailing: 'hidden',
      trailingIcon: 'hidden',
      item: 'cursor-pointer text-center hover:bg-elevated rounded-md py-1',
      base: 'flex! flex-col items-center justify-center',
    }"
    class="w-fit h-full block p-0 text-center border-0 active:scale-120 transition-all duration-100 ring-0 text-muted cursor-pointer focus:ring-0 hover:bg-elevated bg-elevated focus:bg-elevated data-[state=open]:text-highlighted data-[state=open]:bg-elevated"
  >
    <template #default>
      <UIcon
        :name="getSelectedIcon()"
        class="text-md text-center px-3 h-5 w-10 mx-auto"
      />
    </template>

    <template #trailing />

    <template #item="{ item }">
      <div class="flex items-center justify-center w-full py-1">
        <UIcon
          :name="
            typeof item === 'object' && item?.icon
              ? item.icon
              : 'solar:devices-line-duotone'
          "
          class="w-5 h-5"
        />
      </div>
    </template>
  </USelectMenu>
</template>
