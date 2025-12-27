<template>
  <div
    class="flex xl:flex-row gap-4 flex-col xl:justify-start justify-between border-x border-dashed border-muted/80"
  >
    <div
      class="w-full flex flex-col items-center justify-center py-3 px-2 xl:border-b-0 border-b xl:border-e border-e-0 border-dashed border-muted/80"
    >
      <ContributionCalendarSvg />
    </div>
    <div
      class="w-full 2xl:max-w-130 xl:max-w-110 py-3 px-2 xl:border-t-0 xl:border-s border-s-0 border-t border-dashed border-muted/80"
    >
      <GithubCommits />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
</script>
