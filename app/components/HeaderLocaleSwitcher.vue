<script setup lang="ts">
import { useI18n, useSwitchLocalePath } from "#imports";
import { useRouter } from "#app";

const { t, setLocale, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();
const route = useRoute();
// Fetch countries list
const { data: countries, status } = await useLazyFetch<
  { name: string; code: string; flag: string }[]
>("/api/countries.json", { immediate: true });

// Selected country ref
const selectedCountry = ref<
  { name: string; code: string; flag: string } | undefined
>(undefined);

// Set initial country based on current locale
watchEffect(() => {
  if (countries.value?.length && selectedCountry.value === undefined) {
    selectedCountry.value =
      countries.value.find((c) => c.code === locale.value) ??
      countries.value[0] ??
      undefined;
  }
});

// Handle locale switching when selection changes
watch(selectedCountry, async (newCountry) => {
  if (newCountry && newCountry.code !== locale.value) {
    const targetPath = switchLocalePath(newCountry.code as "en" | "fa");
    if (route.fullPath !== targetPath) {
      await setLocale(newCountry.code as "en" | "fa");
      router.push(targetPath);
    }
  }
});

// Optional: fallback loading trigger (rarely needed due to immediate: true)
function onOpen(isOpen: boolean) {
  if (isOpen && !countries.value?.length) {
    // Safety net – data should already be loaded
  }
}
</script>

<template>
  <USelectMenu
    :arrow="false"
    v-model="selectedCountry"
    :items="countries"
    :loading="status === 'pending'"
    label-key="name"
    searchable
    :search-input="{
      icon: 'i-lucide-search',
      placeholder: locale === 'fa' ? 'جستجو…' : 'Search...',
    }"
    class="w-fit block p-0 text-center justify-center content-center border-0 ring-0 text-muted cursor-pointer hover:text-highlighted hover:bg-elevated/70 bg-elevated focus:bg-elevated transition-colors before:transition-colors data-[state=open]:text-highlighted data-[state=open]:before:bg-elevated/5"
    :ui="{
      content: 'w-34',
      trailing: 'hidden',
      trailingIcon: 'hidden',
      item: 'cursor-pointer content-center justify-center flex',
    }"
    @update:open="onOpen"
  >
    <template #default="{ modelValue }">
      <div class="flex items-center justify-center">
        <span
          class="text-md text-center mx-auto px-3 h-5 w-10"
          style="font-family: Arial, Helvetica, sans-serif"
        >
          {{ modelValue?.flag ?? "🌍" }}
        </span>
      </div>
    </template>

    <template #trailing />

    <template #item-leading="{ item }">
      <span class="size-5 text-center">{{ item.flag }}</span>
    </template>

    <template #item="{ item }">
      <span class="size-5 text-center">{{ item.flag }}</span>
      <span
        class="truncate"
        :style="locale === 'en' ? 'font-family: Shabnam;' : ''"
      >
        {{ item.name }}
      </span>
    </template>
  </USelectMenu>
</template>
