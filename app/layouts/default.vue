<script setup lang="ts">
import AppHeader from "~/components/header/AppHeader.vue";
</script>

<template>
  <!-- Header will appear on all pages using this layout -->
  <div class="border-y border-dashed border-muted md:px-10 px-2">
    <UContainer
      class="border-x border-dashed border-muted/80 mx-auto relative px-0!"
    >
      <AppHeader />
    </UContainer>
  </div>
  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer
      class="border-x border-dashed border-muted/80 mx-auto relative px-0!"
    >
      <!-- Main page content -->
      <slot />
    </UContainer>
  </div>
  <!-- Optional footer in the future -->
</template>
