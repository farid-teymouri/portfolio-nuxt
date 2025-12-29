<template>
  <div
    class="flex flex-col w-full gap-4 justify-center items-center text-center"
    v-if="loading"
  >
    <SkeletonsContributionCalendarSvg :widthClass="widthClass" />
  </div>
  <OverlayScrollbarsComponent
    class="w-full"
    ref="osRef"
    :options="osOptions"
    @os-scroll="handleScroll"
    :style="maskStyle"
    dir="ltr"
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
        dir="ltr"
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
      v-model:open="open"
      :reference="virtualReference"
      :content="{ side: 'top', sideOffset: 8, collisionPadding: 8 }"
      :ui="{
        content: 'p-5 dark:bg-neutral-700 bg-neutral-50 text-sm',
      }"
    >
      <!-- Hidden trigger slot (required when using virtual reference) -->
      <template #default>
        <span class="hidden" />
      </template>

      <!-- Custom content for professional styling -->
      <template #content>
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
    class="flex flex-row justify-between px-4 w-full"
    :style="widthClass"
    dir="ltr"
    v-if="!loading"
  >
    <!-- Total contributions display -->
    <div class="text-sm mt-2" :dir="dir">
      {{ totalContributions }} {{ $t("github.contributions_in") }}
      {{ year }}
    </div>

    <!-- Legend: Client-only to avoid hydration mismatch -->
    <ClientOnly>
      <div class="flex items-center mt-2 space-x-1" dir="ltr">
        <span class="text-sm"> {{ $t("github.less") }}</span>
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
        <span class="text-sm"> {{ $t("github.more") }}</span>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useGithubContributions } from "~/composables/useGithubContributions";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import "overlayscrollbars/styles/overlayscrollbars.css";
const { t } = useI18n();
const { locale } = useI18n();

const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));

const { calendar, loading, fetchContributions } = useGithubContributions();
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
const colorMode = useColorMode(); // returns a reactive object
const color = (level: string) =>
  ({
    NONE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-100)"
        : "var(--ui-bg-elevated)", //800
    FIRST_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-200)"
        : "var(--ui-bg-accented)", //700
    SECOND_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-300)"
        : "var(--ui-text-dimmed)", //400
    THIRD_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-400)"
        : "var(--ui-text-toned)", //300
    FOURTH_QUARTILE:
      colorMode.value != "dark"
        ? "var(--ui-color-neutral-500)"
        : "var(--ui-text)", //200
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

  const target = event.target as SVGRectElement;
  const bbox = target.getBBox(); // اندازه و موقعیت واقعی rect

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

const hideTooltip = (event?: MouseEvent) => {
  if (event) {
    const target = event.target as SVGRectElement;
    target.setAttribute("transform", ""); // برگردوندن به حالت اولیه
  }
  open.value = false;
};

const widthClass = computed(() => `max-width:${width}px;`);
const heightClass = computed(() => `height:${height}px;`);

const osRef = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);

const scrollLeft = ref(0);
const scrollWidth = ref(0);
const clientWidth = ref(0);

const fade = 98;
const maskStyle = computed(() => {
  const EPSILON = 1;

  const atStart = scrollLeft.value <= EPSILON; // نزدیک شروع (چپ)
  const atEnd =
    scrollLeft.value + clientWidth.value >= scrollWidth.value - EPSILON; // نزدیک پایان (راست)

  const startMask = atStart ? "black" : "transparent"; // وقتی به اول نرسیدی مشکی باشه
  const endMask = atEnd ? "black" : "transparent"; // وقتی به آخر رسیدی مشکی باشه

  return {
    maskImage: `linear-gradient(to right, ${startMask} 0%, black ${fade}px, black calc(100% - ${fade}px), ${endMask} 100%)`,
    WebkitMaskImage: `linear-gradient(to right, ${startMask} 0%, black ${fade}px, black calc(100% - ${fade}px), ${endMask} 100%)`,
  };
});

function handleScroll() {
  const os = osRef.value?.osInstance?.();
  if (!os) return;

  const viewport = os.elements().viewport;
  scrollLeft.value = viewport.scrollLeft;
  scrollWidth.value = viewport.scrollWidth;
  clientWidth.value = viewport.clientWidth;
}

const targetScrollLeft = ref(0);
let animating = false;

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

  viewport.scrollLeft += diff * 0.2; // مقدار 0.2 سرعت انیمیشن را تعیین می‌کند
  requestAnimationFrame(smoothScroll);
  scrollLeft.value = viewport.scrollLeft; // برای mask
}

onMounted(() => {
  handleScroll();

  const os = osRef.value?.osInstance?.();
  if (!os) return;

  const viewport = os.elements().viewport;

  const onWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      targetScrollLeft.value += e.deltaY; // deltaY → scroll افقی
      e.preventDefault();
      if (!animating) {
        animating = true;
        requestAnimationFrame(smoothScroll);
      }
    }
  };

  viewport.addEventListener("wheel", onWheel, { passive: false });

  onUnmounted(() => {
    viewport.removeEventListener("wheel", onWheel);
  });
});

const osOptions = {
  scrollbars: {
    autoHide: "scroll" as const,
    autoHideDelay: 500,
    theme: `os-theme-${colorMode.value == "dark" ? "light" : "dark"}`, // ← به جای className
  },
  overflow: {
    x: "scroll" as const, // ← حالا افقی scroll
    y: "hidden" as const, // ← عمودی مخفی
  },
};
</script>
