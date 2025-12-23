<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";

type ThemeItem = {
  label: string;
  value: "system" | "light" | "dark";
  icon: string;
};
type Theme = "system" | "light" | "dark";

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

const colorMode = useColorMode();

// 使用 ref 来存储值，初始化为 'system' 以确保 SSR 和客户端一致
const value = ref<Theme>("system");

// 在 mounted 之后才同步颜色模式
onMounted(() => {
  // 客户端初始化
  value.value = colorMode.preference as Theme;

  // 监听值变化
  watch(value, (newValue) => {
    colorMode.preference = newValue;
  });

  // 监听外部变化
  watch(
    () => colorMode.preference,
    (newPref) => {
      value.value = newPref as Theme;
    }
  );
});

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
      item: 'cursor-pointer text-center content-center hover:bg-elevated rounded-md',
    }"
    class="w-fit block p-0 text-center justify-center content-center border-0 ring-0 text-muted cursor-pointer focus:ring-transparent focus:right-0 hover:bg-elevated bg-elevated focus:bg-elevated transition-colors before:transition-colors data-[state=open]:text-highlighted data-[state=open]:before:bg-elevated"
  >
    <!-- Leading slot shows only the selected item's icon -->
    <!-- Override the selected item completely -->
    <template #default>
      <UIcon
        :name="
          items.find((item) => item.value === value)?.icon ||
          'solar:devices-line-duotone'
        "
        class="h-5 w-10 content-center flex"
      />
    </template>

    <template #trailing />
    <!-- Custom slot for dropdown items - show only icons with null checking -->
    <template #item="{ item }: { item: ThemeItem }">
      <div class="flex items-center justify-center w-8 h-8">
        <UIcon :name="item.icon" class="w-5 h-5" />
      </div>
    </template>
  </USelect>
</template>
