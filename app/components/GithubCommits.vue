<script setup lang="ts">
import { onMounted, computed, watch, nextTick } from "vue";
import { formatDistanceToNow } from "date-fns"; // Import for relative time
import { faIR } from "date-fns/locale";
import { useGithubCommits } from "~/composables/useGithubCommits";
import type { GithubCommit } from "~/types/github";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import "overlayscrollbars/styles/overlayscrollbars.css";

const username = "farid-teymouri";
const { t } = useI18n();
const { locale } = useI18n();
/**
 * Fetch GitHub commits using the composable
 */
const { commits, loading, error, fetchCommits } = useGithubCommits(username);

// Trigger fetch when component mounts
onMounted(fetchCommits);

/**
 * Type for UChangelogVersions
 */
export interface ChangelogVersion {
  title: string;
  description: string;
  date: string;
  to: string;
  target: string;
  sha?: string; // optional
  repoUrl?: string;
  type?: string;
  ui: {
    root: string;
    container: string;
    indicator: string;
  };
}

//  t(`github.githubActivity.visibility.${commit.type}`)
/**
 * Map GitHub commits to UChangelogVersions format
 * Include 'sha' and optional other fields for UI
 */
const changelogVersions = computed<ChangelogVersion[]>(() =>
  commits.value.map((commit: GithubCommit) => ({
    title: commit.message,
    description: `${commit.repo.split("/").pop()}`,
    type: commit.type,
    date: "",
    to: `https://github.com/${commit.repo}/commit/${commit.sha}`, // link directly to the commit
    repoUrl: `https://github.com/${commit.repo}`,
    target: "_blank",
    sha: commit.sha, // now TS knows sha exists
    ui: {
      root: "flex flex-row gap-2",
      container: "w-full mx-0",
      indicator: "relative justify-start w-5",
    },
  }))
);

/* ================= OverlayScrollbars Options ================= */
const osRef = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);

const scrollTop = ref(0);
const scrollHeight = ref(0);
const clientHeight = ref(0);

const fade = 98;
const maskStyle = computed(() => {
  const EPSILON = 1;

  const atTop = scrollTop.value <= EPSILON; // نزدیک بالاست
  const atBottom =
    scrollTop.value + clientHeight.value >= scrollHeight.value - EPSILON; // نزدیک پایین

  const topMask = atTop ? "black" : "transparent"; // وقتی اسکرول نکردی مشکی باشه (no fade at top)
  const bottomMask = atBottom ? "black" : "transparent"; // وقتی به پایین رسید مشکی باشه (no fade at bottom), otherwise transparent for fade

  return {
    maskImage: `linear-gradient(to bottom, ${topMask} 0%, black ${fade}px, black calc(100% - ${fade}px), ${bottomMask} 100%)`,
    WebkitMaskImage: `linear-gradient(to bottom, ${topMask} 0%, black ${fade}px, black calc(100% - ${fade}px), ${bottomMask} 100%)`,
  };
});

function handleScroll() {
  const os = osRef.value?.osInstance?.();
  if (!os) return;

  const viewport = os.elements().viewport;
  scrollTop.value = viewport.scrollTop;
  scrollHeight.value = viewport.scrollHeight;
  clientHeight.value = viewport.clientHeight;
}
onMounted(() => {
  handleScroll();
});
watch(changelogVersions, () => {
  nextTick(() => handleScroll());
});
const colorMode = useColorMode();
const osOptions = {
  scrollbars: {
    autoHide: "scroll" as const,
    autoHideDelay: 500,
    theme: `os-theme-${colorMode.value == "dark" ? "light" : "dark"}`, // ← به جای className
  },
  overflow: {
    x: "hidden" as const,
    y: "scroll" as const,
  },
};
</script>

<template>
  <!-- Loading state -->
  <div v-if="loading">Loading commits...</div>

  <!-- Error state -->
  <div v-else-if="error" class="text-red-500">{{ error }}</div>

  <!-- Empty state -->
  <div v-else-if="!changelogVersions.length">No recent commits found.</div>

  <!-- Content state -->
  <OverlayScrollbarsComponent
    v-else
    ref="osRef"
    class="relative max-h-50 w-full"
    :options="osOptions"
    @os-scroll="handleScroll"
    :style="maskStyle"
    dir="ltr"
  >
    <!-- Changelog component -->
    <UChangelogVersions
      dir="ltr"
      :versions="changelogVersions"
      :ui="{
        root: '',
        container: 'flex flex-col sm:gap-y-3 lg:gap-y-2 gap-y-4',
        indicator:
          'absolute hidden lg:block inset-y-3 start-4 h-full w-px -ms-[8.5px]',
        beam: 'max-w-1.5',
      }"
      :indicator="true"
      :indicatorMotion="true"
    >
      <!-- Custom title slot with SHA -->
      <template #header="{ version }">
        <div class="flex flex-col">
          <div class="flex flex-row gap-1 items-center justify-start">
            <UPopover mode="hover">
              <!-- Short SHA -->
              <ULink
                :to="version.to"
                target="_blank"
                class="group flex items-center font-sans w-13"
              >
                <UBadge
                  color="neutral"
                  variant="outline"
                  class="w-full max-w-13 py-0.5 ring-0 border-dashed border hover:bg-muted hover:border-primary group-hover:text-primary"
                >
                  {{ version.sha?.slice(0, 5) }}
                </UBadge>
              </ULink>
              <template #content>
                <div class="flex items-center bg-transparent!">
                  <!-- Repo name -->
                  <UButton
                    trailing-icon="solar:arrow-to-top-left-bold-duotone"
                    size="xs"
                    color="neutral"
                    variant="outline"
                    dir="ltr"
                  >
                    <ULink
                      :to="version.repoUrl"
                      target="_blank"
                      class="text-default"
                    >
                      {{ version.description }}
                    </ULink>
                  </UButton>
                </div>
              </template>
            </UPopover>
            <span class="text-xs max-w-3 w-full block">—</span>
            <UPopover mode="hover" class="max-w-5 w-full block">
              <UIcon
                :name="
                  version.type === 'public'
                    ? 'solar:face-scan-square-bold'
                    : 'solar:confounded-square-line-duotone'
                "
                class="size-5 text-dimmed"
              />
              <template #content>
                <div class="flex flex-row gap-2 items-center">
                  <!-- Repo type -->
                  <UBadge
                    color="neutral"
                    variant="outline"
                    class="ring-0 text-xs"
                  >
                    {{ $t(`github.githubActivity.visibility.${version.type}`) }}
                  </UBadge>
                </div>
              </template>
            </UPopover>
            <!-- Commit message -->
            <span class="text-sm line-clamp-1">{{ version.title }}</span>
          </div>
        </div>
      </template>
      <template #date="{ version }"> </template>
    </UChangelogVersions>
  </OverlayScrollbarsComponent>
</template>
