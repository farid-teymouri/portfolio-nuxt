<script setup lang="ts">
import { motion } from "motion-v";

// Country interface matching the API response
interface Country {
  name: string;
  code: "en" | "fa"; // Extend if more locales are added
  flag: string;
}

// Fetch countries list (static JSON)
const { data: countries, status } = await useLazyFetch<Country[]>(
  "/api/countries.json"
);

// Reactive reference for the selected country (full object)
const selectedCountry = ref<Country | undefined>(undefined);

// i18n composables
const { locale, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();
const route = useRoute();

// Initialize selected country based on current locale once data is available
watchEffect(() => {
  if (countries.value && selectedCountry.value === undefined) {
    selectedCountry.value =
      countries.value.find((c) => c.code === locale.value) ??
      countries.value[0];
  }
});

// Handle locale change when a new country is selected
watch(selectedCountry, async (newCountry) => {
  if (newCountry && newCountry.code !== locale.value) {
    // Update locale (persists cookie and triggers i18n updates)
    await setLocale(newCountry.code);

    // Compute the equivalent path in the new locale
    const targetPath = switchLocalePath(newCountry.code);

    // Navigate only if the path differs (prevents unnecessary reloads)
    if (targetPath && route.fullPath !== targetPath) {
      await router.push(targetPath);
    }
  }
});

// Utility to retrieve the currently selected flag with fallback
function getSelectedFlag(): string {
  return selectedCountry.value?.flag ?? "🌍";
}
</script>

<template>
  <!-- Motion wrapper for subtle hover and tap animations -->
  <motion.div
    :whileHover="{ scale: 1.1 }"
    :whileTap="{ scale: 1.9 }"
    class="inline-block"
  >
    <!-- Flag-only select menu for language/country switching -->
    <USelectMenu
      v-model="selectedCountry"
      :items="countries"
      :loading="status === 'pending'"
      searchable
      value-attribute="code"
      option-attribute="name"
      :searchable-placeholder="locale === 'fa' ? 'جستجو…' : 'Search...'"
      :ui="{
        content: 'w-64',
        trailing: 'hidden',
        trailingIcon: 'hidden',
        item: 'cursor-pointer flex items-center justify-start gap-3 hover:bg-elevated rounded-md py-2',
      }"
      class="w-fit h-full block p-0 text-center border-0 ring-0 text-muted cursor-pointer hover:text-highlighted hover:bg-elevated/70 bg-elevated focus:bg-elevated transition-colors data-[state=open]:text-highlighted data-[state=open]:bg-elevated/70"
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
            'font-family':
              item.code === 'fa' ? 'Shabnam, sans-serif' : undefined,
          }"
        >
          {{ item.name }}
        </span>
      </template>
    </USelectMenu>
  </motion.div>
</template>
