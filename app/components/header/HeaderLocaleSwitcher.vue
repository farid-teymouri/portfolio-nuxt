<script setup lang="ts">
import { motion } from "motion-v";

// --- 1. Data Model ---
// Represents a supported country/locale with strict typing for code values.
// Extend the union type if additional locales (e.g., "fr", "de") are introduced.
interface Country {
  name: string;
  code: "en" | "fa"; // ISO 639-1 language code
  flag: string; // Flag emoji or icon identifier (e.g., "🇺🇸", "🇮🇷", or icon name)
}

// --- 2. Data Fetching ---
// Fetch a static list of supported countries from a local JSON API endpoint.
// Uses lazy fetching to avoid blocking component hydration.
const { data: countries, status } = await useLazyFetch<Country[]>(
  "/api/countries.json"
);

// --- 3. Reactive State ---
// Holds the currently selected country object (not just the code) for UI consistency.
const selectedCountry = ref<Country | undefined>(undefined);

// --- 4. i18n & Routing Integration ---
// Access Nuxt i18n composables for locale management and path switching.
const { locale, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();
const route = useRoute();

// --- 5. Initialization Logic ---
// Once country data is loaded, initialize the selected country based on the current i18n locale.
// Falls back to the first country if no match is found (e.g., invalid locale).
watchEffect(() => {
  if (countries.value && selectedCountry.value === undefined) {
    selectedCountry.value =
      countries.value.find((c) => c.code === locale.value) ??
      countries.value[0];
  }
});

// --- 6. Locale Switching Handler ---
// Watch for changes in the selected country and synchronize with Nuxt i18n + routing.
watch(selectedCountry, async (newCountry) => {
  if (newCountry && newCountry.code !== locale.value) {
    // Update the active locale (affects translations, cookies, and reactivity)
    await setLocale(newCountry.code);

    // Generate the equivalent route in the target locale
    const targetPath = switchLocalePath(newCountry.code);

    // Navigate only if the new path differs from the current one,
    // avoiding redundant navigation or component reloads.
    if (targetPath && route.fullPath !== targetPath) {
      await router.push(targetPath);
    }
  }
});

// --- 7. UI Helper ---
/**
 * Returns the flag emoji/icon for the currently selected country.
 * Provides a fallback globe emoji if no selection exists (e.g., during loading).
 */
function getSelectedFlag(): string {
  return selectedCountry.value?.flag ?? "🌍";
}
</script>

<template>
  <!-- Motion wrapper for subtle hover and tap animations -->
  <!-- <motion.div
    :whileHover="{ scale: 1.1 }"
    :while-focus="{ scale: 1.8 }"
    class="inline-block"
  > -->
  <!-- Flag-only select menu for language/country switching -->
  <USelectMenu
    v-model="selectedCountry"
    :items="countries"
    :loading="status === 'pending'"
    searchable
    value-attribute="code"
    option-attribute="name"
    :highlightOnHover="true"
    :searchable-placeholder="locale === 'fa' ? 'جستجو…' : 'Search...'"
    :ui="{
      base: 'bg-red-500',
      content: 'w-64 border-accented border mt-1',
      trailing: 'hidden',
      trailingIcon: 'hidden',
      item: 'cursor-pointer flex items-center justify-start gap-3 hover:bg-elevated rounded-md py-2',
    }"
    class="w-fit h-full block p-0 text-center border-0 active:scale-120 transition-all duration-100 ring-0 text-muted cursor-pointer hover:text-highlighted hover:bg-elevated/70 bg-elevated focus:bg-elevated data-[state=open]:text-highlighted data-[state=open]:bg-elevated/70"
  >
    <!-- Trigger: Display only the selected flag -->
    <template #default>
      <div class="flex items-center justify-center w-10">
        <span class="text-lg font-sans">{{ getSelectedFlag() }}</span>
      </div>
    </template>

    <!-- Empty trailing slot to fully hide trailing elements -->
    <template #trailing />

    <!-- Dropdown item: Flag + Country name -->
    <template #item="{ item }">
      <span class="text-lg">{{ item.flag }}</span>
      <span
        class="truncate"
        :style="{
          'font-family': item.code === 'fa' ? 'Shabnam, sans-serif' : undefined,
        }"
      >
        {{ item.name }}
      </span>
    </template>
  </USelectMenu>
  <!-- </motion.div> -->
</template>
