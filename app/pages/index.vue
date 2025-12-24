<script setup lang="ts">
import Borad from "~/components/home/Borad.vue";
import Profile from "~/components/home/Profile.vue";
// pages/index.vue
const test = "the home page";
</script>

<template>
  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Borad />
    </UContainer>
  </div>
  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Profile />
    </UContainer>
  </div>
</template>
