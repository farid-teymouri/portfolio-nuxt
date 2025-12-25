<template>
  <div class="relative flex flex-col" dir="ltr" :style="[widthClass]">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 739 117"
      class="h-auto relative flex"
      preserveAspectRatio="xMinYMin meet"
    >
      <!-- Month labels -->
      <g transform="translate(45, 15)">
        <text
          v-for="(m, i) in months"
          :key="i"
          :x="m.x"
          y="0"
          font-size="11"
          fill="#fff"
        >
          {{ m.label }}
        </text>
      </g>

      <!-- Days grid -->
      <g transform="translate(25, 25)">
        <g
          v-for="(day, i) in days"
          :key="i"
          :transform="`translate(${weekIndex(i) * cell}, ${
            dayIndex(i) * cell
          })`"
        >
          <rect
            :width="cell - gap"
            :height="cell - gap"
            rx="0"
            ry="0"
            :fill="color(day.contributionLevel)"
            @mouseenter="showTooltip(day, $event)"
            @mouseleave="hideTooltip"
          />
        </g>
      </g>
    </svg>

    <div class="flex flex-row justify-between px-4">
      <!-- Total contributions display -->
      <div class="text-sm text-gray-400 mt-2" :dir="dir">
        {{ totalContributions }} {{ $t("github.contributions_in") }} {{ year }}
      </div>

      <!-- Legend: Less ... More -->
      <div class="flex items-center mt-2 space-x-1" dir="ltr">
        <span class="text-sm text-gray-400"> {{ $t("github.less") }}</span>
        <div
          v-for="level in [
            'NONE',
            'FIRST_QUARTILE',
            'SECOND_QUARTILE',
            'THIRD_QUARTILE',
            'FOURTH_QUARTILE',
          ]"
          :key="level"
          class="w-3 h-3"
          :style="{ backgroundColor: color(level) }"
        />
        <span class="text-sm text-gray-400"> {{ $t("github.more") }}</span>
      </div>
    </div>

    <!-- Professional popover using UTooltip -->
    <UTooltip
      v-model:open="open"
      :reference="virtualReference"
      :content="{ side: 'top', sideOffset: 8, collisionPadding: 8 }"
      arrow
    >
      <!-- Hidden trigger slot (required when using virtual reference) -->
      <template #default>
        <span class="hidden" />
      </template>

      <!-- Custom content for professional styling -->
      <template #content>
        <div
          class="px-3 py-2 bg-white text-gray-800 rounded-md shadow-md border border-gray-200"
        >
          {{ currentDay?.contributionCount }}
          {{ $t("github.contributions_on") }}
          {{ currentDay?.date }}
        </div>
      </template>
    </UTooltip>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useGithubContributions } from "~/composables/useGithubContributions";
const { t } = useI18n();
const { locale } = useI18n();

const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));

const { calendar, fetchContributions } = useGithubContributions();
onMounted(fetchContributions);

// Layout
const cell = 13;
const gap = 2;
const width = 739;
const height = 117;

const days = computed(() =>
  calendar.value ? calendar.value.weeks.flatMap((w) => w.contributionDays) : []
);

const weekIndex = (i: number) => Math.floor(i / 7);
const dayIndex = (i: number) => i % 7;

const color = (level: string) =>
  ({
    NONE: "var(--ui-bg-elevated)", //800
    FIRST_QUARTILE: "var(--ui-bg-accented)", //700
    SECOND_QUARTILE: "var(--ui-text-dimmed)", //400
    THIRD_QUARTILE: "var(--ui-text-toned)", //300
    FOURTH_QUARTILE: "var(--ui-text)", //200
  }[level]);

/**
 * Month labels (مثل GitHub)
 */
const months = computed(() => {
  if (!calendar.value) return [];

  const labels = [
    t("github.months.jan"),
    t("github.months.feb"),
    t("github.months.mar"),
    t("github.months.apr"),
    t("github.months.may"),
    t("github.months.jun"),
    t("github.months.jul"),
    t("github.months.aug"),
    t("github.months.sep"),
    t("github.months.oct"),
    t("github.months.nov"),
    t("github.months.dec"),
  ];

  const result: { label: string; x: number }[] = [];

  calendar.value.weeks.forEach((week, i) => {
    const [firstDay] = week.contributionDays;
    if (!firstDay) return;

    const month = new Date(firstDay.date).getMonth();
    const currentMonthYear = new Date(firstDay.date).getFullYear();

    const prevWeek = calendar.value?.weeks[i - 1];
    const [prevFirstDay] = prevWeek?.contributionDays ?? [];

    const prevMonth = prevFirstDay
      ? new Date(prevFirstDay.date).getMonth()
      : null;

    if (i === 0 || prevMonth !== month) {
      const label = labels[month];
      if (!label) return;

      // Only add label if it belongs to the main year
      if (currentMonthYear === mainYear.value) {
        result.push({
          label,
          x: i * cell,
        });
      }
    }
  });

  return result;
});

// Compute total contributions
const totalContributions = computed(() =>
  days.value.reduce((sum, day) => sum + day.contributionCount, 0)
);

// Determine the main year (dynamically from the last day's data or fallback to 2025)
const mainYear = computed(() => {
  const lastDay = days.value[days.value.length - 1];
  if (!lastDay) return "2025";
  const lastDate = new Date(lastDay.date);
  return lastDate.getFullYear();
});

// Use mainYear for the display year
const year = mainYear;

// Tooltip state management
const open = ref(false);
const currentDay = ref<any>(null);
const virtualReference = ref({
  getBoundingClientRect() {
    return new DOMRect(0, 0, 0, 0); // Default empty rect
  },
});

const showTooltip = (day: any, event: MouseEvent) => {
  currentDay.value = day;
  const target = event.target as HTMLElement;
  virtualReference.value = {
    getBoundingClientRect() {
      return target.getBoundingClientRect();
    },
  };
  open.value = true;
};

const hideTooltip = () => {
  open.value = false;
};

const widthClass = computed(() => `width:${width}px;`);
const heightClass = computed(() => `height:${height}px;`);
</script>
