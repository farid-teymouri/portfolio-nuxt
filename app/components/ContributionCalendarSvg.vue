<script setup lang="ts">
/**
 * Core Vue APIs
 * - ref: reactive state
 * - computed: reactive derived state
 * - onMounted: lifecycle hook for client-side actions
 */
import { computed, onMounted, ref } from "vue";

/**
 * GitHub contributions composable
 * - Provides calendar data, loading state, and fetchContributions method
 */
import { useGithubContributions } from "~/composables/useGithubContributions";

/**
 * OverlayScrollbars for custom scrollbars
 * - Enables smooth horizontal scrolling with masking
 */
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import "overlayscrollbars/styles/overlayscrollbars.css";

/**
 * i18n setup
 * - t: translation function
 * - locale: reactive current language
 */
const { t } = useI18n();
const { locale } = useI18n();

/**
 * Fetch GitHub contribution data
 * - loading is set true during fetch
 * - triggered on client mount
 */
const { calendar, loading, fetchContributions } = useGithubContributions();
loading.value = true;
onMounted(fetchContributions);

/**
 * Compute text direction
 * - Supports RTL languages (e.g., Persian)
 */
const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));

/**
 * Layout constants for SVG grid
 * - cell: size of each day square
 * - gap: spacing between squares
 * - width/height: SVG canvas dimensions
 */
const cell = 13;
const gap = 2;
const width = 739;
const height = 117;

/**
 * Flatten weeks array into days array for easier iteration
 */
const days = computed(() =>
  calendar.value ? calendar.value.weeks.flatMap((w) => w.contributionDays) : []
);

/**
 * Utility functions for SVG grid positioning
 * - weekIndex: horizontal position in weeks
 * - dayIndex: vertical position within a week
 */
const weekIndex = (i: number) => Math.floor(i / 7);
const dayIndex = (i: number) => i % 7;

/**
 * Reactive color mode
 * - Provides current theme (light/dark)
 */
const colorMode = useColorMode();

/**
 * Map contribution level to theme-aware CSS color
 * - Adjusts dynamically for light/dark mode
 * - Levels: NONE → FOURTH_QUARTILE
 */
const color = (level: string) =>
  ({
    NONE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-100)"
        : "var(--ui-color-neutral-800)",
    FIRST_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-300)"
        : "var(--ui-color-neutral-600)",
    SECOND_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-400)"
        : "var(--ui-color-neutral-400)",
    THIRD_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-500)"
        : "var(--ui-color-neutral-200)",
    FOURTH_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-600)"
        : "var(--ui-color-neutral-50)",
  }[level]);

/**
 * Compute month labels similar to GitHub calendar
 * - Avoid duplicate labels
 * - Only show labels within main year
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

    // Only add label at the first week of a new month
    if (i === 0 || prevMonth !== month) {
      const label = labels[month];
      if (!label) return;

      if (currentMonthYear === mainYear.value) {
        result.push({ label, x: i * cell });
      }
    }
  });

  return result;
});

/**
 * Total contributions across all days
 */
const totalContributions = computed(() =>
  days.value.reduce((sum, day) => sum + day.contributionCount, 0)
);

/**
 * Main year for the calendar
 * - Based on last contribution date
 * - Fallback to 2025 if data unavailable
 */
const mainYear = computed(() => {
  const lastDay = days.value[days.value.length - 1];
  if (!lastDay) return "2025";
  return new Date(lastDay.date).getFullYear();
});

/**
 * Display year alias
 */
const year = mainYear;

/**
 * Tooltip state management
 * - open: boolean visibility
 * - currentDay: hovered day
 * - virtualReference: used for SVG tooltip positioning
 */
const open = ref(false);
const currentDay = ref<any>(null);
const virtualReference = ref({
  getBoundingClientRect() {
    return new DOMRect(0, 0, 0, 0);
  },
});

/**
 * Show tooltip
 * - Scale hovered rect visually
 * - Update virtual reference for positioning
 */
const showTooltip = (day: any, event: MouseEvent) => {
  currentDay.value = day;
  const target = event.target as SVGRectElement;
  const bbox = target.getBBox();
  const cx = bbox.x + bbox.width / 2;
  const cy = bbox.y + bbox.height / 2;
  const scale = 1.2;

  target.setAttribute(
    "transform",
    `translate(${cx}, ${cy}) scale(${scale}) translate(${-cx}, ${-cy})`
  );

  virtualReference.value = {
    getBoundingClientRect() {
      return target.getBoundingClientRect();
    },
  };
  open.value = true;
};

/**
 * Hide tooltip
 * - Reset rect transform to default
 */
const hideTooltip = (event?: MouseEvent) => {
  if (event) {
    const target = event.target as SVGRectElement;
    target.setAttribute("transform", "");
  }
  open.value = false;
};

/**
 * Reactive width/height styles for container
 */
const widthClass = computed(() => `max-width:${width}px;`);
const heightClass = computed(() => `height:${height}px;`);

/**
 * OverlayScrollbars reference for manual control
 */
const osRef = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);

/**
 * Scroll state
 * - scrollLeft: current horizontal scroll offset
 * - scrollWidth: total scrollable width
 * - clientWidth: viewport width
 */
const scrollLeft = ref(0);
const scrollWidth = ref(0);
const clientWidth = ref(0);

/**
 * Fade mask for smooth gradient on edges
 */
const fade = 98;

/**
 * Compute gradient direction for masking
 * - Adjusts for RTL/LTR layout
 */
const gradientDir = computed(() =>
  dir.value === "rtl" ? "to right" : "to left"
);

/**
 * Compute mask style based on scroll position
 * - Fade visible content edges
 * - Hide fade when fully scrolled
 */
const maskStyle = computed(() => {
  const EPSILON = 1;
  const atStart =
    scrollLeft.value + clientWidth.value >= scrollWidth.value - EPSILON;
  const atEnd = scrollLeft.value <= EPSILON;

  const startMask = atStart ? "black" : "transparent";
  const endMask = atEnd ? "black" : "transparent";

  return {
    maskImage: `linear-gradient(to right, ${startMask} 0%, black ${fade}px, black calc(100% - ${fade}px), ${endMask} 100%)`,
    WebkitMaskImage: `linear-gradient(to right, ${startMask} 0%, black ${fade}px, black calc(100% - ${fade}px), ${endMask} 100%)`,
  };
});

/**
 * Update scroll state from OverlayScrollbars viewport
 */
function handleScroll() {
  const os = osRef.value?.osInstance?.();
  if (!os) return;
  const viewport = os.elements().viewport;
  scrollLeft.value = viewport.scrollLeft;
  scrollWidth.value = viewport.scrollWidth;
  clientWidth.value = viewport.clientWidth;
}

/**
 * Smooth horizontal scroll state
 */
const targetScrollLeft = ref(0);
let animating = false;

/**
 * Smooth scroll animation loop
 */
function smoothScroll() {
  const os = osRef.value?.osInstance?.();
  if (!os) return;
  const viewport = os.elements().viewport;
  const diff = targetScrollLeft.value - viewport.scrollLeft;

  if (Math.abs(diff) < 1) {
    viewport.scrollLeft = targetScrollLeft.value;
    animating = false;
    return;
  }

  viewport.scrollLeft += diff * 0.2;
  requestAnimationFrame(smoothScroll);
  scrollLeft.value = viewport.scrollLeft;
}

/**
 * Setup wheel event for vertical → horizontal scrolling
 * - Convert vertical wheel movement into smooth horizontal scroll
 */
onMounted(() => {
  const os = osRef.value?.osInstance?.();
  if (!os) return;
  const viewport = os.elements().viewport;

  // Initial scroll to most recent (right in RTL layout)
  viewport.scrollLeft = viewport.scrollWidth - viewport.clientWidth;

  handleScroll();

  const onWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      targetScrollLeft.value += e.deltaY;
      e.preventDefault();
      if (!animating) {
        animating = true;
        requestAnimationFrame(smoothScroll);
      }
    }
  };

  viewport.addEventListener("wheel", onWheel, { passive: false });
  onUnmounted(() => viewport.removeEventListener("wheel", onWheel));
});

/**
 * OverlayScrollbars configuration
 * - Auto-hide scrollbars
 * - Theme-aware
 * - Horizontal scrolling only
 */
const osOptions = {
  scrollbars: {
    autoHide: "scroll" as const,
    autoHideDelay: 500,
    theme: `os-theme-${colorMode.value == "dark" ? "light" : "dark"}`,
  },
  overflow: {
    x: "scroll" as const,
    y: "hidden" as const,
  },
};
</script>

<template>
  <div
    class="flex flex-col w-full gap-4 justify-center items-center text-center"
    v-if="loading"
  >
    <SkeletonsContributionCalendarSvg :containerStyle="widthClass" />
  </div>
  <OverlayScrollbarsComponent
    class="w-full hidden"
    ref="osRef"
    :options="osOptions"
    @os-scroll="handleScroll"
    :style="maskStyle"
    style="
      mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 98px,
        black calc(100% - 98px),
        black 100%
      );
    "
    dir="rtl"
    v-if="!loading"
  >
    <div
      class="w-fit flex flex-col justify-center mx-auto"
      dir="ltr"
      :style="widthClass"
    >
      <svg
        :width="width"
        :height="height"
        viewBox="0 0 739 117"
        class="block"
        :dir="dir"
        preserveAspectRatio="xMinYMin meet"
      >
        <!-- Month labels -->
        <g transform="translate(25, 15)">
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
              class="transition-all duration-75 hover:stroke-primary stroke-1"
              @mouseenter="showTooltip(day, $event)"
              @mouseleave="hideTooltip"
            />
          </g>
        </g>
      </svg>
    </div>

    <!-- Professional popover using UTooltip -->
    <UTooltip
      v-if="!loading"
      v-model:open="open"
      :reference="virtualReference"
      :content="{ side: 'top', sideOffset: 8, collisionPadding: 8 }"
      :ui="{
        content: 'p-5 dark:bg-neutral-700 bg-neutral-50 text-sm',
      }"
    >
      <template #default>
        <span class="hidden" />
      </template>

      <template #content v-if="!loading">
        <div class="px-3 py-4 rounded-md">
          {{ currentDay?.contributionCount }}
          {{ $t("github.contributions_on") }}
          {{ currentDay?.date }}
        </div>
      </template>
    </UTooltip>
  </OverlayScrollbarsComponent>
  <!-- Footer: total contributions and legend -->
  <div
    class="flex flex-row justify-between md:px-4 px-1 w-full"
    :style="widthClass"
    dir="ltr"
    v-if="!loading"
  >
    <ClientOnly>
      <div class="md:text-sm text-xs mt-2" :dir="dir">
        {{ totalContributions }} {{ $t("github.contributions_in") }}
        {{ year }}
      </div>
    </ClientOnly>
    <ClientOnly>
      <div class="flex items-center mt-2 space-x-1" dir="ltr">
        <span class="md:text-sm text-xs"> {{ $t("github.less") }}</span>
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
        <span class="md:text-sm text-xs"> {{ $t("github.more") }}</span>
      </div>
    </ClientOnly>
  </div>
</template>
